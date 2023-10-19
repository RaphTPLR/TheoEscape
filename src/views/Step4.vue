<template>
  <div class="content">
    <div class="container">
      <h1>Motus</h1>
      <div class="searchbar">
        <input
          v-model="userInput"
          :disabled="isGameOver"
          @keyup.enter="checkGuess"
          maxlength="6"
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
      secretWord: "ROCKET",
      userInput: "",
      feedback: [],
      isGameOver: false,
      remainingAttempts: 5,
      letterCells: [
        { letter: "", isCorrect: false },
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
      if (this.userInput.length !== 6) {
        this.feedback = ["Le mot doit avoir 6 lettres."];
        return;
      }

      const guess = this.userInput.toUpperCase();
      this.feedback = [];

      for (let i = 0; i < 6; i++) {
        if (guess[i] === this.secretWord[i]) {
          this.letterCells[i].isCorrect = true;
          this.feedback.push("B");
        } else if (this.secretWord.includes(guess[i])) {
          this.feedback.push("M");
        } else {
          this.feedback.push("X");
        }
      }

      if (guess === this.secretWord) {
        this.feedback.push("Félicitations, vous avez trouvé le mot!");
        this.isGameOver = true;
        setTimeout(() => {
          this.resetGame();
          router.replace("/Step5");
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

      this.attempts.push({ word: this.userInput, feedback: this.feedback });
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

    feedbackClass(feedback) {
      return {
        "feedback-correct": feedback === "B" || feedback === "B".toLowerCase(),
        "feedback-misplaced":
          feedback === "M" || feedback === "M".toLowerCase(),
        "feedback-incorrect":
          feedback === "X" || feedback === "X".toLowerCase(),
      };
    },

    back() {
        router.replace('/Step3');
    }  
  },
};
</script>

<style src="../style/Step4.scss" scoped></style>
