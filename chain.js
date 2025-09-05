const student = {
  name: "Rafid",
  1: 50,
  family: {
    title: "bhuiyah",
    // mother: {
    //   name: "noor jahan",
    //   age: 45,
    // }, [important error]
  },
  "home-address": "kochu khet",
  marks: 90,
};

// console.log(student.family.title);
console.log(student.family.mother?.age);
