<template>
  <div class="container">
    <h1>Блок над Canvas</h1>
    <canvas id="canvas" class="canvas" width="1000" height="600"></canvas>
  </div>
</template>

<script>
import { canvasInit, canvasUnmount } from "../utils/canvasUtils";

export default {
  name: "CanvasContainer",
  mounted() {
    canvasInit("canvas");
  },
  beforeUnmount() {
    canvasUnmount();
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
