const question = document.querySelector("#question");
const choices = Array.form(document.querySelectorAll(".choice-text"));
const question = document.querySelector("#question");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What is 2 + 2?",
    choice1: "2",
    choice2: "4",
    choice3: "21",
    choice4: "17",
    answer: 2,
  },
  {
    question: "The tallest building in the world is located in which city?",
    choice1: "Dubai",
    choice2: "New York",
    choice3: "Shanghai",
    choice4: "None of the above",
    answer: 1,
  },
  {
    question:
      "What percent of American adults believe that chocolate milk comes from brown cows?",
    choice1: "20%",
    choice2: "18%",
    choice3: "7%",
    choice4: "33%",
    answer: 3,
  },
  {
    question:
      "Approximately what percent of U.S. power outages are caused by squirrels?",
    choice1: "10-20%",
    choice2: "5-10%",
    choice3: "15-20%",
    choice4: "30%-40%",
    answer: 1,
  },
];
