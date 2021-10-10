<template>
  <div class="m-0 p-0" :class="chatline">
    <slot />
  </div>
</template>

<style>
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
</style>

<script>
export default {
  props: {
    characterName: String,
  },
  computed: {
    chatline: function (text) {
      console.log(this.characterName);
      const input = text.$slots.default[0].text;
      if (input.includes("*")) return "color-emote";
      if (input.includes("says:") && !input.startsWith(this.characterName)) {
        return "color-target-chat";
      }
      if (input.includes("says:") && input.startsWith(this.characterName)) {
        return "color-chat";
      }
      if (input.includes("says [low]:")) return "color-low";
      if (input.includes("shouts:")) return "color-shout";
      if (input.includes("whispers:")) return "color-whisper";
      if (input.includes("You paid")) return "color-paid";
      if (input.includes("You gave")) return "color-paid";
      if (input.includes("You received")) return "color-paid";
      if (
        input.includes("(cellphone):") &&
        input.startsWith(this.characterName)
      ) {
        return "color-white";
      }
      if (
        input.includes("(cellphone)") &&
        !input.startsWith(this.characterName)
      ) {
        return "color-phone";
      }
      return "";
    },
  },
};
</script>
