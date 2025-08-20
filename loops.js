// LOOPS
// iterations
//loop must terminate
//for, while, do-while loop
// areused to oerform repititve tasks

//infinite LOOP

// for(initializer; condtion; increment(terminate)){
// action * 6
// }

// 0 1 2 3 4
for(let i = 0; i < 5; i++){
    console.log("In a loop");
}

//0,1,2

for (let attempt = 0; attempt < 3; attempt++){
    console.log("Keep trying");
}

//sum of natural number between 0-50

let sum = 0;

for (let i = 0; i <= 100; i++){
    sum += i;
}
console.log(sum);


//while loop

let y = 0;
while (y < 3){
    // action
    console.log("attempt card");
    
    y++;
}



// do-while loop

// It allows is us to perform an action at least once whether the condition is true or false

let x = 5;
do {
    console.log("Hello User");
    x++;
} while (x < 2);

//rolling a dice until 6 appears

let roll;
do {
    roll = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled ${roll}`);
} while (roll !== 6);