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
        <div class="sidebar p-3">
          <div class="btn btn-recording mt-3">
            <img class="mr-3" src="assets/img/video-player.svg" width="20" /> My Recordings
          </div>
          <div class="btn btn-block mt-3" style="font-size:14px;">
            <img class="mr-3" src="assets/img/share-icon.jpeg" width="20" /> Requested
          </div>
        </div>
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

        <div class="col-sm-10 m-auto clearix">

          <div class="row mb-4 mt-4">
            <div class="col-sm-4"></div>
            <div class="col-sm-8">
              <button class="btn text-secondary bg-white border pr-3 pl-3 round btn-sm">By date</button>
              <button class="btn text-secondary bg-white border pr-3 pl-3 round btn-sm">Add filter</button>
              <button class="btn btn-info text-white round btn-sm">
                <i class="fa fa-video-camera"></i> New Request
              </button>
              <button class="btn btn-orange text-white round btn-sm">
                <span class="btn-dot"></span> Start Recording
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12">
              <div class="w-100 dotted-box text-center">
                <div class="col-sm-6 clearfix m-auto">
                  <img src="assets/img/file-icon.jpeg" class="mb-4" alt="">
                  <h2>Say hello to the world!</h2>
                  <p class="text-secondary">Record your first video/audio and share it what your team, friends, followers and customers.</p>
                  <p class="w-100 text-center btn-holder">
                    <button class="btn btn-orange text-white round btn-sm">
                      <span class="btn-dot"></span> Start Recording
                    </button>
                    <button class="btn btn-info text-white round btn-sm"><i class="fa fa-video-camera"></i> New Request</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>