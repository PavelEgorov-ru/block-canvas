import { fabric } from "fabric";

const circlePosition = {
  top: {
    top: -25,
    left: 0,
  },
  right: {
    top: 0,
    left: 25,
  },
  bottom: {
    top: 25,
    left: 0,
  },
  left: {
    top: 0,
    left: -25,
  },
};

export const canvasInit = (id) => {
  return new fabric.Canvas(id, {
    width: 1000,
    height: 600,
  });
};

export function addNewElement(canvas, connection) {
  let isCircleDown = false;

  const rect = newRect();

  const circleArr = [];

  const group = newGroup([rect, ...circleArr]);

  console.log(group);

  for (const key in connection) {
    if (key === "top" && connection[key]) {
      console.log(group);
      const circleTop = newCircle(circlePosition.top);
      group.add(circleTop);
      circleTop.on("mousedown", function () {
        listenerCircleMouseDown(canvas, circleTop, group, isCircleDown);
      });
      circleTop.on("mouseup", function () {
        console.log("отпустил");
        listenerCircleMouseUp(canvas, circleTop, group, isCircleDown);
      });
    }
    if (key === "right" && connection[key]) {
      const circleLeft = newCircle(circlePosition.left);
      group.add(circleLeft);
      circleLeft.on("mousedown", function () {
        listenerCircleMouseDown(canvas, circleLeft, group, isCircleDown);
      });
      circleLeft.on("mouseup", function () {
        console.log("отпустил");
        listenerCircleMouseUp(canvas, circleLeft, group, isCircleDown);
      });
    }
    if (key === "left" && connection[key]) {
      const circleRight = newCircle(circlePosition.right);
      group.add(circleRight);
      circleRight.on("mousedown", function () {
        listenerCircleMouseDown(canvas, circleRight, group, isCircleDown);
      });
      circleRight.on("mouseup", function () {
        console.log("отпустил");
        listenerCircleMouseUp(canvas, circleRight, group, isCircleDown);
      });
    }
    if (key === "bottom" && connection[key]) {
      const circleBottom = newCircle(circlePosition.bottom);
      group.add(circleBottom);
      circleBottom.on("mousedown", function () {
        listenerCircleMouseDown(canvas, circleBottom, group, isCircleDown);
      });
      circleBottom.on("mouseup", function () {
        console.log("отпустил");
        listenerCircleMouseUp(canvas, circleBottom, group, isCircleDown);
      });
    }
  }

  circleArr.splice(0, circleArr.length);

  canvas.add(group);
}

function listenerCircleMouseDown(canvas, circleObj, groupObj, isCircleDown) {
  isCircleDown = true;
  const colorCircle = isCircleDown ? "red" : "balck";
  circleObj.set({
    fill: colorCircle,
  });

  groupObj.set({
    lockMovementX: true,
    lockMovementY: true,
  });
  canvas.renderAll();
}

function listenerCircleMouseUp(canvas, circleObj, groupObj, isCircleDown) {
  isCircleDown = false;
  const colorCircle = isCircleDown ? "red" : "balck";
  circleObj.set({
    fill: colorCircle,
  });
  groupObj.set({
    lockMovementX: false,
    lockMovementY: false,
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
