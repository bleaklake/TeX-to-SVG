# tex-to-svg

This MathJax wrapper converts TeX to Scalable Vector Graphics (SVG). This package doesn't use any webworkers, webviews ; so It can be used for your NodeJS, React and React Native projects.

**This project is still in its early development stages.**

For any bugs, typos, errors, feel free to open an issue on the associated Github repository.

## Installation

```cli
npm install tex-to-svg --save
```

## Examples

### JS (with the `options` parameter)

```js
const TeXToSVG = require("tex-to-svg");

const myTeXEquation = "\\frac{n!}{k!(n-k)!} = \\binom{n}{k}";

const options = {
    width: 1280,
    ex: 8,
    em: 16
};

const SVGEquation = TeXToSVG(myTeXEquation, options); // returns <svg style="vertical-align: -2.172ex" xmlns="http://www.w3.org/2000/svg" width="18.199ex" height="5.451ex" role="img" focusable="false" viewBox="0 -1449.5 8044 2409.5" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path ...
```

### TS (without the `options` parameter)

```ts
import TeXToSVG from "tex-to-svg";

const myTeXEquation = "\\frac{n!}{k!(n-k)!} = \\binom{n}{k}";

const SVGEquation = TeXToSVG((myTeXEquation); // returns <svg style="vertical-align: -2.172ex" xmlns="http://www.w3.org/2000/svg" width="18.199ex" height="5.451ex" role="img" focusable="false" viewBox="0 -1449.5 8044 2409.5" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path ...
```

## Documentation

`TeXToSVG(equation, options)` : **string** _The returned Scalable Vector Graphics equation_

> `equation` : **string** _The TeX equation_
>
> `options` ?: **object** _The options of the retuned Scalable Vector Graphics_
>
> > `width` ?: **number** _The width of container in pixels_
> >
> > `ex` ?: **number** _The ex-size in pixels_
> >
> > `em` ?: **number** _The em-size in pixels_

### Notation

?: = optional parameter

## Notes

### Useful links

This wrapper is inspired by this project : https://github.com/mathjax/MathJax-demos-node/tree/master/direct.

### Typescript

You **DON'T** have to install any types `@types/tex-to-svg`.
