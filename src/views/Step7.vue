<template>
    <div class="content">
        <div class="container" style="justify-content: center;">
            <h1 v-if="searchQuery !== 'latin'" style="margin-bottom: 5rem;">Devine la langue</h1>
            <h1 v-if="searchQuery === 'latin'" style="margin-bottom: 5rem;">FEUR</h1>
            <div v-if="searchQuery !== 'latin'">
                <p style=" margin-bottom: 1rem; font-size: 2rem;">Ego heros comicus liber sum</p>
                <p style=" margin-bottom: 1rem; font-size: 2rem;">Nomen meum in notis fabulis quaeritur</p>
                <p style=" margin-bottom: 1rem; font-size: 2rem;">Viribus ac ingenio pugnarem pro amicis</p>
                <p style=" margin-bottom: 10rem; font-size: 2rem;">Nomen meum invenies et optime scies</p>
            </div>
            <div v-if="searchQuery === 'latin'">
                <p style=" margin-bottom: 1rem; font-size: 2rem;">Je suis un héros de bande dessinées</p>
                <p style=" margin-bottom: 1rem; font-size: 2rem;">Mon nom est recherché dans des histoires bien connues</p>
                <p style=" margin-bottom: 1rem; font-size: 2rem;">Avec ma force et mon intelligence, je me battrais pour mes amis</p>
                <p style=" margin-bottom: 10rem; font-size: 2rem;">Trouvez mon nom et vous serez le plus avisé</p>
            </div>
            <div class="searchbar" v-if="searchQuery !== 'latin'">
                <input type="text" placeholder="Recherche" v-model="searchQuery">
                <span class="material-icons">
                    search
                </span>
            </div>
            <div class="searchbar" v-if="searchQuery === 'latin'">
                <input type="text" placeholder="Recherche" v-model="searchQuery2">
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
        searchQuery2: "",
    };
  },

  watch: {
        searchQuery() {
            const search = this.searchQuery.toLowerCase()
            console.log(search)
        },

        searchQuery2() {
            const search = this.searchQuery2.toLowerCase()
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