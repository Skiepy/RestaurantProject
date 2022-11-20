<template>
  <div class="about">
    <MyHeader></MyHeader>
    <div>
      <video autoplay muted loop plays-inline id="myVideo" class="back-video">
        <source src="@/assets/video/fond_manoir_sale.mp4" type="video/mp4">
      </video>
      <p class="BigText">ABOUT US</p>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';

export default {
  name: 'HomePage',

  components: {
    MyHeader
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.back-video {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.BigText {
  /* Debut des polices pour le texte */
  font-family: 'Bebas Neue', cursive;
  text-align: center;
  color: #f4f4f1;
  margin:10px;
  font-size: 150px;
  filter: drop-shadow(rgba(0, 0, 0, 0.24) 0px 3px 8px);
}
</style>
