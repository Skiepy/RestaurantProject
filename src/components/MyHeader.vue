<template>
    <header>
    <h1>AU MANOIR SALE</h1>
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link to="/">ABOUT</router-link>
      <router-link to="/">MENU</router-link>
      <router-link to="/">CONTACT</router-link>
    </nav>
  </header>
</template>

<script>
 export default {
   name: 'MyHeader'}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>@import "compass/css3";

@import "compass/css3";
@import "compass/reset";


header{
  width: 100%;
  height: 300px;
  background-color: #3498db;
  text-align: center;
  position: relative;
  position: fixed;
  top: 0;
  overflow: hidden;
}

h1{
    font-size: 42px;
    color: #fff;
    line-height: 230px;
    text-transform: uppercase;
    font-weight: 100;
  }
  nav{
    position: absolute;
    bottom: 0;
    height: 60px;
    line-height: 60px;
    width: 100%;
    background-color: rgba(0,0,0,.1);
  }
   
  header{
    height: 60px;
    background-color: rgba(52,152,219,.9);
  }
</style>