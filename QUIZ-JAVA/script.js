const questions = [
    {
        question: `<img src="JAVA0.png" height="180" style="display: block; margin: 0px auto 10px auto;">
        What does the following code print`,
        answers: [
            { text: "apple banana cherry", correct: false },
            { text: "apple cherry", correct: true },
            { text: "banana cherry", correct: false },
            { text: "Error", correct: false }
        ]
    },
    {
        question: `<img src="JAVA1.png" height="120"style="display: block; margin: 0px auto 10px auto;">
        What is the output of the following code?`,
        answers: [
            { text: "gram", correct: true },
            { text: "Pro", correct: false },
            { text: "Program", correct: false },
            { text: "ming", correct: false }
        ]
    },
    {
        question: `<img src="JAVA2.png" height="150"style="display: block; margin: 0px auto 10px auto;">
        What will be the output of this code?`,
        answers: [
            { text: "10", correct: false },
            { text: "15", correct: false },
            { text: "20", correct: false },
            { text: "30", correct: true }
        ]
    },
    {
        question: `<img src="JAVA3.png" height="120"style="display: block; margin: 0px auto 10px auto;">
        What is the output of the following this code?`,
        answers: [
            { text: "3", correct: true },
            { text: "5", correct: false },
            { text: "4", correct: false },
            { text: "Error", correct: false }
        ]
    },
    {
        question: `<img src="JAVA4.png" height="180"style="display: block; margin: 0px auto 10px auto;">
        What is the output of the following this code?`,
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: false },
            { text: "12", correct: true },
            { text: "16", correct: false }
        ]
    }
    // {
    //     question: `<img src="Question6.png" height="200"style="display: block; margin: 0px auto 10px auto;">
    //     What is the output of the following C code?`,
    //     answers: [
    //         { text: "4 6 8", correct: false },
    //         { text: "4 5 2", correct: false },
    //         { text: "6 11 16", correct: true },
    //         { text: "6 7 15", correct: false }
    //     ]
    // },
    // {
    //     question: `<img src="Question7.png" height="200"style="display: block; margin: 0px auto 10px auto;">
    //     What is the output of the following C code?`,
    //     answers: [
    //         { text: "10 20 30", correct: false },
    //         { text: "20 20 20", correct: false },
    //         { text: "10 10 10", correct: false },
    //         { text: "30 30 30", correct: true }
    //     ]
    // },
    // {
    //     question: `<img src="Question8.png" height="200"style="display: block; margin: 0px auto 10px auto;">
    //     What is the output of the following C code?`,
    //     answers: [
    //         { text: "1", correct: false },
    //         { text: "0", correct: true },
    //         { text: "Error", correct: false },
    //         { text: "Undefined", correct: false }
    //     ]
    // },
    // {
    //     question: `Why do you Code?`,
    //     answers: [
    //         { text: "You love maths and problem solving", correct: true },
    //         { text: "Dunno why", correct: true },
    //         { text: "To Earn money", correct: true },
    //         { text: "you think you can make game by playing games", correct: true }
    //     ]
    // },
    // {
    //     question: `How was your quiz expeience`,
    //     answers: [
    //         { text: "meh...", correct: true },
    //         { text: "I feel depressed now...", correct: true },
    //         { text: "Easy peazy lemon squeazy", correct: true },
    //         { text: "I want my 1 minute back", correct: true }
    //     ]
    // }
]

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("ansButtons")
const nextButton = document.getElementById("next")

let index = 0;
let score = 0;

function startQuiz() {
    index = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}
function showQuestions() {
    resetState();
    let currentQuestion = questions[index];
    let questionNo = index + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAns)
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAns(e) {
    const selected = e.target;
    const isCorrect = selected.dataset.correct === "true";
    if (isCorrect) {
        selected.classList.add("correct")

        score++;

    } else {
        selected.classList.add("incorrect");
        if (index == 0) {
            document.getElementById("footSOL").innerHTML = "Ans : apple cherry - The continue statement skips the iteration when i is 1, so 'banana' is not printed";
        } else if (index == 1) {
            document.getElementById("footSOL").innerHTML = "Ans : The substring(3, 6) method extracts characters from index 3 to index 5, resulting in 'gram'";
        }
        else if (index == 2) {
            document.getElementById("footSOL").innerHTML = "Ans : The code updates nums[1] by adding nums[3] (20) to it, resulting in 30";
        }
        else if (index == 3) {
            document.getElementById("footSOL").innerHTML = "Ans : The copyOf(arr, 3) method creates a new array containing the first three elements.";
        }
        else if (index == 4) {
            document.getElementById("footSOL").innerHTML = "Ans : The loop doubles each element, so arr[2] becomes 12 (6 * 2)";
        }
        // else if (index == 5) {
        //     document.getElementById("footSOL").innerHTML = "Ans : In the expression c = a++ + ++b, a starts at 5 and is incremented after its value is used, so it contributes 5 to c. The ++b increments b from 10 to 11 before it's added, giving a total of 16 for c. Thus, after execution, a is 6, b is 11, and c is 16";
        // }
        // else if (index == 6) {
        //     document.getElementById("footSOL").innerHTML = "Ans : In the expression a = b = c, the assignment is evaluated from right to left: This means both a and b take on the value of c. The variable c itself remains unchanged throughout this process; it simply provides its value for the assignments. So, after the operation, all three variables end up with the value 30.";
        // }
        // else if (index == 7) {
        //     document.getElementById("footSOL").innerHTML = "Ans : && operator needs both conditions to be true : if Not - the result will be false as in 0";
        // }
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    index++;
    if (index < questions.length) {
        showQuestions();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    document.getElementById("footSOL").innerHTML = "";
    if (index < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
