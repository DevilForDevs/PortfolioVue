<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  users: any[]
}>();

// Parse photos safely
const images = computed(() => {
  if (props.users.length > 0 && props.users[0].photos) {
    try {
      return JSON.parse(props.users[0].photos); // convert string → array
    } catch (e) {
      console.error("Invalid photos JSON:", e);
      return [];
    }
  }
  return [];
});

const currentIndex = ref(0);

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};
</script>

<template>
  <div class="heroImageWrapper" v-if="images.length">
    <!-- Left arrow -->
    <button class="arrow left" @click="prevImage">❮</button>

    <!-- Hero Image -->
    <img
      :src="images[currentIndex]"
      alt="Hero"
      class="heroImage"
    />

    <!-- Right arrow -->
    <button class="arrow right" @click="nextImage">❯</button>
  </div>

  <div v-else>
    <p>No images available</p>
  </div>
</template>



<style scoped>
.heroImageWrapper {
  position: relative;
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heroImageWrapper::before {
  content: "";
  position: absolute;
  width: 320px;
  height: 320px;
  background-color: #ffffff0a;
  border-radius: 50%;
  z-index: -1;
}

.heroImage {
  width: 220px;
  height: 250px;
  margin-bottom: 70px;
  margin-left: 10px;
  object-fit: contain;
  margin-top: 80px;

}

/* Arrow buttons */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 50%;
  user-select: none;
}

.arrow:hover {
  background: #ffffff66;
}

.arrow.left {
  left: -40px;
}

.arrow.right {
  right: -40px;
}
</style>
