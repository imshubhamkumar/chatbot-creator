<template>
    <nav class="navbar navbar-light bg-none">
  <div class="container-fluid">
    <a class="navbar-brand">The Chatbots</a>
    <form class="d-flex">
      <input class="form-control me-2 search-box" type="search" placeholder="Search" aria-label="Search">
    </form>
  </div>
</nav>
</template>
<script>
export default {
    name: 'navBar'
}
</script>
<style>
    .search-box:focus {
        box-shadow: none;
        border-color: #ced4da;
    }
</style>