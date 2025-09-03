<script setup lang="ts">
</script>

<template>
    <div class="abody">
        <div class="heroImageWrapper">
            <img src="/public/me.png" alt="Mahmood Fazile" class="heroImage" height="200" width="50" />
        </div>
        <div>
            <div class="description">
                A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of
                code, sculpting intangible structures that shape our technological world. With fingers poised over
                keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of
                algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in intricate
                patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting
                intricate architectures and breathing life into innovative designs.In this digital atelier, they don the
                mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest
                for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled
                webs of code. designs.In this digital atelier.
            </div>
            <div class="downloadcv">
                Download CV

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

.abody{
    display: flex;
    gap: 100px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}

.description{
    width: 300px;
    font-size: 13px;
    color: #959595;
}

.downloadcv{
    background: linear-gradient(90deg, #FD6F00 0%, #E46400 100%);
    padding-top: 2px;
    padding-bottom: 2px;
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 5px;
    margin-top: 10px;
    display: inline-flex;
}
</style>