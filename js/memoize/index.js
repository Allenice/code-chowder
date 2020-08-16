function Memoize(instance) {
  let cache = {};

  return function (getterFun, deps) {
    let key = JSON.stringify(deps);
    if (cache[key]) {
      return cache[key];
    }
    let value = getterFun.apply(instance || null, deps);
    cache[key] = value;
    return value;
  };
}

class Person {
  m;
  firstName = "莫";
  lastName = "伦冰";

  constructor() {
    this.m = Memoize(this);
  }

  get fullName() {
    return {
        name: Array(10000).fill(1).map((v, ix) => {
            return this.firstName + this.lastName + ix
        }).join(',')
    }
    // return this.m(
    //   (firstName, lastName) => {
    //     console.log("getters");
    //     return Array(10000).fill(1).map((v, ix) => {
    //         return firstName + lastName + ix
    //     }).join(','); 
    //   },
    //   [this.firstName, this.lastName]
    // );
  }
}

let p = new Person();
console.time('time')
let fullname = p.fullName
for (let i = 0; i < 30; i++) {
    p.fullName.name
}
console.timeEnd('time')
