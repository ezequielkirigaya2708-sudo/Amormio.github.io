document.addEventListener('DOMContentLoaded', () => {
    // 20 de mayo de 2021 (Recuerda que Mayo es el mes 4 en JavaScript)
    const startDate = new Date(2021, 4, 20); 
    const timeElapsedElement = document.getElementById('time-elapsed');

    function updateTime() {
        const now = new Date();
        const diff = now.getTime() - startDate.getTime();

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        const years = Math.floor(days / 365.25);
        const remainingDays = Math.floor(days % 365.25);
        
        const remainingHours = hours % 24;
        const remainingMinutes = minutes % 60;
        const remainingSeconds = seconds % 60;

        let timeString = '';
        if (years > 0) {
            timeString += `${years} año${years !== 1 ? 's' : ''}, `;
        }
        if (remainingDays > 0) {
            timeString += `${remainingDays} día${remainingDays !== 1 ? 's' : ''}, `;
        }
        timeString += 
            `${remainingHours} hora${remainingHours !== 1 ? 's' : ''}, ` +
            `${remainingMinutes} minuto${remainingMinutes !== 1 ? 's' : ''}, ` +
            `${remainingSeconds} segundo${remainingSeconds !== 1 ? 's' : ''}`;

        timeElapsedElement.textContent = timeString;
    }

    setInterval(updateTime, 1000);
    updateTime();
});