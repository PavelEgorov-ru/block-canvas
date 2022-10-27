import { fabric } from "fabric";

let canvas = null;

export const canvasInit = (id) => {
  canvas = new fabric.Canvas(id, {
    isDrawingMode: true,
  });
};

export const canvasUnmount = () => {
  canvas = null;
};
