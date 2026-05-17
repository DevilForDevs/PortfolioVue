<script setup lang="ts">
import { ref, onMounted } from "vue";


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

function makeFallbackThumb(label: string) {
  const text = encodeURIComponent(label || 'Static');
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="140" viewBox="0 0 180 140">
      <rect width="180" height="140" rx="12" fill="#1b1b1b" />
      <rect x="18" y="18" width="144" height="104" rx="10" fill="#fd6f00" opacity="0.18" />
      <text x="90" y="74" text-anchor="middle" dominant-baseline="middle" fill="#fd6f00" font-family="Arial, sans-serif" font-size="16" font-weight="700">${text}</text>
    </svg>
  `)}`;
}

async function getUserDetails() {
  const url = "api/getUser";
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

    // backend returns: user, social_links, statics, hero_images, projects, skills
    const rawUser = data.user ?? (data.users && data.users[0]) ?? null;
    const mappedUser = rawUser ? { ...rawUser } : null;

    const heroImageList = Array.isArray(data.hero_images) ? data.hero_images : [];

    if (mappedUser && heroImageList.length > 0) {
      const heroPhotos = heroImageList
        .map((image: any) => image.image_url ?? image.image ?? image.url ?? image.path ?? image.photo ?? image)
        .filter((image: any) => typeof image === 'string' && image.length > 0);

      if (heroPhotos.length > 0) {
        mappedUser.photos = JSON.stringify(heroPhotos);
      }
    }

    if (mappedUser && Array.isArray(data.social_links)) {
      data.social_links.forEach((link: any) => {
        const key = (link.platform_name || link.platform || link.name || '').toString().toLowerCase();
        const urlVal = link.profile_url ?? link.url ?? link.link ?? link.value ?? null;
        if (!urlVal) return;
        if (key.includes('instagram')) mappedUser.instagramProfile = urlVal;
        else if (key.includes('linkedin')) mappedUser.linkedInProfile = urlVal;
        else if (key.includes('github')) mappedUser.githubProfile = urlVal;
        else if (key.includes('play') || key.includes('google')) mappedUser.playConsoleProfile = urlVal;
        else mappedUser[key] = urlVal;
      });
    }

    users.value = mappedUser ? [mappedUser] : [];

    services.value = (data.projects ?? data.services ?? data.statics ?? []).map((item: any, idx: number) => ({
      service_id: item.service_id ?? item.id ?? idx,
      title: item.title ?? item.project_name ?? 'Project',
      description: item.description ?? item.project_description ?? '',
      thumbnail: item.thumbnail ?? item.image_url ?? item.project_image ?? makeFallbackThumb(item.title ?? item.project_name ?? 'Project'),
      githublink: item.githublink ?? item.githubLink ?? item.github_link ?? ''
    }));

    skills.value = (data.skills ?? []).map((s: any, idx: number) => ({
      id: s.id ?? idx,
      name: s.name ?? s.title ?? s.skill_name ?? 'Skill',
      percentage: s.percentage ?? s.level ?? s.value ?? 0,
      icon_name: s.icon_name ?? s.icon ?? 'fas fa-star'
    }));

    portfolioItems.value = (data.projects ?? data.portfolio ?? []).map((p: any, idx: number) => ({
      id: p.id ?? idx,
      title: p.title ?? p.name ?? 'Project',
      category: p.category ?? p.type ?? (p.tags && p.tags[0]) ?? 'All',
      image_url: p.image ?? p.image_url ?? p.thumbnail ?? '',
      githubLink: p.github_link ?? p.githubLink ?? p.repo ?? p.link ?? ''
    }));

    console.log('Mapped backend data:', {
      users: users.value,
      services: services.value,
      skills: skills.value,
      portfolio: portfolioItems.value
    });

    if (mappedUser) {
      console.log('Social links mapped:', {
        instagramProfile: mappedUser.instagramProfile,
        linkedInProfile: mappedUser.linkedInProfile,
        githubProfile: mappedUser.githubProfile,
        playConsoleProfile: mappedUser.playConsoleProfile
      });
    }

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
      <HeroImage :users="users" />
    </div>
    <Services id="Projects" />
    <ServicesBlock :services="services" />
    <AboutMeTitle id="About" />
    <AboutBlock :users="users" />
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
  .heroPar {
    flex-direction: column;
    margin-top: 20px;
  }

}
</style>
