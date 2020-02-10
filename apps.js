const newDie = document.getElementById('newDie'),
    rerollDie = document.getElementById('rerollDie'),
    sumDie = document.getElementById('sumDie');
diceContainer = document.getElementById('dice-container');
let numDice = 0;
diceArry = [];

newDie.addEventListener('click', () => {
    // console.log('yep newDie');
});

rerollDie.addEventListener('click', () => {
    // console.log('yep rerollDie');
    diceArry.forEach(die => die.roll());
});

sumDie.addEventListener('click', () => {
    // console.log('yep sumDie');
    let sum = 0;
    diceArry.forEach(die => sum = sum + die.value);
    alert(sum);
});

class Die {
    constructor(value) {
        this.value = value;
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.id = numOfDice++
        this.render();
        diceArry.push(this);
        // console.log(diceArry);
        diceContainer.appendChlid(this.div);

    }

    roll() {
        let randomVal = Math.floor((Math.random() * 6) + 1);
        this.value = randomVal;
        this.div.innerText = this.value;
    }

    render() {
        diceContainer.appendChlid(this.div);
        this.roll();
        this.div.addEventListener('click', () => {
            this.roll();
        });
        this.div.addEventListener('dblclick', () => {
            const index = diceArr.indexOf(this);
            if (index > -1) {
                diceArr.splice(index, 1);
            }
            container.removeChild(this)
        });
    }
}



// document.addEventListener("DOMContentLoaded", function () {

//     let containerDiv = document.createElement('div');
//     containerDiv.classList.add('flex');
//     document.body.appendChild(containerDiv);
//     // let boxNum = 0;
//     let boxNum = 'box';

//     newDie.addEventListener('click', function () {
//         let box = document.createElement('div');
//         box.classList.add('square');
//         box.id = boxNum;
//         let idBox = document.createElement('span');
//         idBox.className = "box-Class";
//         idBox.innerText = Math.floor((Math.random() * 6) + 1);
//         box.appendChild(idBox);
//         containerDiv.appendChild(box);
//         let dieText = document.createTextNode();
//         containerDiv.appendChild(dieText);
//         boxNum++;
//         //removeDie
//         box.addEventListener('dblclick', function () {
//             box.remove();
//         });

//     });

// });
//need to add
//Advanced NOTES:create dice unicode value shift = Advanced button