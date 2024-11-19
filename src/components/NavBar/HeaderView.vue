<script setup>

import HeaderLogo from "@/components/NavBar/HeaderLogo.vue";
import NavigationComponent from "@/components/NavBar/NavigationComponent.vue";
import ProfileComponent from "@/components/NavBar/ProfileComponent.vue";
</script>

<template>
  <header class="header-container">
    <HeaderLogo/>
    <NavigationComponent/>
    <ProfileComponent/>
  </header>

</template>

<style scoped>
.header-container{
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 600;
  padding: 0 20px;
  height: 100px;
  background: rgba(107, 142, 176, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  z-index: 1100;
}

</style>