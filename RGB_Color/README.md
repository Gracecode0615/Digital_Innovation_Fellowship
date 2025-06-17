🎯 Assignment: Build an RGB Color Guessing Game
Subject: JavaScript DOM Manipulation & Random Number Generation
Skill Level: Beginner–Intermediate
Deadline: [Insert deadline date here]
📝 Objective:
Build a simple web-based game that helps you learn how to:
- Generate random RGB colors
- Display them dynamically using HTML/CSS/JavaScript
- Interact with the DOM using JavaScript
- Handle events like clicks
- Implement game logic (correct/incorrect answers)
🔨 Requirements:
Create the RGB Color Display:
The page should show an RGB color value in text format (e.g., rgb(123, 45, 67)). That RGB value should correspond to one of several colored squares on the screen.
Generate Multiple Color Options:
Display 6 colored boxes (or more if you want a challenge). Randomly assign a different color to each box. One of the boxes should match the displayed RGB value.
Game Logic:
When the user clicks a box:
- If they clicked the correct color, display a “Correct!” message and change all boxes to that color.
- If they clicked the wrong color, hide the box or change it to a neutral color (like #232323) and display a “Try Again” message.
Reset/Play Again Button:
There should be a button that resets the game with new colors.
💡 Tips:
Use Math.random() to generate RGB values.
Use addEventListener() to handle clicks.
You can store the colors in an array.
Use document.querySelector() or document.getElementById() to manipulate elements.
📁 Project Structure:

rgb-color-game/
│
├── index.html        → Your main HTML file
├── styles.css        → Styling for the game
└── script.js         → All your JavaScript code

🧪 Bonus Challenge (Optional):
Add “Easy” and “Hard” modes that show 3 or 6 colors.
Animate the boxes when guessed correctly.
📦 Submission:
Push your complete project to GitHub and share the link to your repository.
Ensure your repository is public or shared properly.
Your repository should be named in the format: RGB-Game-YourName



Absolutely, Grace! Below is a **personalized step-by-step explanation of your JavaScript code**, showing *why* you used each part and *how* it fits into the overall goal of your RGB color guessing game. This will be perfect for your documentation, a classroom reflection, or even your GitHub README.

---

##  Grace's RGB Color Guessing Game

### JavaScript Breakdown with Purpose

---

### **Selecting Elements from the Page**

```js
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const resetBtn = document.getElementById("reset");
```

 *Why I Used This**:
These are the parts of the game the user interacts with. I needed to get access to:

* The colored squares
* The place where the RGB value is displayed
* The space to show messages ("Correct!" or "Try again!")
* The reset button

This is the foundation for connecting JavaScript to the interface.

---

### **Declaring Game Data**

```js
let colors = [];
let pickedColors;
```

**Why I Used This**:
I used `let` because the values of `colors` and `pickedColors` will change each time the game resets.

* `colors` will hold 6 randomly generated RGB values
* `pickedColors` will store **one** of those colors as the correct answer

---

###  **Initializing the Game**

```js
function init() {
  colors = generateRandomColors(6);
  pickedColors = pickColor();
  colorDisplay.textContent = pickedColors;
  message.textContent = "";
```

 **Why I Used This**:
I created an `init()` function so I could reuse it when the page loads and when the user clicks the reset button.

* It refreshes the color list
* Picks a new target color to guess
* Resets any feedback messages

```js
  squares.forEach((square, i) => {
    square.style.backgroundColor = colors[i];
    square.style.display = "flex";
```
 **Why I Used This**:
This loop applies the newly generated colors to each of the squares so the user has options to pick from.

---

### **Handling Square Clicks**

```js
    square.addEventListener("click", function () {
      const colorPicked = this.style.backgroundColor;
```
**Why I Used This**:
This listens for when a user clicks a square. It saves the clicked color to compare it with the correct color.

```js
      if (colorPicked === pickedColors) {
        message.textContent = "Correct!";
        message.style.color = "green";
        changeColors(pickedColors);
```
 **Why I Used This**:
If the user picks the right color:

* Display "Correct!"
* Change the message to green
* Change all the squares to the correct color for a satisfying visual win!

```js
      } else {
        this.style.backgroundColor = "rgb(149, 201, 149)";
        message.textContent = "Try again!";
        message.style.color = "red";
      }
    });
```
 **Why I Used This**:
If the clicked color is wrong:

* Fade the color so it looks “eliminated”
* Show a red "Try again!" message to encourage retry

---

### **Changing All Squares on Win**

```js
function changeColors(color) {
  squares.forEach(square => square.style.backgroundColor = color);
}
```
**Why I Used This**:
This function makes all boxes match the correct color when the player wins. It’s a cool visual cue to celebrate success.

---

### 6️⃣ **Choosing One Random Color**

```js
function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
```
 **Why I Used This**:
I needed a function to randomly select one of the 6 colors.

* `Math.random()` gives a random number
* `Math.floor()` rounds it down to a valid array index

---

###  **Generating Multiple Random Colors**

```js
function generateRandomColors(num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(randomColor());
  }
  return array;
}

Why I Used This**:
This function builds an array of `num` random RGB color strings (like `"rgb(120, 200, 33)"`).
I used a loop to create each one and store it for use in the game.

---

###  **Creating One Random RGB Color**

```js
function randomColor() {
  const r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
```

🎨 **Why I Used This**:
This creates one RGB color using random red, green, and blue values between 0–255.
I used this in `generateRandomColors()` to fill the game with fresh colors every round.

---

### **Reset Button Functionality**

```js
resetBtn.addEventListener("click", init);
```
**Why I Used This**:
This connects the reset button to my `init()` function, so when the user clicks "New Colors", the whole game refreshes: new colors, new target, and a clean message.

---

### **Run the Game on Page Load**

```js
init();
```

**Why I Used This**:
I called `init()` at the end of the script so that the game starts as soon as the page is loaded, without waiting for a button click.

---

### 💬 Final Thoughts (Optional Summary for Docs)

This project helped me understand how to use JavaScript to control the browser, including:

* DOM manipulation
* Event handling
* Working with arrays and loops
* Random number generation
* Creating functions for reusable logic

It also helped me build user-friendly interaction


