const questions = [
  {
    type: "choice",
    question: "Was macht ein Forscher zuerst?",
    icon: "🔎",
    answers: ["Er vermutet.", "Er ruft laut.", "Er räumt sofort auf."],
    answerIcons: ["💭", "📣", "🧹"],
    correct: 0,
    correctFeedback: "Genau. Forscher vermuten zuerst.",
    wrongFeedback: "Noch nicht. Erst überlegen wir, was passieren könnte."
  },
  {
    type: "choice",
    question: "Was sinkt meistens im Wasser?",
    icon: "💧",
    answers: ["Stein", "Korken", "Blatt"],
    answerIcons: ["🪨", "🟤", "🍃"],
    correct: 0,
    correctFeedback: "Richtig. Ein Stein sinkt meistens.",
    wrongFeedback: "Schau genau: Korken und Blätter bleiben oft oben."
  },
  {
    type: "choice",
    question: "Was schwimmt meistens?",
    icon: "💧",
    answers: ["Münze", "Löffel", "Korken"],
    answerIcons: ["🪙", "🥄", "🟤"],
    correct: 2,
    correctFeedback: "Ja. Ein Korken schwimmt meistens.",
    wrongFeedback: "Fast. Münzen und Löffel sinken meistens."
  },
  {
    type: "truefalse",
    question: "Alles, was schwer ist, sinkt immer.",
    icon: "🚢",
    answers: ["Wahr", "Falsch"],
    answerIcons: ["👍", "👎"],
    correct: 1,
    correctFeedback: "Genau. Ein großes Schiff ist schwer und schwimmt trotzdem.",
    wrongFeedback: "Denk an ein Schiff. Es ist schwer und kann trotzdem schwimmen."
  },
  {
    type: "choice",
    question: "Warum kann eine Knete-Schale schwimmen?",
    icon: "🧱",
    answers: ["Weil sie eine andere Farbe hat.", "Weil ihre Form besser ist.", "Weil sie leichter geworden ist."],
    answerIcons: ["🎨", "clay-bowl", "🪶"],
    correct: 1,
    correctFeedback: "Super. Die Form ist wichtig.",
    wrongFeedback: "Die Knete ist nicht leichter. Aber die Form verändert sich."
  },
  {
    type: "symbol",
    question: "Welche Form schwimmt am besten?",
    icon: "🧱",
    answers: ["Knetkugel", "flache Knete", "Knete-Schale"],
    visualType: "clay-shapes",
    answerIcons: ["clay-ball", "clay-flat", "clay-bowl"],
    correct: 2,
    correctFeedback: "Genau. Eine Schale kann Wasser verdrängen und Luft enthalten.",
    wrongFeedback: "Eine runde Kugel sinkt oft. Eine Schale ist besser."
  },
  {
    type: "choice",
    question: "Was hilft einem Boot beim Schwimmen?",
    icon: "🛶",
    answers: ["Luft im Boot", "Sand im Boot", "ein Loch im Boot"],
    answerIcons: ["💨", "🏖️", "🕳️"],
    correct: 0,
    correctFeedback: "Richtig. Luft ist leicht und hilft beim Schwimmen.",
    wrongFeedback: "Ein Loch oder Sand machen ein Boot schwerer."
  },
  {
    type: "choice",
    question: "Was passiert, wenn Wasser in ein Boot läuft?",
    icon: "💧",
    answers: ["Das Boot wird leichter.", "Das Boot kann schwerer werden und sinken.", "Das Boot fliegt weg."],
    answerIcons: ["🪶", "💧", "🚀"],
    correct: 1,
    correctFeedback: "Genau. Wasser im Boot kann gefährlich werden.",
    wrongFeedback: "Wenn Wasser hineinkommt, wird das Boot schwerer."
  },
  {
    type: "choice",
    question: "Welches Alufolien-Boot trägt meist viele Steine?",
    icon: "🛶",
    answers: ["schmales Boot ohne Rand", "breites Boot mit Rand", "flache Folie ohne Rand"],
    answerIcons: ["➖", "🛶", "⬜"],
    correct: 1,
    correctFeedback: "Sehr gut. Breit und mit Rand ist stabiler.",
    wrongFeedback: "Ein gutes Boot ist breit und hat einen Rand."
  },
  {
    type: "order",
    question: "Bringe den Forscherweg in die richtige Reihenfolge.",
    icon: "🔎",
    answers: ["Ich beobachte.", "Ich vermute.", "Ich teste.", "Ich erkläre."],
    correct: [1, 2, 0, 3],
    correctFeedback: "Perfekt. So arbeiten Forscherinnen und Forscher.",
    wrongFeedback: "Fast. Erst vermuten, dann testen."
  },
  {
    type: "match",
    question: "Was passt zusammen?",
    icon: "🔗",
    pairs: [
      { left: "Stein", right: "sinkt meistens", icon: "🪨" },
      { left: "Korken", right: "schwimmt meistens", icon: "🟤" },
      { left: "Boot mit Loch", right: "kann sinken", icon: "🕳️" },
      { left: "breites Boot mit Rand", right: "trägt besser", icon: "🛶" }
    ],
    correctFeedback: "Prima zugeordnet!",
    wrongFeedback: "Schau noch einmal: Was bleibt oben? Was geht unter?"
  },
  {
    type: "choice",
    question: "Warum schwimmen große Schiffe?",
    icon: "🚢",
    answers: ["Weil sie innen Luft haben und viel Wasser verdrängen.", "Weil sie aus Papier sind.", "Weil sie keine Ladung tragen."],
    answerIcons: ["💨", "📄", "📦"],
    correct: 0,
    correctFeedback: "Genau. Form, Luft und Auftrieb helfen dem Schiff.",
    wrongFeedback: "Schiffe sind schwer. Aber ihre Form und die Luft helfen ihnen."
  }
];

const screens = {
  start: document.querySelector("#start-screen"),
  knowledge: document.querySelector("#knowledge-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen")
};

const questionTitle = document.querySelector("#question-title");
const answerArea = document.querySelector("#answer-area");
const feedbackWindow = document.querySelector("#feedback-window");
const feedbackBox = document.querySelector("#feedback-box");
const feedbackFace = document.querySelector("#feedback-face");
const feedbackTitle = document.querySelector("#feedback-title");
const feedbackText = document.querySelector("#feedback-text");
const nextButton = document.querySelector("#next-button");
const speakButton = document.querySelector("#speak-button");
const progressText = document.querySelector("#progress-text");
const progressFill = document.querySelector("#progress-fill");
const pointsPill = document.querySelector("#points-pill");
const scoreLine = document.querySelector("#score-line");
const scoreFeedback = document.querySelector("#score-feedback");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let orderSelection = [];
let activeMatchLeft = null;
let matchAnswers = {};
let retryCurrentQuestion = false;

document.addEventListener("click", (event) => {
  const action = event.target.dataset.action;
  if (!action) {
    return;
  }

  if (action === "start-quiz" || action === "restart-quiz") {
    startQuiz();
  }

  if (action === "show-knowledge") {
    stopReading();
    showScreen("knowledge");
  }

  if (action === "show-start") {
    stopReading();
    showScreen("start");
  }
});

nextButton.addEventListener("click", () => {
  stopReading();
  closeFeedbackWindow();
  if (retryCurrentQuestion) {
    retryCurrentQuestion = false;
    renderQuestion();
    return;
  }

  if (currentQuestionIndex === questions.length - 1) {
    showResult();
    return;
  }

  currentQuestionIndex += 1;
  renderQuestion();
});

speakButton.addEventListener("click", () => {
  readCurrentQuestion();
});

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("is-active"));
  screens[name].classList.add("is-active");
}

function startQuiz() {
  stopReading();
  closeFeedbackWindow();
  currentQuestionIndex = 0;
  score = 0;
  retryCurrentQuestion = false;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  orderSelection = [];
  activeMatchLeft = null;
  matchAnswers = {};

  const question = questions[currentQuestionIndex];
  questionTitle.textContent = `${question.icon || "💧"} ${question.question}`;
  answerArea.innerHTML = "";
  closeFeedbackWindow();
  feedbackBox.className = "feedback-box";

  progressText.textContent = `Frage ${currentQuestionIndex + 1} von ${questions.length}`;
  progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  pointsPill.textContent = `⭐ ${score}`;

  if (question.type === "order") {
    renderOrderQuestion(question);
    return;
  }

  if (question.type === "match") {
    renderMatchQuestion(question);
    return;
  }

  renderChoiceQuestion(question);
}

function renderChoiceQuestion(question) {
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";

    const visual = getAnswerVisual(question, index);
    button.innerHTML = `<span class="answer-icon" aria-hidden="true">${visual}</span><span>${answer}</span>`;
    button.addEventListener("click", () => checkChoiceAnswer(index, button));
    answerArea.append(button);
  });
}

function getAnswerVisual(question, index) {
  const icon = question.answerIcons?.[index] || "💧";
  if (question.visualType === "clay-shapes" || icon.startsWith("clay-")) {
    return `<span class="clay-shape ${icon}"></span>`;
  }

  return icon;
}

function checkChoiceAnswer(selectedIndex, selectedButton) {
  if (answered) {
    return;
  }

  const question = questions[currentQuestionIndex];
  const isCorrect = selectedIndex === question.correct;
  selectedButton.classList.add(isCorrect ? "is-correct" : "is-wrong");
  lockChoiceAnswers(isCorrect ? question.correct : null);
  finishQuestion(isCorrect, question.correctFeedback, question.wrongFeedback);
}

function lockChoiceAnswers(correctIndex) {
  [...answerArea.querySelectorAll(".answer-button")].forEach((button, index) => {
    button.disabled = true;
    if (correctIndex !== null && index === correctIndex) {
      button.classList.add("is-correct");
    }
  });
}

function renderOrderQuestion(question) {
  const layout = document.createElement("div");
  layout.className = "order-layout";

  const cardColumn = document.createElement("div");
  cardColumn.className = "order-column";
  cardColumn.innerHTML = `<p class="helper-label">Tippe die Karten in der richtigen Reihenfolge an.</p>`;

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "chip-button";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => chooseOrderCard(index, button, question));
    cardColumn.append(button);
  });

  const slotColumn = document.createElement("div");
  slotColumn.className = "order-column";
  slotColumn.innerHTML = `<p class="helper-label">Dein Forscherweg</p>`;

  const slots = document.createElement("div");
  slots.className = "order-slots";
  question.correct.forEach((_, index) => {
    const slot = document.createElement("div");
    slot.className = "order-slot";
    slot.textContent = `${index + 1}.`;
    slots.append(slot);
  });

  slotColumn.append(slots);
  layout.append(cardColumn, slotColumn);
  answerArea.append(layout);
}

function chooseOrderCard(index, button, question) {
  if (answered || orderSelection.includes(index)) {
    return;
  }

  orderSelection.push(index);
  button.classList.add("is-selected");
  button.disabled = true;

  const slot = answerArea.querySelectorAll(".order-slot")[orderSelection.length - 1];
  slot.textContent = `${orderSelection.length}. ${question.answers[index]}`;

  if (orderSelection.length === question.correct.length) {
    const isCorrect = arraysMatch(orderSelection, question.correct);
    answerArea.querySelectorAll(".chip-button").forEach((card) => {
      card.classList.add(isCorrect ? "is-correct" : "is-wrong");
    });
    finishQuestion(isCorrect, question.correctFeedback, question.wrongFeedback);
  }
}

function renderMatchQuestion(question) {
  const layout = document.createElement("div");
  layout.className = "match-layout";

  const leftColumn = document.createElement("div");
  leftColumn.className = "match-column";
  leftColumn.innerHTML = `<p class="helper-label">1. Sache antippen</p>`;

  const rightColumn = document.createElement("div");
  rightColumn.className = "match-column";
  rightColumn.innerHTML = `<p class="helper-label">2. Passende Antwort antippen</p>`;

  question.pairs.forEach((pair, index) => {
    const leftButton = document.createElement("button");
    leftButton.className = "match-button";
    leftButton.type = "button";
    leftButton.textContent = `${pair.icon} ${pair.left}`;
    leftButton.addEventListener("click", () => selectMatchLeft(index, leftButton));
    leftColumn.append(leftButton);
  });

  const rightOrder = [2, 0, 3, 1];
  rightOrder.forEach((pairIndex) => {
    const pair = question.pairs[pairIndex];
    const rightButton = document.createElement("button");
    rightButton.className = "match-button";
    rightButton.type = "button";
    rightButton.textContent = pair.right;
    rightButton.dataset.pairIndex = pairIndex;
    rightButton.addEventListener("click", () => selectMatchRight(pairIndex, rightButton, question));
    rightColumn.append(rightButton);
  });

  layout.append(leftColumn, rightColumn);
  answerArea.append(layout);
}

function selectMatchLeft(index, button) {
  if (answered || matchAnswers[index] !== undefined) {
    return;
  }

  activeMatchLeft = index;
  answerArea.querySelectorAll(".match-column:first-child .match-button").forEach((leftButton) => {
    leftButton.classList.remove("is-selected");
  });
  button.classList.add("is-selected");
}

function selectMatchRight(pairIndex, button, question) {
  if (answered || activeMatchLeft === null) {
    return;
  }

  matchAnswers[activeMatchLeft] = pairIndex;

  const leftButtons = answerArea.querySelectorAll(".match-column:first-child .match-button");
  leftButtons[activeMatchLeft].classList.remove("is-selected");
  leftButtons[activeMatchLeft].textContent = `${question.pairs[activeMatchLeft].icon} ${question.pairs[activeMatchLeft].left} → ${question.pairs[pairIndex].right}`;
  leftButtons[activeMatchLeft].disabled = true;

  button.disabled = true;
  button.classList.add("is-selected");
  activeMatchLeft = null;

  if (Object.keys(matchAnswers).length === question.pairs.length) {
    const isCorrect = question.pairs.every((_, index) => matchAnswers[index] === index);
    answerArea.querySelectorAll(".match-button").forEach((matchButton) => {
      matchButton.classList.add(isCorrect ? "is-correct" : "is-wrong");
      matchButton.disabled = true;
    });
    finishQuestion(isCorrect, question.correctFeedback, question.wrongFeedback);
  }
}

function finishQuestion(isCorrect, correctFeedback, wrongFeedback) {
  answered = true;
  if (isCorrect) {
    score += 1;
  }

  retryCurrentQuestion = !isCorrect;
  pointsPill.textContent = `⭐ ${score}`;
  feedbackWindow.hidden = false;
  feedbackBox.classList.add(isCorrect ? "correct" : "wrong");
  feedbackFace.textContent = isCorrect ? "😊" : "☹️";
  feedbackFace.className = `feedback-face ${isCorrect ? "happy" : "sad"}`;
  feedbackTitle.textContent = isCorrect ? "Richtig!" : "Falsch.";
  feedbackText.textContent = isCorrect ? correctFeedback : wrongFeedback;
  nextButton.textContent = isCorrect ? "Weiter" : "Noch einmal";
  nextButton.focus();
}

function showResult() {
  stopReading();
  closeFeedbackWindow();
  showScreen("result");
  scoreLine.textContent = `Du hast ${score} von ${questions.length} Forscherpunkten gesammelt.`;

  if (score <= 4) {
    scoreFeedback.textContent = "Du bist Forscher-Anfänger. Probiere es noch einmal.";
  } else if (score <= 8) {
    scoreFeedback.textContent = "Du bist schon ein guter Wasser-Forscher.";
  } else {
    scoreFeedback.textContent = "Du bist ein echter Schiff-Forscher!";
  }
}

function readCurrentQuestion() {
  if (!("speechSynthesis" in window)) {
    return;
  }

  const question = questions[currentQuestionIndex];
  const textParts = [question.question];

  if (question.answers) {
    question.answers.forEach((answer, index) => {
      textParts.push(`Antwort ${index + 1}: ${answer}`);
    });
  }

  if (question.type === "match") {
    question.pairs.forEach((pair) => textParts.push(`${pair.left}. ${pair.right}.`));
  }

  const utterance = new SpeechSynthesisUtterance(textParts.join(". "));
  utterance.lang = "de-DE";
  utterance.rate = 0.9;
  stopReading();
  window.speechSynthesis.speak(utterance);
}

function stopReading() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function closeFeedbackWindow() {
  feedbackWindow.hidden = true;
  feedbackBox.className = "feedback-box";
  feedbackFace.textContent = "";
  feedbackFace.className = "feedback-face";
  feedbackTitle.textContent = "";
  feedbackText.textContent = "";
  nextButton.textContent = "Weiter";
}

function arraysMatch(first, second) {
  return first.length === second.length && first.every((item, index) => item === second[index]);
}
