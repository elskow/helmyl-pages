import PageLayout from '@/layouts/PageLayout'
import Hero from '@/page-module/home/Hero'

export default async function Page() {
    return (
        <PageLayout className="mx-auto flex min-h-[80vh] md:min-h-[75vh] lg:max-w-5xl">
            <Hero />
        </PageLayout>
    )
}
