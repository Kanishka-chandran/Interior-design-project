<template>
  <div ref="threeContainer" class="three-scene"></div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'ThreeScene',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.initScene()
  },
  methods: {
    initScene() {
      const container = this.$refs.threeContainer
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        60, // Wider field of view
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      )
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(renderer.domElement)

      // Position camera closer
      camera.position.z = 3

      const ambientLight = new THREE.AmbientLight(0xffffff, 1)
      scene.add(ambientLight)

      const loader = new THREE.TextureLoader()
      const spacing = 3 // Increased spacing
      const totalWidth = (this.images.length - 1) * spacing

      this.images.forEach((url, index) => {
        loader.load(
          url,
          texture => {
            // Larger plane geometry
            const geometry = new THREE.PlaneGeometry(3, 2) 
            const material = new THREE.MeshBasicMaterial({ 
              map: texture,
              side: THREE.DoubleSide
            })
            const plane = new THREE.Mesh(geometry, material)
            plane.position.x = index * spacing - totalWidth / 2
            scene.add(plane)
          },
          undefined,
          error => {
            console.error('Error loading image:', url, error)
          }
        )
      })

      const animate = () => {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
      }
      animate()

      window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(container.clientWidth, container.clientHeight)
      })
    }
  }
}
</script>

<style scoped>
.three-scene {
  width: 100%;
  height: 100vh; /* Full viewport height */
  position: absolute;
  top: 0;
  left: 0;
}
</style>

<style scoped>
.three-scene {
  width: 100%;
  height: 400px;
  background: #111;
  overflow: hidden;
}
canvas {
  display: block;
}
</style>
