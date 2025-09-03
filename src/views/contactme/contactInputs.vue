<script setup lang="ts">
</script>

<template>
    <div class="middleBlock">

        <div class="inputRow">
            <input type="text" placeholder="Name" class="minput" />
            <input type="text" placeholder="Email" class="minput" />
        </div>

        <div class="inputRow">
            <input type="text" placeholder="Phone Number" class="minput" />
            <input type="text" placeholder="Service of interest" class="minput" />
        </div>

        <div class="inputRow">
            <input type="text" placeholder="Timeline" class="minput" />
            <textarea class="descIn" placeholder="Project Detail..."></textarea>
        </div>

        <div class="inputRow">
            <div class="sendButton">
                <div class="msend">Send</div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.middleBlock {
    display: flex;
    gap: 20px;
    flex-direction: column;
    margin-top: 20px;
    justify-content: center;
}

.minput {
    height: 30px;
    border-color: #FFFFFF0A;
    width: 250px;
    padding-left: 10px;
    border-radius: 5px;
    outline: none;
}

.inputRow {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.sendButton {
    width: 550px;
    justify-content: flex-end;
    justify-items: flex-end;
}

.msend {
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    border: 2px solid #959595;
}

.descIn {
    height: 50px;
    border-color: #FFFFFF0A;
    width: 250px;
    padding-left: 10px;
    border-radius: 5px;
    outline: none;
    padding-top: 7px;
}
</style>