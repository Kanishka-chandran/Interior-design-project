<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
  <div class="about-view">
    <!-- Hero Section with 3D Background -->
    <div class="hero-section">
      <div ref="threeContainer" class="three-canvas"></div>
      <div class="hero-overlay">
        <h1>About Our Interior Design Blog</h1>
        <p>Transforming spaces, inspiring lives</p>
      </div>
    </div>

    <!-- About Content -->
    <section class="about-content">
      <h2 class="animated-heading">Who We Are</h2>
      <p class="typing-text" ref="whoWeAreRef"></p>

      <h2 class="animated-heading">Our Mission</h2>
      <p class="typing-text" ref="missionRef"></p>
    </section>

    <!-- Animated Stats -->
    <section class="stats-section">
      <div class="stat-item">
        <h3><AnimatedNum :value="100" :duration="1500" /></h3>
        <p>Projects Completed</p>
      </div>
      <div class="stat-item">
        <h3><AnimatedNum :value="50" :duration="1800" /></h3>
        <p>Happy Clients</p>
      </div>
      <div class="stat-item">
        <h3><AnimatedNum :value="10" :duration="1200" /></h3>
        <p>Years of Experience</p>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <h2>What Our Clients Say</h2>
      <div class="testi-grid">
        <div class="testi-item">
          <p>"Absolutely transformed our living room—beautiful, elegant, functional!"</p>
          <span>- Sophia R.</span>
        </div>
        <div class="testi-item">
          <p>"Studio Kanishka exceeded our expectations. Highly recommend!"</p>
          <span>- Alex M.</span>
        </div>
        <div class="testi-item">
          <p>"From concept to reality, they nailed every detail!"</p>
          <span>- Priya S.</span>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer-section">
      <div class="footer-container">
        <div class="footer-about">
          <h2>Studio Kanishka</h2>
          <p>
            Curating soulful interiors that blend function with beauty. Follow us for design tips,
            home styling guides, and real-life transformations.
          </p>
        </div>

        <div class="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li><i class="fas fa-map-marker-alt"></i> 123 Harmony Lane, Design City, NY</li>
            <li><i class="fas fa-envelope"></i> hello@studiokanishka.com</li>
            <li><i class="fas fa-phone-alt"></i> +1 (555) 123-4567</li>
          </ul>
        </div>

        <div class="footer-social">
          <h3>Follow Us</h3>
          <div class="social-icons">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-pinterest"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        &copy; 2025 Studio Kanishka. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import AnimatedNum from '@/components/AnimatedNum.vue'

const threeContainer = ref(null)
let resizeObserver = null

// Typing Text Setup
const whoWeAreText =
  'We are passionate interior designers sharing creative inspiration, DIY tips, and expert advice to help you transform your living spaces.'
const missionText =
  "Our mission is to make beautiful, functional design accessible to everyone. Whether you're redecorating a room or building a new home, our blog is here to guide you."

const whoWeAreRef = ref(null)
const missionRef = ref(null)

const typeText = (el, text, delay = 0, speed = 200) => {
  setTimeout(() => {
    const words = text.split(' ')
    let index = 0
    const interval = setInterval(() => {
      if (index >= words.length) {
        clearInterval(interval)
        return
      }
      el.textContent += (index === 0 ? '' : ' ') + words[index]
      index++
    }, speed)
  }, delay)
}

onMounted(() => {
  if (whoWeAreRef.value) typeText(whoWeAreRef.value, whoWeAreText, 0, 150)
  if (missionRef.value) typeText(missionRef.value, missionText, 3500, 150)
  initThree()
})

onBeforeUnmount(() => {
  if (resizeObserver && threeContainer.value) {
    resizeObserver.unobserve(threeContainer.value)
    resizeObserver.disconnect()
  }
})

// 3D Background Setup
const imageURLs = [
  'https://brabbu.com/blog/wp-content/uploads/2024/10/The-Power-of-Statement-Furniture_-Elevate-Your-Interior-Design.png',
  'https://www.nobiliaindia.com/images/campaing/modular-kitchen-cabinets.jpg',
  'https://centuryply.com/blogimage/bedroom_1.png',
  'https://www.commercialinteriordesign.com/cloud/2023/05/25/pcFZyoaV-Gensler-2-1200x800.jpg',
  'https://asset.skoiy.com/9b80a6f781ff336f/0uotvkoxipal.jpg?w=970&q=90',
  'https://planner5d.com/blog/content/images/2022/09/industrial-loft.jpg',
  'https://f.hubspotusercontent10.net/hubfs/6977263/DSI%20Chalette1-1.jpg',
  'https://cityfurnish.com/blog/wp-content/uploads/2024/02/global-fusion-furniture.jpg',
  'https://foyr.com/learn/wp-content/uploads/2022/03/guide-to-art-deco-interior-design-style.jpg',
  'https://cdn.shopify.com/s/files/1/0727/7258/3762/files/japandi_living_room.webp?v=1735594013',
  'https://dropinblog.net/34241141/files/featured/Mediterranean_Cover.png',
  'https://asset.skoiy.com/9b80a6f781ff336f/imwkbhzfetty.jpg'
]

const initThree = () => {
  if (!threeContainer.value) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    threeContainer.value.clientWidth / threeContainer.value.clientHeight,
    0.1,
    1000
  )
  camera.position.z = 12

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(threeContainer.value.clientWidth, threeContainer.value.clientHeight)
  threeContainer.value.appendChild(renderer.domElement)

  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(5, 5, 5)
  scene.add(light)

  const loader = new THREE.TextureLoader()
  const cubes = []

  imageURLs.forEach((url, i) => {
    loader.load(url, (texture) => {
      const geometry = new THREE.BoxGeometry(3, 3, 3)
      const materialArray = Array(6)
        .fill()
        .map(() => new THREE.MeshBasicMaterial({ map: texture }))
      const cube = new THREE.Mesh(geometry, materialArray)

      const cols = 4
      const spacing = 5
      cube.position.x = (i % cols) * spacing - (spacing * (cols - 1)) / 2
      cube.position.y = -Math.floor(i / cols) * spacing + 2

      scene.add(cube)
      cubes.push(cube)
    })
  })

  const animate = () => {
    requestAnimationFrame(animate)
    const time = Date.now() * 0.001
    cubes.forEach((cube, i) => {
      const radius = 8 + (i % 4)
      const angle = time + i
      cube.position.x = Math.cos(angle) * radius
      cube.position.z = Math.sin(angle) * radius
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
    })
    renderer.render(scene, camera)
  }

  animate()

  resizeObserver = new ResizeObserver(() => {
    if (!threeContainer.value) return
    const width = threeContainer.value.clientWidth
    const height = threeContainer.value.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  })

  resizeObserver.observe(threeContainer.value)
}
</script>



<style scoped>
.about-view {
  font-family: Arial, sans-serif;
}

.hero-section {
  position: relative;
  height: 60vh;
  overflow: hidden;
}

.three-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-overlay {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
}

.hero-overlay h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-overlay p {
  font-size: 1.5rem;
}

.about-content {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.animated-heading {
  font-size: 2rem;
  margin-top: 2rem;
  color: #b67e56;
}

.typing-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  min-height: 3.5rem;
}

.stats-section {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
  padding: 2rem;
  background: #f9f9f9;
  text-align: center;
}

.stat-item h3 {
  font-size: 2rem;
  color: #b67e56;
}

.stat-item p {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #333;
}

.testimonials {
  background: #f0f2f5;
  padding: 4rem 2rem;
  text-align: center;
}

.testimonials h2 {
  font-size: 2rem;
  color: #b67e56;
  margin-bottom: 2rem;
}

.testi-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.testi-item {
  background: white;
  padding: 1.5rem;
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.testi-item p {
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
}

.testi-item span {
  font-weight: bold;
  font-size: 0.9rem;
  color: #555;
}

/* Footer */
.footer-section {
  background-color: #2f2f2f;
  color: #f5f5f5;
  padding: 3rem 2rem 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
}

.footer-about h2 {
  font-size: 1.8rem;
  color: #cdb891;
  margin-bottom: 1rem;
}

.footer-about p {
  font-size: 1rem;
  line-height: 1.6;
  color: #ddd;
  max-width: 300px;
}

.footer-contact h3,
.footer-social h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #cdb891;
}

.footer-contact ul {
  list-style: none;
  padding: 0;
}

.footer-contact li {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-contact i {
  color: #cdb891;
}

.footer-social .social-icons {
  display: flex;
  gap: 1rem;
}

.footer-social a {
  color: #f5f5f5;
  font-size: 1.2rem;
  transition: color 0.3s;
}

.footer-social a:hover {
  color: #cdb891;
}
.footer-social a i {
  font-size: 1.4rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  font-size: 0.85rem;
  color: #aaa;
  border-top: 1px solid #444;
  margin-top: 2rem;
}
</style>
