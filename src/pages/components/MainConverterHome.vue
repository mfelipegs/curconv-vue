<template>
  <main v-if="currencyList.length">
    <h3>Select Currency</h3>
    <Select :options="currencyList.slice(1)" />
  </main>
  <main v-else>Loading...</main>
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
  name: "MainConverterHome",
  components: {
    Select,
  },
};
</script>

<style scoped>
main {
  padding: 0 1rem;
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
