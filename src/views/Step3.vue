<template>
    <div class="content">
        <div class="container" id="container">
            <h1>
                <span class="s1">S</span>
                <span class="s2">C</span>
                <span class="s3">R</span>
                <span class="s4">O</span>
                <span class="s5">L</span>
                <span class="s6">L</span>
            </h1>
            <div class="arrows">
                <span class="material-icons arrow1">
                    arrow_downward
                </span>
                <span class="material-icons arrow2">
                    arrow_downward
                </span>
                <span class="material-icons arrow1">
                    arrow_downward
                </span>
            </div>
            <span class="back" @click="back">BACK</span>
        </div>
        <div class="find" @click="nextStep">
            <h2>ICI</h2>
        </div>
        <div class="fake1" @click="scrollToContainer">
            <h2>ICI</h2>
        </div>
        <div class="fake2" @click="scrollToContainer">
            <h2>REMONTE</h2>
        </div>
    </div>
</template>

<script>
import  router from '../../router/index.js';

export default {
    methods: {
        scrollToContainer() {
            const container = document.getElementById('container');
            container.scrollIntoView({ behavior: 'smooth' });
        },

        nextStep() {
            const container = document.getElementById('container');
            container.scrollIntoView({ behavior: 'smooth' });
            router.replace('/Step4');
        },

      back() {
        router.replace('/Step2');
      }
    }
}
</script>

<style src="../style/Step3.scss" scoped></style>