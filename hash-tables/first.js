let user = {
  age: 54,
  name: "Vladis",
  magic: true,
  scream: function () {
    console.log("ahhhhhhhhh!");
  },
};

user.age; // O(1)
user.spell = "abra kadabra"; // O(1)
user.scream(); // O(1)
