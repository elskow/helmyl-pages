interface FooterProps {
    className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <footer
            className={`flex flex-col items-center justify-between gap-6 sm:flex-row ${className} px-4`}
        >
            <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <a
                    className="transition hover:font-bold hover:text-teal-600 dark:hover:text-teal-400"
                    href="/about"
                >
                    About
                </a>
                <a
                    className="transition hover:font-bold hover:text-teal-600 dark:hover:text-teal-400"
                    href="/blog"
                >
                    Blog
                </a>
                <a
                    className="transition hover:font-bold hover:text-teal-600 dark:hover:text-teal-400"
                    href="/projects"
                >
                    Projects
                </a>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                © 2022 – {new Date().getFullYear()} Helmy LuqmanulHakim. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer