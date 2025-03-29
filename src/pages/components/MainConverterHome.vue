<template>
  <section>
    <Card>
      <CurrencyItem currencyCode="USD" />

      1
    </Card>

    <p>=</p>

    <Card v-for="currency in currencyList.slice(1)" :key="currency">
      <CurrencyItem :currencyCode="currency" />
    </Card>
  </section>
</template>

<script>
import Card from "@/components/UI/Card.vue";
import CurrencyItem from "@/components/CurrencyItem.vue";

import { useCurrencyStore } from "@/stores/useCurrencyStore";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const curStore = useCurrencyStore();
    const { currencyList } = storeToRefs(curStore);

    console.log("currencyList", currencyList);

    return { currencyList };
  },
  name: "MainConverterHome",
  components: {
    Card,
    CurrencyItem,
  },
};
</script>

<style scoped>
section {
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
}
</style>
