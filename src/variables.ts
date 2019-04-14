export const declarationTypes = [
  "function",
  "class",
  "const",
  "var",
  "let",
  "import"
];
const type_obj = {
  funciton: {
    type: "function",
    action: () => {}
  },
  "{": {
    type: "blockStart"
  },
  "}": {
    type: "blockEnds"
  },
  import: {
    type: ""
  },
  const: {
    type: "constant"
  }
};
