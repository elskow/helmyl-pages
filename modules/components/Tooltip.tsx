'use client'

import { useState } from 'react'

const Tooltip = ({ children, tooltipText, position = 'top' }) => {
    const [visible, setVisible] = useState(false)

    return (
        <section
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="relative inline-block cursor-pointer"
        >
            {children}
            {visible && (
                <section
                    className={`absolute left-1/2 mb-2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded-md mt-4 text-center z-10 w-fit whitespace-nowrap dark:bg-gray-200 dark:text-gray-800 ${position === 'top' ? 'bottom-full' : 'top-full'}`}
                >
                    {tooltipText}
                </section>
            )}
        </section>
    )
}

export default Tooltip
