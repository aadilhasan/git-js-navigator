import file from "./dummy";
import { declarationTypes } from "./variables";
const SPACE = " ";
const TAB = "\t";
const ENTER = "\n";
const keywords = ["import", "const", "let", "var"];
const tokens = {};
let utill = {
  index: 0,
  lineNo: 0,
  tokens: []
};

const handleSpaces = (str, utill) => {
  let space = "";

  while (str.charAt(utill.index) === SPACE || str.charAt(utill.index) === TAB) {
    space += SPACE;
    utill.index++;
  }
  return space;
};

const getWord = (str, utill) => {
  let word = "";
  const char = str.charAt(utill.index);
  while (
    str.charAt(utill.index) !== SPACE &&
    str.charAt(utill.index) !== TAB &&
    str.charAt(utill.index) !== ENTER
  ) {
    if (str.charAt(utill.index) === ENTER) {
      console.log(" found enter 2 ");
    }
    word += str.charAt(utill.index);
    utill.index++;
  }
  // const index = declarationTypes.indexOf(word);
  // if (index !== -1) {
  //   utill.tokens.push({
  //     type: "variableDeclaration",
  //     values: word
  //   });
  // }
  // handleWord(word, utill);
  return word;
};

const handleImport = (str, utill) => {
  const type = {
    type: "importDeclaration"
  };
};

const handleVariables = (str, utill, kind) => {
  const type = {
    type: "variableDeclaration",
    kind,
    identifiers: []
  };
  let max = utill.index + 50;
  while (str.charAt(utill.index) !== "=" && str.charAt(utill.index) !== ";") {
    handleSpaces(str, utill);
    const word = getWord(str, utill);
    type.identifiers.push(word);
    if (max < utill.index) break;
    // if (
    //   str.charAt(utill.index) !== "{" &&
    //   str.charAt(utill.index) !== "," &&
    //   str.charAt(utill.index) !== "}"
    // ) {
    //   debugger;
    //   const word = getWord(str, utill);
    //   type.identifiers.push(word);
    // } else {
    //   utill.index++;
    // }
  }
  utill.tokens.push(type);
};

const getVariableName = (str, utill) => {};

const handleWord = (word, utill) => {};

const parseFile = (str, utill) => {
  const MAX = 200;
  // while (str.charAt(utill.index) !== '\n') {
  while (utill.index <= MAX) {
    if (str.charAt(utill.index) === ENTER) {
      utill.index++;
      utill.lineNo++;
    }
    const space = handleSpaces(str, utill);
    utill.tokens.push({
      type: "text",
      value: space
    });
    const word = getWord(str, utill);
    utill.tokens.push({
      type: "word",
      value: word
    });

    if (word === "const") {
      console.log(
        " found const",
        word,
        " at ",
        utill.index - word.length,
        utill.index - 1
      );
      // handleVariables(str, utill, word);
    }

    // else {
    //   utill.tokens.push({
    //     type: "word",
    //     value: word
    //   });
    // }
  }
};

parseFile(file, utill);
console.log(" in the end utill is  ", utill, file.charAt(42) === "\n");
