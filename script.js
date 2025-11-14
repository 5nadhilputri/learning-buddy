document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".list-icon"); // tombol kotak

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("minimized");
    });
});
