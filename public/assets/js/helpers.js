function renderCameraList(cameras, $container) {
    $container.innerHTML = "";

    if (cameras.length === 0) {
        const $li = document.createElement("li");
        $li.className = "list-group-item";
        $li.textContent = "No cameras found";
        $container.appendChild($li);
        return;
    }

    cameras.forEach(c => {
        const $li = document.createElement("li");
        $li.className = "list-group-item list-group-item-action";
        $li.textContent = c.name;

        $li.addEventListener("click", () => {
            c.marker.openPopup();
            c._map.setView([c.lat, c.lng], 5);
        });

        $container.appendChild($li);
    });
}

export { renderCameraList };
