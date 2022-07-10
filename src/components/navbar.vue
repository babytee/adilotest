<template>
    <div class="row">
        <div class="col-sm-3 p-0">
            <nav class="navbar navbar-expand-sm bg-white navbar-light">
                <router-link class="navbar-brand d-flex" to="/">
                    <span class="logo-bg"><i class="logo-dot"></i></span>
                    <b>Adilo</b>
                </router-link>
                
                <!-- Toggler/collapsibe Button -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
        <div class="col-sm-9">
            <nav class="navbar navbar-expand-sm bg-white navbar-light">
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
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
                </div>
            </nav>
        </div>
    </div>
</template>