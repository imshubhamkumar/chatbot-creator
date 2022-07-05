<template>
  <div
  class="custom-node-container"
    @mouseover="showButtons = true"
    @mouseleave="showButtons = false"
  >
    <div
      :data-type="node_type"
      data-mode="node-container"
      class="response-block"
    >
      <template v-if="node_type == 'bot_response'">
        <div :class="node_type">
          <i class="bi bi-reply-fill"></i>
          <span>{{ data }}</span>
        </div>
      </template>
      <template v-if="node_type == 'home_response'">
        <div :class="node_type">
          <i class="bi bi-house-door-fill"></i>
          <span>{{ data }}</span>
        </div>
      </template>
      <template v-if="node_type == 'default_fall'">
        <div :class="node_type">
          <i class="bi bi-braces-asterisk"></i>
          <span>{{ data }}</span>
        </div>
      </template>
      <template v-else-if="node_type == 'user_response'">
        <div :class="node_type">
          <i class="bi bi-person-video3"></i>
        </div>
      </template>
    </div>
    <template v-if="showButtons">
      <div :data-type="node_type" class="edit-node">
        <div
          class="btn-group btn-group-sm"
          role="group"
          aria-label="edit_buttons"
        >
          <button type="button" class="btn btn-light">Edit name</button>
          <button type="button" class="btn btn-light">
            <i class="bi bi-three-dots-vertical"></i>
          </button>
        </div>
      </div>
      <div class="add-node" :data-type="node_type" @click="addOptions=true">
        <i class="bi bi-plus"></i>
      </div>
    </template>
    <template v-if="addOptions">
    <div class="add-options dropdown" @mouseleave="addOptions=false">
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
                <template v-if="node_type != 'bot_response'">
                <a class="dropdown-item" @click="addNewNodesChild('Bot response', 'bot_response', position, nodeId)">
                    <div class="add-option-icons">
                        <i class="bi bi-reply-fill"></i>
                    </div> 
                    Bot response
                </a>
                </template>
                <template v-if="node_type != 'user_response'">
                <a class="dropdown-item" @click="addNewNodesChild('User response', 'user_response', position, nodeId)">
                    <div class="add-option-icons">
                    <i class="bi bi-person-video3"></i>
                    </div>
                    User response
                </a>
                </template>
            </li>
            <template v-if="node_type != 'default_fall'">
            <li>
                <a class="dropdown-item" @click="addNewNodesChild('Default fallback', 'default_fall', position, nodeId)">
                    <div class="add-option-icons">
                    <i class="bi bi-braces-asterisk"></i>
                    </div>
                    Fallback
                </a>
            </li>
            </template>
        </ul>
    </div>
    </template>
  </div>
</template>
<script>

export default {
  name: "customNodeVue",
  props: ["data", "node_type", 'addNewNodes', 'position', 'nodeId'],
  data() {
    return {
      showButtons: false,
      addOptions: false,
    };
  },
  methods: {
    addNewNodesChild(label, data, position, nodeId) {
        this.addNewNodes(label, data, position, nodeId)
    }
  }
};
</script>
<style>
.custom-node-container {
    display: flex;
}
.response-block[data-mode="node-container"] {
  max-width: 210px;
  min-width: 150px;
}
.response-block[data-mode="node-container"] .bot_response {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 20px;
  -webkit-box-shadow: 0 2px 15px #00000012;
  box-shadow: 0 2px 15px #00000012;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 40px;
  padding: 0 13px;
  -webkit-transition: background-color 0.5s;
  transition: background-color 0.5s;
  width: 100%;
}

.response-block[data-type="bot_response"] .bot_response {
  background-color: #f1f1f1;
}
.response-block[data-mode="node-container"] .bot_response span {
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
  white-space: nowrap;
}
.response-block[data-mode="node-container"] .bot_response i {
  font-size: 20px;
  margin-right: 10px;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
}

.response-block[data-mode="node-container"] .default_fall {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 20px;
  -webkit-box-shadow: 0 2px 15px #00000012;
  box-shadow: 0 2px 15px #00000012;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 40px;
  padding: 0 13px;
  -webkit-transition: background-color 0.5s;
  transition: background-color 0.5s;
  width: 100%;
  cursor: not-allowed;
}

.response-block[data-type="default_fall"] .default_fall {
  background-color: #797b8c;
  color: #ffffff;
}
.response-block[data-mode="node-container"] .default_fall span {
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
  white-space: nowrap;
}
.response-block[data-mode="node-container"] .default_fall i {
  font-size: 20px;
  margin-right: 10px;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
}

.response-block[data-mode="node-container"] .home_response {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 20px;
  -webkit-box-shadow: 0 2px 15px #00000012;
  box-shadow: 0 2px 15px #00000012;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 40px;
  padding: 0 13px;
  -webkit-transition: background-color 0.5s;
  transition: background-color 0.5s;
  width: 100%;
  cursor: not-allowed;
}

.response-block[data-type="home_response"] .home_response {
  background-color: #566e8a;
  color: #ffffff;
}
.response-block[data-mode="node-container"] .home_response span {
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
  white-space: nowrap;
}
.response-block[data-mode="node-container"] .home_response i {
  font-size: 20px;
  margin-right: 10px;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
}

.response-block[data-mode="node-container"][data-type="user_response"] {
  height: 60px;
  max-width: none;
  min-width: auto;
  padding: 6px;
  position: relative;
  width: 60px;
}

.response-block[data-mode="node-container"][data-type="user_response"]:before {
  background: #c9d3de;
  border: 2px solid #c9d3de;
  border-radius: 8px;
  content: "";
  flex-shrink: 0;
  height: 100%;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition: background-color 0.5s, border 0.5s;
  transition: background-color 0.5s, border 0.5s;
  width: 100%;
}

.response-block[data-mode="node-container"][data-type="user_response"]
  .user_response {
  color: #59687b;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
  width: 100%;
}

.response-block[data-mode="node-container"][data-type="user_response"],
.response-block[data-mode="node-container"][data-type="user_response"]
  .user_response {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
}

.response-block[data-mode="node-container"][data-type="user-input"]
  .user_response
  i {
  font-size: 24px;
}

.add-node {
  margin: auto 6px;
  float: right;
  background-color: #ffffff;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
}
.add-node[data-type="bot_response"], .add-node[data-type="home_response"],
.add-node[data-type="default_fall"] {
  position: absolute;
  top: 4px;
  right: -43px;
}


.add-node[data-type="user_response"] {
  position: absolute;
  top: 12px;
  right: -44px;
}
.add-node:hover {
  color: rgb(5, 78, 212);
}

.edit-node {
  margin: 4px auto;
  border-radius: 5px;
  padding: 2px 5px;
  width: max-content;
  cursor: pointer;
}

.edit-node[data-type="bot_response"], .edit-node[data-type="home_response"],
.edit-node[data-type="default_fall"] {
  position: absolute;
  left: 16px;
  bottom: 38px;
}
.edit-node[data-type="user_response"] {
  position: absolute;
  left: -28px;
  bottom: 58px;
}
.edit-node .btn-light:hover {
  opacity: 0.6;
}
.edit-node .btn-light:focus {
  box-shadow: none;
}
.add-options .dropdown-menu {
    display: block;
    left: 5px
}

.add-options .dropdown-menu .dropdown-item{
    display: flex;
    cursor: pointer;
}
.add-options .dropdown-menu .dropdown-item .add-option-icons {
    -ms-flex-negative: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    align-items: center;
    border-radius: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-shrink: 0;
    height: 24px;
    justify-content: center;
    margin-right: 18px;
    width: 24px;
    background: #f5f5f5;
}
</style>
