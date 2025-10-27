function createPopup() {
    const popup = document.createElement("div");
    popup.id = "confirmPopup";
    popup.style = "display:none; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); background:white; border:1px solid black; padding:20px;";
    popup.innerHTML = `
        <p>Are you sure?</p>
        <button id="cancelBtn">Cancel</button>
        <button id="acceptBtn">Accept</button>
    `;
    document.body.appendChild(popup);
    return popup;
}

function highlightSelectedTier(buttons, tier) {
    buttons.forEach(btn => btn.classList.remove("selected"));
    buttons.forEach(btn => {
        if (btn.dataset.tier === tier) btn.classList.add("selected");
    });
}

function setupSubscriptionButtons() {
    const buttons = document.querySelectorAll(".subscriptionBtn");
    const popup = createPopup();
    const cancelBtn = popup.querySelector("#cancelBtn");
    const acceptBtn = popup.querySelector("#acceptBtn");

    let selectedTier = localStorage.getItem("tier") || "Free";
    let pendingTier = null;

    highlightSelectedTier(buttons, selectedTier);

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            pendingTier = btn.dataset.tier;
            popup.style.display = "block";
        });
    });

    cancelBtn.addEventListener("click", () => {
        pendingTier = null;
        popup.style.display = "none";
    });

    acceptBtn.addEventListener("click", () => {
        selectedTier = pendingTier;
        localStorage.setItem("tier", selectedTier);
        highlightSelectedTier(buttons, selectedTier);
        pendingTier = null;
        popup.style.display = "none";
    });
}

setupSubscriptionButtons();
