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

let isConnecting = false;

let isConnectingStart = false;

export const addNewElement = (canvas, connection) => {
  let isCircleDown = false;
  let isConnectingStop = true;

  const rect = newRect();
  rect.on("mouse:move", (e) => console.log(e));

  const circleArr = [];

  for (const key in connection) {
    if (key === "top" && connection[key]) {
      const circleTop = newCircle(circlePosition.top);
      circleTop.on("mouseup", (event) => {
        isCircleDown = !isCircleDown;
        isConnecting = !isConnecting;
        if (!isConnecting) {
          isCircleDown = false;
        }

        const colorCircle = isCircleDown ? "red" : "balck";
        circleTop.set({
          fill: colorCircle,
        });
        console.log(isCircleDown);
        canvas.renderAll();
      });
      circleArr.push(circleTop);
    }
    if (key === "right" && connection[key]) {
      const circleLeft = newCircle(circlePosition.left);
      circleLeft.on("mouseup", (event) => {
        isCircleDown = !isCircleDown;
        isConnecting = !isConnecting;
        const colorCircle = isCircleDown ? "red" : "balck";
        circleLeft.set({
          fill: colorCircle,
        });
        console.log(isCircleDown);
        canvas.renderAll();
      });
      circleArr.push(circleLeft);
    }
    if (key === "left" && connection[key]) {
      const circleRight = newCircle(circlePosition.right);
      circleRight.on("mouseup", (event) => {
        isCircleDown = !isCircleDown;
        isConnecting = !isConnecting;
        const colorCircle = isCircleDown ? "red" : "balck";
        circleRight.set({
          fill: colorCircle,
        });
        console.log(isCircleDown);
        canvas.renderAll();
      });
      circleArr.push(circleRight);
    }
    if (key === "bottom" && connection[key]) {
      const circleBottom = newCircle(circlePosition.bottom);
      circleBottom.on("mouseup", (event) => {
        isCircleDown = !isCircleDown;
        isConnecting = !isConnecting;
        const colorCircle = isCircleDown ? "red" : "balck";
        circleBottom.set({
          fill: colorCircle,
        });
        console.log(isCircleDown);
        canvas.renderAll();
      });
      circleArr.push(circleBottom);
    }
  }
  const group = newGroup([rect, ...circleArr]);
  group.on("mousedown", (event) => {
    console.log("слушатель сработал");
    if (isCircleDown && isConnecting) {
      console.log("изменение при true");
      group.set({
        lockMovementX: true,
        lockMovementY: true,
      });
    }
    if (isCircleDown && !isConnecting) {
      group.set({
        lockMovementX: false,
        lockMovementY: false,
      });
    }
    canvas.renderAll();
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
    // objectCaching: false,
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
    // objectCaching: false,
  });
};

const newGroup = (elements) => {
  return new fabric.Group([...elements], {
    left: 150,
    top: 100,
    subTargetCheck: true,
    // objectCaching: false,
  });
};

export const canvasUnmount = (canvas) => {
  canvas = null;
};
