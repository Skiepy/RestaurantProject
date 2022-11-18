<template>
    <header>
    <h1>AU MANOIR SALE</h1>
    <img src="manoir_logo.jpg" alt="logo">
    <nav>
      <router-link to="/">HOME  </router-link> |
      <router-link to="/">ABOUT  </router-link> |
      <router-link to="/">MENU  </router-link> |
      <router-link to="/">CONTACT </router-link>
    </nav>
  </header>
</template>

<script>
 export default {
   name: 'MyHeader'}
</script>

<style scoped>
header{
  width: 100%;
  height: 300px;
  background-color:#dbb172;
  text-align: center;
  position: relative;
  position: fixed;
  top: 0;
  overflow: hidden;
}

h1{
  font-size: 35px;
  color: #1E3551;
  line-height: 52px;
  text-transform: uppercase;
  font-weight: 100;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
nav{
  position: absolute;
  bottom: 0;
  height: 60px;
  line-height: 10px;
  width: 100%;
  background-color: #dbb172;
  color: #1E3551;
}

header{
  height: 100px;
  background-color: #dbb172;
}

image{
  height: 20px;
  padding-top: 10px;
  padding-right: 50px ;
}
</style>
