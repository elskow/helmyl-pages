import HeaderProjects from '@/page-module/projects/Header.projects'
import { Slide } from '@/page-transition/Slide'
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
        <section className="mx-auto mb-10 mt-6 min-h-screen w-full justify-center space-y-8 md:mt-10 lg:max-w-5xl">
            <Slide>
                <HeaderProjects />
            </Slide>
            <Slide delay={0.1}>
                <ContentProjects projects={projects} />
            </Slide>
        </section>
    )
}

export default Projects
