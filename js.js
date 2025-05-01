const questions = [
    {
      question: "Quelle balise HTML sert à créer un lien ?",
      choix: ["<link>", "<a>", "<div>", "<href>"],
      answer: "<a>"
    },
    {
      question: "Quel langage permet de styliser une page web ?",
      choix: ["HTML", "Python", "Css", "Java"],
      answer: "Css"
    },
    {
      question: "Que signifie JS ?",
      choix: ["JavaStyle", "JustScript", "JavaScript", "JumperScreen"],
      answer: "JavaScript"
    },
    {
      question: "Quelle propriété CSS permet de changer la couleur du texte ?",
      choix: ["font-color", "text-color", "color", "background-color"],
      answer: "color"
    },
    {
      question: "Quel événement JavaScript est déclenché lors d’un clic ?",
      choix: ["onhover", "onchange", "onclick", "onsubmit"],
      answer: "onclick"
    },
    {
      question: "Lequel est un langage de programmation côté serveur ?",
      choix: ["HTML", "CSS", "PHP", "Bootstrap"],
      answer: "PHP"
    },
    // {
    //   question: "Quelle est la bonne syntaxe pour un commentaire en JavaScript ?",
    //   choix: ["<!-- Ceci est un commentaire -->", "// Ceci est un commentaire", "/* Ceci est un commentaire */", "# Ceci est un commentaire"],
    //   answer: "// Ceci est un commentaire"
    // },
    // {
    //   question: "Quel attribut HTML est utilisé pour spécifier une feuille de style ?",
    //   choix: ["style", "src", "rel", "href"],
    //   answer: "rel"
    // },
    {
      question: "Quelle méthode JavaScript permet d’ajouter un élément à un tableau ?",
      choix: ["add()", "append()", "push()", "insert()"],
      answer: "push()"
    },
    // {
    //   question: "Quel élément HTML contient les métadonnées de la page ?",
    //   choix: ["<head>", "<body>", "<meta>", "<header>"],
    //   answer: "<head>"
    // }
  ];
  
  let index = 0;
  let score = 0;
  
  const questionE1 = document.getElementById("question");
  const choixE1 = document.getElementById("choix");
  const nextBtn = document.getElementById("next");
  const scoreE1 = document.getElementById("score");
  
  function loadQuestion() {
    const q = questions[index];
    questionE1.textContent = q.question;
    choixE1.innerHTML = "";
  
    q.choix.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.classList.add("choice-btn");
      btn.onclick = () => checkAnswer(choice);
      choixE1.appendChild(btn);
    });
  }
  
  function checkAnswer(selectedText) {
    const correct = questions[index].answer;
    const buttons = document.querySelectorAll(".choice-btn");
  
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correct) {
        btn.classList.add("correct");
      } else if (btn.textContent === selectedText) {
        btn.classList.add("incorrect");
      }
    });
  
    if (selectedText === correct) {
      score++;
    }
  
    nextBtn.style.display = "inline-block";
  }
  
  nextBtn.onclick = () => {
    index++;
    if (index < questions.length) {
      loadQuestion();
      nextBtn.style.display = "none";
    } else {
      showScore();
    }
  };
  
  function showScore() {
    questionE1.textContent = "Quiz terminé !";
    choixE1.innerHTML = "";
    nextBtn.style.display = "none";
    scoreE1.textContent = `Votre score : ${score} / ${questions.length}`;
  }
  
  loadQuestion();
  nextBtn.style.display = "none";
  