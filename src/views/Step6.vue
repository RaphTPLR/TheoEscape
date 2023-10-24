<template>
    <div class="content">
        <div class="container">
            <span v-if="!isCountdownFinished">
            {{ countdown.days }}j .
            {{ countdown.hours }}h .
            {{ countdown.minutes }}m .
            {{ countdown.seconds }}s 
            </span>
            <span v-if="isCountdownFinished">
            00j .
            00h .
            00m .
            00s 
            </span>
            <p>Lorsque le compteur est égal à 0 
                alors écrit dans la barre de recherche Aujourd'hui
            </p>
            <div class="searchbar" v-if="isCountdownFinished">
                <input type="text" placeholder="Recherche" v-model="searchQuery">
                <span class="material-icons">
                    search
                </span>
            </div>
        </div>
        <span class="back" @click="back">BACK</span>
        <img src="../assets/ballon.png" alt="" id="img1">
    </div>
</template>
  
<script>
import  router from '../../router/index.js';

export default {
  data() {
    return {
        searchQuery: "",
        targetDate: new Date('2023-10-30T00:00:00Z'),
        countdown: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    };
  },

  watch: {
        searchQuery() {
            const search = this.searchQuery.toLowerCase()
            console.log(search)
            if (search === "aujourd'hui") {
                router.replace('/Step7');
            }
        }
    },

  computed: {
    isCountdownFinished() {
      return this.targetDate <= new Date();
    }
  },

  methods: {
    updateCountdown() {
      const now = new Date();
      const difference = this.targetDate - now;

      if (difference > 0) {
        this.countdown.days = Math.floor(difference / (1000 * 60 * 60 * 24));
        this.countdown.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.countdown.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        this.countdown.seconds = Math.floor((difference % (1000 * 60)) / 1000);
      }
    },

    back() {
        router.replace('/Step5');
    }   
  },

  created() {
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }
};

</script>

<style src="../style/Step6.scss" scoped></style>