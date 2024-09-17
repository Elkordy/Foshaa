<template>
  <div id="app">
    <header>
      <h1>Fosha Admin Dashboard</h1>
    </header>
    <main>
      <section>
        <h2>Dashboard</h2>
        <p>Manage activities, bookings, and user interactions.</p>
      </section>
      <section>
        <router-link to="/register" class="button">Register</router-link>
        <router-link to="/login" class="button">Login</router-link>
      </section>
      <router-view /> <!-- Important to load the routed components here -->
    </main>
    <footer>
      <p>© 2024 Fosha. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app header,
#app footer {
  text-align: center;
  background-color: #4CAF50;
  color: white;
  padding: 1em;
}

#app main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
}

section {
  margin-bottom: 1em;
  text-align: center;
}

.button {
  display: inline-block;
  margin: 1em;
  padding: 0.5em 1em;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.button:hover {
  background-color: #45a049;
}
</style>

