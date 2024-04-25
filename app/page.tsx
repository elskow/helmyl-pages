import MainLayout from '@/layouts/MainLayout'
import Hero from '@/page-module/home/Hero'
import { Slide } from '@/page-transition/Slide'

export default async function Page() {
    return (
        <MainLayout className="flex lg:max-w-5xl mx-auto">
            <Slide>
                <Hero />
            </Slide>
        </MainLayout>
    )
}
