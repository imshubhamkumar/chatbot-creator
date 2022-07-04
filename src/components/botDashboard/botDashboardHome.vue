<template>
  <div class="bot-main-container">
    <navbarVue />
    <div class="chart-container">
      <VueFlow :nodes="nodes" :edges="edges" connection-mode="Loose" class="customnodeflow">
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
import { VueFlow, Position } from "@braks/vue-flow";
import { ref } from "vue";

export default {
  name: "botDashboardHomeVue",
  components: {
    navbarVue,
    VueFlow,
    customNodeVue,
  },
  setup() {
    const nodesData = [
        {
          id: "1",
          type: "custom",
          label: "Start point",
          data: "home_response",
          position: { x: 630, y: 40 },
        },
        {
          id: "2",
          type: "custom",
          label: "Bot response",
          data: "bot_response",
          position: { x: 730, y: 150 },
          sourcePosition: Position.Right,
        },
        {
          id: "3",
          type: "custom",
          label: "Default fallback",
          data: "default_fall",
          position: { x: 530, y: 150 },
          sourcePosition: Position.Right,
          targetPosition: Position.Left
        },]
        const nodes = ref(nodesData)
        const edges = ref([{ id: "e1-2", source: "1", target: "2" }, { id: "e1-3", source: "1", target: "3" }])

        function addNewNodes(label, data, positions, currentId) {
            const nodeId = (nodesData.length + 1).toString();
            const newNode = {
                id: nodeId,
                type: 'custom',
                label: label,
                data: data,
                position: {
                    x: positions['x'],
                    y: positions['y'] + 100,
                },
            };
            const edgeId = `e${currentId}-${nodeId}`
            const newEdge = {
                id: edgeId,
                source: currentId,
                target: nodeId
            }
            nodes.value.push(newNode);
            edges.value.push(newEdge);
        }
        return {
            nodes,
            edges,
            addNewNodes
        }
  },
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
