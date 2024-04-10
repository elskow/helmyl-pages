import ProjectCard from '@/components/_project/ProjectCard'

const ContentProjects = ({ projects }) => {
    return (
        <ul className="mx-auto flex flex-col items-center space-y-10">
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
        </ul>
    )
}

export default ContentProjects
