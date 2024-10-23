<script>
import { onMount } from 'svelte';

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let showResult = false;

onMount(async () => {
  const response = await fetch('http://localhost:3000/questions');
  questions = await response.json();
});

function checkAnswer(selectedIndex) {
  if (selectedIndex === questions[currentQuestionIndex].correct_answer) {
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
  <h1>Git CLI Quiz</h1>

  {#if questions.length === 0}
    <p>Loading questions...</p>
  {:else if !showResult}
    <div class="question">
      <h2>{questions[currentQuestionIndex].question}</h2>
      <div class="options">
        {#each questions[currentQuestionIndex].options as option, index}
          <button on:click={() => checkAnswer(index)}>{option}</button>
        {/each}
      </div>
    </div>
  {:else}
    <div class="result">
      <h2>Quiz completed!</h2>
      <p>Your score: {score} out of {questions.length}</p>
      <button on:click={restartQuiz}>Restart Quiz</button>
    </div>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .question {
    margin-bottom: 20em;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 1em;

  }

  button {
    background-color:purple;
    border: 1px solid black;
    padding: 0.5em 1em;
    border-radius: 1em;
    cursor: pointer;
  }

  button:hover {
    background-color: #fff;
    color: purple;
  }
  
  @media (min-width: 640px) {
    main{
      max-width: none;
    }
  }
</style>
