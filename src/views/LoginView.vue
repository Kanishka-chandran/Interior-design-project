<template>
  <LogiN @login="onLoginSuccess" />
</template>

<script>
import LogiN from '@/components/LogiN.vue'

export default {
  name: 'LoginView',
  components: {
    LogiN
  },
  methods: {
    onLoginSuccess(username) {
      console.log('User logged in:', username)
      // Here you might redirect or fetch user data
    }
  }
}
</script>
