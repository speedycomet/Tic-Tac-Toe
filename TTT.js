var gp1;
var gp2;
var player1, player2;

function randValue(){
    //GENERATE RANDOM NUMBER TO ASSIGN SYMBOLS
    var randomNum = Math.floor(Math.random() * 2) + 1;

    //ASSIGN SYMBOLS TO PLAYERS
    if (randomNum == 1) {
        player1 = "X";
        player2 = "O";
        document.querySelector("#player1").innerHTML = "Player 1<br>" + gp1 + "✖️";
        document.querySelector("#player2").innerHTML = "Player 2<br>" + gp2 + "⭕";
    } else {
        player1 = "O";
        player2 = "X";
        document.querySelector("#player1").innerHTML = "Player 1<br>" + gp1 + "⭕";
        document.querySelector("#player2").innerHTML = "Player 2<br>" + gp2 + "✖️";
    }
}

// function keepPlayers(){
//     var p1 = document.querySelector("#p1").value;
//     var p2 = document.querySelector("#p2").value;
//     sessionStorage.setItem("Player1", p1);
//     sessionStorage.setItem("Player2", p2);
// }

//FUNCTION FOR SWAPPING PLAYERS
function swapPlayers(){
    var p1 = document.querySelector("#p1").value;
    var p2 = document.querySelector("#p2").value;
    sessionStorage.setItem("Player1", p2);
    sessionStorage.setItem("Player2", p1);
}

document.getElementById("start").addEventListener("click", () => {
    //TO ADD PLAYERS NAME
    var p1 = document.querySelector("#p1").value;
    sessionStorage.setItem("Player1", p1);
    var p2 = document.querySelector("#p2").value;
    sessionStorage.setItem("Player2", p2);

    gp1 = sessionStorage.getItem("Player1");
    gp2 = sessionStorage.getItem("Player2");

    randValue();

    document.querySelector("#names").style.display = "none";

    //SWITCH TO GAME AREA
    document.querySelector("#game").style.display = "block";
    document.querySelector("#game").classList.add('fade-in');
    setTimeout(() => {
        document.querySelector("#game").classList.remove('fade-in');
    }, 1000);
});


//ARRAY FOR STORING INPUT VALUES
let cells = [null, "", "", "", "", "", "", "", "", ""];

//EXECUTE AFTER CLICKING CELLS
var p1Count = 0;
var p2Count = 0;
var drawCount = 0;
function myfunc() {
    //ADDING VALUES TO CELLS ARRAY
    for (let c = 1; c <= 9; c++) {
        let cellId = "btn" + c;
        cells[c] = document.getElementById(cellId).value;
    }

    //CHECKING PLAYER1 WINNING CONDITION
    if ((cells[1] == player1 && cells[2] == player1 && cells[3] == player1) ||
        (cells[4] == player1 && cells[5] == player1 && cells[6] == player1) ||
        (cells[7] == player1 && cells[8] == player1 && cells[9] == player1) ||
        (cells[1] == player1 && cells[5] == player1 && cells[9] == player1) ||
        (cells[3] == player1 && cells[5] == player1 && cells[7] == player1) ||
        (cells[1] == player1 && cells[4] == player1 && cells[7] == player1) ||
        (cells[2] == player1 && cells[5] == player1 && cells[8] == player1) ||
        (cells[3] == player1 && cells[6] == player1 && cells[9] == player1)) {

        p1Count++;

        //SHOWING RESULT
        document.getElementById("left").innerHTML = gp1 + " Wins!🏆";
        for (let j = 1; j <= 9; j++) {
            let inputId = "btn" + j;
            document.getElementById(inputId).disabled = true;
            document.getElementById(inputId).style.color = "#212A3E";
            document.getElementById("left").classList.add('fade-in');
            setTimeout(() => {
                document.getElementById("left").classList.remove('fade-in');
            }, 1000);

            //TO DISPLAY NO. OF WINS
            document.getElementById("right").innerHTML = p1Count + " <span class='small-x'>X</span> " + gp1 + "<br>" + p2Count + " <span class='small-x'>X</span> " + gp2 + "<br>" + drawCount + " <span class='small-x'>X</span> " + "Draw";
        }
    }

    //CHECKING PLAYER2 WINNING CONDITION
    else if ((cells[1] == player2 && cells[2] == player2 && cells[3] == player2) ||
        (cells[4] == player2 && cells[5] == player2 && cells[6] == player2) ||
        (cells[7] == player2 && cells[8] == player2 && cells[9] == player2) ||
        (cells[1] == player2 && cells[5] == player2 && cells[9] == player2) ||
        (cells[3] == player2 && cells[5] == player2 && cells[7] == player2) ||
        (cells[1] == player2 && cells[4] == player2 && cells[7] == player2) ||
        (cells[2] == player2 && cells[5] == player2 && cells[8] == player2) ||
        (cells[3] == player2 && cells[6] == player2 && cells[9] == player2)) {

        p2Count++;

        //SHOWING RESULT
        document.getElementById("left").innerHTML = gp2 + " Wins!🏆";
        for (let j = 1; j <= 9; j++) {
            let inputId = "btn" + j;
            document.getElementById(inputId).disabled = true;
            document.getElementById(inputId).style.color = "#212A3E";
            document.getElementById("left").classList.add('fade-in');
            setTimeout(() => {
                document.getElementById("left").classList.remove('fade-in');
            }, 1000);

            //TO DISPLAY THE NO. OF WINS
            document.getElementById("right").innerHTML = p1Count + " <span class='small-x'>X</span> " + gp1 + "<br>" + p2Count + " <span class='small-x'>X</span> " + gp2 + "<br>" + drawCount + " <span class='small-x'>X</span> " + "Draw";
        }

        //TO INTERCHANGE THE VALUES OF P1 & P2
        swapPlayers();
    }

    else if (!cells.includes("")) {
        drawCount++;
    
        //SHOWING RESULT
        document.getElementById("left").innerHTML = "It's a Draw!🤝";
        for (let j = 1; j <= 9; j++) {
            let inputId = "btn" + j;
            document.getElementById(inputId).disabled = true;
            document.getElementById(inputId).style.color = "#212A3E";
            document.getElementById("left").classList.add('fade-in');
            setTimeout(() => {
                document.getElementById("left").classList.remove('fade-in');
            }, 1000);
    
            //TO DISPLAY NO. OF DRAWS
            document.getElementById("right").innerHTML = p1Count + " <span class='small-x'>X</span> " + gp1 + "<br>" + p2Count + " <span class='small-x'>X</span> " + gp2 + "<br>" + drawCount + " <span class='small-x'>X</span> " + "Draw";
        }
    }
    
}

//FOR COUNTING THE CLICKS IN INPUT AND SWITCHING PLAYERS
let count = 0;
for (let i = 1; i <= 9; i++) {
    let areaId = "btn" + i;
    document.getElementById(areaId).readOnly = "true";
    document.getElementById(areaId).addEventListener(`click`, () => {
        count++;
        document.getElementById(areaId).disabled = "true";

        //FOR SWITCHING PLAYERS AND UPDATING ARRAY
        if (count % 2 == 0) {
            document.getElementById(areaId).style.color = "#E76161";
            document.getElementById(areaId).value = player2;
        }

        else {
            document.getElementById(areaId).style.color = "#4C3D3D";
            document.getElementById(areaId).value = player1;
        }

        myfunc();
        console.log(cells);

        //CONDITION FOR GAME "DRAW"!
        if (count >= 9) {
            for (let j = 1; j <= 9; j++) {
                let inputId = "btn" + j;
                document.getElementById("left").innerHTML = "Match draw";
                document.getElementById(inputId).disabled = true;
                document.getElementById(inputId).style.color = "#212A3E";
            }
            console.log("Game Over!");
        }
    });
}

//GAME RESTART
function restartGame() {
    //TO RESET THE PLAYER VALUES
    let cells = [null, "", "", "", "", "", "", "", "", ""];

    //TO SET THE COUNTER TO 0
    count = 0;

    for (let i = 1; i <= 9; i++) {
        let inputId = "btn" + i;
        document.getElementById(inputId).disabled = false;
        document.getElementById(inputId).value = "";
        document.getElementById(inputId).style.color = "aliceblue";
    }

    document.getElementById("left").innerHTML = "";
    gp1 = sessionStorage.getItem("Player1");
    gp2 = sessionStorage.getItem("Player2");

    randValue();
}

function reloadGame() {
    location.reload()
    sessionStorage.clear();
}

