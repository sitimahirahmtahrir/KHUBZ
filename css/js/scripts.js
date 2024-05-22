document.addEventListener('DOMContentLoaded', function() {
    const notificationList = document.getElementById('notificationList');

    // Mock notifications
    const notifications = [
        "New policy updates available.",
        "Upcoming training sessions.",
        "Internal vacancies open for application.",
    ];

    // Render notifications
    notifications.forEach(notification => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = notification;
        notificationList.appendChild(li);
    });
});
