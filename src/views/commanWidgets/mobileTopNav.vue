<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps<{
  users: any[]
}>();

// state for menu open/close
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="topBar">
    <!-- Hamburger -->
    <img src="/public/hambu.svg" class="hamburger" @click="toggleMenu" :class="{ rotate: isOpen }" />

    <!-- Logo -->
    <div class="logo">
      {{ props.users.length > 0 ? props.users[0].name.split(" ")[0] : "Loading..." }}
    </div>

    <!-- Hire Button -->
    <div class="hireButton">
      Hire Me
    </div>
  </div>

  <!-- Navigation -->
  <nav class="navBox" :class="{ show: isOpen }">
    <div class="navitem">
      <router-link to="/">Home</router-link>
    </div>
    <div class="navitem">
      <router-link :to="{ path: '/', hash: '#Services' }">Services</router-link>
    </div>
    <div class="navitem">
      <router-link :to="{ path: '/', hash: '#About' }">About</router-link>
    </div>
    <div class="navitem">
      <router-link :to="{ path: '/', hash: '#Portfolio' }">Portfolio</router-link>
    </div>
    <div class="navitem">
      <router-link :to="{ path: '/', hash: '#Contact' }">Contact me</router-link>
    </div>
  </nav>
</template>

<style scoped>
.topBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
}

.hamburger {
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.hamburger.rotate {
  transform: rotate(360deg);
}

/* Logo style */
.logo {
  background: linear-gradient(90deg, #FA6E00 0%, #E60026 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
  font-weight: bold;
}

/* Hire button */
.hireButton {
  background: linear-gradient(90deg, #FD6F00 100%, #E46400 100%);
  color: #FFFFFF;
  font-size: 16px;
  height: 30px;
  padding: 5px 8px 0px 8px;
  
  border-radius: 5px;
}

/* Nav hidden by default */
.navBox {
  display: none;
  flex-direction: column;
  gap: 12px;
  position: absolute;
  top: 60px;
  left: 20px;
  right: 50px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: grey;
  width: 150px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;

}

/* When menu is open */
.navBox.show {
  display: flex;

}

.navitem {}

.navitem a {
  text-decoration: none;
  color: inherit;
}

.navitem a:hover {
  color: #FD6F00;
}
</style>
