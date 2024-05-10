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

      <!-- <ion-list style="width: 30%;"> -->
      <!-- <ion-item class="custom-item-1"> -->
        <ion-select
        interface="popover"
        class="custom-select-box"
        placeholder="Order By"
        >
        <ion-select-option value="apples">Apples</ion-select-option>
        <ion-select-option value="oranges">Oranges</ion-select-option>
        <ion-select-option value="bananas">Bananas</ion-select-option>
          
        </ion-select>
      <!-- </ion-item> -->
    <!-- </ion-list> -->

      <!-- Button to navigate to the About page -->
      <ion-button @click="goToAbout" full>Go to About</ion-button>

      <!-- Button to show an alert dialog -->
      <ion-button id="present-alert" @click="showDialogAlert" full
        >Show Alert Box</ion-button
      >
      <!-- aria-label="Fruit" -->
      
    </ion-content>

    
  </ion-app>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { Dialog } from "@capacitor/dialog";
import { IonList, IonItem, IonSelect, IonSelectOption, IonPopover } from "@ionic/vue";

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

<style>

ion-popover [popover]:not(:popover-open):not(dialog[open]) {
    display: contents;
}
/* Add any custom styles for ion-select */
/* For example, to reduce the dropdown size */
.ion-select-popover {
  max-width: 200px; /* Adjust the width as needed */
}

.popover-content{
  bottom: 12px;
    top: 182px !important;
    left: 12px;
    transform-origin: left top;
    transform: scale(1);
    max-height: max-content !important;
}

.custom-select-box{
  border: 1px solid black;
  border-radius: 8px;
  width: 15%;
}
</style>
