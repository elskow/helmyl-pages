'use client'

import { AppProgressBar } from 'next-nprogress-bar'

const ProgressbarProvider = ({ children }) => {
    return (
        <>
            {children}
            <AppProgressBar
                height="3px"
                color="#10B981"
                options={{ showSpinner: false }}
                shallowRouting
                delay={200}
            />
        </>
    )
}

export default ProgressbarProvider
