<template>
  <span>{{ displayValue }}</span>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      displayValue: 0
    }
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        this.animateNumber()
      }
    }
  },
  methods: {
    animateNumber() {
      const start = 0
      const end = this.value
      const duration = this.duration
      const startTime = performance.now()

      const update = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        this.displayValue = Math.floor(start + (end - start) * progress)

        if (progress < 1) {
          requestAnimationFrame(update)
        }
      }

      requestAnimationFrame(update)
    }
  }
}
</script>
