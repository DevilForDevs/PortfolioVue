<script setup lang="ts">
import GmailPhone from './gmailPhone.vue';


const props = defineProps<{
  users: any[]
}>();



</script>

<template>
  <div class="fitems">
    <div class="logo">
      {{ props.users.length > 0 ? props.users[0].name.split(" ")[0] : "Loading..." }}
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


    <div class="socialLinks" v-if="props.users.length > 0">
      <a :href="props.users[0].instagramProfile" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
      <a :href="props.users[0].linkedInProfile" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a>
      <a :href="props.users[0].githubProfile" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a :href="props.users[0].playConsoleProfile" target="_blank">
        <i class="fab fa-google-play"></i>
      </a>
    </div>


    <GmailPhone v-if="props.users.length > 0" :email="props.users[0].email" :phone="props.users[0].phone" />


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
  font-size: 20px;
  font-weight: bold;
}

.fitems {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  flex-direction: column;
  margin-top: 50px;
}

.navitem {
  color: #959595;
  font-size: 14px;
}

.navitem:hover {
  color: #FD6F00;
}

.navBox {
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 10px;
}

.socialLinks {
  gap: 10px;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #575757;
  border-radius: 50%;
  transition: transform 0.2s, border-color 0.2s;
}
</style>