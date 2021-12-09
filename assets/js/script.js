//wait for dom finishing loading before running the game
//get the button elements and add event listener to them

document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByTagName('button');
    for (let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') === 'submit'){
                alert('You clicked submit')
            } else{
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`);
            }
        });
    }
})
/**
 * The main game "loop", called when the script is first loaded 
 * After the user's answer has been processed 
 */
function runGame() {
    //creates two random number between 1 and 25
Math.floor(math.random() * 25) + 1;
Math.floor(math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}