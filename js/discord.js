document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".discord-icon").forEach(icon => {
        icon.addEventListener("click", function (event) {
            event.preventDefault(); 

            const textToCopy = "slungus.online";
            navigator.clipboard.writeText(textToCopy).then(() => {
                const tooltip = this.querySelector(".discord-tooltip");
                tooltip.textContent = "Copied!";
                
                setTimeout(() => {
                    tooltip.textContent = "slungus.online";
                }, 1500);
            }).catch(err => {
                console.error("Copy failed:", err);
            });
        });
    });
});
