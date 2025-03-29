<template>
  <main>
    <h3>Select Currency</h3>
    <Select :options="['USD', 'GBR']" />
  </main>
</template>

<script>
import Select from "@/components/UI/Select.vue";

export default {
  name: "MainConverterHome",
  components: {
    Select,
  },
};
</script>

<style scoped>
main {
  padding: 0 1rem;
}

h3 {
  color: rgb(160, 160, 160);
  font-weight: 500;
}
</style>
