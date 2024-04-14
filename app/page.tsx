import PageLayout from '@/layouts/PageLayout'
import Hero from '@/page-module/home/Hero'

export default async function Page() {
    return (
        <PageLayout className="mx-auto flex min-h-screen lg:max-w-5xl">
            <Hero />
        </PageLayout>
    )
}
