<template>
  <UIHeader />
  <main>
    <SelectCurrency />
    <MainConverterHome />
  </main>
</template>

<script>
import UIHeader from "../components/UI/Header.vue";
import SelectCurrency from "./components/SelectCurrency.vue";
import MainConverterHome from "./components/MainConverterHome.vue";

import { useCurrencyStore } from "@/stores/useCurrencyStore";

export default {
  setup() {
    const curStore = useCurrencyStore();

    curStore.setExchangeData({
      result: "success",
      base_code: "USD",
      conversion_rates: {
        USD: 1,
        AUD: 1.4817,
        BGN: 1.7741,
        CAD: 1.3168,
        CHF: 0.9774,
        CNY: 6.9454,
      },
    });

    return {};
  },
  name: "ConverterHome",
  components: {
    UIHeader,
    SelectCurrency,
    MainConverterHome,
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
