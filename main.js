let buttle = document.getElementById("1");

const active = () => {
  console.log("click");
  buttle.classList.add("active");
};

let colors = [
  {
    id: 1,
    yellow: "#FFFF00",
  },
  {
    id: 2,
    red: "#E20038",
  },
  {
    id: 3,
    purple: "#7100E2",
  },
  {
    id: 4,
    orange: "#FF7F00",
  },
  {
    id: 5,
    green: "#80E209",
  },
  {
    id: 6,
    light_purple: "#A868D9",
  },
  {
    id: 7,
    blue: "#B3E2CB",
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
    buttles.push({ id: buttles.length + 1, data: res });
    count--;
  }

  return buttles;
};

console.log(generateButtles());
