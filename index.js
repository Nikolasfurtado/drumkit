var drum = document.querySelectorAll(".drum");
let keyPressed;


addEventListener("keydown", (e) => {
    keyPressed = (e.key);
    let currentAnmt = document.querySelector('.' + keyPressed)

    function anmtKey() {
        currentAnmt.classList.add('pressed');
        setInterval(() => {
            currentAnmt.classList.remove('pressed');
        }, 200);
    }


    switch (keyPressed) {
        case 'w':
            let sd1 = new Audio('sounds/tom-1.mp3');
            sd1.play();
            anmtKey();
            break;
        case 'a':
            let sd2 = new Audio('sounds/tom-2.mp3');
            sd2.play();
            anmtKey();
            break;
        case 's':
            let sd3 = new Audio('sounds/tom-3.mp3');
            sd3.play();
            anmtKey();
            break;
        case 'd':
            let sd4 = new Audio('sounds/tom-4.mp3');
            sd4.play();
            anmtKey();
            break;
        case 'j':
            let sd5 = new Audio('sounds/tom-5.mp3');
            sd5.play();
            anmtKey();
            break;
        case 'k':
            let sd6 = new Audio('sounds/tom-6.mp3');
            sd6.play();
            anmtKey();
            break;
        case 'l':
            let sd7 = new Audio('sounds/tom-7.mp3');
            sd7.play();
            anmtKey();
            break;

        default:
            break;
    }

});
for (let i = 0; i < drum.length; i++) {

    var currentI = i;

    drum[i].addEventListener("click", () => {

        var sd = new Audio('sounds/tom-' + (i + 1) + '.mp3');
        sd.play();

        function animatedBtns() {
            setTimeout(() => {
                drum[i].classList.remove("pressed");
            }, 200);
            drum[i].classList.add("pressed");
        }

        animatedBtns();

    });



}