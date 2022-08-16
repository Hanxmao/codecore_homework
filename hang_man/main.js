let answer = "stranger"
let miss_count = 0;
let hit_count = 0;
let guessed_letters = new Set();

let win = new Audio('./sound/win.mp3');
let lose = new Audio('./sound/lose.mp3');

answer = answer.toUpperCase();
let word_array = answer.split("");

$(document).ready(() => {

  for (let index = 0; index < answer.length; index++) {
    $(".bar_area").append(`<div id = "${index}" class="bar"> ___ </div>`);
  }

  $('li').on('mousedown', (event) => {
    if (miss_count < 6) {
      $(event.target).attr('style', 'background-color: red; color:white');
      if (!guessed_letters.has(event.currentTarget.innerHTML)) {
        for (let index = 0; index < answer.length; index++) {
          if (word_array[index] === event.currentTarget.innerHTML) {
            $(`#${index}`).html("_" + event.currentTarget.innerHTML + "_");
            hit_count += 1;
          }
        }
      }
    }
  });

  $('li').on('mouseup', (event) => {
    if (!guessed_letters.has(event.currentTarget.innerHTML)) {
      if (!answer.includes(event.currentTarget.innerHTML)) {
        if (miss_count < 6)
          miss_count += 1;
        $("#hangman-image").attr("src", `./images/${miss_count + 1}.jpg`);
      }
      if (miss_count >= 6) {
        lose.play();
        setTimeout(function(){alert("Better luck next time!")}, 200);
      } else {
        if (hit_count >= answer.length) {
          win.play();
          setTimeout(function(){alert("Congratulations! You win!")}, 200);
        }
      }
    }
    guessed_letters.add(event.currentTarget.innerHTML);
  });
});
