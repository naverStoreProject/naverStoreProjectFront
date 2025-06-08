import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSearchPageOffcanvasCountStore = defineStore('searchPageOffcanvasCount', () => {
  const count = ref(0);

  function increment() {
    count.value++;
  }

  function decrement() {
    if (count.value > 0) {
      count.value--;
    }
  }

  function reset() {
    count.value = 0;
  }

  return { count, increment, decrement, reset };
});
