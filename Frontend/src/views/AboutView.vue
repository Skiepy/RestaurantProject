<template>
  <MyHeader></MyHeader>
  <div class="about">

    <div class="" id="DivPersonnes" style="padding-top : 60px">
      <img src="@/assets/cuisine1.jpg" alt="" class="cuisine">
      <div class="TextDivPersonnes">
        <p class="BigTextBlue" style="text-align : left">The cuisine</p>
        <p class="MiddleTextBlue">A cuisine of excellence distinguished by exceptional quality, freshness of our products,
          and a willingness by our chefs to advance the world of gastronomy. This same gastronomy respected and approved
          by the greatest critics of world fame.</p>
      </div>
    </div>

    <div class="reveal fade-bottom" id="DivPersonnes2">
      <div class="TextDivPersonnes2">
        <p class="BigTextBlue" style="text-align : right">Our Wines</p>
        <p class="MiddleTextBlue">In the cellar of Le Manoir salé restaurant, prestigious wines and those of extremely 
          limited production stand happily side by side. The wine list reveals all the abundance, history and diversity
          of the French winegrowing regions. </p>
      </div>
      <img src="@/assets/vin1.jpg" alt="" class="chefPic2"   style="margin-top: -260px">
    </div>

    <div class="reveal fade-bottom" id="DivPersonnes" style="margin-top : -100px">
      <img src="@/assets/table1.jpg" alt="" class="cuisine" style="margin-top : -60px">
      <div class="TextDivPersonnes">
        <p class="BigTextBlue" style="text-align: justify">An experience</p>
        <p class="MiddleTextBlue">Excellence and conviviality come together in the restaurant. Service at Le Manoir Salé,
          knowing and discreet, does its utmost to make a meal a pure moment of pleasure, relaxation and even discovery.</p>
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
  bottom: -15%;
  z-index: -1;
}

.BigText {
  /* Debut des polices pour le texte */
  font-family: 'Bebas Neue', cursive;
  text-align: center;
  color: #f4f4f1;
  margin-right: 170px;
  margin-left: 170px;
  padding: 100px;
  padding-top: 150px;
  padding-bottom: 300px;
  font-size: 60px;
  filter: drop-shadow(rgba(0, 0, 0, 0.24) 0px 3px 8px);
}

.BigTextBlue {
  font-family: 'Bebas Neue', cursive;
  color: #1E3551;
  font-size: 50px;
}

.MiddleText {
  font-family: 'Playfair Display', serif;
  text-align: justify;
  color: #f4f4f1;
  padding: 50px;
  font-size: 25px;
}

.MiddleTextBlue {
  font-family: 'Playfair Display', serif;
  text-align: justify;
  color: #1E3551;
  font-size: 25px;
}

.SmallText {
  font-family: 'Open Sans', sans-serif;
  text-align: justify;
  color: #f4f4f1;
  padding: 100px;
  font-size: 20px;
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
  margin-left: 20px;
  padding: 0px 60px 0px 60px;
  height: 500px;
  background-color: white;
  color: #1E3551;
}

#DivPersonnes2 {
  margin-bottom: 60px;
  padding: 0px 60px 0px 60px;
  margin-right: 20px;
  height: 500px;
  background-color: white;
  color: #1E3551;
}

.TextDivPersonnes {
  margin-top: 20px;
  margin-right: 100px;
  margin-left: 450px;
}

.TextDivPersonnes2 {
  margin-top: 20px;
  margin-left: 100px;
  margin-right: 450px;
}

.cuisine {
  padding-top : 30px;
  width: 400px;
  float: left;
  display: block;
}

.chefPic2 {
  width: 400px;
  display: flex;
  float: right;
  margin-top: -300px;
}

section .container {
}

section h2 {
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
}

section .text-container {
  display: flex;
}

section .text-container .text-box {
  margin: 20px;
  padding: 20px;
}


@media (max-width: 900px) {
  section h1 {
    font-size: 2rem;
    text-align: center;
  }

  section .text-container {
    flex-direction: column;
  }
}

.slides {
  padding-left: 2000px;
  padding-right: 2000px;
  margin-bottom: 20%;
  margin-top: 20%;
  align-items: center;
}

.reveal {
  position: relative;
  opacity: 0;
}

.reveal.active {
  opacity: 1;
}

.active.fade-bottom {
  animation: fade-bottom 1s ease-in;
}

@keyframes fade-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
