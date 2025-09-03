<script setup lang="ts">
import { ref } from "vue";

// Example list of images (replace with your own)
const images = [
  "/public/me.png",
  "/public/me.png",
  "/public/me.png"
];

const currentIndex = ref(0);

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length;
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};
</script>

<template>
  <div class="heroImageWrapper">
    <!-- Left arrow -->
    <button class="arrow left" @click="prevImage">❮</button>

    <!-- Hero Image -->
    <img
      :src="images[currentIndex]"
      alt="Hero"
      class="heroImage"
      height="230"
      width="60"
    />

    <!-- Right arrow -->
    <button class="arrow right" @click="nextImage">❯</button>
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
  height: 320px;
  margin-bottom: 70px;
  margin-left: 10px;
  object-fit: contain;
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

