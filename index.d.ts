declare module "AM-to-CHTML" {

    interface options {
        width?: number,
        ex?: number,
        em?: number,
        fontURL?: string
    }

    export default function MMLToCHTML(str: string, opts?: options): string;
}