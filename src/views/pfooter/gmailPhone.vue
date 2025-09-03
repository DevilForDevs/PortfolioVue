<script setup lang="ts">
import '@fortawesome/fontawesome-free/css/all.css'
</script>

<template>
  <div>
    <div class="middleBlock">

      <div class="row1">
        <i class="far fa-envelope"></i>
        <div>
          ranjanpanpura@gmail.com
        </div>
      </div>

      <div class="row2">
        <i class="fas fa-phone"></i>
        <div>
          +91 7632975366
        </div>
      </div>
    </div>

    <div class="horizontalLine">

    </div>
    <div class="designer">
      Designed by @mahmood.fazile UI/UX designer
    </div>

  </div>

</template>

<style scoped>
.middleBlock {
  display: flex;
  gap: 20px;
  margin-top: 10px;
  color: #959595;
}

.row1,
.row2 {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 18px;
}

.horizontalLine {
  height: 2px;
  background-color: #959595;
  margin-top: 20px;
  width: 100%;
}

.designer {
  color: #959595;
  margin-top: 10px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
