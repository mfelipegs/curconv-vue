<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UICard",
};
</script>

<style scoped>
.card {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
}
</style>
