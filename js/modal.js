document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const openButtons = document.querySelectorAll(".openModal");
    const closeButtons = document.querySelectorAll(".closeModal");

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "flex";
            document.body.classList.add("modal-open");
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => closeModal());
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
    });

    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
});
document.querySelector('.open_contact').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.contact-modal').style.display = 'block';
});

document.querySelector('.closeModalContact').addEventListener('click', function() {
    document.querySelector('.contact-modal').style.display = 'none';
});