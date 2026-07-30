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
