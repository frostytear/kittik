// Generated automatically by nearley, version 2.13.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

  const moo = require('moo');
  const lexer = moo.compile({
    whitespace: { match: /\s+/, lineBreaks: true },
    comment: { match: /#.*?$/ },
    string: { match: /".*?"/, lineBreaks: true, value: (value) => value.slice(1, -1) },
    number: { match: /[0-9]+/ },
    identifier: {
      match: /[a-zA-Z]+/,
      keywords: {
        shape: 'shape',
        animation: 'animation'
      }
    },
    leftParenthesis: '(',
    rightParenthesis: ')',
    colon: ':'
  });
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "deck", "symbols": ["wso", "shapeDecl", "wso"]},
    {"name": "deck", "symbols": ["wso", "animationDecl", "wso"]},
    {"name": "shapeDecl", "symbols": ["shapeType", "wso", "optionDecl"], "postprocess": ([type, _, options]) => ({name: options.name, type, options})},
    {"name": "shapeType", "symbols": [(lexer.has("shape") ? {type: "shape"} : shape), (lexer.has("colon") ? {type: "colon"} : colon), (lexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": ([, , type]) => type.value},
    {"name": "animationDecl", "symbols": ["animationType", "wso", "optionDecl"], "postprocess": ([type, _, options]) => ({name: options.name, type, options})},
    {"name": "animationType", "symbols": [(lexer.has("animation") ? {type: "animation"} : animation), (lexer.has("colon") ? {type: "colon"} : colon), (lexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": ([, , type]) => type.value},
    {"name": "optionDecl", "symbols": [(lexer.has("leftParenthesis") ? {type: "leftParenthesis"} : leftParenthesis), "wso", "optionList", "wso", (lexer.has("rightParenthesis") ? {type: "rightParenthesis"} : rightParenthesis)], "postprocess": ([, , options]) => options},
    {"name": "optionList", "symbols": ["option", "wsm", "optionList"], "postprocess": ([lhs, _, rhs]) => Object.assign(lhs, rhs)},
    {"name": "optionList", "symbols": ["option"], "postprocess": id},
    {"name": "optionList", "symbols": []},
    {"name": "option", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "wsm", (lexer.has("string") ? {type: "string"} : string)], "postprocess": ([key, _, value]) => ({[key]: value.value})},
    {"name": "option", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "wsm", (lexer.has("number") ? {type: "number"} : number)], "postprocess": ([key, _, value]) => ({[key]: parseInt(value.value)})},
    {"name": "wso$ebnf$1", "symbols": []},
    {"name": "wso$ebnf$1", "symbols": ["wso$ebnf$1", (lexer.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "wso", "symbols": ["wso$ebnf$1"], "postprocess": () => null},
    {"name": "wsm$ebnf$1", "symbols": [(lexer.has("whitespace") ? {type: "whitespace"} : whitespace)]},
    {"name": "wsm$ebnf$1", "symbols": ["wsm$ebnf$1", (lexer.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "wsm", "symbols": ["wsm$ebnf$1"], "postprocess": () => null}
]
  , ParserStart: "deck"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
