// lib/data.ts (Final version, ensuring async read)
import { Talent } from "@/types/Talent";
import path from 'path';
import { promises as fs } from 'fs'; // Use fs/promises

const dataFilePath = path.join(process.cwd(), 'data', 'talents.json');
let cachedTalents: Talent[] | null = null;

async function fetchTalentsFromDisk(): Promise<Talent[]> {
    // Use cached data if available (synchronous return is fine here)
    if (cachedTalents) {
        return cachedTalents;
    }

    try {
        // AWAITING the file read forces the entire dependency chain to be asynchronous,
        // which resolves the conflict with Next.js's dynamic routing engine.
        const fileContents = await fs.readFile(dataFilePath, 'utf8');
        const talents = JSON.parse(fileContents) as Talent[];
        cachedTalents = talents;
        return talents;
    } catch (error) {
        console.error("Critical error reading local talent data:", error);
        return [];
    }
}

export async function getTalentBySlug(slug: string): Promise<Talent | undefined> {
    const talents = await fetchTalentsFromDisk();
    return talents.find(t => t.slug === slug);
}

export async function getAllTalents(): Promise<Talent[]> {
    return await fetchTalentsFromDisk();
}