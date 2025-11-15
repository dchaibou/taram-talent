import { Talent } from "@/types/Talent";
import path from 'path';
import { promises as fs } from 'fs';

const dataFilePath = path.join(process.cwd(), 'data', 'talents.json');

/**
 * Lit le fichier JSON du disque de manière asynchrone.
 * N'utilise PAS de cache mémoire pour permettre les modifications de fichiers en dev sans redémarrage.
 */
async function fetchTalentsFromDisk(): Promise<Talent[]> {
    try {
        // Lecture asynchrone du fichier JSON (méthode privilégiée par Next.js pour I/O)
        const fileContents = await fs.readFile(dataFilePath, 'utf8');
        const talents = JSON.parse(fileContents) as Talent[];

        // Simuler le tri par "dernière publication" (nécessite un champ 'datePublication' dans Talent)
        // Pour l'instant, nous supposons qu'ils sont triés par 'id' décroissant pour simuler les plus récents.
        talents.sort((a, b) => b.id - a.id);

        return talents;
    } catch (error) {
        // Ceci attrapera l'erreur si le fichier est manquant ou mal formaté.
        console.error("Erreur critique lors de la lecture des données de talents:", error);
        return [];
    }
}

// ------------------------------------------------------------------------
// --- Fonctions d'exportation ---
// ------------------------------------------------------------------------

/**
 * Récupère tous les talents (pour la galerie complète).
 */
export async function getAllTalents(): Promise<Talent[]> {
    return await fetchTalentsFromDisk();
}

/**
 * Récupère un talent spécifique par son slug.
 * @param slug Le slug (identifiant URL) du talent.
 */
export async function getTalentBySlug(slug: string): Promise<Talent | undefined> {
    const talents = await getAllTalents();
    return talents.find(t => t.slug === slug);
}

/**
 * Récupère les "limit" talents les plus récents (pour la page d'accueil).
 * Utilise le même tri que getAllTalents.
 */
export async function getLatestTalents(limit: number = 6): Promise<Talent[]> {
    const talents = await getAllTalents();
    return talents.slice(0, limit);
}