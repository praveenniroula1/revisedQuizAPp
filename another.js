const quizData = [
  {
    question:
      "What will happen if you are caught cheating on the knowledge test?",
    a: "Nothing, there is no penalty",
    b: "You will never be allowed to take another test.",
    c: "You will not be allowed to take another test for 6 weeks.",
    d: "You'll be taken to the jail",
    correct: "c",
  },
  {
    question:
      "When driving at sunset or dawn on a dark day, what should you do?",
    a: "turn on your lights on low beam",
    b: "Turn on your hazard warning lights",
    c: "Keep your sunglasses on to cut down headlight glare",
    d: "Both A and B",
    correct: "a",
  },
  {
    question:
      "Before driving a long distance at fast speed or carrying a full car load, you should -",
    a: "Check your tyre pressure, and if necessary, increase it to what the manufacturer recommends.",
    b: "Make sure you have a street directory, so you know where you are going.",
    c: "Have a large meal and a cup of coffee.",
    d: "Have a couple of drinks.",
    correct: "a",
  },
  {
    question:
      "What are you required to do if you develop a serious medical condition that could affect your driving?",
    a: "Hand your licence in at the nearest police station.",
    b: "Tell your doctor and let him or her notify ",
    c: "Once you become aware of the condition you must notify Transport For NSW",
    d: "none of the above",
    correct: "c",
  },
  {
    question:
      "Your car registration expires today. You have your car inspected for registration renewal but it fails the inspection. What should you do?",
    a: "Go to the RTA and ask them to renew your registration and tell them you will soon get the car fixed.",
    b: "After today you must not drive the car until it has been repaired, passed another inspection and registered.",
    c: "You have seven days to have the car repaired, after which the RTA considers it to be unregistered.",
    d: "none of the above",
    correct: "b",
  },
  {
    question:
      "You see a broken yellow line painted on the roadway adjacent to the kerb. What does it mean?",
    a: "Clearway restrictions apply - you must not stop during the clearway hours.",
    b: "You may at any time, park along this part of the road for 1 hour only.",
    c: "Bicycle riders must ride along the yellow line.",
    d: "none of the above",
    correct: "a",
  },
  {
    question:
      "Is it an offence to obstruct clear vision of your number plates?",
    a: "Yes, but it is legal for a towbar or bicycle rack to cover the rear number plate.",
    b: "No, you are allowed to cover your number plates if you want to.",
    c: "Yes, at any time.",
    d: "none of the above",
    correct: "c",
  },
  {
    question:
      "If you see a sign indicating road repairs are going on, you should -",
    a: "Slow down and watch for traffic controllers and instructions.",
    b: "Stop immediately and wait for instructions.",
    c: "Both A and B.",
    d: "Maintain the same speed.",
    correct: "a",
  },
  {
    question:
      "You borrow a friend's car and find that the position of the driver's seat puts you sitting a long way from the steering wheel and controls. What should you do?",
    a: "Adjust the seat forward so it's right for you.",
    b: "Put up with the discomfort; you should not adjust another person's seat.",
    c: "Ask your friend for a cushion to place behind your back.",
    d: "Just ignore and keep managing driving",
    correct: "a",
  },
  {
    question:
      "How close can you park to another vehicle when parked parallel to the kerb?",
    a: "You must leave at least 1 metre front and back.",
    b: "You must leave at least 2 metres from the front only.",
    c: "You must leave at least 3 metres front and back.",
    d: "Who cares to measure the distance",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const display = document.getElementById("display");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

const getSelected = () => {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
};

const deselectAnswers = () => {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
};

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      display.innerHTML = ` <h2>Correct, Now Choose one of this!!!</h2>`;
      currentQuiz++;
      score++;
    } else {
      display.innerHTML = ` <h2>InCorrect, Try again!!!</h2>`;
    }

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                  <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                  <button onclick="location.reload()">Reload</button>
              `;
    }
  }
});
