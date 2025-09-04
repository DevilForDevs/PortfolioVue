<script setup lang="ts">
import '@fortawesome/fontawesome-free/css/all.css'

const props = defineProps<{
  skills: {
    id: number
    name: string
    percentage: number
    icon_name: string
  }[]
}>()
</script>

<template>
  <div class="skillBlock">
    <!-- loop over skills -->
    <div v-for="skill in props.skills" :key="skill.id" class="skillItem">
      <!-- dynamic icon -->
      <i :class="skill.icon_name + ' icon'"></i>

      <div class="skillText">
        <div class="percent">
          {{ skill.percentage }}%
        </div>
        <div class="title">{{ skill.name }}</div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.skillBlock {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* 4 equal columns */
  gap: 10px;
  /* spacing between items */
  justify-items: center;
  /* center items horizontally */
  margin: 50px;
}

.skillItem {
  text-align: center;
  /* center text under icon */
}

.icon {
  font-size: 24px;
  color: #fd6f00;
  width: 30px;
  text-align: center;
  border: 5px solid #fd6f00;
  padding: 10px;
  border-radius: 50%;
}

.skillText {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.percent {
  font-weight: bold;
  color: #fd6f00;
}

.title {
  color: #959595;
}

@media (max-width: 768px) {
  .skillBlock {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* 4 equal columns */
    gap: 10px;
    /* spacing between items */
    justify-items: center;
    /* center items horizontally */
    margin: 50px;
  }
}
</style>
