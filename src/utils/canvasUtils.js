import { fabric } from "fabric";

export const canvasInit = (id) => {
  return new fabric.Canvas(id, {
    width: 1000,
    height: 600,
  });
};

export const addNewElement = (canvas) => {
  const circle = new fabric.Circle({
    radius: 100,
    fill: "#eef",
    scaleY: 0.5,
    originX: "center",
    originY: "center",
  });

  const text = new fabric.Text("hello world", {
    fontSize: 30,
    originX: "center",
    originY: "center",
  });

  const group = new fabric.Group([circle, text], {
    left: 150,
    top: 100,
    angle: -10,
  });

  canvas.add(group);
};

export const canvasUnmount = (canvas) => {
  canvas = null;
};
