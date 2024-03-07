import React from 'react'

const TechStack = React.memo(({ tech }: { tech: string }) => {
  const [showAll, setShowAll] = React.useState(false);
  const techStacks = tech.split(',');

  const handleShowAll = React.useCallback(() => {
    setShowAll(true);
  }, []);

  return (
    <div className='min-h-[8vh]'>
      <div className="mt-4 flex flex-wrap">
        {(showAll ? techStacks : techStacks.slice(0, 6)).map((item, index) => (
          <span key={index} className="mr-2 mb-2 bg-gray-200 rounded px-2 py-1 text-sm text-gray-700 hover:bg-gray-300 transition hover:bg-opacity-80">
            {item.trim()}
          </span>
        ))}
        {techStacks.length > 6 && !showAll && (
          <button onClick={handleShowAll}
            className="mr-2 mb-2 bg-green-200 rounded px-2 py-1 text-sm text-green-700 hover:bg-green-300 transition hover:bg-opacity-80 dark:bg-blue-200 dark:text-blue-700 dark:hover:bg-blue-300 dark:hover:bg-opacity-80">
            More
          </button>
        )}
      </div>
    </div>
  )
})
TechStack.displayName = 'TechStack'

export default TechStack