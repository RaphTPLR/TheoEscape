<template>
  <router-view />
</template>

<script>
export default {
  methods: {
    disableScroll() {
      document.body.style.overflow = 'hidden';
    },
    enableScroll() {
      document.body.style.overflowY = 'scroll';
    }
  },
  watch: {
    $route(to, from) {
      if (from.path === '/Step3') {
        this.disableScroll();
      }
      if (to.path === '/Step3') {
        this.enableScroll();
      }
    }
  }
}
</script>