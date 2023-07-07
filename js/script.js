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
        },
        {
            img_src: "5eb7e787471d4.jpg",
            question: "Was ist der berühmteste Film von Tom Hanks?",
            answers: [
                { text: "Forest Pump", correct: false },
                { text: "Forst Gump", correct: false },
                { text: "Forrest Gump", correct: true },
                { text: "Forest Gump", correct: false }
            ]
        },
        {
            img_src: "Blade.jpg",
            question: "Was für eine Wesen ist Blade im gleichnamigen Film?",
            answers: [
                { text: "Halb Mensch, halb Gott", correct: false },
                { text: "Ganz Mensch", correct: false },
                { text: "Halb Mensch, halb Dämon", correct: false },
                { text: "Halb Mensch, halb Vampir", correct: true }
            ]
        },
        {
            img_src: "Bild Schauspieler (3).jpg",
            question: "Wie heißt diese Schauspielerin?",
            answers: [
                { text: "Danielle Rose Russel", correct: true },
                { text: "Emma Watson", correct: false },
                { text: "Zendaya", correct: false },
                { text: "Danielle Campbell", correct: false }
            ]
        },
        {
            img_src: "aaron-paul--sein-tochterchen-kann-jederzeit-kommen-img-690245-0-8-1000x563.jpeg",
            question: "Mit wie vielen Jahren fing Aaron Paul mit dem Schauspielern an?",
            answers: [
                { text: "mit 24 Jahren", correct: false},
                { text: "mit 17 Jahren", correct: true },
                { text: "mit 22", correct: false },
                { text: "mit 19", correct: false }
            ]
        },
        {
            img_src: "Tom Cruise.jpg",
            question: "Durch welchen dieser Filme wurde Tom Cruise bekannt?",
            answers: [
                { text: "Rain Man", correct: false },
                { text: "Mission Impossible ", correct: false },
                { text: "Top Gun", correct: false },
                { text: "Jerry Maguire", correct: true }
            ]
        },
        {
            img_src: "john-cena-das-ist-das-heldenhafteste-was-er-je-getan-hat.jpg",
            question: "Wo wurde John Cena geboren?",
            answers: [
                { text: "West Newbury, Massachusetts", correct: true },
                { text: "Haverfordwest, Pembrokeshire, Wales", correct: false },
                { text: "Boston, Massachusetts", correct: false },
                { text: "Washington, D.C.", correct: false }
            ]
        },
        {
            img_src: "olivia-rodrigo.jpg",
            question: "Wie groß ist Olivia Rodrigo?",
            answers: [
                { text: "1,65m", correct: true },
                { text: "1,58m", correct: false },
                { text: "1,73m", correct: false },
                { text: "1,49m", correct: false }
            ]
        },
        {
            img_src: "walt-disney.jpg",
            question: "Wann ist walt Disney gestorben?",
            answers: [
                { text: "30. April 1945", correct: false },
                { text: "15. Dezember 1966", correct: true },
                { text: "Gar nicht", correct: false },
                { text: "31.August.1999", correct: false }
            ]
        },
        {
            img_src: "MV5BMTkxMzk2MDkwOV5BMl5BanBnXkFtZTcwMDAxODQwMg@@._V1_.jpg",
            question: "Wie alt ist Jason Statham?",
            answers: [
                { text: "50 Jahre", correct: false },
                { text: "45 Jahre", correct: false },
                { text: "55 Jahre", correct: true },
                { text: "53 Jahre", correct: false }
            ]
        },
        {
            img_src: "robert.png",
            question: "In wie vielen Filmen hat Robert Downey Jr. mitgespielt?",
            answers: [
                { text: "102", correct: false },
                { text: "13", correct: false },
                { text: "29", correct: false },
                { text: "83", correct: true }
            ]
        },
        {
            img_src: "ChrisHemsworth.jpg",
            question: "In welchem Film/welcher TV-Serie trat Chris Hemsworth erstmals auf?",
            answers: [
                { text: "Guinevere Jones", correct: true },
                { text: "Tyler Rake: Extraction", correct: false },
                { text: "Bad Times at the El Royale", correct: false },
                { text: "Star Trek – Next Generation", correct: false }
            ]
        },
        {
            img_src: "Rambo.jpg",
            question: "Wer spielt Rambo im gleichnamigen Film?",
            answers: [
                { text: "Arnold Schwarzenegger", correct: false },
                { text: "Tom Hanks", correct: false },
                { text: "Sylvester Stallone", correct: true },
                { text: "Brad Pitt", correct: false }
            ]
        },
        {
            img_src: "Minion.png",
            question: "Wie heißt er?",
            answers: [
                { text: "Gru", correct: false },
                { text: "Mark", correct: false },
                { text: "Kevin", correct: true },
                { text: "Guido", correct: false }
            ]
        },
        {
            img_src: "ArnoldSchwarzenegger.jpg",
            question: "Arnold Schwarzenegger ist ehemaliger G8ouverneur von welchem US-Bundesstaat?",
            answers: [
                { text: "Kalifornien", correct: true },
                { text: "Colorado", correct: false },
                { text: "Arkansas", correct: false },
                { text: "Arizona", correct: false }
            ]
        },
        {
            img_src: "Til_Schweigerjpg.jpg",
            question: "Wo wurde Til Schweiger geboren?",
            answers: [
                { text: "Berlin", correct: false },
                { text: "Köln", correct: false },
                { text: "Freiburg", correct: true },
                { text: "Ingolstadt", correct: false }
            ]
        },
        {
            img_src: "2265ccc3e85215843e55f38b5a7cdaf5,8321f2dd.jpg",
            question: "Wann wurde Robert Downey jr geboren?",
            answers: [
                { text: "04. April 1965", correct: true },
                { text: "22. März 1972", correct: false },
                { text: "29. 02 1968", correct: false },
                { text: "20. April 2024", correct: false }
            ]
        },
        {
            img_src: "Leon.jpg",
            question: "Was ist Leon?",
            answers: [
                { text: "der Lehrer", correct: false },
                { text: "der Profi", correct: true},
                { text: "der Klempner", correct: false},
                { text: "der Böse", correct: false}
            ]
        },
        {
            img_src: "3918779.webp",
            question: "Welcher Schauspieler hat die meisten Oscars gewonnen?",
            answers: [
                { text: "Jackie Chan", corret: false},
                { text: "Vin Diesel", correct: false},
                { text: "Robert Downey Jr", correct: true},
                { text: "Bruce Willis", correct: false}
            ]
        },
        {
            img_src: "c41d1b0ee3d968f0fef927a445_YyAxMzkweDc4Mis5NiszAnJlIDE5MjAgMTA4MANjMmNkMDM2MGY3NA==.jpg",
            question: "Welcher dieser Schauspieler spielten alle den selben Charakter ?",
            answers: [
                { text: "Andrew Garfield; Tobey Maguire; Tom Holland", correct: true },
                { text: "Tom Holland; Robert Downey; Chadwick Boseman", correct: false },
                { text: "Zendaya; Chris Hemsworth; Jarent Leto", correct: false },
                { text: "Ryan Gosling; Bruce Willis; Emma Watson", correct: false }
            ]
        },
        {
            img_src: "5eb7e787471d4.jpg",
            question: "Was ist der berühmteste Film von Tom Hanks??",
            answers: [
                { text: "Forest Pump", correct: false },
                { text: "Forst Gump", correct: false },
                { text: "Forrest Gump", correct: true },
                { text: "Forest Gump", correct: false }
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