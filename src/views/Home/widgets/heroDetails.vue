<script setup lang="ts">
import '@fortawesome/fontawesome-free/css/all.css'
</script>

<template>
    <div>

        <div class="message">
            Hi I am
        </div>

        <div class="name">
            Ranjan Kumar
        </div>

        <div class="role">
            Android App Developer
        </div>

        <div class="socialLinks">

            <a href="https://instagram.com/yourprofile" target="_blank">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank">
                <i class="fab fa-twitter"></i>
            </a>
        </div>

        <div class="twoButtons">
            <div class="acButto">Hire me</div>
            <div class="acButto">Download CV</div>

        </div>

        <div class="projectsDone">

            <div class="mblock">
                <div class="mnumber">5+</div>
                <div class="numt">
                    Expericence
                </div>
            </div>

            <div class="horizontalLine">

            </div>

            <div class="mblock">
                <div class="mnumber">5+</div>
                <div class="numt">
                    Project Done
                </div>
            </div>

            <div class="horizontalLine">

            </div>

            <div class="mblock">
                <div class="mnumber">5+</div>
                <div class="numt">
                    Happy clients
                </div>
            </div>


        </div>

    </div>
</template>

<style scoped>
.message {
    color: #707070;
}

.name {
    color: #959595;
}

.role {
    background: linear-gradient(90deg, #984300 0%, #FD6F00 46%, #CA5900 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;

    display: inline-block;
    font-weight: bold;
    font-size: 2rem;
}


.socialLinks {
    gap: 10px;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}

.fab {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid #575757;
    border-radius: 50%;
    transition: transform 0.2s, border-color 0.2s;
}

.fa-instagram {}

.fa-linkedin {}

.fa-twitter {}

.twoButtons {
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin-top: 15px;
}

.acButto {
    border: 1px solid #575757;
    border-radius: 7px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 10px;
    color: white;
    padding-right: 10px;
}

.acButto:hover {
    background: linear-gradient(90deg, #FD6F00 0%, #E46400 100%);

}

.projectsDone {
    background-color: #FFFFFF0A;
    margin-top: 30px;
    margin-right: 30px;
    display: inline-flex;
    flex-direction: row;
    gap: 15px;
    padding-left: 15px;
    padding-top: 10px;
    border-radius: 8px;
    padding-right: 15px;
}

.mblock {
    
}

.horizontalLine {
    width: 2px;
    height: 50px;
    background-color: #959595;
    margin-top: 5px;
    margin-bottom: 5px;
}

.mnumber {
    color: #FD6F00;
    font-weight: 900;
    font-family: 'Lato';
    font-size: 17px;
}

.numt {
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 16px;
}
</style>