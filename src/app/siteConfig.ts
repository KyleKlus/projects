import { defaultSiteConfig } from "@/lib/defaultSiteConfig";

const basePath: string = '/projects';
const metadataEn = {
    title: "Kyle Klus | Projects 🛠️",
    description: "A collection of projects I've worked on.",
    openGraph: {
        type: "website",
        url: `${defaultSiteConfig.url}${basePath}`,
        title: "Kyle Klus | Projects 🛠️",
        description: "A collection of projects I've worked on.",
    },
}

export const siteConfig = {
    ...defaultSiteConfig,
    basePath,
    metadata: {
        en: metadataEn,
        de: {
            ...metadataEn,
            title: "Kyle Klus | Projekte 🛠️",
            description: "Eine Sammlung meiner Projekte.",
            openGraph: {
                ...metadataEn.openGraph,

                description: "Eine Sammlung meiner Projekte.",
            },
        }
    }
};