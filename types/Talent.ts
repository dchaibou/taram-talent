// types/Talent.ts

export interface ParcoursEtape {
    annee: number;
    titre: string;
    description: string;
}

export interface Talent {
    id: number;
    slug: string;
    nom: string;
    domaine: string;
    photoUrl: string;
    phraseAccroche: string;
    parcours: ParcoursEtape[];
    accomplissements: string[];
    combats: string[];
    lecons: string;
}