import { allProjects } from 'contentlayer/generated'
import PageLayout from '@/layouts/PageLayout'
import { Metadata } from 'next'
import { lazy } from 'react'

const ProjectCard = lazy(() => import('@/components/_project/ProjectCard'))

export const metadata: Metadata = {
    title: 'Projects',
    description: 'A list of all projects I have worked on',
}

interface Project {
    name: string
    href: string
    imgSrc: string
    description: string
    tech?: string
    date?: string
    link_text: string
}

const Projects: React.FC = () => {
    const projects: Record<string, Project[]> = allProjects[0].projects
    return (
        <PageLayout>
            <div className="mx-auto mb-10 mt-10 w-full justify-center space-y-8 lg:max-w-5xl">
                <div className="space-y-3 border-b border-gray-200 pb-5 dark:border-gray-700">
                    <h1 className="font-newsreader text-4xl font-bold lg:text-5xl">Projects</h1>
                    <p className="font-light lg:text-lg">A list of all my personal projects</p>
                </div>
                <div className="mx-auto flex flex-col items-center space-y-10">
                    {Object.keys(projects).map((category) => (
                        <div key={category} className="mb-10">
                            <h1 className="mb-5 font-newsreader text-xl font-bold md:text-2xl lg:mb-10 lg:text-3xl">
                                {category}
                            </h1>
                            <div className="grid max-w-[90vw] grid-cols-1 gap-6 px-4 md:grid-cols-2 xl:grid-cols-3">
                                {projects[category].map((project) => (
                                    <ProjectCard
                                        key={project.name}
                                        title={project.name}
                                        href={project.href}
                                        link_text={project.link_text}
                                        image={project.imgSrc}
                                        description={project.description}
                                        tech={project.tech}
                                        date={project.date}
                                        index={projects[category].indexOf(project)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}

export default Projects
