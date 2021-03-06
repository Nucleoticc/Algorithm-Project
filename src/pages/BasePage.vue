<template>
  <div>
    <the-side-bar @selection="setComponent"></the-side-bar>
    <div class="container">
      <transition name="algos" mode="out-in">
        <keep-alive>
          <component :is="selection"></component>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import TheSideBar from "../components/TheSideBar.vue";
import IntroPage from "../pages/IntroPage.vue";
import LCS from "../pages/Algorithms/LCS.vue";
import CCP from "../pages/Algorithms/CCP.vue";
import LD from "../pages/Algorithms/LD.vue";
import LIS from "../pages/Algorithms/LIS.vue";
import MCM from "../pages/Algorithms/MCM.vue";
import PP from "../pages/Algorithms/PP.vue";
import RCP from "../pages/Algorithms/RCP.vue";
import SCS from "../pages/Algorithms/SCS.vue";
import WBP from "../pages/Algorithms/WBP.vue";
import ZOKP from "../pages/Algorithms/ZOKP.vue";

export default {
  components: {
    TheSideBar,
    LCS,
    CCP,
    LD,
    MCM,
    PP,
    RCP,
    SCS,
    WBP,
    ZOKP,
    LIS,
    IntroPage,
  },
  data() {
    return {
      selection: "IntroPage",
    };
  },
  methods: {
    setComponent(algoType) {
      this.selection = algoType;
    },
  },
};
</script>

<style scoped>
.container {
  margin-left: 5rem;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.algos-enter-from {
  opacity: 0;
}
.algos-leave-to {
  opacity: 0;
}

.algos-enter-active {
  transition: all 0.3s ease-out;
}

.algos-leave-active {
  transition: all 0.3s ease-in;
}
.algos-enter-to,
.algos-leave-from {
  opacity: 1;
}
</style>
