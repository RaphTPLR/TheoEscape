<template>
    <div class="content" :class="{ 'dark-mode-active': isDarkModeActive }">
      <div class="container">
        <h1>
          <span>D</span>
          <span>A</span>
          <span>R</span>
          <span class="dark-mode-button" @click="toggleDarkMode">K</span>  
          <span>M</span>
          <span class="balloon"><img src="../assets/ballon.png" alt="">O</span>
          <span>D</span>
          <span>E</span>
        </h1>
        <div class="searchbar">
          <input type="text" placeholder="Recherche" v-model="searchQuery">
          <span class="material-icons">
            search
          </span>
        </div>
      </div>
      <span class="find">corbeau</span>
      <span class="back" @click="back">BACK</span>
    </div>
  </template>
  
  <script>
import  router from '../../router/index.js';

  export default {
    data() {
      return {
        isDarkModeActive: false,
        searchQuery: "",
      };
    },
    watch: {
        searchQuery() {
            const search = this.searchQuery.toLowerCase()
            if (search === "corbeau") {
                router.replace('/Step2');
            }
        }
    },
    methods: {
      toggleDarkMode() {
        this.isDarkModeActive = !this.isDarkModeActive;
      },

      back() {
        router.replace('/');
      }
    }
  };
  </script>

  <style src="../style/Step1.scss" scoped></style>