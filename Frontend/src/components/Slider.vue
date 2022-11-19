<!-- <template>
    <div class="app">
        <carousel >
            <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img :src="slide" :alt="slide">
            </carousel-slide>
        </carousel>
    </div>    
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import CarouselSlide from '@/components/CarouselSlide.vue';
export default {
    data(){
        return {
            slides: [
                "https://imgs.search.brave.com/Q1XA7w2vNEBSLrUOxqc6FAT5Z9Y2sX7Iu1yNFWyJE6M/rs:fit:768:519:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc1Lzcz/L2IzLzc1NzNiMzcw/MmI3MDI1NDI4MWMy/Yzg1YTY0YzJkNTI2/LmpwZw",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE831I-AMS8TxtEUsXtI6PwfuUfX5fmEBcGQ&usqp=CAU",
                "https://frigecreme.fr/wp-content/uploads/2018/06/frigecreme-dressage-assiette-souffle.jpg",
            ]
        }
    },
    components : {
        Carousel : Carousel,
        CarouselSlide : CarouselSlide,
    }
}
</script>

<style>
    .app {
        display:flex;
        justify-content: center;
    }
    .carousel {
        position:relative;
        overflow: hidden;
        width:800px;
        height:500px;
        z-index:10;
    }
    .btn {
        padding:5px 10px;
        background-color:rgba(0,0,0,0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }
</style> -->


<template>
<div>
    <transition-group name="fade" tag="div">
    <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
    </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
</div>
</template>

<script>

export default {
  name: 'HomePage',
  data() { 
    return {
      images: [
        "https://imgs.search.brave.com/Q1XA7w2vNEBSLrUOxqc6FAT5Z9Y2sX7Iu1yNFWyJE6M/rs:fit:768:519:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc1Lzcz/L2IzLzc1NzNiMzcw/MmI3MDI1NDI4MWMy/Yzg1YTY0YzJkNTI2/LmpwZw",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE831I-AMS8TxtEUsXtI6PwfuUfX5fmEBcGQ&usqp=CAU",
        "https://frigecreme.fr/wp-content/uploads/2018/06/frigecreme-dressage-assiette-souffle.jpg"
      ],
      timer: null,
      currentIndex: 0
    }
  },
  mounted: function() { 
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }}
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  width:300px;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>