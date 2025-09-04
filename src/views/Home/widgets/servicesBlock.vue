<script setup lang="ts">
import '@fortawesome/fontawesome-free/css/all.css'

const props = defineProps<{
  services: {
    service_id: number
    title: string
    description: string
    thumbnail: string
    githublink: string
  }[]
}>()
</script>

<template>
  <div class="servBlock">
    <!-- loop services -->
    <div v-for="service in props.services" :key="service.service_id" class="servBlockItem">
      <!-- thumbnail -->
      <img :src="service.thumbnail" class="icon" />

      <div class="textContent">
        <div class="mtitle">
          {{ service.title }}
          <a :href="service.githublink" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div class="subTitle">
          {{ service.description }}
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.servBlock {
  margin-left: 65px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 0.3fr));
  /* 3 equal columns */
  gap: 10px;
  /* space between cards */
  max-width: 900px;
  margin-top: 25px;
  justify-content: center;
}

.servBlockItem {
  background-color: #FFFFFF0A;
  width: 200px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  /* ✅ row layout */
  align-items: center;
  /* ✅ vertical center */
  gap: 12px;
  /* space between icon & text */
  border-radius: 10px;
}

.icon {
  width: 180px;
  height: 140px;
}

.textContent {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mtitle {
  color: #FD6F00;
  font-weight: 600;
  margin-bottom: 5px;
}

.subTitle {
  color: #575757;
  font-size: 0.9rem;
  line-height: 1.3;
  text-align: center;
}

@media (max-width: 768px) {
  .servBlock {
    margin-left: 20px;
    grid-template-columns: repeat(2, .00fr);
    /* two equal columns */
    gap: 20px;
    max-width: 100%;
    /* let it shrink */
    margin-top: 10px;
    justify-content: center;
  }

  .icon {
    height: 50px;
    width: 50px;
  }

  .servBlockItem {
    width: 130px;
  }

}
</style>