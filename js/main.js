let comments = document.querySelectorAll(".comment");
let commentButtons = document.querySelectorAll(".comment__button");
let currentComment = 0;

(function main() {

  // Create click event in comment button
  commentButtonEvents(commentButtons);
})();

function toBackComment() {
  if(currentComment > 0) {
    currentComment--;
  }

  else {
    currentComment = comments.length - 1;
  }
}

function toNextComment() {        
  if(currentComment < comments.length - 1) {
    currentComment++;
  }

  else {
    currentComment = 0;
  }
}

function commentButtonEvents(buttons) {
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      comments[currentComment].classList.add("comment--hidden");

      if(button.name == "next") {
        toNextComment();
      }

      else {
        toBackComment();
      }
      
      comments[currentComment].classList.remove("comment--hidden");
    });
  });
}