import { fabric } from "fabric";

export const canvasInit = (id) => {
  return new fabric.Canvas(id, {
    width: 1000,
    height: 600,
  });
};

export const canvasUnmount = (canvas) => {
  canvas = null;
};
