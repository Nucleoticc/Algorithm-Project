<template>
  <ul v-if="methodNum === 1">
    <li class="overflow-True">{{ selectedInput[0] }}</li>
    <li class="overflow-True">{{ selectedInput[1] }}</li>
  </ul>
  <ul v-if="methodNum === 2">
    <li class="nolist-True">{{ selectedInput }}</li>
  </ul>
  <ul v-if="methodNum === 3">
    <li class="nolist-True">{{ selectedInput["change"] }}</li>
    <li class="nolist-True">{{ selectedInput["coin"] }}</li>
  </ul>
  <ul v-if="methodNum === 4">
    <li class="nolist-True">{{ selectedInput["word"] }}</li>
    <li class="nolist-True">{{ selectedInput["dict"] }}</li>
  </ul>
  <ul v-if="methodNum === 5">
    <li class="nolist-True">{{ selectedInput["col"] }}</li>
    <li class="nolist-True">{{ selectedInput["value"] }}</li>
    <li class="nolist-True">{{ selectedInput["weight"] }}</li>
  </ul>
  <div class="container">
    <button
      class="glassmorphic-btn glassmorphic-btn-left"
      @click="showPrevious"
    >
      Prev
    </button>
    <button class="glassmorphic-btn glassmorphic-btn-right" @click="showNext">
      Next
    </button>
    <button class="glassmorphic-btn mt-5 mb-3" @click="submitFileForm">
      Submit
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  emits: ["file-data"],
  props: ["filePath"],
  data() {
    return {
      fileInput: [],
      selectedInput: "",
      selectedOption: 0,
      methodNum: 0,
    };
  },
  methods: {
    async importFiles() {
      let inputData;
      switch (this.filePath) {
        case "LCS":
          try {
            inputData = await axios.get("./InputFiles/LCS.json");
            inputData = inputData.data;
          } catch (error) {
            console.log(error);
          }
          this.methodNum = 1;
          break;
        case "SCS":
          try {
            inputData = await axios.get("./InputFiles/LCS.json");
            inputData = inputData.data;
          } catch (error) {
            console.log(error);
          }
          this.methodNum = 1;
          break;
        case "LD":
          try {
            inputData = await axios.get("./InputFiles/LCS.json");
            inputData = inputData.data;
          } catch (error) {
            console.log(error);
          }
          this.methodNum = 1;
          break;
        case "LIS":
          try {
            inputData = await axios.get("./InputFiles/LIS.json");
            inputData = inputData.data;
          } catch (error) {
            console.log(error);
          }
          this.methodNum = 2;
          break;
        case "MCM":
          try {
            inputData = await axios.get("./InputFiles/MCM.json");
            inputData = inputData.data;
          } catch (error) {
            console.log(error);
          }
          this.methodNum = 2;
          break;
        case "PP":
          try {
            inputData = await axios.get("./InputFiles/LIS.json");
            inputData = inputData.data;
          } catch (error) {
            console.log(error);
          }
          this.methodNum = 2;
          break;
        case "CCP":
          try {
            inputData = await axios.get("./InputFiles/CCP.json");
            inputData = inputData.data;
          } catch (error) {
            console.log(error);
          }
          this.methodNum = 3;
          break;
        case "RCP":
          try {
            inputData = await axios.get("./InputFiles/ZOKP.json");
            inputData = inputData.data;
          } catch (error) {
            console.log(error);
          }
          this.methodNum = 5;
          break;
        case "ZOKP":
          try {
            inputData = await axios.get("./InputFiles/ZOKP.json");
            inputData = inputData.data;
          } catch (error) {
            console.log(error);
          }
          this.methodNum = 5;
          break;
        case "WBP":
          try {
            inputData = await axios.get("./InputFiles/WBP.json");
            inputData = inputData.data;
          } catch (error) {
            console.log(error);
          }
          this.methodNum = 4;
          break;
        default:
          break;
      }
      return inputData;
    },
    showPrevious() {
      this.selectedOption -= 1;
      if (this.selectedOption < 0) {
        this.selectedOption = this.fileInput.length - 1;
      }
      this.selectedInput = this.fileInput[this.selectedOption];
    },
    showNext() {
      this.selectedOption += 1;
      if (this.selectedOption > this.fileInput.length - 1) {
        this.selectedOption = 0;
      }
      this.selectedInput = this.fileInput[this.selectedOption];
    },
    submitFileForm() {
      let dataToSend;
      if (this.methodNum === 1) {
        dataToSend = {
          inputa: this.selectedInput[0],
          inputb: this.selectedInput[1],
        };
      } else if (this.methodNum === 2) {
        dataToSend = {
          inputa: this.selectedInput,
        };
      } else if (this.methodNum === 3) {
        dataToSend = {
          inputa: this.selectedInput["change"],
          inputb: this.selectedInput["coin"],
        };
      } else if (this.methodNum === 4) {
        dataToSend = {
          inputa: this.selectedInput["word"],
          inputb: this.selectedInput["dict"],
        };
      } else if (this.methodNum === 5) {
        dataToSend = {
          inputa: this.selectedInput["col"],
          inputb: this.selectedInput["value"],
          inputc: this.selectedInput["weight"],
        };
      }
      this.$emit("file-data", dataToSend);
    },
  },
  async mounted() {
    let inputData = await this.importFiles();
    for (let prop in inputData.data) {
      this.fileInput.push(inputData.data[prop]);
    }
    this.selectedInput = this.fileInput[0];
  },
};
</script>

<style scoped>
.glassmorphic-btn {
  background: transparent;
  width: 200px;
  padding: 1em;
  margin-top: 10px;
  width: 150px;
  font-size: 1rem;
  margin-bottom: 2em;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5000px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-weight: 500;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
.glassmorphic-btn-left {
  width: 80px;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  margin-right: 2%;
  margin-bottom: 0;
  font-size: 0.7rem;
}
.glassmorphic-btn-right {
  width: 80px;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  margin-left: 2%;
  margin-bottom: 0;
  font-size: 0.7rem;
}
.glassmorphic-btn:hover {
  cursor: pointer;
}
.glassmorphic-btn:active {
  background: rgba(255, 255, 255, 0.2);
}
.glassmorphic-btn:focus {
  outline: none;
}
.container {
  max-height: 230px;
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
li::-webkit-scrollbar {
  width: 0rem;
  height: 0.25rem;
}

li::-webkit-scrollbar-track {
  background: hsl(0, 0%, 100%);
}

li::-webkit-scrollbar-thumb {
  background: rgba(112, 112, 112, 0.7);
}

.overflow-True {
  list-style: none;
  overflow: scroll;
  margin-bottom: 0.7rem;
}
.nolist-True {
  list-style: none;
  margin-bottom: 0.7rem;
}
ul {
  margin: 0;
  padding: 0;
}
</style>
