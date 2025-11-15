import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Liste des destinataires de l'alerte depuis le .env, séparés par des virgules
const recipientsString = process.env.ALERT_RECIPIENTS_LIST || process.env.EMAIL_USER;

// Si la variable existe, on la split. On s'assure qu'au moins l'EMAIL_USER est présent.
const ALERT_RECIPIENTS = recipientsString ? recipientsString.split(',').filter(email => email.trim() !== '') : [];

// Si ALERT_RECIPIENTS_LIST est vide, on utilise EMAIL_USER par défaut.
if (ALERT_RECIPIENTS.length === 0 && process.env.EMAIL_USER) {
    ALERT_RECIPIENTS.push(process.env.EMAIL_USER);
}


// Configuration du port SMTP. Si 465, secure doit être true.
// Le port 26 est un port non standard souvent utilisé par les hébergeurs
const PORT = parseInt(process.env.EMAIL_SMTP_PORT || '465');
const isSecure = PORT === 465;

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP_HOST,
    port: PORT,
    secure: isSecure, // true si le port est 465 (SSL), false sinon (TLS)
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(request: Request) {
    try {
        const formData = await request.json();
        const { nomTalent, domaine, votreNom, contact, justification } = formData;

        // Validation rapide côté serveur
        if (!nomTalent || !domaine || !contact || !justification) {
            return NextResponse.json({ message: 'Données manquantes. Tous les champs sont requis.' }, { status: 400 });
        }

        const emailContent = `
            <h1>🚨 NOUVELLE PROPOSITION DE TALENT NIGÉRIEN 🚨</h1>
            <p><strong>Proposé par :</strong> ${votreNom} (${contact})</p>
            <hr>
            <p><strong>Nom du Talent :</strong> ${nomTalent}</p>
            <p><strong>Domaine :</strong> ${domaine}</p>
            <p><strong>Justification du Parcours (Échecs/Succès) :</strong></p>
            <p style="white-space: pre-wrap; padding: 10px; border: 1px solid #ccc;">${justification}</p>
            <p>Veuillez vérifier cette proposition et la valider ou la refuser.</p>
        `;

        // --- Envoi à la liste de destinataires ---
        const sendPromises = ALERT_RECIPIENTS.map(async (recipientEmail) => {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: recipientEmail,
                subject: `[ALERTE GENIE NIGER] Nouvelle proposition: ${nomTalent}`,
                html: emailContent,
            };
            return transporter.sendMail(mailOptions);
        });

        // Attendre que tous les emails soient envoyés
        await Promise.all(sendPromises);

        return NextResponse.json({ message: 'Proposition envoyée avec succès à l\'équipe!' }, { status: 200 });

    } catch (error) {
        // En cas d'échec de la connexion SMTP ou de l'envoi
        console.error('Erreur Nodemailer/API:', error);
        return NextResponse.json({ message: 'Erreur critique lors de l\'envoi de la proposition. Vérifiez la configuration SMTP.' }, { status: 500 });
    }
}