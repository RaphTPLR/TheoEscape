<template>
    <div class="content">
        <div class="container">
            <div class="container-img">
                <div class="image"><img src="../assets/IMG_1914-min.jpg" alt=""></div>
                <div class="image"></div>
                <div class="image"></div>
                <div class="image"></div>
            </div>
            <div class="searchbar">
                <input type="text" placeholder="Recherche" v-model="searchQuery">
            </div>
        </div>
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
            if (search === "Gurky") {
                router.replace('/Step3');
            }
        }
    },
  };
  </script>

<style src="../style/Step2.scss" scoped></style>
