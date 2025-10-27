function highlightSelectedTier(buttons, tier) {
    buttons.forEach(btn => btn.classList.remove("selected"));
    buttons.forEach(btn => {
        if (btn.dataset.tier === tier) btn.classList.add("selected");
    });
}

function setupSubscriptionButtons() {
    const buttons = document.querySelectorAll(".subscriptionBtn");
    const popup = document.getElementById("confirmPopup");
    const cancelBtn = document.getElementById("cancelBtn");
    const acceptBtn = document.getElementById("acceptBtn");

    let selectedTier = localStorage.getItem("tier") || "Free";
    let pendingTier = null;

    popup.style.display = "none";

    highlightSelectedTier(buttons, selectedTier);

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            pendingTier = btn.dataset.tier;
            popup.style.display = "block"; // show popup
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
