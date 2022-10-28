import { fabric } from "fabric";

export const canvasInit = (id) => {
  return new fabric.Canvas(id, {
    width: 1000,
    height: 600,
  });
};

export const addNewElement = (canvas, connection) => {
  console.dir(connection);
  const rect = new fabric.Rect({
    width: 50,
    height: 50,
  });

  const circleArr = [];

  // console.log(typeof connection);

  for (let key in connection) {
    console.log("ключ", connection[key], "из", connection);
    if ((connection[key] = "top")) {
      const circleTop = new fabric.Circle({
        radius: 5,
        fill: "#eef",
        top: 0,
        left: 25,
        originX: "center",
        originY: "center",
      });
      console.log(circleTop);
      circleArr.push(circleTop);
    }
    // if ((connection[key] = "left")) {
    //   const circleLeft = new fabric.Circle({
    //     radius: 5,
    //     fill: "#eef",
    //     top: 25,
    //     left: 50,
    //     originX: "center",
    //     originY: "center",
    //   });
    //   circleArr.push(circleLeft);
    // }
    // if ((connection[key] = "right")) {
    //   const circleRight = new fabric.Circle({
    //     radius: 5,
    //     fill: "#eef",
    //     top: 25,
    //     left: 0,
    //     originX: "center",
    //     originY: "center",
    //   });
    //   circleArr.push(circleRight);
    // }
    if ((connection[key] = "bottom")) {
      const circleBottom = new fabric.Circle({
        radius: 5,
        fill: "#eef",
        top: 50,
        left: 25,
        originX: "center",
        originY: "center",
      });
      circleArr.push(circleBottom);
    }
  }

  // console.log(circleArr);

  const group = new fabric.Group([rect, ...circleArr], {
    left: 150,
    top: 100,
  });

  circleArr.splice(0, circleArr.length);

  canvas.add(group);
};

export const canvasUnmount = (canvas) => {
  canvas = null;
};

// const circle1 = new fabric.Circle({
//   radius: 5,
//   fill: "#eef",
//   top: 0,
//   left: 25,
//   originX: "center",
//   originY: "center",
// });

// const circle2 = new fabric.Circle({
//   radius: 5,
//   fill: "#eef",
//   top: 25,
//   left: 50,
//   originX: "center",
//   originY: "center",
// });

// const circle3 = new fabric.Circle({
//   radius: 5,
//   fill: "#eef",
//   top: 50,
//   left: 25,
//   originX: "center",
//   originY: "center",
// });

// const circle4 = new fabric.Circle({
//   radius: 5,
//   fill: "#eef",
//   top: 25,
//   left: 0,
//   originX: "center",
//   originY: "center",
// });
