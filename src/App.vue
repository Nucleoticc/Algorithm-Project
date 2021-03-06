<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap");

body {
  margin: 0;
  padding: 0;
  background: rgb(2, 11, 228);
  /* background: linear-gradient(45deg, #fc466b, #3f5efb); */
  /* background: linear-gradient(45deg, crimson, black); */
  background: linear-gradient(45deg, black 25%, crimson 100%);
  background-attachment: fixed;
}

:root {
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
  --transition-speed: 600ms;
}

/* Scrollbar */
body::-webkit-scrollbar {
  width: 0.75rem;
  height: 0.5rem;
}
body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: crimson;
}

/* Animation */
.route-enter-from {
  opacity: 0;
}
.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
}

/* Glassmorphic */
.glass-text {
  color: #272727;
  margin: 0px 30px;
  font-size: 22px;
}
.glass-card {
  color: #ecf0f1;
  border-radius: 8px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: solid 1px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2rem);
  padding: 40px;
  text-align: center;
  max-width: 300px;
  min-width: 300px;
  min-height: 230px;
  align-self: center;
  margin: 40px;
}
.glass-card-result {
  color: #ecf0f1;
  border-radius: 8px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: solid 1px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2rem);
  padding: 40px;
  text-align: center;
  width: 80%;
  min-height: 100px;
  align-self: center;
  margin: 0px 40px;
}
</style>
