import PageLayout from '@/layouts/PageLayout'
import ContentProjects from '@/page-module/projects/Content.projects'
import HeaderProjects from '@/page-module/projects/Header.projects'
import project from 'content/project.json'
import { Metadata } from 'next'

const projects = project.projects
export const metadata: Metadata = {
    title: 'Projects',
    description: 'A list of all projects I have worked on',
}

const Projects: React.FC = () => {
    return (
        <PageLayout className="mx-auto mb-10 mt-6 min-h-screen w-full justify-center space-y-8 md:mt-10 lg:max-w-5xl">
            <HeaderProjects />
            <ContentProjects projects={projects} />
        </PageLayout>
    )
}

export default Projects
