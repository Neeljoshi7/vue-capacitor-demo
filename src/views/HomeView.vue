<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Vue Capacitor</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <p>The world is your oyster.</p>
      <p>
        If you get lost, the
        <a href="https://ionicframework.com/docs">docs</a> will be your guide
        Neel.
      </p>

      <!-- Button to navigate to the About page -->
      <ion-button @click="goToAbout" full>Go to About</ion-button>

      <!-- Button to show an alert dialog -->
      <ion-button id="present-alert" @click="showDialogAlert" full
        >Show Alert Box</ion-button
      >
    </ion-content>
  </ion-app>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { Dialog } from "@capacitor/dialog";

// Initializing router
const router = useRouter();

// Function to navigate to the About page
const goToAbout = () => {
  router.push("/about");
};

// Function to show a dialog alert
const showDialogAlert = async () => {
  await Dialog.alert({
    title: "Stop",
    message: "this is dialog box for testing",
  });
};
</script>

<style scoped></style>
