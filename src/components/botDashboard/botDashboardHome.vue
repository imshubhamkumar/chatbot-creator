<template>
  <div class="bot-main-container">
    <navbarVue />
    <div class="chart-container">
      <VueFlow :nodes="nodes1" :edges="edges1" connection-mode="Loose" class="customnodeflow">
        <template #node-custom="props">
          <customNodeVue
            v-bind="props"
            :data="props.label"
            :node_type="props.data"
            :position="props.position"
            :nodeId="props.id"
            :addNewNodes="addNewNodes"
          />
        </template>
      </VueFlow>
    </div>
  </div>
</template>
<script>
import navbarVue from "./navbar.vue";
import customNodeVue from "./customNode.vue";
import { VueFlow } from "@braks/vue-flow";
import { ref } from "vue";
import { getNodes, getEdges, createNode } from '../../helpers/services';

export default {
  name: "botDashboardHomeVue",
  components: {
    navbarVue,
    VueFlow,
    customNodeVue,
  },
  setup() {
        function addNewNodes(label, data, positions, currentId, type) {
            const newNode = {
                botId: this.id,
                nodeType: type,
                nodeUIType: 'custom',
                nodeLabel: label,
                nodeData: data,
                nodePosition: {
                    x: positions['x'],
                    y: positions['y'] + 100,
                },
            };
            const newEdge = {
              botId: this.id,
              source: currentId,
            }
            const body = {
              newNode,
              newEdge
            }
            createNode(body).then(() => getAllNodes()).catch(err => console.log(err));
        }
        function getAllNodes() {
              getNodes(this.id).then(data => {
              const nods = [];
              for (let i = 0; i < data.data.length; i++) {
                nods.push({
                  id: data.data[i].nodeId,
                  type: data.data[i].nodeUIType,
                  label: data.data[i].nodeLabel,
                  data: data.data[i].nodeData,
                  position: data.data[i].nodePosition,
                })
              }
              this.nodes1 = ref(nods);
            })
            
    getEdges(this.id).then(data => {
      const edgs = [];
      for (let i = 0; i < data.data.length; i++) {
        edgs.push({
          id: data.data[i].edgeId,
          source: data.data[i].sourceId,
          target: data.data[i].targetId,
        })
      }
      this.edges1 = ref(edgs)
    })
        }
        return {
            addNewNodes,
            getAllNodes
        }
  },
  data() {
    return {
      id: this.$route.params.botId,
      nodes1: undefined,
      edges1: undefined
    }
  },
  mounted() {
    this.getAllNodes();
  }
};
</script>
<style>
@import "@braks/vue-flow/dist/style.css";
@import "@braks/vue-flow/dist/theme-default.css";
.bot-main-container {
  background-color: rgb(226 231 237);
  height: 100vh;
}
.chart-container {
  height: 100%;
}
</style>
