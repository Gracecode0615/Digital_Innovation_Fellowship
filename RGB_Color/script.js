 const squares = document.querySelectorAll(".square");
        const colorDisplay = document.getElementById("colorDisplay")
        const message = document.getElementById("message")
        const resetBtn = document.getElementById("reset");

        let colors = []
        let pickedColors; // // Because at the point of declaring pickedColor, i haven't yet generated the colors array  and pickColor() depends on it.



        function init(){
            colors = generateRandomColors(6);
            pickedColors = pickColor();
            colorDisplay.textContent = pickedColors;
            message.textContent = "";

            squares.forEach((square, i) => {
                square.style.backgroundColor = colors[i];
                square.style.display = "flex";
                square.addEventListener("click",function () {
                    const colorPicked = this.style.backgroundColor;
                    if (colorPicked === pickedColors){
                        message.textContent = "Correct! You're Lucky";
                        message.style.color = "green";
                        changeColors(pickedColors);
                    }else{
                        this.style.backgroundColor = " rgb(149, 201, 149)";
                        message.textContent = "Try Again!, Click on the New colors Button to reset"
                        message.style.color ="red"
                    };
                });
            });
        };

        // setting functions

        function changeColors (color) {
            squares.forEach(square => square.style.backgroundColor = color);
        }

        function pickColor() {
            return colors[Math.floor(Math.random() * colors.length)];
        }


        function generateRandomColors(num) {
            let array = [];

            for (let i = 0; i < num; i++) {
                array.push(randomColor());

            }
            return array;
        }


        function randomColor() {
                const r = Math.floor(Math.random() * 256),
                      g = Math.floor(Math.random() * 256),
                      b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }

        resetBtn.addEventListener("click", init);

        init();

