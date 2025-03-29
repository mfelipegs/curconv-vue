<template>
  <section v-if="availableCurrencies.length">
    <h3>Add Currency</h3>
    <Select :options="availableCurrencies" @change="addCurrency" />
  </section>
  <section v-else>Loading...</section>
</template>

<script>
import { computed } from "vue";

import Select from "@/components/UI/Select.vue";

import { useCurrencyStore } from "@/stores/useCurrencyStore";
import { storeToRefs } from "pinia";

export default {
  setup(props, { emit }) {
    const curStore = useCurrencyStore();
    const { currencyList } = storeToRefs(curStore);

    const availableCurrencies = computed(() => currencyList.value.slice(1));

    function addCurrency(event) {
      emit("currency-selected", event.target.value);
    }

    return { availableCurrencies, addCurrency };
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
