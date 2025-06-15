const svg = document.getElementById("campusMap");
const startSelect = document.getElementById("startLocation");
const endSelect = document.getElementById("endLocation");
const findPathBtn = document.getElementById("findPathBtn");
const dialog = document.getElementById("dialog");

let nodes = {};
let labelMap = {};
let floorMap = {}; // id -> floor
let currentFloor = 1;
const offsetX = 50;
const offsetY = 52;
window.lastPath = null;

// Floor switching logic
function showFloor(floor) {
    currentFloor = floor;
    document.getElementById('svgMap1').style.display = (floor === 1) ? 'block' : 'none';
    document.getElementById('svgMap2').style.display = (floor === 2) ? 'block' : 'none';
    document.getElementById('svgMap3').style.display = (floor === 3) ? 'block' : 'none';
    clearMap();
    if (window.lastPath) drawMultiFloorPath(window.lastPath);
}

function drawCircle(x, y, color = "red") {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x + offsetX);
    circle.setAttribute("cy", y + offsetY);
    circle.setAttribute("r", 8);
    circle.setAttribute("fill", color);
    circle.classList.add("marker");
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
        line.setAttribute("stroke", "#4caf50");
        line.setAttribute("stroke-width", 8);
        line.setAttribute("stroke-linecap", "round");
        line.classList.add("highlight-path");
        svg.appendChild(line);
    }
}

// Only draw nodes/edges for current floor
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
        drawCircle(...nodes[path[0]], "green");
    if (floorMap[path[path.length - 1]] === currentFloor)
        drawCircle(...nodes[path[path.length - 1]], "red");
}

function clearMap() {
    Array.from(svg.children).forEach(el => el.remove());
}

async function fetchLocations() {
    const res = await fetch("http://localhost:8080/locations");
    const locations = await res.json();
    locations.forEach(location => {
        // parse coordinates from label string
        const match = location.label.match(/\((\d+),\s*(\d+)\)/);
        if (match) {
            const x = parseInt(match[1]);
            const y = parseInt(match[2]);
            nodes[location.id] = [x, y];
        }
        labelMap[location.id] = location.label;
        // If your backend returns a floor property, use it; else default to 1
        floorMap[location.id] = location.floor || 1;

        const option1 = document.createElement("option");
        option1.value = location.label;
        option1.setAttribute("data-id", location.id);
        option1.text = location.label;
        const option2 = option1.cloneNode(true);
        startSelect.appendChild(option1);
        endSelect.appendChild(option2);
    });
}

async function fetchPath() {
    clearMap();
    const start = startSelect.selectedOptions[0]?.getAttribute("data-id");
    const end = endSelect.selectedOptions[0]?.getAttribute("data-id");
    if (!start || !end) return alert("Please select both start and destination.");
    if (start === end) return alert("Start and destination cannot be the same.");

    const res = await fetch("http://localhost:8080/navigate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: start, destination: end })
    });
    if (!res.ok) return alert("Failed to fetch path from backend.");
    const data = await res.json();
    if (!data.path || data.path.length === 0) return alert("No path found.");

    window.lastPath = data.path;
    drawMultiFloorPath(data.path);

    // Prompt user if path crosses floors
    const floorsInPath = new Set(data.path.map(id => floorMap[id]));
    if (floorsInPath.size > 1) {
        dialog.innerHTML = "This route spans multiple floors.<br>Switch floors to see the full path.<br><br>" +
            data.path.map(id => labelMap[id] || id).join(" → ");
    } else {
        dialog.innerText = data.path.map(id => labelMap[id] || id).join(" → ");
    }
    dialog.showModal();
}

window.onload = async () => {
    await fetchLocations();
    findPathBtn.addEventListener("click", fetchPath);
    // Default to floor 1
    showFloor(1);
};
