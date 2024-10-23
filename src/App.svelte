<script>
  let questions = [
    {
      question: "Which command is used to create a new Git repository?",
      options: ["git init", "git start", "git create", "gitnew"],
      correctAnswer:0
    },
    {
      question: "Which command is used to add files to the staging area?",
      options: ["git commit", "git add", "git stage", "git push"],
      correctAnswer:1
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let showResult = false;

  function checkAnswer(selectedIndex) {
    
    if (selectedIndex === questions[currentQuestionIndex].correctAnswer) {
      score++;
    }

    if (currentQuestionIndex < questions.length - 1) {  
      currentQuestionIndex++;
    } else {
      showResult = true;
    }
  
  }


  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showResult = false;
  }
</script>

<main>
  <h1>Git Commands Quiz</h1>

</div>


{:else}


</main>
