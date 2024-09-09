const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I LOVE YOU TOO!!!";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTZrdW11eGl3YjI1YWVkMTNyOXExcW9taWR3MHA4aTU5eDJwYXR0eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9G0AdBbVrkV3O/giphy.gif";
});

// Function to move the No button to a random position within the viewport
function moveNoBtn() {
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the viewport
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  // Generate random positions within the allowable area
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = 'fixed'; // Use fixed position to keep it within the viewport
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Move the No button every 500 milliseconds (adjust the time as needed)
setInterval(moveNoBtn, 500);

