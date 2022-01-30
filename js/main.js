const mybut = document.querySelector('.mybut');
const screen = document.querySelector('.screen');
let numb = 1;

mybut.addEventListener('click', () => {
    for (let x = 1; x <= 50; x++) {
        const letters = [0, 1, "A", 2, 3, "B", 4, 5, "C", 6, 7, "D", 8, 9, "F"];
        let result = [];

        for (let i = 0; i <= 5; i++) {
            let ranNum = Math.floor((Math.random() * 15));
            result.push(letters[ranNum]);
        }

        result.unshift("#");
        let sum = result.join('');



        numb = numb + 0.5;
        let box = document.createElement("div");
        box.style.backgroundColor = `${sum}`;
        box.style.left = "0";
        box.style.top = "0";
        box.style.position = "absolute";
        box.style.height = "10rem";
        box.style.width = "10rem";
        box.style.border = "2px solid #000000";
        box.style.animationName = "move";
        box.style.animationDelay = `${numb}s`;
        box.style.animationDuration = "5s";
        box.style.animationIterationCount = "infinite";
        box.style.animationTimingFunction = "linear";
        box.style.borderRadius = "50%";
        box.style.display = "flex";
        box.style.alignItems = "center";
        box.style.justifyContent = "center";
        box.style.fontSize = "2rem";
        box.style.transform = "scale(0.2)";
        screen.appendChild(box);

        let box2 = document.createElement("div");
        box2.style.backgroundColor = `${sum}`;
        box2.style.left = "4rem";
        box2.style.top = "4rem";
        box2.style.position = "absolute";
        box2.style.height = "10rem";
        box2.style.width = "10rem";
        box2.style.border = "2px solid #000000";
        box2.style.animationName = "dance";
        box2.style.animationDelay = `${numb}s`;
        box2.style.animationDuration = "5s";
        box2.style.animationIterationCount = "infinite";
        box2.style.animationTimingFunction = "linear";
        box2.style.borderRadius = "50%";
        box2.style.display = "flex";
        box2.style.alignItems = "center";
        box2.style.justifyContent = "center";
        box2.style.fontSize = "2rem";
        box2.style.transform = "scale(0.2)";
        screen.appendChild(box2);
    };
});