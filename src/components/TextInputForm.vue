<template>
  <form @submit.prevent="submitTextForm">
    <div>
      <input
        class="glassmorphic-input"
        :placeholder="labels[0]"
        type="text"
        v-model.trim="input1"
      />
    </div>
    <div v-if="type != 1">
      <input
        class="glassmorphic-input"
        :placeholder="labels[1]"
        type="text"
        v-model.trim="input2"
      />
    </div>
    <div v-if="type === 5">
      <input
        class="glassmorphic-input"
        :placeholder="labels[2]"
        type="text"
        v-model.trim="input3"
      />
    </div>
    <button type="submit" class="glassmorphic-input glassmorphic-btn">
      Submit
    </button>
  </form>
</template>

<script>
export default {
  emits: ["input-data"],
  props: ["type", "labels"],
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      isValid: true,
    };
  },
  methods: {
    validateTextForm() {
      if (this.type == 1) {
        if (this.input1 == "") {
          this.isValid = false;
        } else {
          this.isValid = true;
        }
      } else if (this.type === 5) {
        if (this.input1 == "" && this.input2 == "" && this.input3 == "") {
          this.isValid = false;
        } else {
          this.isValid = true;
        }
      } else if (this.type === 2 || this.type === 3 || this.type === 4) {
        if (this.input1 == "" && this.input2 == "") {
          this.isValid = false;
        } else {
          this.isValid = true;
        }
      }
    },
    submitTextForm() {
      this.validateTextForm();
      if (!this.isValid) {
        return;
      }
      if (this.type == 1) {
        this.input1 = JSON.parse("[" + this.input1 + "]");
      }
      if (this.type == 3) {
        this.input1 = +this.input1;
        this.input2 = JSON.parse("[" + this.input2 + "]");
      }
      if (this.type == 4) {
        this.input2 = JSON.parse("[" + this.input2 + "]");
      }
      if (this.type == 5) {
        this.input1 = +this.input1;
        this.input2 = JSON.parse("[" + this.input2 + "]");
        this.input3 = JSON.parse("[" + this.input3 + "]");
      }
      const formData = {
        inputa: this.input1,
        inputb: this.input2,
        inputc: this.input3,
      };
      this.$emit("input-data", formData);
    },
  }
};
</script>

<style scoped>
/* Glassmorphic Start */
.glassmorphic-input {
  background: transparent;
  width: 200px;
  padding: 1em;
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
::-moz-placeholder {
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

:-ms-input-placeholder {
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

::placeholder {
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

form input[type="text"]:focus,
form input[type="text"]:focus {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
}
.glassmorphic-btn {
  margin-top: 10px;
  width: 150px;
  font-size: 1rem;
}
.glassmorphic-btn:hover {
  cursor: pointer;
}
.glassmorphic-btn:active {
  background: rgba(255, 255, 255, 0.2);
}
form input:focus,
.glassmorphic-btn {
  outline: none;
}
</style>
