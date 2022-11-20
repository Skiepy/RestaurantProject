<template>
    <MyHeader></MyHeader>
    <div class="menu">
        <h1>Today's Menu</h1>
        <img src="@/assets/paragraph-divider-23.png" alt="" class="divider">
        <div class="plats">
        <p class="titre">APPETIZER</p>
        <p class="titre">Oysters</p>
        <p class="details">12</p>
        <p class="titre">Sabayon of pearls tapioca</p>
        </div>
        <div class="plats">
        <p class="titre">STARTERS</p>
        <p class="titre">Pâté en crôute</p>
        <p class="details">home made pickles, kumquat, eggplant brûlée</p>
        <p class="titre">Roasted Veal Head</p>
        <p class="details">big deep-fried langoustine with mustard's bran by bouillon mousse, gribiche sauce</p>
        </div>
        <div class="plats">
        <p class="titre">MAIN COURSE</p>
        <p class="titre">Grilled 'Japanese Wagyu' sirloin</p>
        <p class="details">seasonal vegetables, red wine sauce with casis</p>
        <p class="titre">Green Seabass</p>
        <p class="details">green vegetables, artichoke, Bouillabaisse sauce with safran</p>
        </div>
        <div class="plats">
        <p class="titre">DESERT</p>
        <p class="details">Chef's inspiration</p>
        </div>
        <div class="plats">
        <p class="titre">WINE</p>
        <p class="details">WHITE: Reisling, Chardonnay</p>
        <p class="details">RED: Mary Rivers, Pinot Noir, Sonoma Coast</p>
        </div>
    </div>
    <img src="@/assets/paragraph-divider-23.png" alt="" class="divider">
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

<style>
@import url('https://fonts.cdnfonts.com/css/papyrus');

.menu{
    border-width:1px;
    border-style:outset;
    border-color: #dbb172;  
    background-color: #f4f4f1;
}

h1 {
    padding-bottom: 30px;
    margin-bottom: 30px;
    font-size: 30px;
    align-items: center;
    color:rgba(0, 0, 0, 0.356);
    line-height: 52px;
    font-weight: 100;
    font-family: 'Great Vibes', cursive;
}

.details{
    font-family: papyrus;
    font-size: 10px;
    align-items: center;
    color:rgba(0, 0, 0, 0.356);
}

.titre{
    padding-bottom: 20px;
    margin-bottom: 20px;
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
</style>