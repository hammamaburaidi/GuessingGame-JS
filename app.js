setTimeout(function () {
  let maximum = parseInt(prompt("Enter the maximum number, Please!"));
  while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
  }

  const randomNum = Math.floor(Math.random() * maximum) + 1;

  let guessNum = prompt(
    "Now Enter Your First Guess! (Type 'q' to quit the game)"
  );
  let attempts = 1;

  while (parseInt(guessNum) !== randomNum) {
    if (guessNum === "q") break;
    guessNum = parseInt(guessNum);
    if (guessNum > randomNum) {
      guessNum = prompt("Too high! Enter a new guess!");
      attempts++;
    } else if (guessNum < randomNum) {
      guessNum = prompt("Too Low! Enter a new guess!");
      attempts++;
    } else {
      guessNum = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
  }
  if (guessNum === "q") {
    let quitGame = document.getElementById("quit");
    quitGame.textContent = "Ok! You Quit the Game! See you soon.";
  } else {
    let heading = document.getElementById("result");
    heading.textContent = "Congratulations";
    let notes = document.getElementById("note");
    notes.textContent = `You Got It. It took you ${attempts} guesses! See you later.`;
  }
}, 2000); // 2000 milliseconds = 2 seconds
