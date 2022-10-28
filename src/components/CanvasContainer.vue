<template>
  <div class="container">
    <h1>Блок над Canvas</h1>
    <div class="container__canvas">
      <div class="display">
        <div class="display__addBlock">
          <button class="button" @click="addElement">
            Добавить новый элемент
          </button>
          <div class="checkBox-container">
            <p>Выберите расположение точек соединения</p>
            <div>
              <input
                type="checkbox"
                id="top"
                value="top"
                v-model="connection"
              />
              <label>top</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="left"
                value="left"
                v-model="connection"
              />
              <label>left</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="right"
                value="right"
                v-model="connection"
              />
              <label>right</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="bottom"
                value="bottom"
                v-model="connection"
              />
              <label>bottom</label>
            </div>
          </div>
        </div>

        <button class="button">Кнопка 2</button>
        <button class="button">Кнопка 3</button>
        <button class="button">Кнопка 4</button>
      </div>
      <canvas ref="canvasRef" class="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import { canvasInit, addNewElement } from "../utils/canvasUtils";

export default {
  name: "CanvasContainer",
  data() {
    return {
      canvas: null,
      connection: [],
    };
  },
  mounted() {
    this.canvas = canvasInit(this.$refs.canvasRef);
  },
  beforeUnmount() {},
  methods: {
    addElement() {
      addNewElement(this.canvas, this.connection);
      this.connection = [];
    },
    addCheckBox(e) {
      // this.connection[e.target.id] = !this.connection[e.target.id];
      console.log(e.target.id);
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

.container__canvas {
  display: flex;
  gap: 20px;
}

.display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.display__addBlock {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.button {
  width: 100%;
}
.canvas {
  border: 1px solid red;
  width: 1000px;
  height: 600px;
}
</style>
