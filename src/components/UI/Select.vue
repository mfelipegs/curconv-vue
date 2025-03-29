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
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;

  width: 100%;
  height: 40px;
  color: rgb(48, 132, 48);
}
</style>
