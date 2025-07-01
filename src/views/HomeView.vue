<template>
  <div class="home">
    <!-- Background -->
    <div class="hero-background" :style="{ backgroundImage: `url(${heroImage})` }"></div>

    <!-- Quote section -->
    <div class="design-quote" v-if="!isLoggedIn">
      <div class="quote-content">
        <h2>"Design is not just what it looks like and feels like. Design is how it works."</h2>
        <p>- Steve Jobs</p>
        <router-link to="/login" class="explore-button">Explore Designs</router-link>
      </div>
    </div>

    <!-- Blog content section -->
    <div v-if="isLoggedIn" class="content-container">
      <SlideR :posts="blogPosts" />
      <div class="content-section">
        <h2>Latest Interior Design Trends</h2>
        <div class="blog-grid">
          <div
            v-for="post in blogPosts"
            :key="post.id"
            class="blog-post flip-card"
            @click="goToPost(post.id)"
            ref="cards"
          >
            <div class="flip-card-inner">
              <BlogPost :post="post" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SlideR from '@/components/SlideR.vue'
import BlogPost from '@/components/BlogPost.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'HomeView',
  components: { SlideR, BlogPost },
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      heroImage: 'https://media.designcafe.com/wp-content/uploads/2023/07/05120637/modern-furniture-designs.jpg',
      blogPosts: [
        {
    id: 1,
    title: 'Minimalist Living Room Designs',
    excerpt: 'Discover how minimalist design can transform your living space into a serene retreat.',
    image: 'https://brabbu.com/blog/wp-content/uploads/2024/10/The-Power-of-Statement-Furniture_-Elevate-Your-Interior-Design.png',
    content: 'Full content about minimalist designs...'
  },
  {
    id: 2,
    title: 'Modern Kitchen Concepts',
    excerpt: 'Explore innovative kitchen designs that combine functionality with aesthetic appeal.',
    image: 'https://www.nobiliaindia.com/images/campaing/modular-kitchen-cabinets.jpg',
    content: 'Full content about kitchen designs...'
  },
  {
    id: 3,
    title: 'Luxury Bedroom Ideas',
    excerpt: 'Create your perfect sanctuary with these luxurious bedroom design concepts.',
    image: 'https://centuryply.com/blogimage/bedroom_1.png',
    content: 'Full content about bedroom designs...'
  },
  {
    id: 4,
    title: 'Sustainable Interior Solutions',
    excerpt: 'Learn how to incorporate eco-friendly materials and practices into your home design.',
    image: 'https://www.commercialinteriordesign.com/cloud/2023/05/25/pcFZyoaV-Gensler-2-1200x800.jpg',
    content: 'Full content about sustainable designs...'
  },
  {
    id: 5,
    title: 'Scandinavian Style Interiors',
    excerpt: 'Balance simplicity and warmth with timeless Scandinavian aesthetics.',
    image: 'https://asset.skoiy.com/9b80a6f781ff336f/0uotvkoxipal.jpg?w=970&q=90',
    content: 'Explore how neutral tones and natural textures define this look...'
  },
  {
    id: 6,
    title: 'Industrial Loft Decor',
    excerpt: 'Exposed brick, metal finishes, and raw textures make a bold interior statement.',
    image: 'https://planner5d.com/blog/content/images/2022/09/industrial-loft.jpg',
    content: 'Full content about industrial interiors and loft living...'
  },
  {
    id: 7,
    title: 'Bohemian Chic Spaces',
    excerpt: 'Infuse your interiors with eclectic, vibrant, and relaxed boho vibes.',
    image: 'https://cdn.decorilla.com/online-decorating/wp-content/uploads/2022/05/Boho-home-decor-AD-scaled.jpeg?width=900',
    content: 'Decor tips for creating colorful, free-spirited environments...'
  },
  {
    id: 8,
    title: 'Smart Home Interiors',
    excerpt: 'Design meets technology in these cutting-edge smart homes.',
    image: 'https://f.hubspotusercontent10.net/hubfs/6977263/DSI%20Chalette1-1.jpg',
    content: 'Explore automation, voice control, and connected lighting...'
  },
  {
    id: 9,
    title: 'Coastal Interior Inspirations',
    excerpt: 'Bring the seaside indoors with breezy colors and textures.',
    image: 'https://www.bocadolobo.com/blog/wp-content/uploads/2023/06/K.A.-Interior-Design-Majestic-Interiors-With-Exclusive-Furniture-Designs.jpg',
    content: 'Ocean-inspired looks for a fresh, calming home style...'
  },
  {
    id: 10,
    title: 'Transitional Design Tips',
    excerpt: 'A perfect blend of traditional and contemporary decor styles.',
    image: 'https://cityfurnish.com/blog/wp-content/uploads/2024/02/global-fusion-furniture.jpg',
    content: 'How to balance old-world elegance with modern simplicity...'
  },
  {
    id: 11,
    title: 'Art Deco Revival',
    excerpt: 'Revamp your space with bold patterns and glamorous metallics.',
    image: 'https://foyr.com/learn/wp-content/uploads/2022/03/guide-to-art-deco-interior-design-style.jpg',
    content: 'Bring back the elegance of the 1920s in a fresh way...'
  },
  {
    id: 12,
    title: 'Japandi Interior Aesthetics',
    excerpt: 'A blend of Japanese minimalism and Scandinavian functionality.',
    image: 'https://cdn.shopify.com/s/files/1/0727/7258/3762/files/japandi_living_room.webp?v=1735594013',
    content: 'Clean lines, earth tones, and functional beauty explained...'
  },
  {
    id: 13,
    title: 'Eclectic Fusion Decor',
    excerpt: 'Break the rules with a mix of colors, textures, and global styles.',
    image: 'https://fabdiz.com/wp-content/uploads/2023/12/Step-into-a-Kerala-home-built-around-a-beautiful-traditional-courtyard.webp',
    content: 'How to artfully combine different design elements...'
  },
  {
    id: 14,
    title: 'Classic French Interiors',
    excerpt: 'Experience timeless elegance with vintage accents and ornate details.',
    image: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2024/11/Parisian-modern-interior-design-by-DECORILLA.jpeg',
    content: 'Recreate the old-world Parisian charm at home...'
  },
  {
    id: 15,
    title: 'Urban Compact Living',
    excerpt: 'Smart design solutions for small city apartments.',
    image: 'https://media.designcafe.com/wp-content/uploads/2022/06/29150132/modern-minimalist-living-room-with-bookshelf-and-sofa.jpg',
    content: 'Ideas for maximizing space without losing style...'
  },
  {
    id: 16,
    title: 'Mediterranean Home Vibes',
    excerpt: 'Warm colors, natural materials, and rustic textures create cozy living.',
    image: 'https://cdn.decorilla.com/images/800/a517a29f-2828-44dc-bde5-6cc29a4f9c86/Online-Designer-Combined-LivingDining-3D-Model-1.jpg?cv=1',
    content: 'Bring southern European charm to your space...'
  },
  {
    id: 17,
    title: 'Retro-Inspired Rooms',
    excerpt: 'Turn back time with bold colors and vintage furnishings.',
    image: 'https://images.hindustantimes.com/img/2024/07/04/1600x900/pexels-charlotte-may-5824519_1720094084936_1720094121956.jpg',
    content: 'Mid-century and vintage looks made modern again...'
  },
  {
    id: 18,
    title: 'Maximalist Expression',
    excerpt: 'More is more—layer textures, patterns, and color for visual richness.',
    image: 'https://www.culturedstone.com/wp-content/uploads/2022/04/2-scaled.jpg',
    content: 'Celebrate creativity and abundance in interior styling...'
  },
     {
        id: 19,
        title: 'Modern Farmhouse Elegance',
        excerpt: 'Blend rustic charm with contemporary design for a cozy yet sophisticated look.',
        image: 'https://static.wixstatic.com/media/838950_4d645e32c51f47329fe3b27e93a190c8~mv2.jpeg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/838950_4d645e32c51f47329fe3b27e93a190c8~mv2.jpeg',
        content: 'Full content about modern farmhouse design...'
      },
      {
        id: 20,
        title: 'Minimalist Japandi Fusion',
        excerpt: 'The perfect harmony of Japanese minimalism and Scandinavian functionality.',
        image: 'https://www.villasdecoration.com/wp-content/uploads/2022/07/Bloomingville00.jpg',
        content: 'Exploring the hybrid design trend taking the world by storm...'
      }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.isLoggedIn) {
        this.animateScrollFlip()
      } else {
        this.animateQuote()
      }
    })
  },
  methods: {
    goToPost(id) {
      this.$router.push(`/post/${id}`)
    },
    animateQuote() {
      gsap.from('.quote-content', {
        opacity: 0,
        y: 20,
        duration: 1.5,
        delay: 0.3
      })
    },
    animateScrollFlip() {
      this.$refs.cards.forEach(card => {
        gsap.from(card.querySelector('.flip-card-inner'), {
          rotateY: 180,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        })
      })
    }
  }
}
</script>

<style scoped>
.home {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.hero-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

.design-quote {
  position: absolute;
  bottom: 10%;
  left: 5%;
  max-width: 600px;
  z-index: 1;
  color: white;
  text-align: left;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.quote-content h2 {
  font-size: 2rem;
  font-weight: 300;
  font-style: italic;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.quote-content p {
  font-size: 1.2rem;
  text-align: right;
  margin-bottom: 2rem;
}

.explore-button {
  display: inline-block;
  padding: 12px 30px;
  background: #42b983;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s;
  border: 2px solid #42b983;
}

.explore-button:hover {
  background: transparent;
  color: #42b983;
  transform: translateY(-3px);
}

.content-container {
  padding-top: 80px;
  position: relative;
  z-index: 1;
  background-color: white;
}

.content-section {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin: 0 auto;
  perspective: 1200px;
}

.blog-post {
  cursor: pointer;
  height: 400px;
  width: 100%;
  display: flex;
  align-items: stretch;
}

.flip-card {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  height: 100%;
}

.flip-card-inner {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: transform 0.6s;
  height: 100%;
}
</style>