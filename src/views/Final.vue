<template>
    <div class="content">
        <div class="container" style="justify-content: center">
            <p style="margin-bottom: 1rem;">Félicitation !</p>
            <p>Bon anniversaire, tu vas passer plusieurs jours à Astérix !</p>
        </div>
        <span class="back" @click="back">BACK</span>
        <img src="../assets/ballon.png" alt="" id="img1">
    </div>
</template>

<script>
import router from '../../router/index.js';

export default {
    methods: {
        back() {
            router.replace('/Step7');
        }    
    }
}

</script>

<style src="../style/Step6.scss" scoped></style>