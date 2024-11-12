let player1Choice = '';
let player2Choice = '';
let isPlayer1Turn = true;

document.getElementById('submit-button').addEventListener('click', handleChoice);
document.getElementById('restart-button').addEventListener('click', restartGame);

function handleChoice() {
    const input = document.getElementById('choice-input');
    const choice = input.value.trim().toLowerCase();

    if (isPlayer1Turn) {
        player1Choice = choice;
        document.getElementById('instructions').textContent = "Joueur 2 : Entrez votre choix";
        input.value = '';
        isPlayer1Turn = false;
    } else {
        player2Choice = choice;
        determineWinner();
    }
}

function getResult(choice1, choice2) {
    /*
        Cette fonction compare les choix du jeu Roche-Papier-ciseauxx entre deux
        joueurs et affiche le gagnant.

        :param choice1: symbole choisie par le joueur 1 ("roche", "papier" ou "ciseaux")
        :param choice2: symbole choisie par le joueur 2 ("roche", "papier" ou "ciseaux")

        :return: le joueur gagnant "Joueur 1 gagne !" ou "Joueur 2 gagne !" où "Égalité !"
    */
}

function determineWinner() {
    let resultMessage = getResult(player1Choice, player2Choice);

    document.getElementById('result-message').textContent = resultMessage;
    document.getElementById('restart-button').style.display = 'inline-block';
    document.getElementById('submit-button').disabled = true;
    document.getElementById('choice-input').disabled = true;
}

function restartGame() {
    player1Choice = '';
    player2Choice = '';
    isPlayer1Turn = true;
    document.getElementById('instructions').textContent = "Joueur 1 : Entrez votre choix (pierre, papier, ou ciseaux)";
    document.getElementById('result-message').textContent = '';
    document.getElementById('restart-button').style.display = 'none';
    document.getElementById('submit-button').disabled = false;
    document.getElementById('choice-input').disabled = false;
    document.getElementById('choice-input').value = '';
}
