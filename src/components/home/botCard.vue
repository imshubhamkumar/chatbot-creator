<template lang="">
    <div class="card bot-card" style="width: 100%">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
</template>
<script>
export default {
  name: 'botCardVue'
}
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