const svg = document.getElementById("campusMap");
const startInput = document.getElementById("startInput");
const endInput = document.getElementById("endInput");
const startAutocomplete = document.getElementById("startAutocomplete");
const endAutocomplete = document.getElementById("endAutocomplete");
const findPathBtn = document.getElementById("findPathBtn");
const routeResults = document.getElementById("routeResults");
const pathDetails = document.getElementById("pathDetails");
const distanceStat = document.getElementById("distanceStat");
const timeStat = document.getElementById("timeStat");
const mapLoader = document.getElementById("mapLoader");
const locationSidebar = document.getElementById("locationSidebar");

let nodes = {};
let labelMap = {};
let floorMap = {}; // id -> floor
let currentFloor = 1;
const offsetX = 50;
const offsetY = 52;
window.lastPath = null;
let locationsList = [];
let selectedStartId = null;
let selectedEndId = null;
let selectedSidebarNodeId = null;

// Floor switching logic
function showFloor(floor) {
    currentFloor = floor;
    document.getElementById('svgMap1').classList.toggle('active-map', floor === 1);
    document.getElementById('svgMap2').classList.toggle('active-map', floor === 2);
    document.getElementById('svgMap3').classList.toggle('active-map', floor === 3);
    
    document.getElementById('floorBtn1').classList.toggle('active', floor === 1);
    document.getElementById('floorBtn2').classList.toggle('active', floor === 2);
    document.getElementById('floorBtn3').classList.toggle('active', floor === 3);

    clearMap();
    drawAllNodesForFloor();
    if (window.lastPath) drawMultiFloorPath(window.lastPath);
}

function drawCircle(x, y, color = "#06B6D4", id = null, isEndpoint = false) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x + offsetX);
    circle.setAttribute("cy", y + offsetY);
    circle.setAttribute("r", isEndpoint ? 10 : 6);
    circle.setAttribute("fill", color);
    circle.classList.add("marker");
    if(isEndpoint) {
        if(color === "#22C55E") circle.classList.add("start-marker");
        if(color === "#EF4444") circle.classList.add("end-marker");
    }
    
    if (id) {
        circle.setAttribute("data-id", id);
        circle.addEventListener("click", () => openSidebar(id));
    }
    svg.appendChild(circle);
}

function drawPath(path) {
    for (let i = 0; i < path.length - 1; i++) {
        const [x1, y1] = nodes[path[i]];
        const [x2, y2] = nodes[path[i + 1]];
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1 + offsetX);
        line.setAttribute("y1", y1 + offsetY);
        line.setAttribute("x2", x2 + offsetX);
        line.setAttribute("y2", y2 + offsetY);
        line.classList.add("highlight-path");
        svg.insertBefore(line, svg.firstChild); // prepend so it goes under markers
    }
}

// Draw all interactive nodes for the current floor
function drawAllNodesForFloor() {
    for (const [id, floor] of Object.entries(floorMap)) {
        if (floor === currentFloor && nodes[id]) {
            drawCircle(nodes[id][0], nodes[id][1], "rgba(6, 182, 212, 0.3)", id, false);
        }
    }
}

function drawMultiFloorPath(path) {
    let floorPath = [];
    for (let i = 0; i < path.length; i++) {
        const id = path[i];
        if (floorMap[id] === currentFloor) {
            floorPath.push(id);
        } else if (floorPath.length > 1) {
            drawPath(floorPath);
            floorPath = [];
        } else {
            floorPath = [];
        }
    }
    if (floorPath.length > 1) drawPath(floorPath);

    // Draw start/end markers if on current floor
    if (floorMap[path[0]] === currentFloor)
        drawCircle(nodes[path[0]][0], nodes[path[0]][1], "#22C55E", path[0], true); // Green start
    if (floorMap[path[path.length - 1]] === currentFloor)
        drawCircle(nodes[path[path.length - 1]][0], nodes[path[path.length - 1]][1], "#EF4444", path[path.length - 1], true); // Red end
}

function clearMap() {
    Array.from(svg.children).forEach(el => el.remove());
}

async function fetchLocations() {
    try {
        const res = await fetch("http://localhost:8080/locations");
        const locations = await res.json();
        locationsList = locations;
        
        locations.forEach(location => {
            const match = location.label.match(/\((\d+),\s*(\d+)\)/);
            if (match) {
                const x = parseInt(match[1]);
                const y = parseInt(match[2]);
                nodes[location.id] = [x, y];
            }
            labelMap[location.id] = location.label.split(" (")[0]; // Clean label
            floorMap[location.id] = location.floor || 1;
        });

        setupAutocomplete(startInput, startAutocomplete, (id) => selectedStartId = id);
        setupAutocomplete(endInput, endAutocomplete, (id) => selectedEndId = id);
        
        drawAllNodesForFloor();
    } catch (e) {
        console.error("Failed to load locations", e);
    }
}

// Autocomplete Logic
function setupAutocomplete(input, listElement, setCallback) {
    function renderList(filterText = "") {
        listElement.innerHTML = "";
        const val = filterText.toLowerCase();
        
        let matches = locationsList;
        if (val) {
            matches = locationsList.filter(loc => loc.label.toLowerCase().includes(val));
        }

        if (matches.length > 0) {
            listElement.classList.remove("hidden");
            // Show up to 50 items in the dropdown
            matches.slice(0, 50).forEach(match => {
                const div = document.createElement("div");
                div.className = "autocomplete-item";
                div.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${labelMap[match.id]} <small style="color:#94a3b8; float:right">Fl ${match.floor}</small>`;
                div.addEventListener("click", (e) => {
                    input.value = labelMap[match.id];
                    setCallback(match.id);
                    listElement.classList.add("hidden");
                });
                listElement.appendChild(div);
            });
        } else {
            listElement.classList.add("hidden");
        }
    }

    input.addEventListener("focus", () => {
        renderList(input.value);
    });

    input.addEventListener("input", () => {
        setCallback(null);
        renderList(input.value);
    });

    // Toggle focus/visibility if they click the chevron wrapper
    const wrapper = input.parentElement;
    wrapper.addEventListener("click", (e) => {
        if(e.target !== input) {
            if (listElement.classList.contains("hidden")) {
                input.focus();
                renderList(input.value);
            } else {
                listElement.classList.add("hidden");
            }
        }
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
        if (!wrapper.contains(e.target) && !listElement.contains(e.target)) {
            listElement.classList.add("hidden");
        }
    });
}

// Path Finding Logic
async function fetchPath() {
    if (!selectedStartId || !selectedEndId) return alert("Please select both valid start and destination locations from the dropdown.");
    if (selectedStartId === selectedEndId) return alert("Start and destination cannot be the same.");

    mapLoader.classList.remove("hidden");
    routeResults.classList.add("hidden");

    try {
        const res = await fetch("http://localhost:8080/navigate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ source: selectedStartId, destination: selectedEndId })
        });
        
        if (!res.ok) throw new Error("Backend error");
        
        const data = await res.json();
        if (!data.path || data.path.length === 0) {
            alert("No path found.");
            return;
        }

        window.lastPath = data.path;
        
        // Auto-switch to start floor
        const startFloor = floorMap[data.path[0]];
        if (currentFloor !== startFloor) {
            showFloor(startFloor);
        } else {
            clearMap();
            drawAllNodesForFloor();
            drawMultiFloorPath(data.path);
        }

        updateRouteResults(data.path);
        
    } catch (e) {
        alert("Failed to fetch path from backend.");
        console.error(e);
    } finally {
        mapLoader.classList.add("hidden");
    }
}

function updateRouteResults(path) {
    // Basic heuristic: sum of pixel distances between nodes
    let totalPixels = 0;
    for(let i=0; i<path.length-1; i++) {
        const [x1, y1] = nodes[path[i]];
        const [x2, y2] = nodes[path[i+1]];
        totalPixels += Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
    }
    
    // Convert to rough steps and time (heuristic: 1 pixel ~ 0.5 step)
    const steps = Math.round(totalPixels * 0.5);
    const mins = Math.max(1, Math.round(steps / 100)); // ~100 steps a min

    distanceStat.innerText = steps;
    timeStat.innerText = mins;
    
    // Path details text
    pathDetails.innerHTML = path.map(id => {
        let name = labelMap[id] || id;
        return `<strong>${name}</strong>`;
    }).join(" <i class='fa-solid fa-arrow-right-long' style='color:#06B6D4; margin:0 5px;'></i> ");

    routeResults.classList.remove("hidden");
}

// Sidebar Logic
function openSidebar(id) {
    selectedSidebarNodeId = id;
    document.getElementById("sidebarTitle").innerText = labelMap[id] || id;
    document.getElementById("sidebarFloor").innerText = floorMap[id] || "1";
    locationSidebar.classList.remove("hidden");
}

document.getElementById("closeSidebar").addEventListener("click", () => {
    locationSidebar.classList.add("hidden");
});

document.getElementById("setAsStartBtn").addEventListener("click", () => {
    if(selectedSidebarNodeId) {
        selectedStartId = selectedSidebarNodeId;
        startInput.value = labelMap[selectedSidebarNodeId];
        locationSidebar.classList.add("hidden");
    }
});

document.getElementById("setAsEndBtn").addEventListener("click", () => {
    if(selectedSidebarNodeId) {
        selectedEndId = selectedSidebarNodeId;
        endInput.value = labelMap[selectedSidebarNodeId];
        locationSidebar.classList.add("hidden");
    }
});

window.onload = async () => {
    await fetchLocations();
    findPathBtn.addEventListener("click", fetchPath);
    showFloor(1);
};
