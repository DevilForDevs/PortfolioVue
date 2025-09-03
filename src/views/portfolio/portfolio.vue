<script setup lang="ts">
import { ref, computed } from "vue";
import "@fortawesome/fontawesome-free/css/all.css";

// Portfolio data
const portfolioItems = ref([
  { id: 1, title: "Landing Page", type: "Frontend" },
  { id: 2, title: "React Native App", type: "Mobile Apps" },
  { id: 3, title: "Vue Dashboard", type: "Frontend" },
  { id: 4, title: "Electron Notes App", type: "Desktop Apps" },
  { id: 5, title: "iOS Chat App", type: "Mobile Apps" }
]);

// Menus
const menus = ["All", "Frontend", "Mobile Apps", "Desktop Apps"];

// Active menu
const activeMenu = ref("All");

// Filtered items
const filteredItems = computed(() => {
  if (activeMenu.value === "All") {
    return portfolioItems.value;
  }
  return portfolioItems.value.filter(
    (item) => item.type === activeMenu.value
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
      <div
        v-for="menu in menus"
        :key="menu"
        class="menuItem"
        :class="{ active: activeMenu === menu }"
        @click="setMenu(menu)"
      >
        {{ menu }}
      </div>
    </div>

    <!-- Filtered portfolio items -->
    <div class="items">
      <div v-for="item in filteredItems" :key="item.id" class="portfolioItem">

        <img src="/public/cs.svg"/>
        <div class="projectInfo">
          <div>{{ item.title }}</div>
          <div>{{ item.type }}</div>
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
}

.portfolioItem {
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  
}

.projectInfo{
    display: flex;
    background: #ffffff0a;
    justify-content:space-between;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

}
</style>



