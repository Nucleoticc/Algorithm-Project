<template>
  <div>
    <div class="graph-canvas glass-card mx-auto">
      <h1 class="glass-text" style="text-align: center;">
        Coin Change Problem
      </h1>
      <graph :graphData="CCPData"></graph>
    </div>
    <transition name="result">
      <div v-if="gotresult" class="glass-card-result mx-auto">
        <h4 class="canoverflow" v-if="gotresult">Result: {{ result }}</h4>
        <h4 v-if="gotresult">Calculation Took: {{ time }} seconds</h4>
      </div>
    </transition>
    <div class="get_centered container p-4">
      <div class="glass-card mx-auto">
        <text-input-form :type="3" @input-data="submitForm" :labels="['Amount', 'Coins']"></text-input-form>
      </div>
      <div class="glass-card mx-auto">
        <file-input-form @file-data="submitForm" :filePath="'CCP'"></file-input-form>
      </div>
    </div>
  </div>
</template>

<script>
import coinChange from "../../scripts/algorithms/CCP.js";
import CCPData from "../../scripts/complexities/CCP.js";
import TextInputForm from "../../components/TextInputForm.vue";
import FileInputForm from "../../components/FileInputForm.vue";
import Graph from "../../components/Graph.vue";

export default {
  components: {
    TextInputForm,
    Graph,
    FileInputForm,
  },
  data() {
    return {
      result: "",
      time: 0,
      CCPData,
    };
  },
  computed: {
    gotresult() {
      return this.result != "" && this.time != 0;
    },
  },
  methods: {
    async submitForm(data) {
      this.result = "";
      this.time = 0.0;
      let start_time = performance.now();
      this.result = await coinChange(
        data.inputa,
        data.inputb
      );
      let end_time = performance.now();
      if (this.result == "") {
        this.result = "No Solution Found";
      }
      let timeDiff = end_time - start_time;
      timeDiff /= 1000;
      this.time = timeDiff;
    },
  },
};
</script>

<style scoped>
.get_centered {
  display: flex;
  flex-direction: row;
  justify-self: start;
}
.graph-canvas {
  margin-top: 2%;
  height: 300px;
  max-width: 80%;
  padding-bottom: 10%;
}
.result-enter-active,
.result-leave-active{
  transition: opacity 0.5s ease;
}
.result-enter-from,
.result-leave-to{
  opacity: 0;
}
.canoverflow::-webkit-scrollbar {
  width: 0rem;
  height: 0.25rem;
}

.canoverflow::-webkit-scrollbar-track {
  background: hsl(0, 0%, 100%);
}

.canoverflowli::-webkit-scrollbar-thumb {
  background: rgba(112, 112, 112, 0.7);
}
.canoverflow {
  overflow-y: scroll;
}
</style>
