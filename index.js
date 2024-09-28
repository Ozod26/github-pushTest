const person = [
  { name: "Ozodebk", age: 28, occupation: "masters student" },
  { name: "eThan", age: 31, occupation: "pedalchi" },
];

const newPerson = person.forEach((per) => {
  console.log(per.name, per.occupation);
});
