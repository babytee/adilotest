<template>
  <div class="col-sm-6 cleafix m-auto">
    <p class="mt-5"><span class="border-dot"></span> <span>Live preview</span></p>
    <div class="w-100 p-5 mt-3 mb-5" style="background-color:#21455E;height:350px;border-radius:8px;"></div>
    <p class="text-center"><button class="btn round btn-info" style="opacity:0.4;">Start recording</button></p>
  </div>
</template>
<script>
import recordings from '../../public/assets/recordings.json'
export default {
  data() {
    return {
      Recordings: recordings.recordings
    }
  }
}
</script>

<style scoped>
.dropdown .nav-link {
  color: #000 !important;
}

.dropdown::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 3px;
  background-color: #0DABD8;
  top: -7px;
  z-index: 1;
}

.border-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #EE5951;
  border-radius: 50%;
  margin: 1px;
  outline: 1px solid #EE5951;
  outline-offset: 2px;
}
</style>