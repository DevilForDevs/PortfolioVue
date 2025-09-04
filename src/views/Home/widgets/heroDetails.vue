<script setup lang="ts">
import '@fortawesome/fontawesome-free/css/all.css'
import { computed } from "vue"

const props = defineProps<{
  users: {
    id: number
    name: string
    email: string
    phone: string
    role: string
    bio: string
    cv_url: string
    instagramProfile: string
    playConsoleProfile: string
    linkedInProfile: string
    githubProfile: string
    expyear: string
    projectDone: string
    happyClient: string
  }[]
}>()

// get first user safely
const user = computed(() => props.users.length > 0 ? props.users[0] : null)
</script>

<template>
  <div class="mwrap">
    <div class="message">Hi I am</div>

    <div class="name">
      {{ user ? user.name : "Loading..." }}
    </div>

    <div class="role">
      {{ user ? user.role : "Loading..." }}
    </div>

    <!-- Social Links -->
    <div class="socialLinks" v-if="user">
      <a :href="user.instagramProfile" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
      <a :href="user.linkedInProfile" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a>
      <a :href="user.githubProfile" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a :href="user.playConsoleProfile" target="_blank">
        <i class="fab fa-google-play"></i>
      </a>
    </div>

    <!-- Buttons -->
    <div class="twoButtons" v-if="user">
      <div class="acButto">Hire me</div>
      <a :href="user.cv_url" target="_blank" class="acButto">Download CV</a>
    </div>

    <!-- Experience / Projects / Clients -->
    <div class="projectsDone" v-if="user">
      <div class="mblock">
        <div class="mnumber">{{ user.expyear }}</div>
        <div class="numt">Experience</div>
      </div>

      <div class="horizontalLine"></div>

      <div class="mblock">
        <div class="mnumber">{{ user.projectDone }}</div>
        <div class="numt">Project Done</div>
      </div>

      <div class="horizontalLine"></div>

      <div class="mblock">
        <div class="mnumber">{{ user.happyClient }}</div>
        <div class="numt">Happy Clients</div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.message {
  color: #707070;
}

.name {
  color: #959595;
}

.role {
  background: linear-gradient(90deg, #984300 0%, #FD6F00 46%, #CA5900 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  display: inline-block;
  font-weight: bold;
  font-size: 2rem;
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

.fa-instagram {}

.fa-linkedin {}

.fa-twitter {}

.twoButtons {
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 15px;
}

.acButto {
  border: 1px solid #575757;
  border-radius: 7px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 10px;
  color: white;
  padding-right: 10px;
}

.acButto:hover {
  background: linear-gradient(90deg, #FD6F00 0%, #E46400 100%);

}

.projectsDone {
  background-color: #FFFFFF0A;
  margin-top: 30px;
  margin-right: 30px;
  display: inline-flex;
  flex-direction: row;
  gap: 15px;
  padding-left: 15px;
  padding-top: 10px;
  border-radius: 8px;
  padding-right: 15px;
}

.mblock {}

.horizontalLine {
  width: 2px;
  height: 50px;
  background-color: #959595;
  margin-top: 5px;
  margin-bottom: 5px;
}

.mnumber {
  color: #FD6F00;
  font-weight: 900;
  font-family: 'Lato';
  font-size: 17px;
}

.numt {
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 16px;
}

@media (max-width: 768px) {
  .mwrap {
    align-items: center;
    justify-content: center;
    justify-items: center;
  }


}
</style>