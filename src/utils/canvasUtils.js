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
  group.on("moving", () => console.log("навели на элемент"));
  for (const key in connection) {
    if (key === "top" && connection[key]) {
      const circleTop = newCircle(circlePosition.top);
      group.add(circleTop);
      circleTop.on("mousedown", function (event) {
        listenerCircleMouseDown(canvas, circleTop, group, isCircleDown);
        newLine(event, canvas);
      });
      circleTop.on("mouseup", function () {
        listenerCircleMouseUp(canvas, circleTop, group, isCircleDown);
      });
    }
    if (key === "right" && connection[key]) {
      const circleLeft = newCircle(circlePosition.left);
      group.add(circleLeft);
      circleLeft.on("mousedown", function (event) {
        listenerCircleMouseDown(canvas, circleLeft, group, isCircleDown);
        newLine(event, canvas);
      });
      circleLeft.on("mouseup", function () {
        listenerCircleMouseUp(canvas, circleLeft, group, isCircleDown);
      });
    }
    if (key === "left" && connection[key]) {
      const circleRight = newCircle(circlePosition.right);
      group.add(circleRight);
      circleRight.on("mousedown", function (event) {
        listenerCircleMouseDown(canvas, circleRight, group, isCircleDown);
        newLine(event, canvas);
      });
      circleRight.on("mouseup", function () {
        listenerCircleMouseUp(canvas, circleRight, group, isCircleDown);
      });
    }
    if (key === "bottom" && connection[key]) {
      const circleBottom = newCircle(circlePosition.bottom);
      group.add(circleBottom);
      circleBottom.on("mousedown", function (event) {
        listenerCircleMouseDown(canvas, circleBottom, group, isCircleDown);
        newLine(event, canvas);
      });
      circleBottom.on("mouseup", function () {
        listenerCircleMouseUp(canvas, circleBottom, group, isCircleDown);
      });
    }
  }

  circleArr.splice(0, circleArr.length);

  canvas.add(group);
}

function listenerCircleMouseDown(canvas, circleObj, groupObj, isCircleDown) {
  console.log("нажал мышку");
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
  canvas.off("mouse:move", deleteEvents());
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

function newLine(event, canvas) {
  console.log("событие при нажатии мышки", event);
  canvas.on("mouse:move", (options) => {
    console.log(options);
  });
}

function deleteEvents() {
  console.log("удалился обработчик событий");
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
