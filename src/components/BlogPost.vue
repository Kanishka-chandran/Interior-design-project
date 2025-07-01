<template>
  <div class="blog-post" @click="$emit('click')">
    <div class="post-image"><img :src="post.image" :alt="post.title" /></div>
    <div class="post-content"><h3>{{ post.title }}</h3><p>{{ post.excerpt }}</p></div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'BlogPost',
  props: ['post'],
  mounted() {
    gsap.from(this.$el,{
      scrollTrigger:{trigger:this.$el,start:'top 90%',toggleActions:'play none none none'},
      y:30, opacity:0, duration:0.8
    })
  }
}
</script>




<style scoped>
.blog-post {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-post:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.post-image {
  height: 200px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-post:hover .post-image img {
  transform: scale(1.05);
}

.post-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.post-content h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
}

.post-content p {
  color: #666;
  line-height: 1.5;
  flex-grow: 1;
}

</style>
