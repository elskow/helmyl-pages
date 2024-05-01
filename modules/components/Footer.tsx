import Unmount from '@/components/Unmount'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const Tooltip = dynamic(() => import('@/components/Tooltip'), {
    ssr: false,
    loading: () => <>Helmy LuqmanulHakim</>,
})

const Footer = ({ ...props }) => {
    return (
        <Unmount>
            <footer>
                <div {...props}>
                    <div
                        className={`flex flex-col items-center justify-between gap-6 pt-6 sm:flex-row`}
                    >
                        <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                            <Link
                                className="transition-all duration-300 hover:font-bold hover:text-teal-600 dark:hover:text-teal-400"
                                href="/about"
                                draggable={false}
                                unselectable={'on'}
                                title={'Learn more about me'}
                            >
                                About
                            </Link>
                            <Link
                                className="transition-all duration-300 hover:font-bold hover:text-teal-600 dark:hover:text-teal-400"
                                href="/blog"
                                draggable={false}
                                unselectable={'on'}
                                title={'Read my blog'}
                            >
                                Blog
                            </Link>
                            <Link
                                className="transition-all duration-300 hover:font-bold hover:text-teal-600 dark:hover:text-teal-400"
                                href="/projects"
                                draggable={false}
                                unselectable={'on'}
                                title={'Explore my projects'}
                            >
                                Projects
                            </Link>
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300 md:text-sm">
                            © 2022 – {new Date().getFullYear()}{' '}
                            <Link
                                href="https://github.com/elskow/helmyl.com"
                                className="transition-all duration-300-all duration-300 hover:text-teal-600 hover:underline dark:hover:text-teal-400 dark:hover:underline"
                                target="_blank"
                                draggable={false}
                                unselectable={'on'}
                                suppressHydrationWarning
                            >
                                <Tooltip tooltipText="The source were open-sourced on GitHub">
                                    Helmy LuqmanulHakim
                                </Tooltip>
                            </Link>
                            . All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </Unmount>
    )
}

export default Footer
