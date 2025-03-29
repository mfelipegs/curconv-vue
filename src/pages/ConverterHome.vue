<template>
  <UIHeader />
  <MainConverterHome />
</template>

<script>
import UIHeader from "../components/UI/Header.vue";
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
    MainConverterHome,
  },
};
</script>
