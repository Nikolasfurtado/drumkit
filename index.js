var drum = document.querySelectorAll(".drum");

for (let i = 0; i < drum.length; i++) {

    addEventListener("keydown", () => {
        alert("a key was pressed");
    });

    drum[i].addEventListener("click", () => {

        let sd = new Audio('sounds/tom-' + (i + 1) + '.mp3');
        sd.play();

        drum[i].setAttribute("style", "color:white");

    });
}