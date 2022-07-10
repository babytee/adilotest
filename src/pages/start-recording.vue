<template>

  <div class="col-sm-9">
    <div class="col-sm-10 m-auto clearix">
      <div class="row mb-4 mt-4 d-flex">
        <div class="col-sm-4 m-auto">
          <ul class="breadcrumb bg-white small p-0">
            <li class="breadcrumb-item">
              <router-link class="text-secondary" to="/">Snapbyte</router-link>
            </li>
            <li class="breadcrumb-item active">My Recordings</li>
          </ul>
          <h6 class="m-0">My Recordings 25</h6>
        </div>
        <div class="col-sm-8 m-auto">
          <button class="
                  btn
                  text-secondary
                  bg-white
                  border
                  pr-3
                  pl-3
                  round
                  btn-sm
                ">
            By date
          </button>
          <button class="
                  btn
                  text-secondary
                  bg-white
                  border
                  pr-3
                  pl-3
                  round
                  btn-sm
                ">
            Add filter
          </button>
          <button class="btn btn-info text-white round btn-sm">
            <i class="fa fa-video-camera"></i> New Request
          </button>
          <a href="#recordModal" data-toggle="modal" class="btn btn-orange text-white round btn-sm">
            <span class="btn-dot">rec</span> Start Recording
          </a>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 mt-3">
          <div class="table-responsive">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th>Recordings</th>
                  <th class="pl-0">Title</th>
                  <th>Views</th>
                  <th>Size</th>
                  <th colspan="2">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="video in Recordings" :key="video.id">
                  <td>
                    <div class="video-img">
                      <img :src="video.image_icon" class="w-100" :alt="video.title" />
                    </div>
                  </td>
                  <td class="pl-0">
                    <p class="m-0">{{ video.title }}</p>
                    <small>{{ video.description }}</small>
                  </td>
                  <td>{{ video.views }}</td>
                  <td>{{ video.size }}</td>
                  <td>{{ video.last_modified }}</td>
                  <td><i class="fa fa-ellipsis-h"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- The Record Modal -->
      <div class="modal" id="recordModal">
        <div class="modal-dialog d-flex h-100 m-0 m-auto p-3">
          <div class="modal-content w-100 m-auto">
            <!-- Modal Header -->
            <div class="modal-header pr-4 pl-4">
              <h6 class="modal-title">New Recording</h6>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <!-- Modal body -->
            <div class="modal-body pr-4 pl-4">
              <div class="form-group">
                <label>Save the recording in</label>
                <select class="form-control bg-light">
                  <option value="">Select a project</option>
                </select>
              </div>
              <div class="form-group">
                <b class="d-inline-block">Record screen</b>
                <label class="switch float-right">
                  <input type="checkbox" @click="screenRecord($event)" />
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="form-group">
                <b class="d-inline-block">Record camera</b>
                <label class="switch float-right">
                  <input type="checkbox" @click="cameraRecord($event)" />
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="form-group">
                <b class="d-inline-block">Record mic</b>
                <label class="switch float-right">
                  <input type="checkbox" @click="micRecord($event)" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <!-- Modal footer -->
            <div class="modal-footer pr-4 pl-4">
              <div class="col-sm-10 clearfix m-auto">
                <button @click="startRecord()" data-dismiss="modal" class="btn btn-block btn-info round">
                  Start Recording
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import recordings from "../../public/assets/recordings.json";
export default {
  data() {
    return {
      Recordings: recordings.recordings,
      screen_record: false,
      camera_record: false,
      mic_record: false,
    };
  },
  methods: {
    screenRecord(event) {
      this.screen_record = event.target.checked;
    },
    cameraRecord(event) {
      this.camera_record = event.target.checked;
    },
    micRecord(event) {
      this.mic_record = event.target.checked;
    },
    async startRecord() {
      if (this.screen_record == true) {
        this.screen_record = true;
        /* const constraints = {
          video: true
        }; */
        const displayStream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: true,
        });
        // voiceStream for recording voice with screen recording
        const voiceStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        let tracks = [
          ...displayStream.getTracks(),
          ...voiceStream.getAudioTracks(),
        ];
        const stream = new MediaStream(tracks);
        console.log(stream);
      }

      //CAMERA RECORD
      if (this.camera_record == true) {
        //const mimeType = "video/webm";
        //shouldStop = false;
        const constraints = {
          video: true,
        };
        await navigator.mediaDevices.getUserMedia(constraints);
        //handleRecord({ stream, mimeType });
      }

      if (this.mic_record == true) {
        this.mic_record = true;
        //const mimeType = "video/webm";
        //shouldStop = false;
        const constraints = {
          audio: true,
        };
        await navigator.mediaDevices.getUserMedia(constraints);
        //handleRecord({ stream, mimeType });
      }
      this.$router.push("/record-screen")
    },
  },
};
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
  background-color: #0dabd8;
  top: -7px;
  z-index: 1;
}

table {
  font-size: small;
}

thead th {
  padding-bottom: 15px !important;
}

tbody td {
  padding-bottom: 10px !important;
}

thead th,
tbody td {
  border: none !important;
}

.video-img {
  width: 90px;
  height: 50px;
  border-radius: 6px;
  overflow: hidden;
}

.form-group {
  margin-bottom: 30px;
}
</style>