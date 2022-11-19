<template>
  <div class="homePage">
    <MyHeader></MyHeader>
    <div id="FirstDiv">
      <video autoplay muted loop plays-inline id="myVideo" class="back-video">
        <source src="@/assets/video/fond_manoir_sale.mp4" type="video/mp4">
      </video>
      <p id="text">LOREM DOLOR ULLAMCO, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
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
          <img src="@/assets/plat1.jpg" alt="" id="plat1">
          <img src="@/assets/plat2.jpg" alt="" id="plat2">
          <img src="@/assets/plat3.jpg" alt="" id="plat3">
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
// @ is an alias to /src
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';

export default {
  name: 'HomeView',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('//db.onlinewebfonts.com/c/158d85dc0d6cc6d89eff0cdf2f1d53bd?family=K2D+ExtraBold');
@import url('http://fonts.googleapis.com/css?family=Roboto');
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

#text {
  text-align: justify;
  color:#f4f4f1;
  font-family: 'Bebas Neue', cursive;
  font-size: 50px;
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 40px;
  padding-bottom: 180px;
}

#SecDiv {
  padding-top: 40px;
  padding-bottom: 40px;
  height: 500px;
  background-color: #1E3551;
  color: #f4f4f1;
  font-family: Roboto;
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

#plat2 {
  margin-left: 50px;
  width: 30%;
  max-height: 30%;
  float: left;
  display: block;
}

/* div.slide{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 150px;
  margin-top: -120px;
}
#slide1 {
    position: relative;
    width: 1000px;
    height: 600px;
    overflow: hidden;
}
#imageslide li {
    display: inline;
}
#imageslide {
    position: absolute;
    width: 5780px;
    padding: 0;
    margin: 0px 0px;
    animation-name: AutoSlide;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}
@keyframes AutoSlide {
    0%, 15%, 100% {
        left: 0px; /*1ère image*/
    /* }
    35%, 50% {
        left: -1005px; /*2ème image*/
    /* }
    70%, 85% {
        left: -2010px; /*3ème image*/
    /* }
} */

</style>
