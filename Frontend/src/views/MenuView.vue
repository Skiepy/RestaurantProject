<template>
    <MyHeader></MyHeader>
    <div class="menu">
        <img src="@/assets/31046_menu-border-png.png" alt="" class="cadre">   
        <div class="plats">
        <p class="title">APPETIZER</p>
        <p class="titre">Oysters // Sabayon of pearls tapioca</p>
        </div>
        <img src="@/assets/paragraph-divider-23.png" alt="" class="divider">
        <div class="plats">
        <p class="title">STARTERS</p>
        <p class="titre">Pâté en crôute</p>
        <p class="details">home made pickles, kumquat, eggplant brûlée</p>
        <p class="titre">Roasted Veal Head</p>
        <p class="details">big deep-fried langoustine with mustard's bran by bouillon mousse, gribiche sauce</p>
        </div>
        <img src="@/assets/paragraph-divider-23.png" alt="" class="divider">
        <div class="plats">
        <p class="title">MAIN COURSE</p>
        <p class="titre">Grilled 'Japanese Wagyu' sirloin</p>
        <p class="details">seasonal vegetables, red wine sauce with casis</p>
        <p class="titre">Green Seabass</p>
        <p class="details">green vegetables, artichoke, Bouillabaisse sauce with safran</p>
        </div>
        <img src="@/assets/paragraph-divider-23.png" alt="" class="divider">
        <div class="plats">
        <p class="title">DESERT</p>
        <p class="titre">Chef's inspiration</p>
        </div>
        <img src="@/assets/paragraph-divider-23.png" alt="" class="divider">
        <div class="plats">
        <p class="title">WINE</p>
        <p class="titre">Reisling, Chardonnay // Mary Rivers, Pinot Noir, Sonoma Coast</p>
        </div>
    </div>
    <div></div>
    <div></div>
    <MyFooter></MyFooter>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';

export default {
  name: 'HomePage',

  components: {
    MyHeader, MyFooter
  }
}
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/papyrus');
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.menu{
    padding-top: 5%;
    border-width:1px;
    border-style:outset;
    border-color: #dbb172;  
    background-color: #f4f4f1;
    padding-bottom: 5%;
}
.cadre{
    right : 20%;
    position: absolute;
    width: 60%;
}

h1 { 
    padding-bottom: 10px;
    margin-bottom: 30px;
    font-size: 30px;
    align-items: center;
    line-height: 52px;
    font-weight: 100;
    font-family: papyrus;
}

.details{
    font-family: papyrus;
    font-size: 20px;
    align-items: center;
    color:rgba(0, 0, 0, 0.356);
}

.titre{
    padding-left: 2px;
    padding-bottom: 2px;
    margin-bottom: 2px;
    font-family: 'Great Vibes', cursive;
    font-size: 20px;
    align-items: center;
    color:rgba(0, 0, 0, 0.633);
}
.plats{
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.divider{
    padding-top: 20px;
    width: 5%;
}
.title{
    padding-top: 30px;
    font-family: papyrus;
    font-size: 20px;
}
</style>