import * as DataFetcher from "./modules/DataFetcher.js";
import { renderCameraList } from "./helpers.js";

init();

function init() {
    initializeMap();
    initializeList();
    initializeFilter();
}

function initializeMap() {
    const map = L.map("map").setView([51.21, 3.22], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    DataFetcher.cameras.forEach(c => {
        c.marker = L.marker([c.lat, c.lng]).addTo(map).bindPopup(c.name);
    });
}

function initializeList(cameras = DataFetcher.cameras) {
    renderCameraList(cameras, document.getElementById("cameraList"));
}

function initializeFilter() {
    const $search = document.getElementById("search");
    if (!$search) return;

    $search.addEventListener("input", (e) => {
        initializeList(DataFetcher.cameras.filter(c => c.name.toLowerCase().includes(e.target.value.toLowerCase())));
    });
}
