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

function TeXToSVG(str, opts) {
    const options = opts ? { ...DEFAULT_OPTIONS, ...opts } : DEFAULT_OPTIONS;

    const ASSISTIVE_MML = false, FONT_CACHE = true, INLINE = false, CSS = false, packages = AllPackages.sort();

    const adaptor = liteAdaptor();
    const handler = RegisterHTMLHandler(adaptor);
    if (ASSISTIVE_MML) AssistiveMmlHandler(handler);

    const tex = new TeX({ packages });
    const svg = new SVG({ fontCache: (FONT_CACHE ? 'local' : 'none') });
    const html = mathjax.document('', { InputJax: tex, OutputJax: svg });

    const node = html.convert(str, {
        display: !INLINE,
        em: options.em,
        ex: options.ex,
        containerWidth: options.width
    });

    const svgString = CSS ? adaptor.textContent(svg.styleSheet(html)) : adaptor.outerHTML(node);

    return svgString.replace(
        /<mjx-container.*?>(.*)<\/mjx-container>/gi,
        "$1"
    );
}

module.exports = TeXToSVG;
