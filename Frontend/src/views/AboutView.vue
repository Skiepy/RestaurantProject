<template>
  <MyHeader></MyHeader>
  <div class="about">
    <div>
      <video autoplay muted loop plays-inline id="myVideo" class="back-video">
        <source src="@/assets/video/fond_manoir_sale.mp4" type="video/mp4">
      </video>
      <p class="BigText">"IN THE CENTRE OF THE PARISIAN GOLDEN TRIANGLE, A GASTRONOMIC RESTAURANT, NESTLED WITHIN A
        SUPERB 19TH CENTURY PRIVATE MANSION."</p>
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
  bottom: -15%;
  z-index: -1;
}
</style>
