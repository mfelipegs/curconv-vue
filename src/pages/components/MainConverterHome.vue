<template>
  <section>
    <div class="cards-list">
      <Card>
        <CurrencyItem currencyCode="USD" />
        <p>1</p>
      </Card>

      <p class="equals">equals to</p>

      <Card v-for="currency in currencyList.slice(1)" :key="currency">
        <CurrencyItem :currencyCode="currency" />
      </Card>
    </div>
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

.cards-list {
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

.equals {
  text-align: center;
  color: #989898;
  font-size: 1rem;
}
</style>
