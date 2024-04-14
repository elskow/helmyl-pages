import { AiOutlineLoading } from 'react-icons/ai'

const LoadingAnimation = () => {
    return (
        <div className="flex h-32 items-center justify-center">
            <AiOutlineLoading className="h-10 w-10 animate-spin text-teal-600 dark:text-teal-500" />
        </div>
    )
}

export default LoadingAnimation
