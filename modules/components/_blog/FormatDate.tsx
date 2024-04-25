import { format, parseISO } from 'date-fns'

const FormatDate = ({ dateString, ...props }) => {
    const date = parseISO(dateString)
    const formattedDate = format(date, 'MMM d, yyyy')
    return (
        <time
            className="dark:text-primary-300 pr-4 text-xs text-primary md:w-1/5 md:text-right md:text-sm"
            {...props}
        >
            {formattedDate}
        </time>
    )
}

export default FormatDate
