<template>
  <div class="login-container">
    <div class="login-box">
      <h2>LOGIN</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            placeholder="Enter your username"
          />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Enter your password"
          />
          <div class="forgot-password">
            <a href="/forgot-password"><i class="fas fa-unlock-alt"></i> Forgot Password?</a>
          </div>
        </div>

        <button type="submit" class="login-button">Login</button>

        <div class="divider">or</div>

        <button type="button" class="social-button google" @click="loginWithGoogle">
          <i class="fab fa-google"></i> Continue with Google
        </button>
        <button type="button" class="social-button email" @click="loginWithEmail">
          <i class="fas fa-envelope"></i> Continue with Email
        </button>

        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </form>
    </div>
    <div class="login-decoration">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'LogiN',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    handleLogin() {
      if (!this.username.trim() || !this.password.trim()) {
        this.errorMessage = 'Please enter both username and password'
        return
      }
      if (this.password.length < 6) {
        this.errorMessage = 'Password must be at least 6 characters'
        return
      }

      this.errorMessage = ''
      this.$emit('login', this.username)
      this.$router.push('/')
    },
    loginWithGoogle() {
      alert('Google login clicked!')
    },
    loginWithEmail() {
      alert('Email login clicked!')
    },
    animateLogin() {
      gsap.from('.login-box', { y: 50, opacity: 0, duration: 0.8, delay: 0.3 })
      gsap.from('.input-group', { y: 30, opacity: 0, duration: 0.6, stagger: 0.2, delay: 0.8 })
      gsap.from('.login-button', { y: 20, opacity: 0, duration: 0.5, delay: 1.4 })
      gsap.to('.shape-1', { x: 20, y: 20, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.shape-2', { x: -15, y: -15, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.shape-3', { x: 10, y: -10, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    }
  },
  mounted() {
    this.animateLogin()
  }
}
</script>

<style scoped>
/* Same styles as before with new additions */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  overflow: hidden;
}

.login-box {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  z-index: 10;
  transform: translateY(0);
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 2rem;
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #555;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus {
  border-color: #42b983;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.2);
  outline: none;
}

.forgot-password {
  text-align: right;
  margin-top: 8px;
}

.forgot-password a {
  font-size: 0.85rem;
  color: #42b983;
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
  color: #3aa876;
}

.login-button {
  width: 100%;
  padding: 12px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  margin-top: 10px;
}

.login-button:hover {
  background: #3aa876;
}

.login-button:active {
  transform: scale(0.98);
}

.error-message {
  color: #e74c3c;
  margin-top: 15px;
  text-align: center;
  font-size: 0.9rem;
}

.divider {
  text-align: center;
  margin: 20px 0 10px;
  color: #aaa;
  font-size: 0.9rem;
  position: relative;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 40%;
  height: 1px;
  background: #ccc;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.social-button {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
  background: white;
  color: #333;
}

.social-button i {
  font-size: 1.2rem;
}

.social-button.google {
  color: #db4437;
  border-color: #db4437;
}

.social-button.google:hover {
  background: #db4437;
  color: white;
}

.social-button.email {
  color: #4285f4;
  border-color: #4285f4;
}

.social-button.email:hover {
  background: #4285f4;
  color: white;
}

.login-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(66, 185, 131, 0.1);
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
}

.shape-2 {
  width: 300px;
  height: 300px;
  bottom: 10%;
  right: 10%;
  background: rgba(66, 185, 131, 0.08);
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  right: 20%;
  background: rgba(66, 185, 131, 0.05);
}

@media (max-width: 480px) {
  .login-box {
    padding: 30px 20px;
    margin: 0 20px;
  }
}
</style>
