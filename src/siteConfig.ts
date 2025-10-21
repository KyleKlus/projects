import { defaultSiteConfig } from "@/lib/defaultSiteConfig";

const basePath: string = '/projects';
const metadataEn = {
    title: "Kyle Klus | Projects 🛠️",
    description: "A collection of projects I've worked on.",
    abstract: "A collection of projects I've worked on.",
    authors: [{ name: defaultSiteConfig.author, url: defaultSiteConfig.url }],
    creator: defaultSiteConfig.author,
    publisher: defaultSiteConfig.author,
    keywords: ["Kyle Klus", "Projects", "Homepage"],
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
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
            abstract: "Eine Sammlung meiner Projekte.",
            keywords: ["Kyle Klus", "Projekte", "Homepage"],
            openGraph: {
                ...metadataEn.openGraph,
                description: "Eine Sammlung meiner Projekte.",
            },
        }
    }
};