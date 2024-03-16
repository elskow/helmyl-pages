import { ReactNode } from 'react'

interface PageLayoutProps {
    children: ReactNode
    className?: string
}

const PageLayout = ({ children, className }: PageLayoutProps) => {
    return (
        <div className={`mt-5 flex w-full ${className}`}>
            <div className="flex w-full flex-col">{children}</div>
        </div>
    )
}

export default PageLayout
