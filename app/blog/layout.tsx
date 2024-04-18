import PageLayout from '@/layouts/PageLayout'

const BlogLayout = ({ children }) => {
    return (
        <PageLayout className="mx-auto mb-10 mt-6 min-h-screen w-full justify-center space-y-8 md:mt-10 lg:max-w-5xl xl:max-w-7xl">
            {children}
        </PageLayout>
    )
}

export default BlogLayout
