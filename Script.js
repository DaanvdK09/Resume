document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('active');
});

document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
});

document.getElementById('lighting-toggle').addEventListener('click', function(event) {
    event.preventDefault();

    // Toggle
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');

    // Toggle Icons
    const icon = document.querySelector('#lighting-toggle a');
    if (document.body.classList.contains('light-mode')) {
        icon.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        icon.innerHTML = '<i class="fas fa-moon"></i>';
    }
});