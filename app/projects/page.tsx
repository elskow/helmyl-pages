import PageLayout from '@/layouts/PageLayout'
import HeaderProjects from '@/page-module/projects/Header.projects'
import project from 'content/project.json'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const ContentProjects = dynamic(() => import('@/page-module/projects/Content.projects'), {
    ssr: false,
})

const projects = project.projects.sort((a, b) => b.date - a.date)

export const metadata: Metadata = {
    title: 'Projects',
    description: 'A list of all projects I have worked on',
}

const Projects: React.FC = () => {
    return (
        <PageLayout className="mx-auto mb-10 mt-6 min-h-screen w-full justify-center space-y-8 md:mt-10 lg:max-w-5xl xl:max-w-7xl">
            <HeaderProjects />
            <ContentProjects projects={projects} />
        </PageLayout>
    )
}

export default Projects
