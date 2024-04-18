import PageLayout from '@/layouts/PageLayout'
import Hero from '@/page-module/home/Hero'

export default async function Page() {
    return (
        <PageLayout className="flex lg:max-w-5xl xl:max-w-7xl mx-auto">
            <Hero />
        </PageLayout>
    )
}
