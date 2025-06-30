<template>
  <div class="app-layout">
    <NavBar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style>
.app-layout {
  display: flex;
  min-height: 100vh;
}
.main-content {
  flex: 1;
  margin-left: 250px; /* Match sidebar width */
  background: #f8fafc;
  min-height: 100vh;
  padding: 0;
}
@media (max-width: 900px) {
  .main-content {
    margin-left: 70px;
  }
}
</style>
