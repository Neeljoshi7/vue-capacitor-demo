<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>About Page</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <p>This Is About Page</p>
      <ion-button @click="goBackHome" full>Go Back To Home</ion-button>
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'about',
  setup() {
    const router = useRouter();

    const goBackHome = () => {
      router.push('/');
    };

    return {
      goBackHome
    };
  }
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
