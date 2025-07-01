<template>
  <div class="content-section">
    <h2>Latest Interior Design Trends</h2>
    <div class="blog-grid">
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @click="goToPost(post.id)"
      />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap' // This should be in BlogGrid.vue, not HomeView.vue
import BlogPost from '@/components/BlogPost.vue'

export default {
  name: 'BlogGrid',
  components: { BlogPost },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  mounted() {
    gsap.from('.blog-grid', { 
      opacity: 0, 
      y: 50, 
      duration: 1, 
      delay: 0.5 
    })
  },
  methods: {
    goToPost(id) {
      this.$emit('navigate', id)
    }
  }
}
</script>

<style scoped>
.content-section {
  padding: 2rem;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
  color: #333;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>