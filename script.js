document.addEventListener("DOMContentLoaded", function() {
    const snowContainer = document.createElement("div");
    snowContainer.classList.add("snow-container");
    document.body.appendChild(snowContainer);

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + "s";
        snowflake.innerHTML = "•";
        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    setInterval(createSnowflake, 200);
});

document.addEventListener("DOMContentLoaded", function () {
    const ethContainer = document.querySelector(".eth-container");
    const ethAddress = "0xf86E064eA7841c1bccBFC2EF5211f589A918Dcb7"; 

    ethContainer.addEventListener("click", function () {
        navigator.clipboard.writeText(ethAddress).then(() => {
            const addressText = ethContainer.querySelector(".eth-address");
            addressText.textContent = "Copied!";
            setTimeout(() => {
                addressText.textContent = "Copy Address"; 
            }, 1500);
        }).catch(err => {
            console.error("Failed to copy:", err);
        });
    });
});


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