import { allProjects } from '@/.contentlayer/generated'
import PageLayout from '@/layouts/PageLayout'
import { Metadata } from 'next'
import { lazy } from 'react'

const ProjectCard = lazy(() => import('@/components/ProjectCard'))

export const metadata: Metadata = {
    title: 'Projects',
    description: 'A list of all my personal projects',
}

interface Project {
    name: string
    href: string
    imgSrc: string
    description: string
}

const Projects: React.FC = () => {
    const projects: Record<string, Project[]> = allProjects[0].projects
    return (
        <PageLayout>
            <div className="mx-auto mt-10 w-full justify-center space-y-8 lg:max-w-5xl">
                <div className="space-y-3 border-b border-gray-200 pb-5 dark:border-gray-700">
                    <h1 className="font-newsreader text-4xl font-bold lg:text-5xl">Projects</h1>
                    <p className="font-light lg:text-lg">A list of all my personal projects</p>
                </div>
                {Object.keys(projects).map((category) => (
                    <div key={category} className="mb-10">
                        <h1 className="mb-5 font-newsreader text-xl font-bold md:text-2xl lg:mb-10 lg:text-3xl">
                            {category}
                        </h1>
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            {projects[category].map((project) => (
                                <ProjectCard
                                    key={project.name}
                                    title={project.name}
                                    href={project.href}
                                    image={project.imgSrc}
                                    description={project.description}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </PageLayout>
    )
}

export default Projects
