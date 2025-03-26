//Transition Sidebar
document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('active');
});

//Close Button
document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
});

//Dropdown Sidebar


//Lighting Toggle
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

// Countdown
const eventDate = new Date("2025-04-06T12:30:00").getTime();

// Update
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Time Remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display
    countdownElement.innerHTML = `First Match: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Message
    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "First Match In Progress";
    }
}

// Update
const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();

// Loading Articles
document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById('news-container');

    // Article Names
    const articles = [
        'Wntr Szn-Artcl'
    ];

    articles.forEach(article => {
        fetch(`articles/${article}.html`)
            .then(response => response.text())
            .then(data => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;
                const articleContent = tempDiv.querySelector('.card').outerHTML;
                newsContainer.innerHTML += articleContent;
            })
            .catch(error => console.error('Error loading article:', error));
    });
});