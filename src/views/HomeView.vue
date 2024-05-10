<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Vue Capacitor</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <p>The world is your oyster.</p>
      <p>If you get lost, the <a href="https://ionicframework.com/docs">docs</a> will be your guide Neel.</p>
      <ion-button @click="goToAbout" full>Go to About</ion-button>
      <ion-button id="present-alert" @click="showDialogAlert" full>Show Alert Box</ion-button>
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Dialog } from '@capacitor/dialog';

export default defineComponent({
  name: 'home',
  setup() {
    const router = useRouter();

    const goToAbout = () => {
      router.push('/about');
    };
    
    const showDialogAlert = async () => {
      await Dialog.alert({
        title: 'Stop',
        message: 'this is dialog box for testing',
      });
      // await Modals.alert({
      //     title: 'Alert',
      //     message: 'This is an example alert box'
      // });
    };

    return {
      goToAbout,
      showDialogAlert
    };
  }
});
</script>


<style scoped></style>
