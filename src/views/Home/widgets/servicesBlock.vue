<script setup lang="ts">
import '@fortawesome/fontawesome-free/css/all.css'
</script>

<template>
    <div class="servBlock">
        <div class="servBlockItem">
            <img src="/public/flutter.png" height="100" width="100" class="icon" />
            <div class="textContent">
                <div class="mtitle">Flutter Apps
                    <a href="https://github.com/DevilForDevs/FoodAppFlutter" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <div class="subTitle">
                    Lorem ipsum dolor sit amet <br />
                    Imperdiet Lorem ipsum dolor sit amet consectetur
                </div>
            </div>
        </div>
        <div class="servBlockItem">
            <img src="/public/reactnative.png" height="100" width="100" class="icon" />
            <div class="textContent">
                <div class="mtitle">Rect Native Apps
                    <a href="https://github.com/DevilForDevs/ScetReactNative" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <div class="subTitle">
                    Lorem ipsum dolor sit amet <br />
                    Imperdiet Lorem ipsum dolor sit amet consectetur
                </div>
            </div>
        </div>
        <div class="servBlockItem">
            <img src="/public/views.png" height="100" width="100" class="icon" />
            <div class="textContent">
                <div class="mtitle">Android Views Apps</div>
                <div class="subTitle">
                    Lorem ipsum dolor sit amet <br />
                    Imperdiet Lorem ipsum dolor sit amet consectetur
                </div>
            </div>
        </div>
        <div class="servBlockItem">
            <img src="/public/compose.png" height="100" width="100" class="icon" />
            <div class="textContent">
                <div class="mtitle">Compose Apps
                    <a href="https://github.com/DevilForDevs/ComposeYtDownloader" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <div class="subTitle">
                    Lorem ipsum dolor sit amet <br />
                    Imperdiet Lorem ipsum dolor sit amet consectetur
                </div>
            </div>
        </div>
        <div class="servBlockItem">
            <img src="/public/tkinter.png" height="100" width="100" class="icon" />
            <div class="textContent">
                <div class="mtitle">Tkinter Windows Apps</div>
                <div class="subTitle">
                    Lorem ipsum dolor sit amet <br />
                    Imperdiet Lorem ipsum dolor sit amet consectetur
                </div>
            </div>
        </div>

        <div class="servBlockItem">
            <img src="/public/csharp.png" height="100" width="100" class="icon" />
            <div class="textContent">
                <div class="mtitle">Csharp Winforms Apps</div>
                <div class="subTitle">
                    Lorem ipsum dolor sit amet <br />
                    Imperdiet Lorem ipsum dolor sit amet consectetur
                </div>
            </div>
        </div>

        <div class="servBlockItem">
            <img src="/public/javafx.png" height="100" width="120" class="icon" />
            <div class="textContent">
                <div class="mtitle">JavaFx Windows Apps</div>
                <div class="subTitle">
                    Lorem ipsum dolor sit amet <br />
                    Imperdiet Lorem ipsum dolor sit amet consectetur
                </div>
            </div>
        </div>
        <div class="servBlockItem">
            <img src="/public/larvel.png" height="100" width="100" class="icon" />
            <div class="textContent">
                <div class="mtitle">Larvel Backend Apps</div>
                <div class="subTitle">
                    Lorem ipsum dolor sit amet <br />
                    Imperdiet Lorem ipsum dolor sit amet consectetur
                </div>
            </div>
        </div>
        <div class="servBlockItem">
            <img src="/public/vue.png" height="70" width="70" class="icon" />
            <div class="textContent">
                <div class="mtitle">Vue Frontend Apps</div>
                <div class="subTitle">
                    Lorem ipsum dolor sit amet <br />
                    Imperdiet Lorem ipsum dolor sit amet consectetur
                </div>
            </div>
        </div>
        <div class="servBlockItem">
            <img src="/public/vscode.png" height="100" width="120" class="icon" />
            <div class="textContent">
                <div class="mtitle">VS code Extension</div>
                <div class="subTitle">
                    Lorem ipsum dolor sit amet <br />
                    Imperdiet Lorem ipsum dolor sit amet consectetur
                </div>
            </div>
        </div>
        <div class="servBlockItem">
            <img src="/public/mp4logo.png" height="100" width="100" class="icon" />
            <div class="textContent">
                <div class="mtitle">MP4 Praser Muxer</div>
                <div class="subTitle">
                    Lorem ipsum dolor sit amet <br />
                    Imperdiet Lorem ipsum dolor sit amet consectetur
                </div>
            </div>
        </div>



    </div>
</template>

<style scoped>
.servBlock {
    margin-left: 65px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 0.3fr));
    /* 3 equal columns */
    gap: 10px;
    /* space between cards */
    max-width: 900px;
    margin-top: 25px;
    justify-content: center;
}

.servBlockItem {
    background-color: #FFFFFF0A;
    width: 200px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    /* ✅ row layout */
    align-items: center;
    /* ✅ vertical center */
    gap: 12px;
    /* space between icon & text */
    border-radius: 10px;
}

.icon {
    flex-shrink: 0;
    /* prevents image from shrinking */
}

.textContent {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mtitle {
    color: #FD6F00;
    font-weight: 600;
    margin-bottom: 5px;
}

.subTitle {
    color: #575757;
    font-size: 0.9rem;
    line-height: 1.3;
    text-align: center;
}
</style>