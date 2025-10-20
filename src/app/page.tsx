/** @format */
import type { Metadata, Viewport } from 'next'

import Content from "@/lib/container/Content";
import StyledLink from "@/lib/interaction/links/StyledLink";
import Card from "@/lib/container/Card";
import Text from "@/lib/container/Text";

import { defaultSiteConfig } from "./defaultSiteConfig";
import projectsStyles from './Projects.module.css';

export const metadata: Metadata = {
    ...defaultSiteConfig.metadata.en
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function Page() {
    return (
        <Content className={[projectsStyles.overviewPage, 'crossed', 'applyHeaderOffset', 'applyBottomPadding'].join(' ')}>
            <h1>Projects 🛠️</h1>
            <Card className={projectsStyles.sectionCard}>
                <Text>
                    <h3>Web Apps 💻</h3>
                    <ul>
                        <li><StyledLink href="https://github.com/KyleKlus/receipt-manager-tool">Receipt Manager</StyledLink>: A web app to manage scanned receipts.</li>
                        <li><StyledLink href="https://github.com/KyleKlus/fast-calendar-manager">Fast Calendar Manager</StyledLink>: A web app to efficiently plan your week.</li>
                        <li><StyledLink href="https://github.com/KyleKlus/text-tools">Text Tools</StyledLink>: A web app to help with quick text editing/selective replacement.</li>
                        <li><StyledLink href="https://github.com/KyleKlus/qr-code-generator">QR Code Generator</StyledLink>: A web app to quickly generate QR codes and style them however you want.</li>
                        <li><StyledLink href="https://github.com/KyleKlus/calendar-list-generator">Calendar List Generator</StyledLink>: A web app to quickly generate a list of upcoming events with an ICAL file.</li>
                    </ul>
                </Text>
            </Card>
            <Card className={projectsStyles.sectionCard}>
                <Text>
                    <h3>Embedded Sys. 🤖</h3>
                    <ul>
                        <li><StyledLink href="https://github.com/KyleKlus/Omni_Bot">Omni Bot</StyledLink>: A small controllable robot with omnidirectional movement.</li>
                    </ul>
                </Text>
            </Card>
            <Card className={projectsStyles.sectionCard}>
                <Text>
                    <h3>Themes 🎨</h3>
                    <ul>
                        <li><StyledLink href={'https://github.com/KyleKlus/solitude-vs-code-color-theme'}>Solitude</StyledLink> Theme for Visual Studio Code</li>
                        <li><StyledLink href={'https://github.com/KyleKlus/solitude-obsidian-theme'}>Solitude</StyledLink> Theme for Obsidian</li>
                    </ul>
                </Text>
            </Card>
        </Content>
    );
}