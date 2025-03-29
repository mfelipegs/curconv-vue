<template>
  <section>
    <div class="cards-list">
      <Card>
        <CurrencyItem currencyCode="USD" />
        <p v-if="!isEditing" @click="toggleEdit">{{ amount }}</p>
        <input
          v-else
          type="number"
          v-model="amount"
          @blur="toggleEdit"
          ref="inputRef"
        />
      </Card>

      <p class="equals">equals to</p>

      <Card v-for="currency in uniqueSelectedCurrencies" :key="currency">
        <CurrencyItem :currencyCode="currency" />
        <p>{{ convertCurrency(currency) }}</p>
      </Card>
    </div>
  </section>
</template>

<script>
import { ref, computed } from "vue";

import Card from "@/components/UI/Card.vue";
import CurrencyItem from "@/components/CurrencyItem.vue";

import { useCurrencyStore } from "@/stores/useCurrencyStore";
import { storeToRefs } from "pinia";

export default {
  props: {
    selectedCurrencies: {
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    const amount = ref(1);
    const isEditing = ref(false);
    const inputRef = ref(null);

    function toggleEdit() {
      isEditing.value = !isEditing.value;

      if (isEditing.value) {
        setTimeout(() => inputRef.value?.focus(), 0);
      }

      if (!amount.value) {
        amount.value = 1;
      }
    }

    const curStore = useCurrencyStore();
    const { conversionRates } = storeToRefs(curStore);

    function convertCurrency(currency) {
      if (!conversionRates.value || !conversionRates.value[currency]) {
        return "N/A";
      }
      return (amount.value * conversionRates.value[currency]).toFixed(3);
    }

    const uniqueSelectedCurrencies = computed(() => [
      ...new Set(props.selectedCurrencies),
    ]);

    return {
      amount,
      isEditing,
      toggleEdit,
      inputRef,
      uniqueSelectedCurrencies,
      convertCurrency,
    };
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
