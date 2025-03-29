import { defineStore } from "pinia";

export const useCurrencyStore = defineStore("currency", {
  state: () => ({
    exchangeData: {
      result: "",
      base_code: "",
      conversion_rates: {},
    },
  }),
  actions: {
    setExchangeData(data) {
      this.exchangeData = data;
    },
  },
  getters: {
    currencyList: (state) => Object.keys(state.exchangeData.conversion_rates),
  },
});
