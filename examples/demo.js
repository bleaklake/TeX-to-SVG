const TeXToSVG = require("../TeXToSVG");

const myTeXEquation = "\\frac{n!}{k!(n-k)!} = \\binom{n}{k}";

const options = {
    width: 1280,
    ex: 8,
    em: 16
};

const SVGEquation = TeXToSVG(myTeXEquation, options);

console.log(SVGEquation);