<template>
  <router-link :to="`/dashboard/${botId}`">
    <div class="card bot-card" style="width: 100%">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">
          {{ description }}
        </p>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "botCardVue",
  props: ["name", "description",'botId'],
};
</script>
<style>
.bot-card {
  min-height: 200px;
  cursor: pointer;
}
.bot-card:hover {
  border-color: #0274d8;
}
</style>
