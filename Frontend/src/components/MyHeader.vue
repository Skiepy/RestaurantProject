<template>
    <header>
    <h1>AU MANOIR SALE</h1>
    <img src="@/assets/manoir_logo.png" alt="lo" id="logo">
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
  height: 200px;
  background-color: white;
  text-align: center;
  position: relative;
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
  background-color: white;
  color: white;
}

#logo{
  bottom: 0;
  margin-left: 40px;
  margin-bottom: 50px;
  width: auto;
  max-height: 40%;
  float: left;  
  display: block;
}


/* image{
  position: absolute;
  width: 100%;
  height: 100px;
  padding-top: 10px;
  padding-right: 50px ;
  line-height: 40px;
} */
</style>
