import { fabric } from "fabric";

export const canvasInit = (id) => {
  return new fabric.Canvas(id, {
    width: 1000,
    height: 600,
  });
};

const circlePosition = {
  top: {
    top: 0,
    left: 25,
  },
  right: {
    top: 25,
    left: 50,
  },
  bottom: {
    top: 50,
    left: 25,
  },
  left: {
    top: 25,
    left: 0,
  },
};

export const addNewElement = (canvas, connection) => {
  const rect = newRect();
  rect.on("mouse:move", (e) => console.log(e));

  const circleArr = [];

  for (const key in connection) {
    if (key === "top" && connection[key]) {
      const circleTop = newCircle(circlePosition.top);
      circleTop.on("mouseup", (event) => {
        circleTop.set({
          fill: "red",
        });
        canvas.renderAll();
        console.log("event верхнего кружка", event.target.type);
      });
      circleArr.push(circleTop);
    }
    if (key === "right" && connection[key]) {
      const circleLeft = newCircle(circlePosition.left);
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
      const circleRight = newCircle(circlePosition.right);
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
      const circleBottom = newCircle(circlePosition.bottom);
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
    console.log("event группы", event.target.type);
  });

  circleArr.splice(0, circleArr.length);

  canvas.add(group);
};

const newRect = () => {
  return new fabric.Rect({
    width: 50,
    height: 50,
    backgroundColor: "black",
    fill: "white",
  });
};

const newCircle = ({ top, left }) => {
  return new fabric.Circle({
    radius: 10,
    fill: "#eef",
    top: top,
    left: left,
    originX: "center",
    originY: "center",
    fill: "black",
  });
};

export const canvasUnmount = (canvas) => {
  canvas = null;
};
