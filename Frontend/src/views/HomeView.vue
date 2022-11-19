<template>
  <div class="homePage">
    <MyHeader></MyHeader>
    <div id="FirstDiv">
      <video autoplay muted loop plays-inline id="myVideo" class="back-video">
        <source src="@/assets/video/fond_manoir_sale.mp4" type="video/mp4">
      </video>
      <p id="BigText">LOREM DOLOR ULLAMCO, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.</p>
    </div>
    <div id="SecDiv">
      <img src="@/assets/chef.jpg" alt="" id="chefPic">
      <p>Chef Chang</p>
      <p>Plat préféré : le chat</p>
    </div>
    <div id="ThridDiv">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi voluptatum asperiores impedit unde a
        placeat tenetur nobis sequi excepturi. Corrupti molestiae dolore dolorem delectus unde, nam alias repellat
        dolores!</p>
      <div id="carrousel">

      </div>
      <section>
        <div class="container reveal fade-bottom">
          <div class="slideshow-container">

          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="main.jpg" style="width:100%">
          </div>

          <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="plat_rouge.jpg" style="width:100%">
          </div>

          <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="poisson.png" style="width:100%">
          </div>

          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
          </div>
          <br>

          <div style="text-align:center">
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
          </div>
          <h2>Enjoy our meals</h2>
          <div class="text-container">
            <div class="text-box">
              <img src="" alt="">
            </div>
            <div class="text-box">
              <img src="" alt="">
            </div>
            <div class="text-box">
              <img src="" alt="">
            </div>
          </div>
        </div>
      </section>
    </div>



    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';

export default {
  name: 'HomeView',
  methods : {

  },
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('//db.onlinewebfonts.com/c/158d85dc0d6cc6d89eff0cdf2f1d53bd?family=K2D+ExtraBold');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
@import url('https://fonts.cdnfonts.com/css/source-sans-pro');

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
  font-family: K2D;
  font-size: 100px;
  text-shadow: black 0.1em 0.1em 0.2em;
}

#BigText{
  font-family: 'Bebas Neue', cursive;
  text-align: justify;
  color:#f4f4f1;
  padding : 100px;
  font-size: 50px;
}

#BigTextYellow{
  font-family: 'Bebas Neue', cursive;
  text-align: justify;
  color:#dbb172;
  padding : 100px;
  font-size: 50px;
}

#MiddleText{
  text-align: justify;
  color:#f4f4f1;
  padding : 100px;
  font-size: 30px;
}

#SmallText{

}


#SecDiv {
  padding-top: 40px;
  padding-bottom: 40px;
  height: 500px;
  background-color: #1E3551;
  color: #f4f4f1;
  font-family: 'Open Sans', sans-serif;

}

#SecDiv p {
  padding-left: 463px;
  padding-right: 200px;
  margin-left: 50px;
  margin-top: 20px;
  padding-top: 20px;
  text-align: justify;
}

#chefPic {
  margin-left: 50px;
  width: auto;
  max-height: 100%;
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

* {box-sizing:border-box}


.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}


.mySlides {
  display: none;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}
/* .text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
} */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

</style>
