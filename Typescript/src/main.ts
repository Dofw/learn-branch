
function decorate(Test: {new (): void}) {
  console.log(12344)
}

@decorate
class Test {
}