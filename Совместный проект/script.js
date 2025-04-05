function generateRandomNumber() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (isNaN(min) || isNaN(max)) {
        alert("Пожалуйста, введите корректные числа.");
        return;
    }

    if (min >= max) {
        alert("Минимальное число должно быть меньше максимального.");
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').innerText = ` ${randomNumber}`;
}