// fruit search => green and little

const searchColor = 'green';
const searchSize = 'little';

const fruitList = [
  {
    'name': 'Lima',
    'size': 'little',
    'color': 'green'
  },
  {
    'name': 'Pearl',
    'size': 'little',
    'color': 'green'
  },
  {
    'name': 'Melon',
    'size': 'big',
    'color': 'green'
  },
  {
    'name': 'Orange',
    'size': 'little',
    'color': 'orange'
  },
  {
    'name': 'Watermelon',
    'size': 'big',
    'color': 'green'
  },
  {
    'name': 'Apple',
    'size': 'little',
    'color': 'red'
  }
];


for (let i = 0; i < fruitList.length; i++) {
  // console.log(fruitList[i]);
  if (fruitList[i].color ===  searchColor && fruitList[i].size === searchSize) {
    console.log(fruitList[i].name);
  }
}

