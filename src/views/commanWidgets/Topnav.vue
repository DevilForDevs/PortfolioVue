<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="topBar">

    <div class="logo">
      Ranjan
    </div>

    <nav class="navBox">

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

    <div class="hireButton">
      Hire Me
    </div>



  </div>
</template>

<style scoped>
.logo {
  background: linear-gradient(90deg, #FA6E00 0%, #E60026 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  display: inline-block;
  background-size: 100%;
  font-size: 30px;
  font-weight: bold;
}

.topBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
}

.navitem {
  color: #959595;
}

.navitem:hover {
  color: #FD6F00;
}

.navBox {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.hireButton {
  background: linear-gradient(90deg, #FD6F00 100%, #E46400 100%);
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  color: #FFFFFF;
  font-size: 16px;

}
</style>