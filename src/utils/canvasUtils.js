import { fabric } from "fabric";

export const canvasInit = (id) => {
  return new fabric.Canvas(id, {
    width: 1000,
    height: 600,
  });
};

export const addNewElement = (canvas, connection) => {
  const rect = new fabric.Rect({
    width: 50,
    height: 50,
    backgroundColor: "black",
    fill: "white",
  });

  rect.on("mouse:move", (e) => console.log(e));

  const circleArr = [];

  for (const key in connection) {
    if (key === "top" && connection[key]) {
      const circleTop = new fabric.Circle({
        radius: 10,
        fill: "#eef",
        top: 0,
        left: 25,
        originX: "center",
        originY: "center",
        fill: "black",
      });
      circleTop.on("mouseup", (event) => {
        circleTop.set({
          fill: "red",
        });
        canvas.renderAll();
        console.log("event верхнего кружка", event.target);
      });
      circleArr.push(circleTop);
    }
    if (key === "right" && connection[key]) {
      const circleLeft = new fabric.Circle({
        radius: 10,
        fill: "#eef",
        top: 25,
        left: 50,
        originX: "center",
        originY: "center",
        fill: "black",
      });
      circleLeft.on("mouseup", (event) => {
        circleLeft.set({
          fill: "red",
        });
        canvas.renderAll();
        console.log("event левого кружка", event.target);
      });
      circleArr.push(circleLeft);
    }
    if (key === "left" && connection[key]) {
      const circleRight = new fabric.Circle({
        radius: 10,
        fill: "#eef",
        top: 25,
        left: 0,
        originX: "center",
        originY: "center",
        fill: "black",
      });
      circleRight.on("mouseup", (event) => {
        circleRight.set({
          fill: "red",
        });
        canvas.renderAll();
        console.log("event правого кружка", event.target);
      });
      circleArr.push(circleRight);
    }
    if (key === "bottom" && connection[key]) {
      const circleBottom = new fabric.Circle({
        radius: 10,
        fill: "#eef",
        top: 50,
        left: 25,
        originX: "center",
        originY: "center",
        fill: "black",
      });
      circleBottom.on("mouseup", (event) => {
        circleBottom.set({
          fill: "red",
        });
        canvas.renderAll();
        console.log("event нижнего кружка", event.target);
      });
      circleArr.push(circleBottom);
    }
  }

  const group = new fabric.Group([rect, ...circleArr], {
    left: 150,
    top: 100,
    subTargetCheck: true,
  });
  group.on("mouseup", (event) => {
    console.log("event группы", event.target);
  });

  const obj = canvas.getObjects();
  console.log(obj);

  circleArr.splice(0, circleArr.length);

  canvas.add(group);
};

export const canvasUnmount = (canvas) => {
  canvas = null;
};
