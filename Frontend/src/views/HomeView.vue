<template>
  <div class="homePage">
    <MyHeader @top="gototop()"></MyHeader>
    <div>
      <video autoplay muted loop plays-inline id="myVideo" class="back-video">
        <source src="@/assets/video/fond_manoir_sale.mp4" type="video/mp4">
      </video>
      <p class="BigText">"IN THE CENTRE OF THE PARISIAN GOLDEN TRIANGLE, A GASTRONOMIC RESTAURANT, NESTLED WITHIN A
        SUPERB 19TH CENTURY PRIVATE MANSION."</p>
    </div>

    <div class="reveal fade-bottom" id="DivPersonnes">
      <img src="@/assets/chef.jpg" alt="" class="chefPic">
      <div class="TextDivPersonnes">
        <p class="BigTextBlue" style="text-align: justify">Chef Chang</p>
        <p class="MiddleTextBlue">Brilliantly, he creates an instinctive, inspired and vibrantly modern style of
          cuisine. At Le Manoir Salé, there is no settled menu, but rather a variety of dishes based on exceptional and
          seasonal products. The land-sea associations, dear to the chef, are sublimated during each “sequence” of the
          meal by a myriad of satellite plates with marked flavours.</p>
      </div>
    </div>
    <div class="reveal fade-bottom" id="DivPersonnes2">
      <div class="TextDivPersonnes2">
        <p class="BigTextBlue" style="text-align : right">Chef Etchebest</p>
        <p class="MiddleTextBlue">In 2000, his friend Michel Portos challenged him: the MOF, the competition for the
          excellence of French know-how. True to his values, Philippe Etchebest gives everything and enters the
          prestigious circle of the best workers in France.</p>
      </div>
      <img src="@/assets/etchebest.png" alt="" class="chefPic2">
    </div>

    <section>
      <div class="container reveal fade-bottom">
        <div id="slides">
          <p class="BigTextBlue2">Enjoy our meals</p>
          <Slider></Slider>
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
  },

  methods: {
    gototop() {
      window.scroll(0,0);
    }
  },
};


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
  margin-bottom: 100px;
  margin-left: 20px;
  padding: 60px;
  height: 500px;
  background-color: white;
  color: #1E3551;
}

#DivPersonnes2 {
  padding: 60px;
  margin-right: 20px;
  padding-top: 60px;
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

.chefPic {
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
