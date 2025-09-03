<script setup lang="ts">
import { onMounted } from "vue";

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


async function getUserDetails() {
  const url = "/api/getDetails";


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
    console.log("User details:", data);
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
    <Topnav />

    <div class="heroPar">
      <HeroDetails />
      <HeroImage />
    </div>
    <Services id="Services" />
    <ServicesBlock />
    <AboutMeTitle id="About" />
    <AboutBlock />
    <SkillsMeter />
    <Portfolio id="Portfolio" />
    <ContactTitle id="Contact" />
    <ContactInputs />
    <Mfooter />
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
</style>
