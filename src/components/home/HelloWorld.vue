<template>
  <navBar />
  <div class="container">
    <div class="row">
      <div class="col-3">
        <router-link to="/dashbord">
          <div class="card button-card">
            <div class="card-body">
              <div class="button-card-content">
                <div class="button-icon">
                  <i class="bi bi-plus-circle-fill"></i>
                </div>
                <h4>Create bot</h4>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-3">
        <botCardVue />
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "./navbar.vue";
import botCardVue from "./botCard.vue";
export default {
  name: "HelloWorld",
  components: {
    navBar,
    botCardVue,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.button-card {
  background-color: #02aad8;
  width: 100%;
  min-height: 200px;
  color: #ffffff;
  cursor: pointer;
}
.button-card:hover {
  opacity: 0.8;
}
.button-card-content {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
}
.button-card-content i {
  font-size: 40px;
}
.button-icon {
  margin: auto;
  text-align: center;
}
</style>
