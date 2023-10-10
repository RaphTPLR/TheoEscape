<template>
  <div class="content">
    <div class="container">
      <h1>Motus</h1>
      <div class="searchbar">
        <input
          v-model="userInput"
          :disabled="isGameOver"
          @keyup.enter="checkGuess"
          maxlength="5"
          @input="convertToUppercase"
        />
        <button @click="checkGuess" :disabled="isGameOver"></button>
      </div>
      <div class="attempts-history">
        <div
          v-for="(attempt, index) in attempts"
          :key="index"
          class="attempt-feedback"
        >
          <div class="grid">
            <div
              v-for="(letter, i) in attempt.word"
              :key="i"
              class="grid-cell"
              :class="[feedbackClass(attempt.feedback[i]), { empty: !letter }]"
            >
              {{ letter || " " }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="back" @click="back">BACK</span>
  </div>
</template>

<script>
import router from "../../router/index.js";

export default {
  data() {
    return {
      secretWord: "PLAGE",
      userInput: "",
      isGameOver: false,
      remainingAttempts: 5,
      letterCells: [
        { letter: "", isCorrect: false },
        { letter: "", isCorrect: false },
        { letter: "", isCorrect: false },
        { letter: "", isCorrect: false },
        { letter: "", isCorrect: false },
      ],
      attempts: [],
    };
  },
  methods: {
    convertToUppercase() {
      this.userInput = this.userInput.toUpperCase();
    },

    checkGuess() {
      if (this.userInput.length !== 5) {
        console.log("Le mot doit avoir 5 lettres.");
        return;
      }

      const guess = this.userInput.toUpperCase();
      this.feedback = [];

      for (let i = 0; i < 5; i++) {
        if (guess[i] === this.secretWord[i]) {
          this.letterCells[i].isCorrect = true;
        }
      }

      if (guess === this.secretWord) {
        this.feedback.push("Félicitations, vous avez trouvé le mot!");
        this.isGameOver = true;
        setTimeout(() => {
          this.resetGame();
          router.replace("/Step6");
        }, 1000);
      } else {
        this.remainingAttempts--;
        if (this.remainingAttempts === 0) {
          this.isGameOver = true;
          setTimeout(() => {
              this.resetGame();
          }, 1000)
        }
      }

      this.attempts.push({ word: this.userInput});
      this.userInput = "";
    },

    resetGame() {
      this.userInput = "";
      this.feedback = [];
      this.remainingAttempts = 5;
      this.isGameOver = false;
      this.letterCells.forEach((cell) => {
        cell.letter = "";
        cell.isCorrect = false;
      });
      this.attempts = [];
    },

    back() {
        router.replace('/Step3');
    }  
  },
};
</script>

<style src="../style/Step4.scss" scoped></style>
