<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>About Page</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <p>This Is About Page</p>

      <!-- Button to navigate back to the Home page -->
      <ion-button @click="goBackHome" full>Go Back To Home</ion-button>
    </ion-content>
  </ion-app>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

// Initializing router
const router = useRouter();

// Function to navigate back to the Home page
const goBackHome = () => {
  router.push("/");
};
</script>

<style></style>
