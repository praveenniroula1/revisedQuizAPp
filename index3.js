const iqQuestions = [
  {
    question: "1. What comes next in the sequence: 2, 4, 6, 8, __?",
    options: ["10", "12", "14", "16"],
    answer: "10",
  },
  {
    question:
      "2. If a triangle has three sides with lengths 5, 7, and 10, what type of triangle is it?",
    options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
    answer: "Scalene",
  },
  {
    question:
      "3. If the pattern is square, circle, triangle, square, what comes next?",
    options: ["Circle", "Square", "Triangle", "Pentagon"],
    answer: "Circle",
  },
];

const questionId = document.getElementById("questionId");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const displayScreen = document.getElementById("display");

let questionNumber = 0;

const display = () => {
  questionId.innerHTML = iqQuestions[questionNumber].question;
  a_text.innerHTML = iqQuestions[questionNumber].options[0];
  b_text.innerHTML = iqQuestions[questionNumber].options[1];
  c_text.innerHTML = iqQuestions[questionNumber].options[2];
  d_text.innerHTML = iqQuestions[questionNumber].options[3];
};
const questionLoop = () => {
  questionNumber++;
  if (questionNumber < iqQuestions.length) {
    display();
  }
};

// const answer = () => {
//   const selectedInput = document.querySelector("input[name='answer']:checked");

//   if (selectedInput) {
//     const selectedValue = selectedInput.value;
//     const correctAnswer = iqQuestions[questionNumber].answer;

//     if (selectedValue === correctAnswer) {
//       console.log("You're right!");
//     } else {
//       console.log("Sorry, wrong answer.");
//     }
//   } else {
//     console.log("Please select an answer.");
//   }
// };
const answer = () => {
  const selectedInput = document.querySelector(
    "input[name='answer']:checked + label"
  );

  if (selectedInput) {
    const correctAnswer = iqQuestions[questionNumber].answer;

    if (selectedInput.textContent === correctAnswer) {
      displayScreen.innerHTML = `You are correct. ${correctAnswer}`;
    } else {
      displayScreen.innerHTML = `Sorry, wrong answer. ${correctAnswer} is correct`;
    }
  } else {
    console.log("Please select an answer.");
  }
  const selectedInput2 = selectedInput.reset();
  selectedInput = selectedInput2;
};

display();
