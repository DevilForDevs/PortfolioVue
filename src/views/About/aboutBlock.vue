<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  users: any[]
}>();

// Parse first photo safely
const firstImage = computed(() => {
  if (props.users.length > 0 && props.users[0].photos) {
    try {
      const parsed = JSON.parse(props.users[0].photos);
      return parsed.length > 0 ? parsed[0] : "/me.png"; // fallback
    } catch (e) {
      console.error("Invalid photos JSON:", e);
      return "/me.png";
    }
  }
  return "/me.png";
});

function downloadCV() {
  if (props.users.length > 0 && props.users[0].cv_url) {
    const link = document.createElement("a");
    link.href = props.users[0].cv_url;
    link.download = "resume.pdf"; // default filename
    link.target = "_blank"; // optional
    link.click();
  }
}
</script>

<template>
  <div class="abody">
    <div class="heroImageWrapper">
      <img :src="firstImage" alt="Profile" class="heroImage" height="200" width="50" />
    </div>
    <div>
      <div class="description">
        {{ props.users.length > 0 ? props.users[0].bio : "Loading..." }}
      </div>
      <div class="cvd">
        <div class="downloadcv" @click="downloadCV">
          Download CV
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.heroImageWrapper {
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;


}

.heroImageWrapper::before {
  content: "";
  position: absolute;
  width: 320px;
  height: 320px;
  background-color: #FFFFFF0A;
  z-index: -1;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

.heroImage {
  width: 220px;
  height: 320px;
  margin-left: 10px;
}

.abody {
  display: flex;
  gap: 100px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.description {
  width: 300px;
  font-size: 13px;
  color: #959595;
}



.downloadcv {
  background: linear-gradient(90deg, #FD6F00 0%, #E46400 100%);
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 5px;
  margin-top: 10px;
  display: inline-flex;
  
}

@media (max-width: 768px) {
  .abody {
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  



}
</style>