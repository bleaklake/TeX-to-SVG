declare module "TeX-to-SVG" {

    interface options {
        width?: number,
        ex?: number,
        em?: number
    }

    export default function TeXToSVG(str: string, opts?: options): string;
}