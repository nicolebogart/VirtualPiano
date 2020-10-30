document.addEventListener("keydown", function (event) {
    if (event.code == "KeyA") {
        console.log("The 'A' key is pressed");
        let audio = new Audio("white_keys/a.mp3");
        audio.play();
    } else if (event.code == "KeyS") {
        console.log("The 'S' key is pressed");
        let audio = new Audio("white_keys/s.mp3");
        audio.play();
    } else if (event.code == "KeyD") {
        console.log("The 'D' key is pressed");
        let audio = new Audio("white_keys/d.mp3");
        audio.play();
    } else if (event.code == "KeyF") {
        console.log("The 'F' key is pressed");
        let audio = new Audio("white_keys/f.mp3");
        audio.play();
    } else if (event.code == "KeyG") {
        console.log("The 'G' key is pressed");
        let audio = new Audio("white_keys/g.mp3");
        audio.play();
    } else if (event.code == "KeyH") {
        console.log("The 'H' key is pressed");
        let audio = new Audio("white_keys/h.mp3");
        audio.play();
    } else if (event.code == "KeyJ") {
        console.log("The 'J' key is pressed");
        let audio = new Audio("white_keys/j.mp3");
        audio.play();
    } else if (event.code == "KeyW") {
        let audio = new Audio("black_keys/w.mp3");
        audio.play();
    } else if (event.code == "KeyE") {
        let audio = new Audio("black_keys/e.mp3");
        audio.play();
    } else if (event.code == "KeyT") {
        let audio = new Audio("black_keys/t.mp3");
        audio.play();
    } else if (event.code == "KeyY") {
        let audio = new Audio("black_keys/y.mp3");
        audio.play();
    } else if (event.code == "KeyU") {
        let audio = new Audio("black_keys/u.mp3");
        audio.play();
    } else {
        console.log("Key does not exist");
    }
})