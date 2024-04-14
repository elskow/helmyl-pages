import React from 'react'

const TechStack = React.memo(({ tech, ...props }: { tech: string[] }) => {
    const [showAll, setShowAll] = React.useState(false)

    const handleShowAll = React.useCallback(() => {
        setShowAll(true)
    }, [])

    return (
        <div className="min-h-[8vh]" {...props}>
            <div className="mt-4 flex flex-wrap">
                {(showAll ? tech : tech.slice(0, 6)).map((item, index) => (
                    <span
                        key={index}
                        className="mb-2 mr-2 rounded bg-gray-200 px-2 py-1 text-sm text-gray-700 transition hover:bg-gray-300 hover:bg-opacity-80 dark:bg-gray-700 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:bg-opacity-80"
                    >
                        {item.trim()}
                    </span>
                ))}
                {tech.length > 6 && !showAll && (
                    <button
                        onClick={handleShowAll}
                        className="mb-2 mr-2 rounded bg-green-200 px-2 py-1 text-sm text-green-700 transition hover:bg-green-300 hover:bg-opacity-80 dark:bg-blue-200 dark:text-blue-700 dark:hover:bg-blue-300 dark:hover:bg-opacity-80"
                    >
                        More
                    </button>
                )}
            </div>
        </div>
    )
})
TechStack.displayName = 'TechStack'

export default TechStack
