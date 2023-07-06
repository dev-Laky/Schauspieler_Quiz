// Encapsulate your code within a closure
(function () {

    const questions = [
        {
            img_src: "john-wick.jpg",
            question: "Wie heißt der gezeigte Schauspieler?",
            answers: [
                { text: "Keanu Reeves", correct: true },
                { text: "Donnie Yen", correct: false },
                { text: "Bill Skarsgård", correct: false },
                { text: "Laurence Fishburne", correct: false }
            ]
        },
        {
            img_src: "dwayne-johnson.png",
            question: "Wie heißt der gezeigte Schauspieler?",
            answers: [
                { text: "Keanu Reeves", correct: false },
                { text: "Donnie Yen", correct: false },
                { text: "Dwayne Johnson", correct: true },
                { text: "Laurence Fishburne", correct: false }
            ]
        }
    ];


    const btn1 = document.getElementById('btn-1');
    const btn2 = document.getElementById('btn-2');
    const btn3 = document.getElementById('btn-3');
    const btn4 = document.getElementById('btn-4');
    const nextButton = document.getElementById('next-btn');

    const quizImage = document.getElementById('quiz-image');
    const questionText = document.getElementById('question-text');
    const questionCount = document.getElementById('question-count');
    const nextDiv = document.getElementById('next-div');

    const optionRow = document.getElementById('option-row');

    let currentQuestionIndex = 0;
    let currentQuestion;
    let correctIndex = -1;
    let correctButton;
    let score = 0;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;

        // Enable all buttons for the next question
        btn1.disabled = false;
        btn2.disabled = false;
        btn3.disabled = false;
        btn4.disabled = false;

        nextButton.disabled = true;
        nextDiv.classList.add('d-none');
        showQuestion();
    }

    function showQuestion() {
        currentQuestion = questions[currentQuestionIndex];
        let questionNumber = currentQuestionIndex + 1;
        questionCount.innerHTML = `Frage ${questionNumber}`;
        questionText.innerHTML = currentQuestion.question;
        quizImage.src = `public/img/${currentQuestion.img_src}`;

        let answerIndex = 1;
        currentQuestion.answers.forEach(answer => {
            if (answer.correct === true) {
                correctIndex = answerIndex;
            }
            const btn = document.getElementById(`btn-${answerIndex}`);
            btn.value = answer.text;
            answerIndex++;
        });

        // Add event listeners to the buttons
        btn1.addEventListener('click', handleButtonClick);
        btn2.addEventListener('click', handleButtonClick);
        btn3.addEventListener('click', handleButtonClick);
        btn4.addEventListener('click', handleButtonClick);

        correctButton = document.getElementById(`btn-${correctIndex}`);

        // Event handler for button click
        function handleButtonClick(event) {

            // remove event listeners from the buttons
            btn1.removeEventListener('click', handleButtonClick);
            btn2.removeEventListener('click', handleButtonClick);
            btn3.removeEventListener('click', handleButtonClick);
            btn4.removeEventListener('click', handleButtonClick);

            // Disable all buttons
            btn1.disabled = true;
            btn2.disabled = true;
            btn3.disabled = true;
            btn4.disabled = true;

            // Enable the next button
            nextButton.disabled = false;

            // Get the clicked button element
            const clickedButton = event.target;

            // Do something with the clicked button
            // console.log(`Button ${clickedButton.id} was clicked.`);

            const buttonNumber = parseInt(clickedButton.id.split('-')[1], 10);

            if (buttonNumber === correctIndex) {
                score++;

                // Replace the color of the clicked button
                clickedButton.classList.remove('btn-primary'); // Remove the current color class
                clickedButton.classList.add('btn-success'); // Add the new color class

            } else {

                // Replace the color of the clicked button
                clickedButton.classList.remove('btn-primary'); // Remove the current color class
                clickedButton.classList.add('btn-danger'); // Add the new color class

                // show correct answer
                correctButton.classList.remove('btn-primary');
                correctButton.classList.add('btn-success');

            }

            // Show the next button
            nextDiv.classList.remove('d-none');

            nextButton.addEventListener('click', nextButtonClick);

            function nextButtonClick(event) {

                // remove event listeners from the next button
                nextButton.removeEventListener('click', nextButtonClick);

                // reset correct button
                correctButton.classList.remove('btn-success');
                correctButton.classList.add('btn-primary');

                // reset clicked button
                clickedButton.classList.remove('btn-danger');
                clickedButton.classList.remove('btn-success');
                clickedButton.classList.add('btn-primary');

                if (currentQuestionIndex < questions.length - 1) {
                    nextQuestion();
                } else {
                    showScore();
                }
            }
        }
    }

    function nextQuestion() {
        currentQuestionIndex++;

        // Enable all buttons for the next question
        btn1.disabled = false;
        btn2.disabled = false;
        btn3.disabled = false;
        btn4.disabled = false;

        // Disable the next button until the next answer is selected
        nextButton.disabled = true;
        nextDiv.classList.add('d-none');

        showQuestion();
    }

    function showScore() {

        optionRow.classList.add('d-none');

        questionCount.innerHTML = `Ergebnis`;
        questionText.innerHTML = `Du hast ${score} von ${questions.length} Fragen richtig.`;
        quizImage.src = 'public/img/finish.gif';

        nextDiv.classList.remove('d-none');
        nextButton.classList.remove('d-none');
        nextButton.disabled = false;

        nextButton.value = 'Neustart';
        nextButton.classList.remove('btn-light');
        nextButton.classList.add('btn-warning');

        nextButton.addEventListener('click', restartButtonClick);

        function restartButtonClick(event) {

            nextButton.removeEventListener('click', restartButtonClick);

            optionRow.classList.remove('d-none');

            nextButton.value = 'Weiter';
            nextButton.classList.remove('btn-warning');
            nextButton.classList.add('btn-light');

            startQuiz();
        }
    }

    startQuiz();

})();