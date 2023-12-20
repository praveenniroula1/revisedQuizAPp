// const iqQuestions = [
//   {
//     question: "1. What comes next in the sequence: 2, 4, 6, 8, __?",
//     options: ["10", "12", "14", "16"],
//     answer: "10",
//   },
//   {
//     question:
//       "2. If a triangle has three sides with lengths 5, 7, and 10, what type of triangle is it?",
//     options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
//     answer: "Scalene",
//   },
//   {
//     question:
//       "3. If the pattern is square, circle, triangle, square, what comes next?",
//     options: ["Circle", "Square", "Triangle", "Pentagon"],
//     answer: "Circle",
//   },
// ];

// const questionId = document.getElementById("questionId");
// const optionsContainer = document.getElementById("optionsContainer");
// const displayScreen = document.getElementById("display");

// let questionNumber = 0;

// function display() {
//   const currentQuestion = iqQuestions[questionNumber];
//   questionId.textContent = currentQuestion.question;

//   optionsContainer.innerHTML = ""; // Clear previous options

//   currentQuestion.options.forEach((option, index) => {
//     const optionElement = document.createElement("li");
//     optionElement.innerHTML = `
//         <input type="radio" id="${
//           "abcd"[index]
//         }" name="answer" class="answer" />
//         <label for="${"abcd"[index]}">${option}</label>
//       `;
//     optionsContainer.appendChild(optionElement);
//   });
// }

// function questionLoop() {
//   const selectedAnswer = document.querySelector('input[name="answer"]:checked');
//   if (selectedAnswer) {
//     const userAnswer = selectedAnswer.nextElementSibling.textContent;
//     const correctAnswer = iqQuestions[questionNumber].answer;

//     if (userAnswer === correctAnswer) {
//       displayScreen.textContent = "Correct!";
//     } else {
//       displayScreen.textContent = `Incorrect! The correct answer is: ${correctAnswer}`;
//     }

//     questionNumber++;

//     if (questionNumber < iqQuestions.length) {
//       display();
//     } else {
//       displayScreen.textContent = "Quiz completed!";
//     }
//   } else {
//     alert("Please select an answer.");
//   }
// }

// display();
