<template>
    <div class="content">
        <div class="container">
            <div class="container-img">
                <div class="img1" id="image"></div>
                <div class="img2" id="image"></div>
                <div class="img3" id="image"></div>
                <div class="img4" id="image"></div>
            </div>
            <div class="searchbar">
                <input type="text" placeholder="Recherche" v-model="searchQuery">
            </div>
        </div>
        <span class="back" @click="back">BACK</span>
    </div>
</template>

<script>
import  router from '../../router/index.js';

  export default {
    data() {
      return {
        searchQuery: "",
      };
    },
    watch: {
        searchQuery() {
            const search = this.searchQuery.toLowerCase()
            console.log(search)
            if (search === "gurky") {
                router.replace('/Step3');
            }
        }
    },

    methods: {
      back() {
        router.replace('/Step1');
      }
    }
  };
  </script>

<style src="../style/Step2.scss" scoped></style>
