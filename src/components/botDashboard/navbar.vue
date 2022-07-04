<template>
  <nav class="navbar navbar-light bg-none">
    <div class="container-fluid">
      <a class="navbar-brand">bot name</a>
      <button type="button" class="btn btn-outline-dark test-btn">Dark</button>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navbarVue",
};
</script>
<style>
.search-box:focus {
  box-shadow: none;
  border-color: #ced4da;
}
.test-btn {
  color: #0274d8;
  border-color: #0274d8;
}
.btn-outline-dark.test-btn:hover {
  background-color: transparent;
  color: #0274d8;
  border-color: #0274d8;
}
.btn-outline-dark.test-btn:focus {
  border-color: #0274d8;
  box-shadow: none;
}
</style>
