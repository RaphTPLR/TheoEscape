<template>
    <div class="content">
        <div class="container">
            <div class="title">
                <h1>ESCAPE GAME</h1>
                <h2>DERNIERE ETAPE</h2>
            </div>
            <div class="btn" @click="nextStep">GO</div>
        </div>
    </div>
</template>

<style src="../style/Home.scss" scoped></style>

<script>
import  router from '../../router/index.js';

export default {
    methods: {
        nextStep() {
            router.replace('/Step1');
        }
    }
}
</script>
