<template>

</template>

<script setup lang="ts">
import SearchInputPage from '@/pages/search/SearchInputPage.vue'
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useOffcanvasStore } from '@/stores/offcanvasStore'
import { useSearchPageOffcanvasCountStore } from '@/stores/SearchPageOffCanvasCountStore';
import { useRouter } from 'vue-router';

const offcanvasStore = useOffcanvasStore()
const searchPageOffcanvasCountStore = useSearchPageOffcanvasCountStore()
const router = useRouter();


onMounted(() => {
  openSearchInputOffCanvas();
});

onUnmounted(() => {
  console.log('SearchPage 언마운트 ')
});


const openSearchInputOffCanvas = () => {
  offcanvasStore.open('searchInput')
}

// offcanvasCountStore의 카운트 감시
watch(() => searchPageOffcanvasCountStore.count, (newVal, oldVal) => {
  console.log('old : ', oldVal, '/ new : ', newVal)
  if (newVal === 0 && oldVal > 0) {
    console.log('searchPageOffcanvasCountStore.count가 0이 되었습니다.')
    history.back();
  }
});



</script>

<style scoped></style>
