<template>
    <div class="content">
        <div class="container">
            <div class="img1" id="img"></div>
            <div class="img2" id="img"></div>
            <div class="img3" id="img"></div>
            <div class="img4" id="img"></div>
            <div class="img5" id="img"></div>
            <div class="img6" id="img"></div>
            <div class="img7" id="img"></div>
            <div class="img8" id="img"></div>
            <div class="img9" id="img"></div>
            <div class="img10" id="img"></div>
            <div class="img11" id="img"></div>
            <div class="img12" id="img"></div>
            <div class="img13" id="img"></div>
            <div class="img14" id="img"></div>
            <div class="img15" id="img"></div>
            <div class="img16" id="img"  @click="next"></div>
            <div class="img17" id="img"></div>
            <div class="img18" id="img"></div>
            <div class="img19" id="img"></div>
            <div class="img20" id="img"></div>
            <div class="img21" id="img"></div>
            <div class="img22" id="img"></div>
            <div class="img23" id="img"></div>
            <div class="img24" id="img"></div>
            <div class="img25" id="img"></div>
            <div class="img26" id="img"></div>
            <div class="img27" id="img"></div>
            <div class="img28" id="img"></div>
            <div class="img29" id="img"></div>
            <div class="img30" id="img"></div>
            <div class="img31" id="img"></div>
            <div class="img32" id="img"></div>
            <div class="img33" id="img"></div>
        </div>
        <span class="back" @click="back">BACK</span>
    </div>
</template>

<script>
import  router from '../../router/index.js';

export default {
  data() {
    return {
        oui: "oui",
    };
  },

  methods: {
    back() {
        router.replace('/Step4');
    },

    next() {
        router.replace('/Step6')
    }
  },
};

</script>

<style src="../style/Step5.scss" scoped></style>