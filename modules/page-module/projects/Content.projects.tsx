import ProjectCard from '@/components/_project/ProjectCard'

const ContentProjects = ({ projects }) => {
    return (
        <ul className="mx-auto flex flex-col items-center space-y-10">
            <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 max-w-[80vw]`}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.name}
                        title={project.name}
                        href={project.link}
                        image={project.image}
                        description={project.description}
                        tech={project.stacks}
                        date={project.date}
                        index={projects.indexOf(project)}
                    />
                ))}
            </div>
        </ul>
    )
}

export default ContentProjects
