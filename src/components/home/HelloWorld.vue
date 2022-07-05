<template>
  <navBar />
  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="card button-card" @click="isCreateModalShow = true">
            <div class="card-body">
              <div class="button-card-content">
                <div class="button-icon">
                  <i class="bi bi-plus-circle-fill"></i>
                </div>
                <h4>Create bot</h4>
              </div>
            </div>
          </div>
      </div>
      <div class="col-3" v-for="(bot, index) in bots" :key="index">
        <botCardVue :name="bot.botName" :description="bot.botDescription" :botId="bot.botId"/>
      </div>
    </div>
  </div>
  <createBotModalVue v-show="isCreateModalShow" @close-modal="isCreateModalShow = false"/>
</template>

<script>
import navBar from "./navbar.vue";
import botCardVue from "./botCard.vue";
import createBotModalVue from "./createBotModal.vue";
import { getBots } from "@/helpers/services";
export default {
  name: "HelloWorld",
  components: {
    navBar,
    botCardVue,
    createBotModalVue
  },
  data () {
    return {
      isCreateModalShow: false,
      bots: undefined
    }
  },
  mounted() {
    getBots().then(data => this.bots=data.data)
  }
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
