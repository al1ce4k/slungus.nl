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
