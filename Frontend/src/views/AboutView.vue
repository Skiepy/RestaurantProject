<template>
  <MyHeader></MyHeader>
  <div class="about">
    <div class="reveal fade-bottom" id="DivPersonnes">
      <img src="@/assets/cuisine1.jpg" alt="" class="chefPic">
      <div class="TextDivPersonnes" style="margin : 100px 150px 50px 150px">
        <p class="BigTextBlue" style="color:#1E3551; text-align: justify">ABOUT US</p>
        <p class="SmallTextBlue">Excellence and conviviality come together in the restaurant. Service at Le Clarence,
        knowing and discreet, does its utmost to make a meal a pure moment of pleasure, relaxation and even discovery.
        In the kitchen, a cosmopolitan team is driven by the will of highlighting extroardinary products throughout the
        seasons with dishes suffused of multiple influences.</p>
      </div>
    </div>
  </div>
  <MyFooter></MyFooter>
</template>



<script>
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';

export default {
  name: 'HomePage',

  components: {
    MyHeader, MyFooter
  }
}
</script>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

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
  margin: 10px;
  font-size: 50px;
  filter: drop-shadow(rgba(0, 0, 0, 0.24) 0px 3px 8px);
}
.BigTextBlue {
  font-family: 'Bebas Neue', cursive;
  color: #1E3551;
  font-size: 50px;
}

.MiddleTextBlue {
  font-family: 'Playfair Display', serif;
  text-align: justify;
  color: #1E3551;
  font-size: 25px;
}

.SmallTextBlue {
  /* Fin des polices pour le texte */
  font-family: 'Open Sans', sans-serif;
  text-align: justify;
  color: #1E3551;
  padding: 100px;
  font-size: 20px;
}

#DivPersonnes {
  margin-bottom: 100px;
  margin-left: 20px;
  padding: 60px;
  height: 500px;
  background-color: white;
  color: #1E3551;
}
.chefPic {
  width: 400px;
  float: left;
  display: block;
}
</style>
