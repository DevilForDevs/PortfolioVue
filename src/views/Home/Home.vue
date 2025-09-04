<script setup lang="ts">
import { ref,onMounted } from "vue";


import AboutBlock from '../About/aboutBlock.vue';
import SkillsMeter from '../About/skillsMeter.vue';
import Topnav from '../commanWidgets/Topnav.vue';
import ContactInputs from '../contactme/contactInputs.vue';
import ContactTitle from '../contactme/contactTitle.vue';
import Mfooter from '../pfooter/mfooter.vue';
import Portfolio from '../portfolio/portfolio.vue';
import AboutMeTitle from './widgets/aboutMeTitle.vue';
import HeroDetails from './widgets/heroDetails.vue';
import HeroImage from './widgets/heroImage.vue';
import Services from './widgets/services.vue';
import ServicesBlock from './widgets/servicesBlock.vue';

const users = ref<any[]>([]); 
const services = ref<any[]>([]); 
const skills = ref<any[]>([]); 
const portfolioItems = ref<any[]>([]); 

async function getUserDetails() {
  const url = "https://ranjankumar.xyz/getDetails";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // parse JSON response
    users.value = data["users"]; 
    services.value=data["services"]
    skills.value=data["skills"]
    portfolioItems.value=data["portfolio"]
    console.log(data)
    return data;

  } catch (error) {
    console.error("Error fetching user details:", error);
  }
}

// Run when component is mounted
onMounted(() => {
  getUserDetails();
});
</script>

<template>
  <div>
    <Topnav :users="users" />

    <div class="heroPar">
      <HeroDetails :users="users" />
      <HeroImage :users="users"/>
    </div>
    <Services id="Services"/>
    <ServicesBlock :services="services"  />
    <AboutMeTitle id="About" />
    <AboutBlock :users="users"/>
    <SkillsMeter :skills="skills" />
    <Portfolio id="Portfolio" :portfolio-items="portfolioItems" />
    <ContactTitle id="Contact" />
    <ContactInputs />
    <Mfooter :users="users" />
  </div>
</template>

<style scoped>
.heroPar {
  padding-left: 30px;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
}
@media (max-width: 768px) {
 .heroPar{
  flex-direction: column;
  margin-top: 20px;
 }

}


</style>
