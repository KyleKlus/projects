/** @format */

import Content from "@/lib/container/Content";

import projectsStyles from './Projects.module.css';

import type { Metadata, Viewport } from 'next'
import Card from "@/lib/container/Card";
import Text from "@/lib/container/Text";

export const metadata: Metadata = {
    title: "Kyle Klus | Projects 🛠️",
    description: "Projects of Kyle Klus.",
    openGraph: {
        type: "website",
        url: "https://kyleklus.de/projects",
        title: "Kyle Klus | Projects",
        description: "Projects of Kyle Klus.",
    },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function Page() {
    return (
        <Content className={[projectsStyles.overviewPage, 'dotted', 'applyHeaderOffset'].join(' ')}>
            <h1>Projects 🛠️</h1>
            <Card className={projectsStyles.sectionCard}>
                <Text>
                    <h3>Coding 💻</h3>
                    <ul>
                        <li><a href="https://github.com/kyle-klus/receipt-manager">Receipt Manager</a>: A web app to manage receipts.</li>
                        <li><a href="https://github.com/kyle-klus/fast-calendar-manager">Fast Calendar Manager</a>: A web app to efficiently plan your week.</li>
                        <li><a href="https://github.com/kyle-klus/Omni_Bot">Omni Bot</a>: A small controllable robot with omnidirectional movement.</li>
                    </ul>
                </Text>
            </Card>
        </Content>
    );
}