<template>
  <select>
    <option v-for="opt in options" :key="opt" :value="opt">
      {{ opt }}
    </option>
  </select>
</template>

<script>
export default {
  name: "SelectComponent",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
select {
  background-color: white;
  padding: 5px;
  border-radius: 4px;
}
</style>
