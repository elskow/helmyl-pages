const TechStack = ({ tech, ...props }: { tech: string[] }) => {
    const processedTech = tech.map((item) => item.trim())

    return (
        <div className="min-h-[8vh]" {...props}>
            <div className="mt-4 flex flex-wrap">
                {processedTech.map((item) => (
                    <span
                        key={item}
                        className="mb-2 mr-2 rounded bg-gray-200 px-2 py-1 text-sm text-gray-700 transition hover:bg-gray-300 hover:bg-opacity-80 dark:bg-gray-700 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:bg-opacity-80 select-none"
                        unselectable="on"
                        draggable="false"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default TechStack
