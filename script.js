let items = document.getElementsByClassName('item');
let message = document.getElementById('message');
let btnReset = document.getElementById('reset');
const winCombo = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
var movePlayer = true;
var game = true;
var win = '';
for (let index = 0; index < items.length; index++) {
    items[index].addEventListener('click', function() {
        var collection = document.querySelectorAll('.item:not(.item-check)');
        if (game) {
            if (!this.classList.contains('item-check')) {
            
                if (movePlayer == true) {
                    
                    if (this.innerHTML == '') {
                        this.classList.add('item-check');
                        this.textContent = 'X';
                        checkWin();
                        movePlayer = !movePlayer;
                        setTimeout(function() {
                                botMove();
                            }, 100);
                        }
                    } else {
                    setTimeout(function() {
                        botMove();
                    }, 100);
                }
            }
        }
    }, false);
};
function checkWin() {
    var itemsArr = [];
    for (let i = 0; i < items.length; i++) {
        itemsArr.push(items[i].textContent);
    }
    for (let k = 0; k < winCombo.length; k++) {
        if (itemsArr[winCombo[k][0]] == 'X' && itemsArr[winCombo[k][1]] == 'X' && itemsArr[winCombo[k][2]] == 'X') {
            items[winCombo[k][0]].classList.add('item-win');
            items[winCombo[k][1]].classList.add('item-win');
            items[winCombo[k][2]].classList.add('item-win');
            message.textContent = 'Выйграл человек';
            game = !game;
        } else if (itemsArr[winCombo[k][0]] == '0' && itemsArr[winCombo[k][1]] == '0' && itemsArr[winCombo[k][2]] == '0') {
            items[winCombo[k][0]].classList.add('item-win');
            items[winCombo[k][1]].classList.add('item-win');
            items[winCombo[k][2]].classList.add('item-win');
            message.textContent = 'Выйграл компьютер';
            game = !game;
        }
    }
};
function botMove() {
	var items = document.querySelectorAll('.item:not(.item-check)');
	var step = Math.floor(Math.random() * Math.floor(items.length));
	items[step].innerHTML = "0";
	items[step].classList.add("item-check");
    checkWin();
    movePlayer = !movePlayer;
}
btnReset.addEventListener('click', function() {
    location.reload();
}, false);