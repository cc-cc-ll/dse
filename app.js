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
    exercises: [
      {
        topic: "Algebra",
        source: "HKDSE",
        year: "2023",
        question: "Solve 2x² - 5x - 3 = 0 and state both roots.",
        syllabusAligned: true,
      },
      {
        topic: "Calculus",
        source: "CE",
        year: "2010",
        question: "Differentiate y = 3x³ - 4x + 7 and find dy/dx at x = 2.",
        syllabusAligned: true,
      },
      {
        topic: "Calculus",
        source: "A-Level",
        year: "2018",
        question:
          "Use integration by parts to evaluate ∫x ln(x) dx. (Excluded for HKDSE compulsory)",
        syllabusAligned: false,
      },
    ],
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
    exercises: [
      {
        topic: "Reading Skills",
        source: "HKDSE",
        year: "2022",
        question:
          "Read a short article and identify two persuasive language techniques.",
        syllabusAligned: true,
      },
      {
        topic: "Writing Skills",
        source: "CE",
        year: "2009",
        question:
          "Write a 250-word letter to the editor about campus environmental actions.",
        syllabusAligned: true,
      },
      {
        topic: "Writing Skills",
        source: "A-Level",
        year: "2017",
        question:
          "Write a 1200-word literature analysis using critical theory references.",
        syllabusAligned: false,
      },
    ],
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
    exercises: [
      {
        topic: "Mechanics",
        source: "HKDSE",
        year: "2021",
        question:
          "A trolley accelerates uniformly from rest at 2.5 m/s² for 4 s. Find final speed and distance.",
        syllabusAligned: true,
      },
      {
        topic: "Electricity and Magnetism",
        source: "A-Level",
        year: "2016",
        question:
          "A 12 V battery is connected to 3 Ω and 6 Ω resistors in parallel. Find total current.",
        syllabusAligned: true,
      },
      {
        topic: "Mechanics",
        source: "A-Level",
        year: "2019",
        question:
          "Derive Lagrange's equation for a two-body constrained system.",
        syllabusAligned: false,
      },
    ],
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
