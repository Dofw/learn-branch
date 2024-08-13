const obj = {
  a: {
    a: 1,
  },
};

const { a } = obj;

a.a = 2;

console.log(obj);
