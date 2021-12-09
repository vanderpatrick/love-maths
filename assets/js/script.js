//wait for dom finishing loading before running the game
//get the button elements and add event listener to them

document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') === 'submit'){
                alert('You clicked submit');
            } else{
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        });
    }

    runGame('addition');

})
/**
 * The main game "loop", called when the script is first loaded 
 * After the user answer has been processed 
 */
function runGame(gameType) {
    //creates two random number between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Uknown game type ${gameType}`);
        throw `Uknown game type ${gameType}. Aborting game`;
    }

    


}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {

}