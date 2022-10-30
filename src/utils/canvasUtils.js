import { fabric } from "fabric";

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

export const canvasInit = (id) => {
  return new fabric.Canvas(id, {
    width: 1000,
    height: 600,
  });
};

let isConnecting = false;

export function addNewElement(canvas, connection) {
  let isCircleDown = false;

  const rect = newRect();
  rect.on("mouse:move", (e) => console.log(e));

  const circleArr = [];

  const group = newGroup([rect, ...circleArr]);
  group.on("mouseover", (event) => {
    console.log(event.target);
    console.log("isConnecting в слушателе группы при событии", isCircleDown);
    if (isCircleDown) {
      console.log(isCircleDown);
      group.set({
        lockMovementX: true,
        lockMovementY: true,
      });
    }
    if (!isCircleDown) {
      group.set({
        lockMovementX: false,
        lockMovementY: false,
      });
    }
    canvas.renderAll();
  });

  console.log(group);

  for (const key in connection) {
    if (key === "top" && connection[key]) {
      console.log(group);
      const circleTop = newCircle(circlePosition.top);
      circleTop.on("mousedown", function () {
        listenerCircleMouseDown(canvas, circleTop, isCircleDown);
      });
      circleTop.on("mouseup", function () {
        console.log("отпустил");
        listenerCircleMouseUp(canvas, circleTop, isCircleDown);
      });
      circleArr.push(circleTop);
    }
    if (key === "right" && connection[key]) {
      const circleLeft = newCircle(circlePosition.left);
      circleLeft.on("mousedown", function () {
        listenerCircleMouseDown(canvas, circleLeft, isCircleDown);
      });
      circleLeft.on("mouseup", function () {
        console.log("отпустил");
        listenerCircleMouseUp(canvas, circleLeft, isCircleDown);
      });
      circleArr.push(circleLeft);
    }
    if (key === "left" && connection[key]) {
      const circleRight = newCircle(circlePosition.right);
      circleRight.on("mousedown", function () {
        listenerCircleMouseDown(canvas, circleRight, isCircleDown);
      });
      circleRight.on("mouseup", function () {
        console.log("отпустил");
        listenerCircleMouseUp(canvas, circleRight, isCircleDown);
      });
      circleArr.push(circleRight);
    }
    if (key === "bottom" && connection[key]) {
      const circleBottom = newCircle(circlePosition.bottom);
      circleBottom.on("mousedown", function () {
        listenerCircleMouseDown(canvas, circleBottom, isCircleDown);
      });
      circleBottom.on("mouseup", function () {
        console.log("отпустил");
        listenerCircleMouseUp(canvas, circleBottom, isCircleDown);
      });
      circleArr.push(circleBottom);
    }
  }

  circleArr.splice(0, circleArr.length);

  canvas.add(group);
}

function listenerCircleMouseDown(canvas, circleObj, isCircleDown) {
  isCircleDown = true;
  isConnecting = true;
  if (!isConnecting) {
    isCircleDown = false;
  }
  const colorCircle = isCircleDown ? "red" : "balck";
  circleObj.set({
    fill: colorCircle,
  });
  canvas.renderAll();
}

function listenerCircleMouseUp(canvas, circleObj, isCircleDown) {
  isConnecting = false;
  isCircleDown = false;
  const colorCircle = isCircleDown ? "red" : "balck";
  circleObj.set({
    fill: colorCircle,
  });
  canvas.renderAll();
}

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

const newGroup = (elements) => {
  return new fabric.Group([...elements], {
    left: 150,
    top: 100,
    subTargetCheck: true,
  });
};

// export const canvasUnmount = (canvas) => {
//   canvas = null;
// };
