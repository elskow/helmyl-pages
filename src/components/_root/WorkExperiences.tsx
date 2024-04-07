import { MdWork } from 'react-icons/md'

type WorkExperience = {
    id: number
    title: string
    company: string
    period: string
    description: string
    present?: boolean
}

const WorkExperiences = ({ experiences }: { experiences?: WorkExperience[] }) => {
    if (!experiences)
        return (
            <ol className={`py-4 md:py-8`}>
                <li>
                    <div className="space-y-3">
                        <p className="text-center text-sm font-normal text-slate-500 dark:text-slate-400 lg:text-base">
                            Hmm, i haven&apos;t worked anywhere yet :(
                        </p>
                    </div>
                </li>
            </ol>
        )

    return (
        <ol className="relative border-l border-slate-200 dark:border-slate-700">
            {experiences.map((experience) => (
                <li key={experience.id} className="mb-10 ml-6">
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3 pb-2">
                            <span className="bg-primary-200 dark:bg-primary-900 absolute -left-2 flex h-4 w-4 items-center justify-center rounded-full ring-8 ring-white dark:ring-slate-900">
                                <MdWork className="text-primary-600 dark:text-primary-400 h-4 w-4" />
                            </span>
                            <h3 className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                                {experience.title}
                            </h3>
                        </div>
                        {experience.present && (
                            <span className="ml-2 rounded bg-green-100 px-2.5 py-1.5 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-200 sm:text-sm">
                                Present
                            </span>
                        )}
                        <div className="flex flex-col space-x-0 space-y-2 sm:flex-row sm:items-center sm:space-x-3 sm:space-y-0">
                            <span className="bg-primary-100 dark:bg-primary-200 dark:text-primary-800 rounded px-2.5 py-0.5 text-sm font-semibold text-blue-800 dark:text-sky-100 sm:text-base">
                                {experience.company}
                            </span>
                            <time className="block items-end px-2.5 text-xs font-normal leading-none text-slate-600 dark:text-slate-200 sm:text-sm">
                                {experience.period}
                            </time>
                        </div>
                        <p className="pl-2 text-sm font-normal text-slate-900 dark:text-slate-100 sm:text-base">
                            {experience.description}
                        </p>
                    </div>
                </li>
            ))}
        </ol>
    )
}

export default WorkExperiences
