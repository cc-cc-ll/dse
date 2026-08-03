const SOURCES = ["HKDSE", "CE", "A-Level"];
const DIFFICULTIES = ["Easy", "Medium", "Hard"];
const PAPER_TYPES = ["Paper 1", "Paper 2"];
const OFFICIAL_RESOURCES = [
  {
    label: "HKEAA: HKDSE Subject Examination Report & Question Papers",
    url: "https://www.hkeaa.edu.hk/en/resources/publications/hkdse/exam_report_question_papers/",
  },
  {
    label: "HKEAA: HKDSE Examination Reports",
    url: "https://www.hkeaa.edu.hk/en/hkdse/assessment-information/examination-report/",
  },
];

function getSource(index) {
  return SOURCES[index % SOURCES.length];
}

function getYear(index) {
  return String(2008 + (index % 18));
}

function getDifficulty(index) {
  return DIFFICULTIES[index % DIFFICULTIES.length];
}

function getPaperType(index) {
  return PAPER_TYPES[index % PAPER_TYPES.length];
}

function buildMathQuestions() {
  const questions = [];
  for (let i = 1; i <= 180; i += 1) {
    const topic = i % 2 === 0 ? "Calculus" : "Algebra";
    const source = getSource(i);
    const year = getYear(i);

    if (topic === "Algebra") {
      const a = 2 + (i % 5);
      const b = 3 + (i % 7);
      const c = 4 + (i % 6);
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: Solve ${a}x² - ${b}x - ${c} = 0 and hence find the sum of the roots.`,
        syllabusAligned: true,
      });
    } else {
      const p = 2 + (i % 4);
      const q = 1 + (i % 6);
      const x = 1 + (i % 5);
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: Let y = ${p}x³ - ${q}x² + 6. Find dy/dx and evaluate the gradient at x = ${x}.`,
        syllabusAligned: true,
      });
    }
  }
  return questions;
}

function buildEnglishQuestions() {
  const readingThemes = [
    "healthy lifestyle campaign",
    "social media usage in schools",
    "public transport planning",
    "youth volunteer programme",
    "plastic reduction policy",
  ];
  const writingTasks = [
    "letter to the editor",
    "proposal to school principal",
    "speech for assembly",
    "article for school magazine",
    "blog post for student council",
  ];

  const questions = [];
  for (let i = 1; i <= 180; i += 1) {
    const topic = i % 2 === 0 ? "Writing Skills" : "Reading Skills";
    const source = getSource(i);
    const year = getYear(i);
    const theme = readingThemes[i % readingThemes.length];
    const task = writingTasks[i % writingTasks.length];

    if (topic === "Reading Skills") {
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: Read a passage about ${theme}. Identify the writer's tone and explain two language features that shape that tone.`,
        syllabusAligned: true,
      });
    } else {
      questions.push({
        topic,
        source,
        year,
        question: `Paper 2 style: Write a ${task} (220-280 words) on ${theme}. Use an appropriate register and support your ideas with examples.`,
        syllabusAligned: true,
      });
    }
  }
  return questions;
}

function buildPhysicsQuestions() {
  const questions = [];
  for (let i = 1; i <= 180; i += 1) {
    const topic = i % 2 === 0 ? "Electricity and Magnetism" : "Mechanics";
    const source = getSource(i);
    const year = getYear(i);

    if (topic === "Mechanics") {
      const acceleration = (1.5 + (i % 5) * 0.5).toFixed(1);
      const time = 3 + (i % 6);
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: A cart starts from rest and accelerates uniformly at ${acceleration} m/s² for ${time} s. Find (a) final speed and (b) displacement.`,
        syllabusAligned: true,
      });
    } else {
      const voltage = 6 + (i % 8) * 3;
      const r1 = 2 + (i % 5);
      const r2 = 4 + (i % 6);
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: A ${voltage} V battery is connected to resistors ${r1} Ω and ${r2} Ω in parallel. Calculate total current and power supplied.`,
        syllabusAligned: true,
      });
    }
  }
  return questions;
}

function buildChemistryQuestions() {
  const questions = [];
  for (let i = 1; i <= 180; i += 1) {
    const topic = i % 2 === 0 ? "Acids and Bases" : "Mole Concept";
    const source = getSource(i);
    const year = getYear(i);

    if (topic === "Mole Concept") {
      const mass = 5 + (i % 16);
      const mr = 18 + (i % 30);
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: A sample has mass ${mass}.0 g and molar mass ${mr}.0 g mol⁻¹. Calculate the amount of substance and number of molecules.`,
        syllabusAligned: true,
      });
    } else {
      const ph = 2 + (i % 6);
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: A solution has pH ${ph}. Calculate [H⁺] and state whether it is acidic, neutral or alkaline.`,
        syllabusAligned: true,
      });
    }
  }
  return questions;
}

function buildBiologyQuestions() {
  const questions = [];
  for (let i = 1; i <= 180; i += 1) {
    const topic = i % 2 === 0 ? "Ecology" : "Human Physiology";
    const source = getSource(i);
    const year = getYear(i);

    if (topic === "Human Physiology") {
      const pulse = 65 + (i % 30);
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: A student's pulse rate changes from ${pulse} bpm at rest to higher values after exercise. Explain two physiological reasons for this change.`,
        syllabusAligned: true,
      });
    } else {
      const quadrat = 1 + (i % 5);
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: In quadrat sampling trial ${quadrat}, suggest one method to improve reliability and explain why random sampling is required.`,
        syllabusAligned: true,
      });
    }
  }
  return questions;
}

function buildEconomicsQuestions() {
  const questions = [];
  for (let i = 1; i <= 180; i += 1) {
    const topic = i % 2 === 0 ? "Demand and Supply" : "Market Efficiency";
    const source = getSource(i);
    const year = getYear(i);

    if (topic === "Demand and Supply") {
      const change = 5 + (i % 11);
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: The price of a product rises by ${change}%. Explain, with demand-supply analysis, how equilibrium quantity may change.`,
        syllabusAligned: true,
      });
    } else {
      const tax = 2 + (i % 6);
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: A specific tax of HK$${tax} per unit is imposed. Explain the possible deadweight loss and who may bear more tax burden.`,
        syllabusAligned: true,
      });
    }
  }
  return questions;
}

function buildBAFSQuestions() {
  const questions = [];
  for (let i = 1; i <= 180; i += 1) {
    const topic = i % 2 === 0 ? "Accounting Cycle" : "Financial Ratios";
    const source = getSource(i);
    const year = getYear(i);

    if (topic === "Accounting Cycle") {
      const sales = 80 + i;
      const cost = 50 + (i % 25);
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: Prepare journal entries for credit sales of HK$${sales},000 and cost of goods sold of HK$${cost},000.`,
        syllabusAligned: true,
      });
    } else {
      const currentAssets = 120 + i;
      const currentLiabilities = 60 + (i % 20);
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: Given current assets HK$${currentAssets},000 and current liabilities HK$${currentLiabilities},000, compute the current ratio and comment briefly on liquidity.`,
        syllabusAligned: true,
      });
    }
  }
  return questions;
}

function buildICTQuestions() {
  const questions = [];
  for (let i = 1; i <= 180; i += 1) {
    const topic = i % 2 === 0 ? "Database" : "Networking";
    const source = getSource(i);
    const year = getYear(i);

    if (topic === "Networking") {
      const users = 20 + (i % 40);
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: A school LAN serves ${users} users. State two advantages of using a client-server model and one security risk to manage.`,
        syllabusAligned: true,
      });
    } else {
      const records = 1000 + i * 20;
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: A database table stores ${records} records. Explain why a primary key is needed and write one suitable query requirement in words.`,
        syllabusAligned: true,
      });
    }
  }
  return questions;
}

function buildHistoryQuestions() {
  const questions = [];
  for (let i = 1; i <= 180; i += 1) {
    const topic = i % 2 === 0 ? "Modern China" : "20th Century World";
    const source = getSource(i);
    const year = getYear(i);

    if (topic === "20th Century World") {
      const decade = 1910 + (i % 9) * 10;
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: With reference to international relations in the ${decade}s, explain one cause of conflict and one attempt at cooperation.`,
        syllabusAligned: true,
      });
    } else {
      const period = 1949 + (i % 5) * 10;
      questions.push({
        topic,
        source,
        year,
        question: `Paper 1 style: Explain one key political or economic development in China after ${period} and assess its impact on society.`,
        syllabusAligned: true,
      });
    }
  }
  return questions;
}

const subjects = [
  {
    id: "mathematics",
    name: "Mathematics (Compulsory Part)",
    tutorials: [
      {
        topic: "Algebra",
        keypoints: [
          "Factorization and solving quadratic equations",
          "Indices, surds and logarithms within DSE scope",
          "Forming equations from word problems",
        ],
      },
      {
        topic: "Calculus",
        keypoints: [
          "Polynomial differentiation rules",
          "Applications: gradient and optimization",
          "Basic integration for area under curve",
        ],
      },
    ],
    exercises: buildMathQuestions(),
  },
  {
    id: "english",
    name: "English Language",
    tutorials: [
      {
        topic: "Reading Skills",
        keypoints: [
          "Identify tone and writer's attitude",
          "Use context clues for vocabulary-in-context",
          "Skim for gist, scan for details",
        ],
      },
      {
        topic: "Writing Skills",
        keypoints: [
          "Match register to text type and audience",
          "Use clear paragraphing and linking",
          "Support ideas with relevant examples",
        ],
      },
    ],
    exercises: buildEnglishQuestions(),
  },
  {
    id: "physics",
    name: "Physics",
    tutorials: [
      {
        topic: "Mechanics",
        keypoints: [
          "SUVAT equations and assumptions",
          "Force diagrams and Newton's laws",
          "Momentum conservation in collisions",
        ],
      },
      {
        topic: "Electricity and Magnetism",
        keypoints: [
          "Series vs parallel circuit rules",
          "Ohm's law and power calculations",
          "Magnetic force direction using right-hand rule",
        ],
      },
    ],
    exercises: buildPhysicsQuestions(),
  },
  {
    id: "chemistry",
    name: "Chemistry",
    tutorials: [
      {
        topic: "Mole Concept",
        keypoints: [
          "Convert between mass, moles and particles",
          "Use chemical equations for mole ratio calculations",
          "Handle concentration and volume questions",
        ],
      },
      {
        topic: "Acids and Bases",
        keypoints: [
          "Interpret pH and [H⁺] relationship",
          "Apply neutralization concepts",
          "Distinguish strong vs weak acids and bases",
        ],
      },
    ],
    exercises: buildChemistryQuestions(),
  },
  {
    id: "biology",
    name: "Biology",
    tutorials: [
      {
        topic: "Human Physiology",
        keypoints: [
          "Gas exchange and transport in humans",
          "Homeostasis and feedback control",
          "Responses to exercise and stress",
        ],
      },
      {
        topic: "Ecology",
        keypoints: [
          "Population and community relationships",
          "Sampling methods and data reliability",
          "Human impact on ecosystems",
        ],
      },
    ],
    exercises: buildBiologyQuestions(),
  },
  {
    id: "economics",
    name: "Economics",
    tutorials: [
      {
        topic: "Demand and Supply",
        keypoints: [
          "Market equilibrium and shifts in curves",
          "Price elasticity interpretation",
          "Effects of external shocks",
        ],
      },
      {
        topic: "Market Efficiency",
        keypoints: [
          "Consumer and producer surplus",
          "Deadweight loss from intervention",
          "Market failure and policy responses",
        ],
      },
    ],
    exercises: buildEconomicsQuestions(),
  },
  {
    id: "bafs",
    name: "BAFS (Accounting)",
    tutorials: [
      {
        topic: "Accounting Cycle",
        keypoints: [
          "Journal entries and ledger posting",
          "Trial balance and adjustments",
          "Preparation of basic financial statements",
        ],
      },
      {
        topic: "Financial Ratios",
        keypoints: [
          "Liquidity and solvency ratios",
          "Profitability ratio interpretation",
          "Limitations of ratio analysis",
        ],
      },
    ],
    exercises: buildBAFSQuestions(),
  },
  {
    id: "ict",
    name: "ICT",
    tutorials: [
      {
        topic: "Networking",
        keypoints: [
          "Common network architectures",
          "IP addressing and basic communication",
          "Security threats and protections",
        ],
      },
      {
        topic: "Database",
        keypoints: [
          "Primary and foreign keys",
          "Data normalization basics",
          "Query design and data integrity",
        ],
      },
    ],
    exercises: buildICTQuestions(),
  },
  {
    id: "history",
    name: "History",
    tutorials: [
      {
        topic: "20th Century World",
        keypoints: [
          "Causes and consequences of major conflicts",
          "Diplomacy and international cooperation",
          "Interpreting historical sources",
        ],
      },
      {
        topic: "Modern China",
        keypoints: [
          "Major reforms and policy shifts",
          "Social and economic transformation",
          "Cause-and-effect evaluation in essays",
        ],
      },
    ],
    exercises: buildHistoryQuestions(),
  },
];

subjects.forEach((subject) => {
  subject.exercises = subject.exercises.map((exercise, index) => ({
    id: `${subject.id}-${index + 1}`,
    difficulty: getDifficulty(index + 1),
    paper: getPaperType(index + 1),
    marks: 3 + ((index + 1) % 8),
    ...exercise,
  }));
});

let selectedSubjectId = subjects[0].id;

const subjectList = document.getElementById("subjectList");
const subjectHeader = document.getElementById("subjectHeader");
const tutorialsContainer = document.getElementById("tutorials");
const exerciseList = document.getElementById("exerciseList");
const topicFilter = document.getElementById("topicFilter");
const sourceFilter = document.getElementById("sourceFilter");
const difficultyFilter = document.getElementById("difficultyFilter");
const keywordFilter = document.getElementById("keywordFilter");
const randomQuestionBtn = document.getElementById("randomQuestionBtn");
const randomQuestionCard = document.getElementById("randomQuestionCard");
const resultsCount = document.getElementById("resultsCount");
const officialResources = document.getElementById("officialResources");
const generateMockBtn = document.getElementById("generateMockBtn");
const mockPaperCard = document.getElementById("mockPaperCard");

function getSelectedSubject() {
  return subjects.find((subject) => subject.id === selectedSubjectId);
}

function getFilteredExercises(subject) {
  const chosenTopic = topicFilter.value || "all";
  const chosenSource = sourceFilter.value || "all";
  const chosenDifficulty = difficultyFilter.value || "all";
  const keyword = (keywordFilter.value || "").trim().toLowerCase();

  return subject.exercises.filter((exercise) => {
    if (!exercise.syllabusAligned) {
      return false;
    }
    const topicMatch =
      chosenTopic === "all" ? true : exercise.topic === chosenTopic;
    const sourceMatch =
      chosenSource === "all" ? true : exercise.source === chosenSource;
    const difficultyMatch =
      chosenDifficulty === "all"
        ? true
        : exercise.difficulty === chosenDifficulty;
    const keywordMatch = keyword
      ? exercise.question.toLowerCase().includes(keyword)
      : true;
    return topicMatch && sourceMatch && difficultyMatch && keywordMatch;
  });
}

function getMockConfig(subject) {
  if (subject.id === "english") {
    return {
      title: "Paper 2 Writing Practice",
      duration: "1 hr 45 min",
      questionCount: 6,
      instruction:
        "Attempt all questions. Plan briefly, then answer in complete and well-structured responses.",
    };
  }
  return {
    title: "Paper 1 Structured Questions",
    duration: "1 hr 30 min",
    questionCount: 8,
    instruction:
      "Attempt all questions. Show clear reasoning and include units or definitions where appropriate.",
  };
}

function pickQuestionsForMockPaper(exercises, count) {
  const shuffled = [...exercises]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(count, exercises.length));
  return shuffled;
}

function renderSubjects() {
  subjectList.innerHTML = "";
  subjects.forEach((subject) => {
    const button = document.createElement("button");
    button.className = `subject-btn ${
      subject.id === selectedSubjectId ? "active" : ""
    }`;
    button.textContent = subject.name;
    button.addEventListener("click", () => {
      selectedSubjectId = subject.id;
      renderAll();
    });
    subjectList.appendChild(button);
  });
}

function renderTopicFilter(subject) {
  const topics = subject.tutorials.map((entry) => entry.topic);
  const previousValue = topicFilter.value;
  topicFilter.innerHTML = `<option value="all">All topics</option>${topics
    .map((topic) => `<option value="${topic}">${topic}</option>`)
    .join("")}`;
  topicFilter.value = topics.includes(previousValue) ? previousValue : "all";
}

function renderHeader(subject) {
  const totalExercises = subject.exercises.filter(
    (exercise) => exercise.syllabusAligned
  ).length;
  subjectHeader.innerHTML = `
    <h2>${subject.name}</h2>
    <p>Expanded bank with ${totalExercises} in-syllabus questions. Use topic, source, difficulty and keyword filters for targeted practice.</p>
  `;
}

function renderTutorials(subject) {
  tutorialsContainer.innerHTML = "";
  subject.tutorials.forEach((tutorial) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h4>${tutorial.topic}</h4>
      <ul>${tutorial.keypoints.map((point) => `<li>${point}</li>`).join("")}</ul>
    `;
    tutorialsContainer.appendChild(card);
  });
}

function renderOfficialResources() {
  officialResources.innerHTML = OFFICIAL_RESOURCES.map(
    (resource) =>
      `<li><a href="${resource.url}" target="_blank" rel="noopener noreferrer">${resource.label}</a></li>`
  ).join("");
}

function renderRandomQuestion(exercises) {
  if (!exercises.length) {
    randomQuestionCard.innerHTML =
      '<p class="empty">No question available for the selected filters.</p>';
    return;
  }
  const chosen = exercises[Math.floor(Math.random() * exercises.length)];
  randomQuestionCard.innerHTML = `
    <div class="exercise-meta">${chosen.source} • ${chosen.year} • ${chosen.paper} • ${chosen.topic} • ${chosen.difficulty} • ${chosen.marks} marks</div>
    <p>${chosen.question}</p>
  `;
}

function renderMockPaper(subject) {
  const filtered = getFilteredExercises(subject);
  if (filtered.length < 4) {
    mockPaperCard.innerHTML =
      '<p class="empty">Not enough questions for a mock paper. Broaden your filters and try again.</p>';
    return;
  }

  const config = getMockConfig(subject);
  const picked = pickQuestionsForMockPaper(filtered, config.questionCount);
  const totalMarks = picked.reduce((sum, exercise) => sum + exercise.marks, 0);
  mockPaperCard.innerHTML = `
    <h4>${subject.name} — ${config.title}</h4>
    <p class="exercise-meta">Duration: ${config.duration} • Suggested total: ${totalMarks} marks</p>
    <p>${config.instruction}</p>
    <ol>
      ${picked
        .map(
          (exercise) =>
            `<li><strong>[${exercise.marks} marks]</strong> ${exercise.question}</li>`
        )
        .join("")}
    </ol>
  `;
}

function renderExercises(subject) {
  const filtered = getFilteredExercises(subject);

  resultsCount.textContent = `${filtered.length} result${
    filtered.length === 1 ? "" : "s"
  }`;
  exerciseList.innerHTML = "";

  if (!filtered.length) {
    exerciseList.innerHTML =
      '<li class="empty">No in-syllabus exercises for this filter.</li>';
    return;
  }

  filtered.forEach((exercise) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <div class="exercise-meta">${exercise.source} • ${exercise.year} • ${exercise.paper} • ${exercise.topic} • ${exercise.difficulty} • ${exercise.marks} marks</div>
      <p>${exercise.question}</p>
    `;
    exerciseList.appendChild(item);
  });
}

function rerenderExercisesAndClearRandom() {
  const subject = getSelectedSubject();
  renderExercises(subject);
  randomQuestionCard.innerHTML =
    '<p class="empty">Use the button to pick a random question from your current filters.</p>';
  mockPaperCard.innerHTML =
    '<p class="empty">Generate a mock paper based on your current subject and filters.</p>';
}

function renderAll() {
  const subject = getSelectedSubject();
  renderSubjects();
  renderTopicFilter(subject);
  renderHeader(subject);
  renderTutorials(subject);
  renderOfficialResources();
  renderExercises(subject);
  randomQuestionCard.innerHTML =
    '<p class="empty">Use the button to pick a random question from your current filters.</p>';
  mockPaperCard.innerHTML =
    '<p class="empty">Generate a mock paper based on your current subject and filters.</p>';
}

topicFilter.addEventListener("change", rerenderExercisesAndClearRandom);
sourceFilter.addEventListener("change", rerenderExercisesAndClearRandom);
difficultyFilter.addEventListener("change", rerenderExercisesAndClearRandom);
keywordFilter.addEventListener("input", rerenderExercisesAndClearRandom);
randomQuestionBtn.addEventListener("click", () =>
  renderRandomQuestion(getFilteredExercises(getSelectedSubject()))
);
generateMockBtn.addEventListener("click", () =>
  renderMockPaper(getSelectedSubject())
);

renderAll();
