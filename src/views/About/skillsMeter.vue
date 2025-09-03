<script setup lang="ts">
import '@fortawesome/fontawesome-free/css/all.css'
</script>

<template>
    <div class="skillBlock">

        <div class="skillItem">
            <i class="fab fa-figma icon"></i>
            <div class="skillText">
                <div class="percent">100%</div>
                <div class="title">Figma</div>
            </div>
        </div>
        <div class="skillItem">
            <i class="fab fa-figma icon"></i>
            <div class="skillText">
                <div class="percent">100%</div>
                <div class="title">Figma</div>
            </div>
        </div>
        <div class="skillItem">
            <i class="fab fa-figma icon"></i>
            <div class="skillText">
                <div class="percent">100%</div>
                <div class="title">Figma</div>
            </div>
        </div>
        <div class="skillItem">
            <i class="fab fa-figma icon"></i>
            <div class="skillText">
                <div class="percent">100%</div>
                <div class="title">Figma</div>
            </div>
        </div>
        <div class="skillItem">
            <i class="fab fa-figma icon"></i>
            <div class="skillText">
                <div class="percent">100%</div>
                <div class="title">Figma</div>
            </div>
        </div>
        <div class="skillItem">
            <i class="fab fa-figma icon"></i>
            <div class="skillText">
                <div class="percent">100%</div>
                <div class="title">Figma</div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.skillBlock {
    display: flex;
    gap: 50px;
    justify-content: center;
    margin-top: 30px;
    
}

.skillItem {
    justify-items: center;
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
</style>
