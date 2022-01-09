<template>
  <div class="home">
    <b-container style="background: #62676c" fluid>
      <b-row>
        <b-col class="p-0 bg-dark min-vh-100" cols="12" md="3">
          <div
            class="
              sidebar-top-text
              d-flex
              justify-content-between
              py-4
              px-3
              text-white
            "
          >
            <h3 class="my-auto"><strong>Screenshot Editor</strong></h3>
            <img
              src="../assets/discord.png"
              class="my-auto"
              alt="Discord"
              style="cursor: pointer"
              width="40"
              height="32"
              @click="showingDiscord = !showingDiscord"
            />
            <iframe
              v-if="showingDiscord"
              class="position-absolute"
              src="https://discord.com/widget?id=857749894957498368&theme=dark"
              width="350"
              height="500"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
          <div class="d-flex px-4 mt-4 justify-content-between">
            <router-link to="/" class="text-white text-decoration-none"
              ><p
                :class="tab === 1 && 'border-bottom border-2'"
                @click="tab = 1"
              >
                General
              </p></router-link
            >
            <router-link to="/" class="text-white text-decoration-none"
              ><p
                :class="tab === 2 && 'border-bottom border-2'"
                @click="tab = 2"
              >
                Parsing
              </p></router-link
            >
            <router-link to="/" class="text-white text-decoration-none"
              ><p
                :class="tab === 3 && 'border-bottom border-2'"
                @click="tab = 3"
              >
                Image
              </p></router-link
            >
            <router-link to="/" class="text-white text-decoration-none"
              ><p
                :class="tab === 4 && 'border-bottom border-2'"
                @click="tab = 4"
              >
                Filters
              </p></router-link
            >
          </div>
          <section id="tab-1" v-if="tab === 1">
            <div class="px-4 mt-4">
              <h6 class="text-white">Black Background</h6>
              <div class="d-flex justify-content-between">
                <button
                  class="btn btn-secondary rounded-0 w-100"
                  @click="blackBg = true"
                >
                  Yes
                </button>
                <button
                  class="btn btn-secondary rounded-0 w-100 ms-2"
                  @click="blackBg = false"
                >
                  No
                </button>
              </div>
            </div>
            <div class="px-4 mt-4">
              <h6 class="text-white">Font Size</h6>
              <b-form-input
                class="w-100 bg-secondary"
                id="range-1"
                v-model="fontSize"
                type="range"
                min="1.33"
                max="5.33"
                step="0.2"
              />
              <div class="d-flex justify-content-between">
                <button
                  class="btn btn-secondary rounded-0 w-100"
                  @click="fontSize = 1.33"
                >
                  -3
                </button>
                <button
                  class="btn btn-secondary rounded-0 w-100 ms-2"
                  @click="fontSize = 1.36"
                >
                  -2.90
                </button>
                <button
                  class="btn btn-secondary rounded-0 w-100 ms-2"
                  @click="fontSize = 1.63"
                >
                  -2
                </button>
                <button
                  class="btn btn-secondary rounded-0 w-100 ms-2"
                  @click="fontSize = 1.93"
                >
                  -1
                </button>
                <button
                  class="btn btn-secondary rounded-0 w-100 ms-2"
                  @click="fontSize = 2.1"
                >
                  0
                </button>
              </div>
            </div>
            <div class="px-4 mt-4">
              <h6 class="text-white">Padding</h6>
              <div class="d-flex justify-content-between">
                <button
                  class="btn btn-secondary rounded-0 w-100"
                  @click="padding = 1"
                >
                  1
                </button>
                <button
                  class="btn btn-secondary rounded-0 w-100 ms-2"
                  @click="padding = 2"
                >
                  2
                </button>
                <button
                  class="btn btn-secondary rounded-0 w-100 ms-2"
                  @click="padding = 3"
                >
                  3
                </button>
                <button
                  class="btn btn-secondary rounded-0 w-100 ms-2"
                  @click="padding = 4"
                >
                  4
                </button>
                <button
                  class="btn btn-secondary rounded-0 w-100 ms-2"
                  @click="padding = 5"
                >
                  5
                </button>
              </div>
            </div>
            <div class="px-4 mt-4">
              <h6 class="text-white">Input Area</h6>
              <textarea
                name="input"
                v-model="input"
                class="w-100 bg-secondary border-0 text-white"
                id="input"
                rows="8"
              ></textarea>
            </div>
            <div class="px-4 mt-4">
              <h6 class="text-white">Character Name</h6>
              <input
                type="text"
                class="w-100 bg-secondary border-0 text-white p-2"
                v-model="characterName"
              />
            </div>
          </section>
          <section class="text-white" id="tab-2" v-if="tab === 2">
            <div class="px-4 mt-4">
              <h6 class="text-white">Space between text</h6>
              <b-form-input
                class="w-100 bg-secondary"
                id="range-2"
                v-model="fontSpacing"
                type="range"
                min="0.5"
                max="2.5"
                step="0.1"
              />
              <p class="my-auto text-white">Current: {{ fontSpacing }}</p>
            </div>
          </section>
          <section class="text-white" id="tab-3" v-if="tab === 3">
            <div class="px-4 mt-4">
              <h6 class="text-white">Width & Height</h6>
              <div class="d-flex justify-content-between">
                <input
                  type="number"
                  placeholder="Width"
                  class="bg-secondary border-0 w-100 p-2 rounded-0 text-white"
                  v-model="width"
                />
                <input
                  type="number"
                  placeholder="Width"
                  class="
                    bg-secondary
                    border-0
                    w-100
                    p-2
                    ms-2
                    rounded-0
                    text-white
                  "
                  v-model="height"
                />
              </div>
            </div>
          </section>
          <section class="text-white" id="tab-4" v-if="tab === 4">
            <div class="px-4 mt-4">
              <h6 class="text-center fw-bold pt-1">Black & White</h6>
              <img
                src="../assets/bnw.jpg"
                alt="Black and White"
                class="img-fluid"
                style="cursor: pointer"
              />
              <div class="d-flex justify-content-between mt-2">
                <button
                  class="btn btn-secondary rounded-0 w-100"
                  @click="blackAndWhite = 100"
                >
                  Add
                </button>
                <button
                  class="btn btn-secondary ms-2 rounded-0 w-100"
                  @click="blackAndWhite = 0"
                >
                  Remove
                </button>
              </div>
            </div>
          </section>

          <div
            class="
              col-12 col-md-3
              position-absolute
              download-button
              p-0
              bg-secondary
              p-4
              text-white text-center
              fw-bold
            "
            @click="exportToPng"
          >
            Download Screenshot
          </div>
        </b-col>
        <b-col class="col-8 py-2">
          <div
            class="box-container text-white position-relative"
            :style="styles"
            :myWidth="width"
            :myHeight="height"
            ref="image"
          >
            <Dropzone
              :input="input"
              :fontStyles="fontStyles"
              :blackBg="blackBg"
              :characterName="characterName"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.sidebar-top-text {
  background: #4d4e50;
}
.download-button {
  bottom: 0;
  cursor: pointer;
}
.box-container {
  position: relative;
  z-index: 40;
}
.box-input {
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  z-index: 20;
}
</style>

<script>
// @ is an alias to /src
import Dropzone from "../components/Dropzone.vue";
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";
export default {
  name: "Home",
  data: () => {
    return {
      input: "",
      tab: 1,
      width: 1024,
      height: 800,
      blackBg: false,
      fontSize: 1.33,
      fontSpacing: 1.3,
      padding: 1,
      characterName: "",
      image: "",
      blackAndWhite: 0,
      showingDiscord: false,
    };
  },
  computed: {
    styles() {
      return {
        width: this.width + "px",
        height: this.height + "px",
        filter: "grayscale(" + this.blackAndWhite + "%)",
      };
    },
    fontStyles() {
      return {
        fontSize: this.fontSize + "vh",
        fontSmooth: "5em",
        fontWeight: "bold",
        padding: this.padding + "vh",
        lineHeight: this.fontSpacing,
        cursor: "grab",
        userSelect: "none",
      };
    },
  },
  methods: {
    exportToPng: function () {
      domtoimage
        .toPng(this.$refs.image)
        .then(function (dataUrl) {
          saveAs(dataUrl, "screenshot-tool-" + Date.now() + ".png");
        })
        .catch(function (error) {
          console.error("Oops, error: " + error);
        });
    },
  },
  components: {
    Dropzone,
  },
};
</script>
