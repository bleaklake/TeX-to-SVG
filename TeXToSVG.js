const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { SVG } = require('mathjax-full/js/output/svg.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');
const { AssistiveMmlHandler } = require('mathjax-full/js/a11y/assistive-mml.js');

const { AllPackages } = require('mathjax-full/js/input/tex/AllPackages.js');


const DEFAULT_OPTIONS = {
    width: 1280,
    ex: 8,
    em: 16,
}

const ASSISTIVE_MML = false, FONT_CACHE = true, INLINE = false, packages = AllPackages.sort().join(', ').split(/\s*,\s*/);

const adaptor = liteAdaptor();
const handler = RegisterHTMLHandler(adaptor);
if (ASSISTIVE_MML) AssistiveMmlHandler(handler);

const tex = new TeX({ packages });
const svg = new SVG({ fontCache: (FONT_CACHE ? 'local' : 'none') });
const html = mathjax.document('', { InputJax: tex, OutputJax: svg });

const CSS = [
    'svg a{fill:blue;stroke:blue}',
    '[data-mml-node="merror"]>g{fill:red;stroke:red}',
    '[data-mml-node="merror"]>rect[data-background]{fill:yellow;stroke:none}',
    '[data-frame],[data-line]{stroke-width:70px;fill:none}',
    '.mjx-dashed{stroke-dasharray:140}',
    '.mjx-dotted{stroke-linecap:round;stroke-dasharray:0,140}',
    'use[data-c]{stroke-width:3px}'
].join('');

function TeXToSVG(str, opts, getWidth) {
    const options = opts ? { ...DEFAULT_OPTIONS, ...opts } : DEFAULT_OPTIONS;

    const node = html.convert(str, {
        display: !INLINE,
        em: options.em,
        ex: options.ex,
        containerWidth: options.width
    });

    let svgString = adaptor.innerHTML(node);
    svgString = svgString.replace(/<defs>/, `<defs><style>${CSS}</style>`)
    
    if (getWidth) {
        const svgWidth = node.children[0].attributes.viewBox.split(' ')[2];
        return {svgString, svgWidth};
    }

    return svgString;
}

module.exports = TeXToSVG;
