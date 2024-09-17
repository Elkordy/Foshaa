<template>
  <div class="form-container">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="username" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <div v-if="registerSuccess" class="success-message">
      Registration successful!
    </div>
    <div v-if="registerError" class="error-message">
      {{ registerError }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      registerSuccess: false,
      registerError: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await fetch('http://35.239.88.230:3000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.success) {
          this.registerSuccess = true;
          this.registerError = '';
        } else {
          this.registerError = data.message || 'Registration failed';
        }
      } catch (error) {
        this.registerError = `Error during registration: ${error.message}`;
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

.error-message {
  color: red;
  margin-top: 1em;
}
</style>

