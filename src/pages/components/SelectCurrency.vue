<template>
  <section v-if="currencyList.length">
    <h3>Add Currency</h3>
    <Select :options="currencyList.slice(1)" />
  </section>
  <section v-else>Loading...</section>
</template>

<script>
import Select from "@/components/UI/Select.vue";

import { useCurrencyStore } from "@/stores/useCurrencyStore";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const curStore = useCurrencyStore();
    const { currencyList } = storeToRefs(curStore);

    return { currencyList };
  },
  name: "SelectCurrency",
  components: {
    Select,
  },
};
</script>

<style scoped>
section {
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
}

h3 {
  color: rgb(160, 160, 160);
  font-weight: 500;
}
</style>
