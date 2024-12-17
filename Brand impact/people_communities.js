// Open the modal by setting the display of the modal with the given ID
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Close the modal by setting the display of the modal with the given ID
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close any modal when clicking outside of its content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal'); // Select all modals
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};