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
                id="top"
                v-model="connection.top"
                type="checkbox"
                value="false"
                @change="addCheckBox"
              />
              <label>top</label>
            </div>
            <div>
              <input
                id="left"
                v-model="connection.left"
                type="checkbox"
                value="false"
                @change="addCheckBox"
              />
              <label>left</label>
            </div>
            <div>
              <input
                id="right"
                v-model="connection.right"
                type="checkbox"
                :value="connection.right"
                @change="addCheckBox"
              />
              <label>right</label>
            </div>
            <div>
              <input
                id="bottom"
                v-model="connection.bottom"
                type="checkbox"
                :value="connection.bottom"
                @change="addCheckBox"
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
      connection: {
        top: false,
        left: false,
        right: false,
        bottom: false,
      },
    };
  },
  mounted() {
    this.canvas = canvasInit(this.$refs.canvasRef);
    // this.canvas.on("mouse:up", function (e) {
    //   console.log("таргет", e.target); // should contain info on the clicked object
    // });
  },
  beforeUnmount() {},
  methods: {
    addElement() {
      addNewElement(this.canvas, this.connection);
      this.connection.top = false;
      this.connection.left = false;
      this.connection.right = false;
      this.connection.bottom = false;
    },
    addCheckBox(e) {
      this.connection[e.target.id] = e.target.checked;
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
