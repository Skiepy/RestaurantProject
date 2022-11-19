<template>
  <div class="homePage">
    <MyHeader></MyHeader>
    <div id="FirstDiv">
      <video autoplay muted loop plays-inline id="myVideo" class="back-video">
        <source src="@/assets/video/fond_manoir_sale.mp4" type="video/mp4">
      </video>
      <p class="BigText">IN THE CENTRE OF THE PARISIAN GOLDEN TRIANGLE, A GASTRONOMIC RESTAURANT, NESTLED WITHIN A
        SUPERB 19TH CENTURY PRIVATE MANSION.</p>
    </div>
    <div class="DivPersonnes">
      <img src="@/assets/chef.jpg" alt="" class="chefPic">
      <div class="TextDivPersonnes">
        <p class="BigTextBlue">Chef Chang</p>
        <p class="MiddleTextBlue">Brilliantly, he creates an instinctive, inspired and vibrantly modern style of
          cuisine. At Le Clarence, there is no settled menu, but rather a variety of dishes based on exceptional and
          seasonal products. The land-sea associations, dear to the chef, are sublimated during each “sequence” of the
          meal by a myriad of satellite plates with marked flavours.</p>
      </div>
    </div>

    <div id="carrousel">

    </div>

    <section>
      <div>
        <transition-group name="fade" tag="div">
          <div v-for="i in [currentIndex]" :key="i">
            <img :src="currentImg" />
          </div>
        </transition-group>
        <a class="prev" @click="prev" href="#">&#10094; Previous</a>
        <a class="next" @click="next" href="#">&#10095; Next</a>
      </div>
      <div class="container reveal fade-bottom">
        <div>
          <Slider></Slider>
          <h2>Enjoy our meals</h2>
        </div>
      </div>
    </section>




    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';
import Slider from '@/components/Slider.vue';

export default {
  name: 'HomePage',

  components: {
    MyFooter, MyHeader, Slider
  }
}

</script>

<style>
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
  bottom: 200;
  z-index: -1;
}

#plat2 {
  margin-left: 50px;
  width: 30%;
  max-height: 100%;
  float: left;
  display: block;
}

#name {
  margin: 0;
  text-shadow: 1px 1px 2px black;
  text-align: center;
  padding-top: 20px;
  color: white;
  font-size: 100px;
  text-shadow: black 0.1em 0.1em 0.2em;
}

.BigText {
  /* Debut des polices pour le texte */
  font-family: 'Bebas Neue', cursive;
  text-align: justify;
  color: #f4f4f1;
  padding: 100px;
  padding-bottom: 500px;
  font-size: 50px;
}

.BigTextBlue {
  font-family: 'Bebas Neue', cursive;
  text-align: justify;
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
  padding: 50px;
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


.DivPersonnes {
  padding: 40px;
  padding-top: 60px;
  height: 500px;
  background-color: white;
  color: #1E3551;
  font-family: 'Open Sans', sans-serif;
}

.TextDivPersonnes {
  padding-left: 400px;
}

.chefPic {
  width: 400px;
  float: left;
  display: block;
}

section .container {
  margin: 100px;
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

.active.fade-left {
  animation: fade-left 1s ease-in;
}

.active.fade-right {
  animation: fade-right 1s ease-in;
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

@keyframes fade-left {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-right {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
