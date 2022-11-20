<template>
  <div id="fond-logo">
    <img src="@/assets/manoir_logo.png" alt="lo" id="logo">
  </div>
  <header>
      <nav id="header-nav">

        <div id="tab-links">
          <router-link class="rl" @click="top()" to="/">HOME </router-link> |
          <router-link class="rl" to="/menu">MENU </router-link>
        </div>

        <div id="titre">
          <h1>Le Manoir Salé</h1>
        </div>

        <div id="tab-links">
          <router-link class="rl" to="/about">ABOUT </router-link> |
          <router-link class="rl" to="/login">PROFILE </router-link>
        </div>

      </nav>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',

  methods: {
    top(){
      this.$emit("top");
    }
  },

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

header {
  z-index : 1;
  width: 100%;
  height: 80px;
  background-color: #fff;
  text-align: center;
  overflow: hidden;
  position : sticky;
  top : 0;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
}

h1 {
  font-size: 30px;
  color: #1E3551;
  line-height: 52px;
  font-weight: 100;
  font-family: 'Great Vibes', cursive;
}

#header-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top : 8px;
  border-radius: 8px;
}

#logo {
  width: 75px;
}

#titre {
  padding-top : 6px;
  padding-left: 10px;
}

#fond-logo{
  background-color : #fff;
  width :100%;
}

.rl {
  font-family: 'Comfortaa', cursive;
  font-size : 14px;
  padding-right: 10px;
  padding-left: 10px;
  color: #dbb172;
  text-decoration: none;
}

.rl:hover {
  color: #1E3551;
  text-decoration: none;
}
</style>
