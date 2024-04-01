

let boxes = document.querySelectorAll(".box");
let res = document.querySelector(".butt");
let player=1;
let music=new Audio("tingsound.mp3");


const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],];
function playDingSound() {
    var audio = new Audio('ding.mp3'); // Replace 'ding.mp3' with the path to your ding sound file
    audio.play();
}


boxes.forEach((box) => {
    box.addEventListener("click",() => {
            console.log("clicked");
            if(player%2==0)
            {
                box.innerText="O";
                player++;

            }
            else{
                box.innerText="X";
                player++;
            }
            box.disabled=true;

    });
});
document.addEventListener("DOMContentLoaded", function() {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.addEventListener('click', playDingSound);
    });
});


    // Function to play background music
    function playBackgroundMusic() {
        var bgMusic = document.getElementsByClassName('music');
        bgMusic.play();
    }

    // Call the function to play background music when the page loads
    window.addEventListener('DOMContentLoaded', playBackgroundMusic);
