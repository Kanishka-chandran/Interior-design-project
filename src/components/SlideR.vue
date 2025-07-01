<template>
    <div class="slider-container">
      <button @click="prevSlide" class="slider-button prev">←</button>
      <div ref="sliderContent" class="slider-content">
        <div v-for="(post, i) in posts" :key="i" class="slide" :class="{ active: currentIndex === i }">
          <img :src="post.image" :alt="post.title" />
          <div class="slide-content">
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <button @click="readMore(post.id)">Read More</button>
          </div>
        </div>
      </div>
      <button @click="nextSlide" class="slider-button next">→</button>
    </div>
  </template>

  <script>
  import { gsap } from 'gsap'

  export default {
    name: 'SlideR',
    props: ['posts'],
    data() {
      return {
        currentIndex: 0,
        interval: null
      }
    },
    mounted() {
      this.startAutoSlide()
    },
    beforeUnmount() {
      clearInterval(this.interval)
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.posts.length
        this.animateSlide()
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.posts.length) % this.posts.length
        this.animateSlide()
      },
      animateSlide() {
        gsap.to(this.$refs.sliderContent, {
          x: `-${this.currentIndex * 100}%`,
          duration: 0.8,
          ease: 'power2.out'
        })
      },
      startAutoSlide() {
        this.interval = setInterval(this.nextSlide, 5000)
      },
      readMore(id) {
        this.$router.push(`/post/${id}`)
      }
    }
  }
  </script>

  <style scoped>
  .slider-container {
    position: relative;
    width: 100%;
    height: 80vh;
    overflow: hidden;
    margin-top: 60px;
  }
  .slider-content {
    display: flex;
    height: 100%;
    transition: transform 0.8s ease;
  }
  .slide {
    min-width: 100%;
    height: 100%;
    position: relative;
  }
 .slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  transform: scale(1);
  transition: transform 5s ease; /* Controls zoom speed */
}

.slide.active img {
  transform: scale(2); /* Slight zoom */
}

  .slide-content {
    position: absolute;
    bottom: 20%;
    left: 10%;
    color: white;
    text-align: left;
    max-width: 50%;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.5s ease;
  }
  .slide.active .slide-content {
    transform: translateY(0);
    opacity: 1;
  }
  .slider-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.3);
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 10;
    transition: all 0.3s ease;
  }
  .slider-button:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  .prev {
    left: 20px;
  }
  .next {
    right: 20px;
  }
  </style>