declare module "tex-to-svg" {

    interface options {
        width?: number,
        ex?: number,
        em?: number
    }

    function TeXToSVG(str: string, opts: options, getWidth: Number): { svgString: string, svgWidth: Number };
    function TeXToSVG(str: string, opts?: options): string;
    export default TeXToSVG;
}
