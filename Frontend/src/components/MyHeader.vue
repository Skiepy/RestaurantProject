<template>
    <header>
    <h1>AU MANOIR SALE</h1>
    <nav>
      <router-link to="/">HOME  </router-link>
      <router-link to="/">ABOUT  </router-link>
      <router-link to="/">MENU  </router-link>
      <router-link to="/">CONTACT</router-link>
    </nav>
  </header>
</template>

<script>
 export default {
   name: 'MyHeader'}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  width: 100%;
  height: 300px;
  background-color:rgb(206, 184, 161);
  text-align: center;
  position: relative;
  position: fixed;
  top: 0;
  overflow: hidden;
}

h1{
  font-size: 35px;
  color:#4b4c4d;
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
  background-color: rgb(206, 184, 161);
  color: #4b4c4d;
}
  
header{
  height: 100px;
  background-color: rgb(206, 184, 161);
}

</style>
