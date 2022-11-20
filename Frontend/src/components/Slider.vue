<template>
<div>
    <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
    </div>
</div>
</template>

<script>

export default {
  name: 'HomePage',
  data() { 
    return {
      images: [
        "https://imgs.search.brave.com/Q1XA7w2vNEBSLrUOxqc6FAT5Z9Y2sX7Iu1yNFWyJE6M/rs:fit:768:519:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc1Lzcz/L2IzLzc1NzNiMzcw/MmI3MDI1NDI4MWMy/Yzg1YTY0YzJkNTI2/LmpwZw",
        "https://imgs.search.brave.com/bdQ_SC2Xagevg2EWQns1c1eNkasfYPWz7yCNOv8-x9E/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/Z2FieW4uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzAx/L2ltYWdlczJwaG90/by1jdWlzaW5lLWdh/c3Ryb25vbWlxdWUt/NDAuanBn",
        "https://imgs.search.brave.com/BITnhkJ65e4MJgOusEE9FvIgxCJkI3eeyshHQdd7pI0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE5Lzdm/LzliLzE5N2Y5Yjdj/N2I3MjU2MGE0Yjdi/MzZiNzAyODk3M2U5/LmpwZw"
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
      this.timer = setInterval(this.next, 2000);
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

/* .fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
  padding-bottom: 20%;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
  padding-bottom: 20%;
} */

img {
  width:60%;
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