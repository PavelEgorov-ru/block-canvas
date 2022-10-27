import { fabric } from "fabric";

let canvas = null;

export const canvasInit = (id) => {
  canvas = new fabric.Canvas(id, {});
};

export const canvasUnmount = () => {
  canvas = null;
};
