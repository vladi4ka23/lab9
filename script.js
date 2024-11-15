document.addEventListener("DOMContentLoaded", () => {
    const cardValues = [
        { name: "6", value: 6, img: "./images/6.png" },
        { name: "7", value: 7, img: "./images/7.png" },
        { name: "8", value: 8, img: "./images/8.png" },
        { name: "9", value: 9, img: "./images/9.png" },
        { name: "10", value: 10, img: "./images/10.png" },
        { name: "Валет", value: 2, img: "./images/jack.png" },
        { name: "Дама", value: 3, img: "./images/queen.png" },
        { name: "Король", value: 4, img: "./images/king.png" },
        { name: "Туз", value: 11, img: "./images/ace.png" },
    ];

    const getRandomCard = () => cardValues[Math.floor(Math.random() * cardValues.length)];

    const playerName = prompt("Введіть ваше ім'я:");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const drawCardButton = document.getElementById("drawCardButton");
    const playerCardsDiv = document.getElementById("playerCards");
    const computerCardsDiv = document.getElementById("computerCards");
    const gameResult = document.getElementById("gameResult");

    let playerTotal = 0;
    let computerTotal = 0;
    let round = 1;

    const drawCard = () => {
        if (round > 3) return;

        const playerCard = getRandomCard();
        const computerCard = getRandomCard();

        playerTotal += playerCard.value;
        computerTotal += computerCard.value;

        playerCardsDiv.innerHTML += `
            <div class="card">
                <img src="${playerCard.img}" alt="${playerCard.name}">
                <p>${playerCard.name} (${playerCard.value})</p>
            </div>
        `;
        computerCardsDiv.innerHTML += `
            <div class="card">
                <img src="${computerCard.img}" alt="${computerCard.name}">
                <p>${computerCard.name} (${computerCard.value})</p>
            </div>
        `;
        
        if (round === 3) {
            const resultMessage =
                playerTotal > computerTotal
                    ? `<p class="winner">Ви виграли! Ваш рахунок: ${playerTotal}, Комп'ютер: ${computerTotal}</p>`
                    : playerTotal < computerTotal
                    ? `<p class="loser">Ви програли. Ваш рахунок: ${playerTotal}, Комп'ютер: ${computerTotal}</p>`
                    : `<p>Нічия! Ваш рахунок: ${playerTotal}, Комп'ютер: ${computerTotal}</p>`;
            gameResult.innerHTML = resultMessage;
            drawCardButton.disabled = true;
        }

        round++;
    };

    welcomeMessage.innerText = `Ласкаво просимо до гри, ${playerName}!`;
    drawCardButton.addEventListener("click", drawCard);
});