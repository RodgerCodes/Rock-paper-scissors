function game() {
  let pscore = 0;
  let cscore = 0;
  let isCompleted = false;
  const startGame = () => {
    const startbtn = document.querySelector(".intro #btn");
    startbtn.addEventListener("click", function() {
      const intro = document.querySelector(".intro");
      intro.classList.add("fadeout");
      const match = document.querySelector(".match");

      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const compHand = document.querySelector(".computer-hand");

    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand =>
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      })
    );

    const compOptions = ["rock", "paper", "scissors"];

    options.forEach(option =>
      option.addEventListener("click", function() {
        const compNumber = Math.floor(Math.random() * 3);
        const compChoice = compOptions[compNumber];
        setTimeout(() => {
          compareHands(this.textContent, compChoice);
          playerHand.src = `assets/${this.textContent}.png`;
          compHand.src = `assets/${compChoice}.png`;
          isCompleted = true;
          if (isCompleted) {
            setTimeout(() => {
              playerHand.src = `assets/rock.png`;
              compHand.src = `assets/rock.png`;
            }, 1000);
          }
        }, 1000);
        //compareHands();
        playerHand.style.animation = "shakePlayer 1.2s ease";
        compHand.style.animation = "shakeComputer 1.2s ease";
      })
    );
  };

  const compareHands = (playerChoice, compChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === compChoice) {
      winner.textContent = "It is a Tie";
      return;
    }
    if (playerChoice === "rock") {
      if (compChoice === "scissors") {
        winner.textContent = "Player Wins";
        pscore++;
        const playerScore = document.querySelector(".player-score p");
        playerScore.textContent = pscore;
        return;
      } else {
        winner.textContent = "Computer Wins";
        cscore++;
        const compScore = document.querySelector(".computer-score p");
        compScore.textContent = cscore;
        return;
      }
    }

    if (playerChoice === "paper") {
      if (compChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cscore++;
        const compScore = document.querySelector(".computer-score p");
        compScore.textContent = cscore;
        return;
      } else {
        winner.textContent = "Player Wins";
        pscore++;
        const playerScore = document.querySelector(".player-score p");
        playerScore.textContent = pscore;
        return;
      }
    }

    if (playerChoice === "scissors") {
      if (compChoice === "rock") {
        winner.textContent = "Computer Wins";
        cscore++;
        const compScore = document.querySelector(".computer-score p");
        compScore.textContent = cscore;
        return;
      } else {
        winner.textContent = "Player Wins";
        pscore++;
        const playerScore = document.querySelector(".player-score p");
        playerScore.textContent = pscore;
        return;
      }
    }
    if (playerScore.value == 10) {
      if (compScore.value !== 10) {
        winner.textContent = "Player Wins";
      }
    }
    if (compScore.value == 10) {
      if (playerScore.value !== 10) {
        winner.textContent = "Computer Wins";
      }
    }
  };

  playMatch();
  startGame();
}

game();
