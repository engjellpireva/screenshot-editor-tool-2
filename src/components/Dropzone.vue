<template>
  <div
    class="drop"
    :class="getClasses"
    @dragover.prevent="dragOver"
    @dragleave.prevent="dragLeave"
    @drop.prevent="drop($event)"
  >
    <img :src="imageSource" v-if="imageSource" />
    <h1 class="text-center text-uppercase text-secondary" v-if="wrongFile">
      Wrong file type
    </h1>
    <h1
      class="text-center text-uppercase text-secondary"
      v-if="!imageSource && !wrongFile"
    >
      Drop an image
    </h1>
    <drag-it-dude :class="blackBg && 'position-relative'">
      <div
        :class="blackBg ? 'bg-black w-100 box-input' : 'w-100 box-input'"
        class="position-relative col-12"
        :style="fontStyles"
      >
        <Chatline
          v-for="line in input.split('\n')"
          :characterName="characterName"
          :key="line"
          >{{ line }}</Chatline
        >
      </div>
    </drag-it-dude>
  </div>
</template>

<script>
import Chatline from "./Chatline.vue";
import DragItDude from "vue-drag-it-dude";

export default {
  name: "DropAnImage",
  data() {
    return {
      isDragging: false,
      wrongFile: false,
      imageSource: null,
      scale: 2,
    };
  },
  props: {
    input: String,
    fontStyles: Object,
    blackBg: Boolean,
    blackAndWhite: Boolean,
    characterName: String,
  },
  computed: {
    getClasses() {
      return { isDragging: this.isDragging };
    },
  },
  methods: {
    dragOver() {
      this.isDragging = true;
    },
    dragLeave() {
      this.isDragging = false;
    },
    drop(e) {
      let files = e.dataTransfer.files;
      this.wrongFile = false;
      // allows only 1 file
      if (files.length === 1) {
        let file = files[0];
        // allows image only
        if (file.type.indexOf("image/") >= 0) {
          var reader = new FileReader();
          reader.onload = (f) => {
            this.imageSource = f.target.result;
            this.isDragging = false;
          };
          reader.readAsDataURL(file);
        } else {
          this.wrongFile = true;
          this.imageSource = null;
          this.isDragging = false;
        }
      }
    },

    onRequestUploadFiles() {},
  },
  components: {
    Chatline,
    DragItDude,
  },
};
</script>

<style scoped>
.drop {
  width: 100%;
  height: 100%;
  background-color: #212529;
  transition: background-color 0.2s ease-in-out;
}
.isDragging {
  background-color: #474f57;
  border-color: #fff;
}

/* Emote Colors */
.color-emote {
  color: #c2a3da;
}
.color-chat {
  color: #f1f1f1;
}
.color-target-chat {
  color: #e5e5e5;
}
.color-shout {
  color: #f1f1f1;
}
.color-low {
  color: #bebebe;
}
.color-whisper {
  color: #eda841;
}
.color-paid {
  color: #56d64b;
}
.color-phone {
  color: #fbf724;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}
</style>
