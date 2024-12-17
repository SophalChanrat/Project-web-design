document.addEventListener('DOMContentLoaded', function() {
    const customSelect = document.querySelector('.custom-select');
    const selectHeader = document.querySelector('.select-header');
    const options = document.querySelectorAll('.option input[type="checkbox"]');

    // Toggle dropdown
    selectHeader.addEventListener('click', function() {
        customSelect.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!customSelect.contains(e.target)) {
            customSelect.classList.remove('active');
        }
    });

    // Update header text when options are selected
    options.forEach(option => {
        option.addEventListener('change', function() {
            updateHeaderText();
        });
    });

    function updateHeaderText() {
        const selectedOptions = Array.from(options)
            .filter(option => option.checked)
            .map(option => option.value);

        if (selectedOptions.length === 0) {
            selectHeader.textContent = 'Select teams';
        } else if (selectedOptions.length === options.length) {
            selectHeader.textContent = 'All teams';
        } else {
            selectHeader.textContent = selectedOptions.join(', ');
        }
    }
});