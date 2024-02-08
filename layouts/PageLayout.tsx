import { ReactNode } from 'react'

interface PageLayoutProps {
    children: ReactNode
    className?: string
}

const PageLayout = ({ children, className }: PageLayoutProps) => {
    return (
        <div className="mt-5 flex w-full md:w-9/12">
            <div className="flex w-full flex-col">
                <div>{children}</div>
            </div>
        </div>
    )
}

export default PageLayout
