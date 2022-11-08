<template>
  <div class="homePage">
    <MyHeader></MyHeader>
    <div id="FirstDiv">
      <h1 id="name">Le Manoir Salé</h1>
      <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.</p>
    </div>
    <div id="SecDiv">
      <img src="@/assets/chef.jpg" alt="" id="chefPic">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.</p>
    </div>
    <div id="ThridDiv">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi voluptatum asperiores impedit unde a
        placeat tenetur nobis sequi excepturi. Corrupti molestiae dolore dolorem delectus unde, nam alias repellat
        dolores!</p>
      <div id="carrousel">
        
      </div>
      <section>
        <div class="container reveal fade-bottom">
          <h2>Enjoy our meals</h2>
          <div class="text-container">
            <div class="text-box">
              <img src="@/assets/logo.png" alt="">
            </div>
            <div class="text-box">
              <img src="@/assets/logo.png" alt="">
            </div>
            <div class="text-box">
              <img src="@/assets/logo.png" alt="">
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
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap');

body {
  margin: 0;
  padding: 0;
}

#FirstDiv {
  background-image: url(@/assets/temp3.jpg);
  min-height: 1000px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#name {
  margin: 0;
  text-align: center;
  padding-top: 300px;
  color: white;
  font-family: 'Tangerine', cursive;
  font-size: 100px;
  text-shadow: black 0.1em 0.1em 0.2em;
}

#text {
  text-align: center;
  color: white;
  font-family: 'Tangerine', cursive;
  font-size: 50px;
  padding-left: 200px;
  padding-right: 200px;
}

#SecDiv {
  padding-top: 250px;
  padding-bottom: 250px;
  height: 500px;
  background-color: lightgreen;
}

#SecDiv p {
  padding-left: 463px;
  padding-right: 200px;
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
</style>
