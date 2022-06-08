<template>
  <div class="container d-flex flex-column align-items-center">
    <ReloadPWA />
    <h2 class="my-5 display-5">
      <span class="text-danger"><i class="far fa-heart"></i></span>
      {{ msg }}
      <span class="text-danger"><i class="far fa-heart"></i></span>
    </h2>
    <img id="landscape" src="/luca-bravo-unsplash.jpg" alt="" />
  </div>
</template>

<script setup>
import ReloadPWA from './components/ReloadPWA.vue';
const msg = 'Willkommen!';
</script>

<style>
#landscape {
  width: 100vw;
}
</style>
