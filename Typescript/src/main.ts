class NestObj {
  value: number;
}

class Validator {
  value: string;
  @params
  nestObj: NestObj;
}

function params(obj: object, key: string, index: number) {}

class Test {
  constructor() {}

  methods(@params arg1: Validator, @params arg2: number) {}

  methods2(@params arg1: Validator, @params arg2: number) {}
}

const obj = new Test();

obj.methods({ value: "fda" }, 123);
