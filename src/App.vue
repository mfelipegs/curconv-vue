<template>
  <ConverterHome />
</template>

<script>
import ConverterHome from "./pages/ConverterHome.vue";

export default {
  name: "App",
  components: {
    ConverterHome,
  },
};
</script>

<style>
@font-face {
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  src: local("Ubuntu"), url(http://example.com/fonts/ubuntu.woff) format("woff");
}

/* 1. Use a more-intuitive box-sizing model */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* 2. Remove default margin */
* {
  margin: 0;
  padding: 0;
  font-family: Ubuntu, "times new roman", times, roman, serif;
}

body {
  /* 3. Add accessible line-height */
  line-height: 1.5;
  /* 4. Improve text rendering */
  -webkit-font-smoothing: antialiased;

  background-color: rgb(245, 245, 245);
}

/* 5. Improve media defaults */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/* 6. Inherit fonts for form controls */
input,
button,
textarea,
select {
  font: inherit;
}

/* 7. Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/* 8. Improve line wrapping */
p {
  text-wrap: pretty;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}
</style>
