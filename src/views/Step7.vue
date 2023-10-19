<template>
    <div class="content">
        <div class="container" style="justify-content: center;">
            <p style=" margin-bottom: 1rem">Mon premier est</p>
            <p style=" margin-bottom: 1rem">Mon deuxième est</p>
            <p style=" margin-bottom: 10rem">Mon tout est Astérix</p>
            <div class="searchbar">
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
    };
  },

  watch: {
        searchQuery() {
            const search = this.searchQuery.toLowerCase()
            console.log(search)
            if (search === "astérix") {
                router.replace('/Final');
            }
        }
    },

    methods: {
        back() {
            router.replace('/Step6');
        }   
    }
};

</script>

<style src="../style/Step6.scss" scoped></style>