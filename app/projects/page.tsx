import ContentProjects from '@/page-module/projects/Content.projects'
import HeaderProjects from '@/page-module/projects/Header.projects'
import Project from '@/utils/ProjectInterface'
import { allProjects } from 'contentlayer/generated'
import { Metadata } from 'next'

const projects: Record<string, Project[]> = allProjects[0].projects

export const metadata: Metadata = {
    title: 'Projects',
    description: 'A list of all projects I have worked on',
}

const Projects: React.FC = () => {
    return (
        <main className="mx-auto mb-10 mt-6 min-h-screen w-full justify-center space-y-8 md:mt-10 lg:max-w-5xl">
            <HeaderProjects />
            <ContentProjects projects={projects} />
        </main>
    )
}

export default Projects
