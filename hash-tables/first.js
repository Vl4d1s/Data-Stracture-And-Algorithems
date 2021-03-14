// no order unlike arrays
let user = {
  age: 54,
  name: 'Vladis',
  magic: true,
  scream: function () {
    console.log('ahhhhhhhhh!');
  },
};

user.age; // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)

// const a = new Map(); // allows us to set any datatype as the key unlike regular js objects
// const b = new Sets(); // it only stores the keys... no values!!!
