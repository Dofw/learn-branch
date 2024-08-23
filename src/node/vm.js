import vm from "node:vm";
const sourceStr = `(function name(exports, require, module, __filename, __dirname, jitiImport) { \n console.log(1) \n})`

const compiled = vm.runInThisContext(sourceStr, {
  filename: import.meta.url,
  lineOffset: 0,
  displayErrors: false,
});
console.log(123, compiled)