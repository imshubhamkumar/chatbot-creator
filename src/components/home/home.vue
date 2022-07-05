<template>
  <sideNav />
  <div class="main-section inactive">
    <main className="">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import sideNav from "../sideNav.vue";

export default {
  name: "HomeVue",
  components: {
    sideNav,
  },
};
</script>
<style>
.main-section {
  position: fixed;
  left: 72px;
  top: 0;
  width: 95.5%;
  transition: left 0.2s ease-in;
  z-index: -1;
}

.main-section .sub-main-section {
  position: absolute;
  left: 250px;
  width: 100%;
  transition: left 0.2s ease-in;
  z-index: -1;
}

.sub-main-section main {
  position: absolute;
  top: 8px;
}
</style>
