<template>
  <div class="bg-dark">
    <b-container
      class="
        d-flex
        vh-100
        align-items-center
        justify-content-center
        text-center
      "
    >
      <b-row>
        <h2 class="text-white p-0 m-0">
          You are not authorized to use Screenshot Editor Tool.
        </h2>
        <h6 class="text-white p-0 m-0 mt-3 text-muted">
          Join the Discord server to gain access.
        </h6>
        <a class="mt-3" href="/login">Login here if you already have access.</a>
        <iframe
          src="https://discord.com/widget?id=857749894957498368&theme=dark"
          width="350"
          height="500"
          class="mt-5 shadow-lg"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
