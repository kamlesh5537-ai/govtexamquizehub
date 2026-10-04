// =========================================
// EXAMQUIZHUB - SCRIPT.JS
// =========================================


// =========================================
// EXAM CONFIGURATION
// =========================================

const examData = {

    SSC_CGL: {
        name: "SSC CGL",
        questions: 10,
        time: 15
    },

    SSC_CHSL: {
        name: "SSC CHSL",
        questions: 10,
        time: 15
    },
CHSL_TIER_1: {
    name: "SSC CHSL Tier-I",
    questions: 10,
    time: 15
},

CHSL_TIER_2: {
    name: "SSC CHSL Tier-II",
    questions: 10,
    time: 15
},

    SSC_MTS: {
        name: "SSC MTS",
        questions: 10,
        time: 15
    },

    SSC_GD: {
        name: "SSC GD",
        questions: 10,
        time: 15
    },

    SSC_CPO: {
        name: "SSC CPO",
        questions: 10,
        time: 15
    },

    SSC_JE: {
        name: "SSC JE",
        questions: 10,
        time: 15
    },

    SSC_STENO: {
        name: "SSC Stenographer",
        questions: 10,
        time: 15
    },

    SSC_SELECTION_POST: {
        name: "SSC Selection Post",
        questions: 10,
        time: 15
    }

};


// =========================================
// VARIABLES
// =========================================

let selectedCategory = "";
let selectedExam = "";

let questions = [];
let currentQuestion = 0;

let answers = [];

let timeLeft = 0;
let timer = null;


// =========================================
// QUESTION BANK
// =========================================

const questionBank = {

    SSC_CGL: [

        {
            q: "भारत का संविधान कब लागू हुआ?",
            options: [
                "15 अगस्त 1947",
                "26 जनवरी 1950",
                "26 नवंबर 1949",
                "2 अक्टूबर 1950"
            ],
            answer: 1
        },

        {
            q: "भारत की राजधानी क्या है?",
            options: [
                "मुंबई",
                "नई दिल्ली",
                "कोलकाता",
                "चेन्नई"
            ],
            answer: 1
        },

        {
            q: "भारत का राष्ट्रीय पशु कौन सा है?",
            options: [
                "सिंह",
                "बाघ",
                "हाथी",
                "गैंडा"
            ],
            answer: 1
        },

        {
            q: "भारत का राष्ट्रीय पक्षी कौन सा है?",
            options: [
                "तोता",
                "मोर",
                "हंस",
                "गरुड़"
            ],
            answer: 1
        },

        {
            q: "जल का रासायनिक सूत्र क्या है?",
            options: [
                "CO₂",
                "O₂",
                "H₂O",
                "NaCl"
            ],
            answer: 2
        },

        {
            q: "पृथ्वी का सबसे बड़ा महासागर कौन सा है?",
            options: [
                "अटलांटिक",
                "हिंद",
                "प्रशांत",
                "आर्कटिक"
            ],
            answer: 2
        },

        {
            q: "सूर्य के सबसे निकट कौन सा ग्रह है?",
            options: [
                "शुक्र",
                "पृथ्वी",
                "बुध",
                "मंगल"
            ],
            answer: 2
        },

        {
            q: "बल की SI इकाई क्या है?",
            options: [
                "जूल",
                "वाट",
                "न्यूटन",
                "पास्कल"
            ],
            answer: 2
        },

        {
            q: "RBI की स्थापना किस वर्ष हुई?",
            options: [
                "1930",
                "1935",
                "1947",
                "1950"
            ],
            answer: 1
        },

        {
            q: "कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
            options: [
                "RAM",
                "हार्ड डिस्क",
                "CPU",
                "कीबोर्ड"
            ],
            answer: 2
        }

    ]

};


// =========================================
// CATEGORY SELECT
// =========================================

function selectCategory(category) {

    selectedCategory = category;

    // सभी sections hide
    document.getElementById("sscSection").style.display = "none";
    document.getElementById("examInfo").style.display = "none";
    document.getElementById("quizBox").style.display = "none";
    document.getElementById("resultBox").style.display = "none";

    // SSC select होने पर SSC exams दिखाएं
    if (category === "SSC") {

        document.getElementById("sscSection")
            .style.display = "block";

        document.getElementById("sscSection")
            .scrollIntoView({
                behavior: "smooth"
            });

    } else {

        alert(
            category +
            " के questions अभी उपलब्ध नहीं हैं।"
        );

    }

}

// =========================================
// SSC EXAM SELECT
// =========================================

function selectExam(exam) {

    selectedExam = exam;


    // =====================================
    // SSC CGL
    // =====================================

    if (exam === "SSC_CGL") {
        
        document.getElementById("chslTierSection")
    .style.display = "none";

        // बाकी sections hide
        document.getElementById("sscSection")
            .style.display = "none";

        document.getElementById("examInfo")
            .style.display = "none";

        document.getElementById("quizBox")
            .style.display = "none";

        document.getElementById("resultBox")
            .style.display = "none";

        document.querySelector(".welcome-box")
            .style.display = "none";

        // Tier section show
        document.getElementById("cglTierSection")
            .style.display = "block";


        // Tier section तक जाएं
        document.getElementById("cglTierSection")
            .scrollIntoView({
                behavior: "smooth"
            });

        return;
    }
// =====================================
// SSC CHSL
// =====================================

// =====================================
// SSC CHSL
// =====================================

if (exam === "SSC_CHSL") {

    // पहले बाकी sections hide करें
    document.getElementById("sscSection")
        .style.display = "none";

    document.getElementById("examInfo")
        .style.display = "none";

    document.getElementById("quizBox")
        .style.display = "none";

    document.getElementById("resultBox")
        .style.display = "none";

    document.getElementById("cglTierSection")
        .style.display = "none";


    // CHSL Tier section दिखाएं
    document.getElementById("chslTierSection")
        .style.display = "block";


    // CHSL Tier तक जाएं
    document.getElementById("chslTierSection")
        .scrollIntoView({
            behavior: "smooth"
        });

    return;
}



    // =====================================
    // OTHER SSC EXAMS
    // =====================================

    const data = examData[exam];

    if (!data) {

        alert("Exam data उपलब्ध नहीं है।");

        return;
    }


    document.getElementById("sscSection")
        .style.display = "none";


    document.getElementById("cglTierSection")
        .style.display = "none";


    document.getElementById("examInfo")
        .style.display = "block";


    document.getElementById("selectedExamName")
        .innerText = data.name;


    document.getElementById("examQuestionCount")
        .innerText = data.questions;


    document.getElementById("examTime")
        .innerText =
        data.time + " मिनट";


    document.getElementById("examInfo")
        .scrollIntoView({
            behavior: "smooth"
        });

}



// =========================================
// LOAD QUESTIONS
// =========================================

function loadQuestions() {

    const data = questionBank[selectedExam];

    if (!data) {

        alert(
            "इस Exam के questions अभी उपलब्ध नहीं हैं।"
        );

        return false;
    }

    questions = [...data];

    return true;
}


// =========================================
// START QUIZ
// =========================================

function startQuiz() {

    const data = examData[selectedExam];

    if (!data) {

        alert("पहले Exam चुनें!");

        return;
    }

    if (!loadQuestions()) {
        return;
    }

    currentQuestion = 0;

    timeLeft = data.time * 60;

    answers = new Array(questions.length)
        .fill(null);

    document.getElementById("examInfo")
        .style.display = "none";

    document.getElementById("quizBox")
        .style.display = "block";

    document.getElementById("resultBox")
        .style.display = "none";

    document.getElementById("totalQuestions")
        .innerText = questions.length;

    createQuestionPalette();

    showQuestion();

    startTimer();

    document.getElementById("quizBox")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// =========================================
// TIMER
// =========================================

function startTimer() {

    clearInterval(timer);

    updateTimer();

    timer = setInterval(function() {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timer);

            alert("⏰ समय समाप्त हो गया!");

            submitQuiz();

        }

    }, 1000);

}


// =========================================
// UPDATE TIMER
// =========================================

function updateTimer() {

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    document.getElementById("time")
        .innerText =
        String(minutes).padStart(2, "0")
        + ":"
        + String(seconds).padStart(2, "0");

}


// =========================================
// SHOW QUESTION
// =========================================

function showQuestion() {

    const data =
        questions[currentQuestion];

    if (!data) {
        return;
    }

    document.getElementById("currentQuestion")
        .innerText =
        currentQuestion + 1;

    document.getElementById("question")
        .innerText =
        data.q;

    const optionsBox =
        document.getElementById("options");

    optionsBox.innerHTML = "";

    data.options.forEach(function(option, index) {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className = "option";

        button.innerText = option;

        if (
            answers[currentQuestion] === index
        ) {

            button.classList.add("selected");

        }

        button.onclick = function() {

            selectAnswer(index);

        };

        optionsBox.appendChild(button);

    });

    updateNavigation();

    updatePalette();

    updateProgress();

}


// =========================================
// SELECT ANSWER
// =========================================

function selectAnswer(index) {

    answers[currentQuestion] = index;

    showQuestion();

}


// =========================================
// QUESTION PALETTE
// =========================================

function createQuestionPalette() {

    const palette =
        document.getElementById(
            "questionPalette"
        );

    palette.innerHTML = "";

    for (
        let i = 0;
        i < questions.length;
        i++
    ) {

        const button =
            document.createElement("button");

        button.type = "button";

        button.innerText = i + 1;

        button.className =
            "palette-btn";

        button.onclick = function() {

            currentQuestion = i;

            showQuestion();

        };

        palette.appendChild(button);

    }

    updatePalette();

}


// =========================================
// UPDATE PALETTE
// =========================================

function updatePalette() {

    const buttons =
        document.querySelectorAll(
            ".palette-btn"
        );

    buttons.forEach(function(button, index) {

        button.classList.remove(
            "attempted",
            "current"
        );

        if (answers[index] !== null) {

            button.classList.add(
                "attempted"
            );

        }

        if (index === currentQuestion) {

            button.classList.add(
                "current"
            );

        }

    });

    updateCounts();

}


// =========================================
// UPDATE ATTEMPTED COUNTS
// =========================================

function updateCounts() {

    let attempted = 0;

    answers.forEach(function(answer) {

        if (answer !== null) {
            attempted++;
        }

    });

    const notAttempted =
        questions.length - attempted;

    document.getElementById(
        "topAttemptedCount"
    ).innerText = attempted;

    document.getElementById(
        "topNotAttemptedCount"
    ).innerText = notAttempted;

    document.getElementById(
        "currentStatus"
    ).innerText =
        currentQuestion + 1;

}


// =========================================
// PROGRESS BAR
// =========================================

function updateProgress() {

    if (questions.length === 0) {
        return;
    }

    const progress =
        ((currentQuestion + 1) /
        questions.length) * 100;

    document.getElementById("progress")
        .style.width =
        progress + "%";

}


// =========================================
// PREVIOUS QUESTION
// =========================================

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

}


// =========================================
// NEXT QUESTION
// =========================================

function nextQuestion() {

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        showQuestion();

    }

}


// =========================================
// NAVIGATION BUTTONS
// =========================================

function updateNavigation() {

    const previous =
        document.getElementById(
            "previousBtn"
        );

    const next =
        document.getElementById(
            "nextBtn"
        );

    previous.disabled =
        currentQuestion === 0;

    next.disabled =
        currentQuestion ===
        questions.length - 1;

}


// =========================================
// SUBMIT QUIZ
// =========================================

function submitQuiz() {

    clearInterval(timer);

    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    answers.forEach(function(answer, index) {

        if (answer === null) {

            unattempted++;

        } else if (
            answer === questions[index].answer
        ) {

            correct++;

        } else {

            wrong++;

        }

    });

    // +1 correct
    // -0.25 wrong
    // 0 unattempted

    const score =
        correct -
        (wrong * 0.25);

    const total =
        questions.length;

    const percentage =
        (score / total) * 100;

    document.getElementById("quizBox")
        .style.display = "none";

    document.getElementById("resultBox")
        .style.display = "block";

    document.getElementById("score")
        .innerHTML = `

            <div class="score-number">
                ${score.toFixed(2)}
            </div>

            <div class="result-item">
                📚 Total Questions:
                <strong>${total}</strong>
            </div>

            <div class="result-item correct-result">
                ✅ Correct:
                <strong>${correct}</strong>
            </div>

            <div class="result-item wrong-result">
                ❌ Wrong:
                <strong>${wrong}</strong>
            </div>

            <div class="result-item">
                ⚪ Not Attempted:
                <strong>${unattempted}</strong>
            </div>

            <div class="result-item">
                📊 Percentage:
                <strong>${percentage.toFixed(2)}%</strong>
            </div>

        `;

    document.getElementById("resultBox")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// =========================================
// RESTART QUIZ
// =========================================

function restartQuiz() {

    document.getElementById("resultBox")
        .style.display = "none";

    startQuiz();

}


// =========================================
// GO HOME
// =========================================

function goHome() {

    clearInterval(timer);

    selectedCategory = "";
    selectedExam = "";

    questions = [];
    answers = [];

    currentQuestion = 0;
    timeLeft = 0;

    document.getElementById("sscSection")
        .style.display = "none";

    document.getElementById("examInfo")
        .style.display = "none";

    document.getElementById("quizBox")
        .style.display = "none";

    document.getElementById("resultBox")
        .style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
// =========================================
// SSC CGL TIER SELECT
// =========================================

function selectTier(tier) {

    if (tier === "CGL_TIER_1") {

        alert("SSC CGL Tier-I Mock Test");

    }

    if (tier === "CGL_TIER_2") {

        alert("SSC CGL Tier-II Mock Test");

    }

}
// =========================================
// SSC CHSL TIER SELECT
// =========================================

function selectCHSLTier(tier) {

    document.getElementById("sscSection")
        .style.display = "none";

    document.getElementById("cglTierSection")
        .style.display = "none";

    document.getElementById("chslTierSection")
        .style.display = "none";

    document.getElementById("examInfo")
        .style.display = "none";

    document.getElementById("quizBox")
        .style.display = "none";

    document.getElementById("resultBox")
        .style.display = "none";


    const welcomeBox =
        document.querySelector(".welcome-box");

    if (welcomeBox) {
        welcomeBox.style.display = "none";
    }


    if (tier === "CHSL_TIER_1") {

        selectedExam = "CHSL_TIER_1";

    }

    if (tier === "CHSL_TIER_2") {

        selectedExam = "CHSL_TIER_2";

    }


    const data = examData[selectedExam];

    if (!data) {

        alert("CHSL Tier data उपलब्ध नहीं है।");

        return;
    }


    document.getElementById("selectedExamName")
        .innerText = data.name;

    document.getElementById("examQuestionCount")
        .innerText = data.questions;

    document.getElementById("examTime")
        .innerText = data.time + " मिनट";


    document.getElementById("examInfo")
        .style.display = "block";


    document.getElementById("examInfo")
        .scrollIntoView({
            behavior: "smooth"
        });

}
