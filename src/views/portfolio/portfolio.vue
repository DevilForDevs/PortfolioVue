<script setup lang="ts">
import { ref, computed } from "vue";
import "@fortawesome/fontawesome-free/css/all.css";

const props = defineProps<{
  portfolioItems: {
    id: number;
    title: string;
    category: string;
    image_url: string;
    githubLink: string;
  }[];
}>();

// Menus dynamically from categories + "All"
const menus = computed(() => ["All", ...new Set(props.portfolioItems.map(item => item.category))]);

// Active menu
const activeMenu = ref("All");

// Filtered items
const filteredItems = computed(() => {
  if (activeMenu.value === "All") {
    return props.portfolioItems;
  }
  return props.portfolioItems.filter(
    (item) => item.category === activeMenu.value
  );
});

// Change menu
const setMenu = (menu: string) => {
  activeMenu.value = menu;
};
</script>


<template>
  <div class="pbody">
    <div class="mtitle">Portfolio</div>

    <!-- Menu -->
    <div class="menusbar">
      <div v-for="menu in menus" :key="menu" class="menuItem" :class="{ active: activeMenu === menu }"
        @click="setMenu(menu)">
        {{ menu }}
      </div>
    </div>

    <!-- Filtered portfolio items -->
    <div class="items">
      <div v-for="item in filteredItems" :key="item.id" class="portfolioItem">



        <img :src="item.image_url" class="portfolioImage" />
        <div class="projectInfo">
          <div>{{ item.title }}</div>
          <div>{{ item.category }}</div>
          <a :href="item.githubLink" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.mtitle {
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  font-family: "Lato";
}

.pbody {
  margin-top: 30px;
}

.menusbar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.menuItem {
  background-color: #ffffff0a;
  padding: 5px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.menuItem:hover,
.menuItem.active {
  background: linear-gradient(90deg, #fd6f00 0%, #e46400 100%);
  color: white;
}

/* 🔥 Grid layout for portfolio */
.items {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
  padding: 10px;

  /* 👇 New */
  justify-content: center;
}

.portfolioItem {
  border-radius: 10px;
  padding: 20px;
  text-align: center;


}

.projectInfo {
  display: flex;
  background: #ffffff0a;
  justify-content: space-between;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.portfolioImage {
  width: 100%;
  height: 220px;
  object-fit: contain;
  border-radius: 8px 8px 0 0;
  background: #111;
}


</style>
