<template>
  <div class="form-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <div v-if="loginSuccess" class="success-message">
      <i class="fas fa-check-circle"></i> Login successful!
    </div>
    <div v-if="loginError" class="error-message">
      {{ loginError }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      loginSuccess: false,
      loginError: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://35.239.88.230:3000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });

        // Log the response status and data to debug
        console.log('Response Status:', response.status);
        
        const data = await response.json();
        console.log('Response Data:', data); // Debugging log to check the response

        if (response.ok && data.success) { // Ensure both status OK and success are true
          this.loginSuccess = true;
          this.loginError = '';
        } else {
          this.loginError = data.message || 'Login failed';
          this.loginSuccess = false; // Ensure login success is false when there's an error
        }
      } catch (error) {
        this.loginError = `Error during login: ${error.message}`;
        this.loginSuccess = false; // Handle login failure case
      }
    }
  }
};
</script>

<style scoped>
.form-container {
  background-color: #fff;
  padding: 2em;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 2em auto;
  text-align: center;
}

input {
  display: block;
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.success-message {
  color: green;
  margin-top: 1em;
}

.success-message i {
  margin-right: 0.5em;
}

.error-message {
  color: red;
  margin-top: 1em;
}
</style>

