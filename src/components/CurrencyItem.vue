<template>
  <div class="currency-item">
    <span :class="['fi', `fi-${countryCode}`]" class="flag"></span>
    <span>{{ currencyCode }}</span>
  </div>
</template>

<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { currencyToCountry } from "@/util/constants";

export default {
  props: {
    currencyCode: {
      type: String,
      required: true,
    },
  },
  computed: {
    countryCode() {
      return currencyToCountry[this.currencyCode] || "un"; // "un" = bandeira da ONU (fallback)
    },
  },
  // setup() {
  //   const curStore = useCurrencyStore();
  //   const { currencyList } = storeToRefs(curStore);

  //   return { currencyList };
  // },
  name: "CurrencyItem",
};
</script>

<style scoped>
.currency-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
}
.flag {
  width: 24px;
  height: 16px;
}
</style>
