<template>
    <div class="about">
        <h1>Today's Menu</h1>
        <div class="plats">
        <p class="titre">FIRST COURSE</p>
        <p class="manger">Canard Laqué</p>
        </div>
        <div class="plats">
        <p class="titre">MAIN COURSE</p>
        <p class="manger">Canard Laqué</p>
        </div>
        <div class="plats">
        <p class="titre">DESERT</p>
        <p class="manger">Canard Laqué</p>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/papyrus');

.about{
    border-width:1px;
    border-style:outset;
    border-color: #dbb172;  
}

h1 {
  font-size: 30px;
  align-items: center;
  color: #1E3551;
  line-height: 52px;
  font-weight: 100;
  font-family: 'Great Vibes', cursive;
}

.manger{
    font-family: papyrus;
    font-size: 10px;
    align-items: center;
    color:rgba(0, 0, 0, 0.633);
}

.plats{
    font-family: papyrus;
    font-size: 20px;
    align-items: center;
    color:rgba(0, 0, 0, 0.633);
}

</style>