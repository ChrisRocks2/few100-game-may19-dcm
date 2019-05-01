import { getRandomInt } from "./numbers";
let squares: NodeList;
//const message = 
export function runApp() {
    //select the square as the secret square
    //pick random number, 1-6 inclusive
    const secretNumber = getRandomInt(1, 6);
    //find the correlated square and "bless" it
    squares = document.querySelectorAll('.square');
    let currentSquare = 1;
    squares.forEach((sq: HTMLDivElement) => {
        if (currentSquare === secretNumber) {
            //mark square somehow
            sq.dataset.secret = "true";
            console.log('psst it is ' + currentSquare);
        }
        sq.addEventListener('click', handleClick);
        currentSquare++;
    })
}

function handleClick() {
    //did they win
    //console.log("you click on ", this);
    const isWinner = this.dataset.secret === "true";
    const clickedSquare = this;

    if (isWinner) {
        //make it pretty
        clickedSquare.classList.add('winner');
        squares.forEach((sq: HTMLDivElement) => {
            if (sq !== clickedSquare) {
                sq.classList.add('loser');
                sq.removeEventListener('click', handleClick);
            }

        })
    }
    else {
        clickedSquare.classList.add('loser');
        clickedSquare.removeEventListener('click', handleClick);

    }
}