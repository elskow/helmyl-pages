import MainLayout from '@/layouts/MainLayout'
import Hero from '@/page-module/home/Hero'

export default async function Page() {
    return (
        <MainLayout className="flex lg:max-w-5xl mx-auto">
            <Hero />
        </MainLayout>
    )
}
