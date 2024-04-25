const TagsSkeletonBlogs = () => {
    return (
        <div className="mb-4 flex select-none flex-wrap border-b border-gray-200 pb-5 dark:border-gray-700">
            <ul className="mb-2 mr-2 rounded bg-green-50 px-3 py-1 text-sm font-medium capitalize text-green-900 transition-all duration-300 dark:bg-gray-700 md:text-base">
                <div className={`animate-pulse w-20`} />
            </ul>
            <ul className="mb-2 mr-2 rounded bg-green-50 px-3 py-1 text-sm font-medium capitalize text-green-900 transition-all duration-300 dark:bg-gray-700 md:text-base">
                <div className={`animate-pulse w-20`} />
            </ul>
        </div>
    )
}

export default TagsSkeletonBlogs
