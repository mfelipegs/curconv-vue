<template>
  <UIHeader />
  <MainConverterHome />
</template>

<script>
import UIHeader from "../components/UI/Header.vue";
import MainConverterHome from "./components/MainConverterHome.vue";

export default {
  name: "ConverterHome",
  components: {
    UIHeader,
    MainConverterHome,
  },
};
</script>
