import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const PageLayout = ({ children, className }) => {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-green-50 to-neutral-200 dark:bg-gradient-to-tr dark:from-gray-800 dark:to-gray-800">
            <div className="min-h-screen px-4 sm:px-8 lg:py-2 justify-between flex flex-col">
                <Navbar
                    className={`mx-auto flex select-none items-center justify-between py-4 pt-6 md:pt-8 lg:max-w-5xl xl:max-w-7xl lg:pt-14`}
                />
                <div>
                    <section className={`${className}`}>{children}</section>
                </div>
                <Footer className="mx-auto pb-6 pt-6 lg:max-w-5xl xl:max-w-7xl lg:pb-12 lg:pt-14" />
            </div>
        </div>
    )
}

export default PageLayout
