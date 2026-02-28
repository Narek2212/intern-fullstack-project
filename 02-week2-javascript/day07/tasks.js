const people = [
  { id: 1, name: "Ana", age: 22 },
  { id: 2, name: "Ben", age: 17 },
  { id: 3, name: "Cara", age: 30 },
  { id: 4, name: "Dan", age: 17 },
];

export function getAdults(list) {
return list.filter(person => person.age >= 18);
}

export function getNames(list) {
return list.map(person => person.name);
}

export function countByAge(list) {
    const result = {};

  list.forEach(person => {
    result[person.age] = (result[person.age] || 0) + 1;
  });

  return result;
}

console.log("getAdults expected 2 ->", getAdults(people).length);
console.log("getNames expected 4 ->", getNames(people).length);
console.log("countByAge expected keys 17,22,30 ->", countByAge(people));
