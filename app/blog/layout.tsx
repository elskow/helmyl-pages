import MainLayout from '@/layouts/MainLayout'

const BlogLayout = ({ children }) => {
    return (
        <MainLayout className="mx-auto mb-10 mt-6 min-h-screen w-full justify-center space-y-8 md:mt-10 lg:max-w-5xl">
            {children}
        </MainLayout>
    )
}

export default BlogLayout
