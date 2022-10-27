<template>
  <div class="container">
    <h1>Блок над Canvas</h1>
    <button @click="addElement">Добавить новый элемент</button>
    <canvas ref="canvasRef" class="canvas"></canvas>
  </div>
</template>

<script>
import { canvasInit, addNewElement } from "../utils/canvasUtils";

export default {
  name: "CanvasContainer",
  data() {
    return {
      canvas: null,
    };
  },
  mounted() {
    this.canvas = canvasInit(this.$refs.canvasRef);
  },
  beforeUnmount() {},
  methods: {
    addElement() {
      addNewElement(this.canvas);
    },
  },
};
</script>

<style scoped>
.container {
  width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.canvas {
  border: 1px solid red;
  width: 1000px;
  height: 600px;
}
</style>
