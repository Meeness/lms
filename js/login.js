document.querySelector("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "index.html";
});

document.querySelector("#forgotPassword").addEventListener("click", () => {
    document.querySelector("#loginForm").style.display = "none";
    document.querySelector("#recoverPassword").style.display = "flex";
});

document.querySelector("#recoverPassword").addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#recoverPassword").style.display = "none";
    document.querySelector("#emailCode").style.display = "flex";
});

document.querySelector("#emailCode").addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#emailCode").style.display = "none";
    document.querySelector("#changePassword").style.display = "flex";
});

document.querySelector("#changePassword").addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#changePassword").style.display = "none";
    document.querySelector("#loginForm").style.display = "flex";
    document.querySelector(".successMessage").style.display = "block";
});