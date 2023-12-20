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

const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let questionNumber = 0;

const loadQuiz = () => {
  question.innerHTML = iqQuestions[questionNumber].question;
  a_text.innerHTML = iqQuestions[questionNumber].options[0];
  b_text.innerHTML = iqQuestions[questionNumber].options[1];
  c_text.innerHTML = iqQuestions[questionNumber].options[2];
  d_text.innerHTML = iqQuestions[questionNumber].options[3];
};
loadQuiz();

const questionChange = () => {
  questionNumber++;
  loadQuiz();
};

const selected = () => {
  let selectedAnswer = "";

  const inputs = document.querySelectorAll(".answer");
  inputs.forEach((input) => {
    if (input.checked) {
      selectedAnswer = input.id;
    }
  });

  return selectedAnswer;
};

const display = document.getElementById("display");
const button = document.getElementById("submit");
button.addEventListener("click", (selectedAnswer) => {
  if (selectedAnswer == iqQuestions[questionNumber].answer) {
    display.innerHTML = `You have selected right answer `;
  } else {
    display.innerHTML = `You have selected wrong answer.`;
  }
});
