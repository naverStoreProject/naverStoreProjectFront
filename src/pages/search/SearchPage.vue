<template>

</template>

<script setup lang="ts">
import SearchInputPage from '@/pages/search/SearchInputPage.vue'
import { ref, watch, onMounted } from 'vue'
import { useOffcanvasStore } from '@/stores/offcanvasStore'
import { useRouter } from 'vue-router';

const offcanvasStore = useOffcanvasStore()
const router = useRouter();


onMounted(() => {
  openSearchInputOffCanvas();
});

const openSearchInputOffCanvas = () => {
  offcanvasStore.open('searchInput')
}

</script>

<style scoped></style>
