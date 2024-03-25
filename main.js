let wrapper = document.getElementById("buttles_wrapper");

let colors = [
  {
    id: 1,
    color: "#FFFF00",
  },
  {
    id: 2,
    color: "#E20038",
  },
  {
    id: 3,
    color: "#7100E2",
  },
  {
    id: 4,
    color: "#FF7F00",
  },
  {
    id: 5,
    color: "#80E209",
  },
  {
    id: 6,
    color: "#A868D9",
  },
  {
    id: 7,
    color: "#B3E2CB",
  },
];

const generateNumber = (a) => {
  return Math.floor(Math.random() * a);
};

const emptyButtleCreator = (count, length) => {
  if (count > 6) {
    let empty = [];
    empty.push(new Array(length).fill({}));
    empty.push(new Array(length).fill({}));
    return empty;
  } else {
    return [new Array(length).fill({})];
  }
};

const generateButtles = () => {
  let length = (generateNumber(5) % 3) + 3;
  let count = (generateNumber(8) % 4) + 5;
  let buttles = [];

  let empty = emptyButtleCreator(count, length);

  for (let i = 0; i < empty.length; i++) {
    buttles.push({
      id: buttles.length + 1,
      data: empty[i],
      isActive: false,
    });
  }

  if (count > 6) count -= 2;
  else count--;

  while (count > 0) {
    let res = [];
    for (let i = 0; i < length; i++) {
      let random_colors = generateNumber(colors.length);
      res.push(colors[random_colors]);
    }
    buttles.push({ id: buttles.length + 1, data: res, isActive: false });
    count--;
  }

  return buttles;
};

let res = generateButtles();

let activesId = [];
const isActive = (id) => {
  let findPassive = res.filter((val) => val.id == id);
  findPassive[0].isActive = !findPassive[0].isActive;

  activesId.push(findPassive[0].id);

  if (activesId.length > 1) {
    let selectButtles = res.filter(
      (val) => val.id == activesId[0] || val.id == activesId[1]
    );

    console.log("selectButtles", selectButtles);
    console.log("trust", selectButtles[0].data[0] == selectButtles[1].data[0]);

    if(selectButtles[0].data[0] == selectButtles[1].data[0]){}

    // let passiveId = activesId.shift();

    // let findActive = res.filter((val) => val.id == passiveId);
    // findActive[0].isActive = !findActive[0].isActive;
  }
};

const root = () => {
  let buttle = "";

  for (let item of res) {
    let { id, data } = item;
    let str = "";
    for (let val of data) {
      str += `<div class="item" style="background-color: ${
        val.color
      }; height: calc(100%/${data.length}); width: 100%; bottom: 0; ${
        val?.color ? "border-bottom: 0.4px solid black" : ""
      }"></div>
      `;
    }
    buttle += `<div onclick="isActive(${item.id})" class="buttle">${str}</div>`;
  }
  wrapper.innerHTML = buttle;
};
root();
