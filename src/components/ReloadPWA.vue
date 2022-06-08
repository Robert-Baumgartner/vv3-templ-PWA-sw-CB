<template>
  <div v-if="offlineReady">
    <span>PWA kann offline verwendet werden!</span>
    <span @click="closeBtn" class="btn btn-outline-dark btn-sm ms-3 my-2"
      ><i class="fa-solid fa-xmark"></i
    ></span>
  </div>
  <div v-if="needRefresh">
    <span>Neuer Inhalt ist verfügbar!</span>
    <span @click="updateServiceWorkerBtn()" class="btn btn-outline-dark btn-sm ms-3 my-2"
      ><i class="fa-solid fa-rotate"></i
    ></span>
  </div>
</template>

<script setup>
import { useRegisterSW } from 'virtual:pwa-register/vue';

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();
const closeBtn = async () => {
  offlineReady.value = false;
  needRefresh.value = false;
};
const updateServiceWorkerBtn = async () => {
  await updateServiceWorker();
  closeBtn();
};
</script>
