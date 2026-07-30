const SOURCES = ["HKDSE", "CE", "A-Level"];

function getSource(index) {
  return SOURCES[index % SOURCES.length];
}

function getYear(index) {
  return String(2008 + (index % 18));
}

function buildMathQuestions() {
  const questions = [];
  for (let i = 1; i <= 100; i += 1) {
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
  for (let i = 1; i <= 100; i += 1) {
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
  for (let i = 1; i <= 100; i += 1) {
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
  for (let i = 1; i <= 100; i += 1) {
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
  for (let i = 1; i <= 100; i += 1) {
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
  for (let i = 1; i <= 100; i += 1) {
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
  for (let i = 1; i <= 100; i += 1) {
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
  for (let i = 1; i <= 100; i += 1) {
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
  for (let i = 1; i <= 100; i += 1) {
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

let selectedSubjectId = subjects[0].id;

const subjectList = document.getElementById("subjectList");
const subjectHeader = document.getElementById("subjectHeader");
const tutorialsContainer = document.getElementById("tutorials");
const exerciseList = document.getElementById("exerciseList");
const topicFilter = document.getElementById("topicFilter");
const sourceFilter = document.getElementById("sourceFilter");

function getSelectedSubject() {
  return subjects.find((subject) => subject.id === selectedSubjectId);
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
    <p>Only questions tagged as within HKDSE syllabus are shown (${totalExercises} available).</p>
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

function renderExercises(subject) {
  const chosenTopic = topicFilter.value || "all";
  const chosenSource = sourceFilter.value || "all";

  const filtered = subject.exercises.filter((exercise) => {
    if (!exercise.syllabusAligned) {
      return false;
    }
    const topicMatch =
      chosenTopic === "all" ? true : exercise.topic === chosenTopic;
    const sourceMatch =
      chosenSource === "all" ? true : exercise.source === chosenSource;
    return topicMatch && sourceMatch;
  });

  exerciseList.innerHTML = "";

  if (!filtered.length) {
    exerciseList.innerHTML =
      '<li class="empty">No in-syllabus exercises for this filter.</li>';
    return;
  }

  filtered.forEach((exercise) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <div class="exercise-meta">${exercise.source} • ${exercise.year} • ${exercise.topic}</div>
      <p>${exercise.question}</p>
    `;
    exerciseList.appendChild(item);
  });
}

function renderAll() {
  const subject = getSelectedSubject();
  renderSubjects();
  renderTopicFilter(subject);
  renderHeader(subject);
  renderTutorials(subject);
  renderExercises(subject);
}

topicFilter.addEventListener("change", () => renderExercises(getSelectedSubject()));
sourceFilter.addEventListener("change", () =>
  renderExercises(getSelectedSubject())
);

renderAll();
