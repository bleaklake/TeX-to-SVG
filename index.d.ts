declare module "tex-to-svg" {

    interface options {
        width?: number,
        ex?: number,
        em?: number
    }

    export default function TeXToSVG(str: string, opts?: options): string;
}