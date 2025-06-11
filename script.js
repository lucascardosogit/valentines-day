function updateTimer() {
    // Formato: Ano, Mês (0-11), Dia, Hora, Minuto, Segundo
    const startDate = new Date(2021, 9, 10, 0, 0, 0);
    
    const now = new Date();
    const difference = now - startDate;
    
    // Calcular anos
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    
    // Ajustar se o dia ainda não chegou no mês atual
    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    // Ajustar se o mês ainda não chegou no ano atual
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Calcular horas, minutos e segundos restantes
    const totalSeconds = Math.floor(difference / 1000);
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    // Atualizar o display
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Atualizar o timer imediatamente
updateTimer();

// Atualizar a cada segundo
setInterval(updateTimer, 1000);