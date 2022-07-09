<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 p-0">
        <nav class="navbar navbar-expand-sm bg-white navbar-light">
          <router-link class="navbar-brand d-flex" to="/">
            <span class="logo-bg"><i class="logo-dot"></i></span>
            <b>Adilo</b>
          </router-link>
        </nav>
      </div>
      <div class="col-sm-9">
        <nav class="navbar navbar-expand-sm bg-white navbar-light">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">Projects</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Tools & App</a>
              <div class="dropdown-menu">
                <router-link class="dropdown-item" to="/start-recording">Snapbyte Recorder</router-link>
                <a class="dropdown-item">AudioBounce</a>
                <a class="dropdown-item">Sugar Voice</a>
              </div>
            </li>
            <li class="nav-item"><a class="nav-link" href="#">Channels</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contacts</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Analytics</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Settings</a></li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="#">Help</a></li>
            <li class="nav-item">
              <a class="nav-link profile-link" href="#">
                <img class="bg-danger img-30 float-left" src="assets/img/user.png" alt="Profile" />
                <div class="img-30-info float-left">
                  <b>Cody Fisher</b>
                  <small class="d-block">cody.fisher@gmail.com</small>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <div class="container-fluid" style="background-color:#EAFAFF;height:calc(100vh - 60px)">
    <div class="row">
      <div class="col-sm-6 cleafix m-auto">
        <p class="mt-5"><span class="border-dot"></span> <span>Live preview</span></p>
        <div class="w-100 p-5 mt-3 mb-5" style="background-color:#21455E;height:350px;border-radius:8px;"></div>
        <p class="text-center"><button class="btn round btn-info" style="opacity:0.4;">Start recording</button></p>
      </div>
    </div>
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
  color: #000!important;
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