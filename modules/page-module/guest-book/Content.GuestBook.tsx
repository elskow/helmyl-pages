import GithubLoginButton from '@/components/_guest-book/GithubLoginButton'
import GithubLogoutButton from '@/components/_guest-book/GithubLogoutButton'
import { createClient as createClientClient } from '@/lib/supabase/client'
import { createClient as createClientServer } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

interface ResGuestBook {
    id: number
    created_at: string
    user_identity: string
    message_text: string
}

const ContentGuestBook = async () => {
    const supabase = createClientServer()

    const { data: dataUser, error } = await supabase.auth.getUser()

    const userNames = dataUser?.user?.user_metadata.user_name

    const { data: guestbookMsg, status: guestbookReqStat } = await supabase
        .from('GuestBook')
        .select()
        .order('created_at', { ascending: true })

    async function handleSubmit(formData: FormData) {
        'use server'

        const supabase = createClientClient()

        const desc = formData.get('desc')

        if (desc) {
            await supabase.from('GuestBook').insert([
                {
                    user_identity: userNames || 'Anonymous',
                    message_text: desc,
                },
            ])

            await supabase.from('GuestBook').select().order('created_at', { ascending: true })
        }

        redirect('/guest-book')
    }

    return (
        <section className="space-y-8 bg-zinc-50 py-12 px-6 rounded-xl my-auto pb-[10vh] items-start w-full h-[60vh] dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="space-y-4 w-full font-code h-full text-slate-800 dark:text-slate-100">
                {guestbookReqStat === 200 && guestbookMsg ? (
                    guestbookMsg.map((item: ResGuestBook) => (
                        <pre
                            className="flex lg:flex-row flex-col items-start gap-x-2 py-2 lg:py-0 md:!text-sm text-xs"
                            key={item.id}
                        >
                            <code className="text-muted-foreground lg:w-36 shrink-0 flex items-center justify-between w-full gap-x-2 pb-2">
                                <code className="truncate">{item.user_identity}</code>
                                <code className="text-muted-foreground shrink-0 flex items-center justify-center gap-x-2 lg:hidden">
                                    {new Date(item.created_at).toLocaleString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: true,
                                    })}
                                </code>
                            </code>
                            <code className="hidden lg:block">:</code>
                            <code className="flex-1 whitespace-pre-line">{item.message_text}</code>
                            <code className="text-muted-foreground shrink-0 lg:flex hidden items-center justify-center gap-x-2">
                                {new Date(item.created_at).toLocaleString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                })}
                            </code>
                        </pre>
                    ))
                ) : (
                    <p className="text-sm text-slate-500 text-center w-full font-normal">
                        No messages yet.
                    </p>
                )}
            </div>
            <form
                className="col-span-full flex items-center justify-between gap-x-2.5"
                action={handleSubmit}
            >
                <input
                    type="text"
                    id="desc"
                    name="desc"
                    placeholder="Leave a message..."
                    aria-labelledby="desc"
                    required
                    className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 transition-all duration-100 bg-neutral-50 text-neutral-950 hover:bg-neutral-100 hover:text-neutral-900 disabled:bg-neutral-200 disabled:text-neutral-900 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-slate-200 dark:disabled:bg-slate-800 dark:disabled:text-slate-300 dark:disabled:hover:bg-slate-700 dark:disabled:hover:text-slate-200"
                />
                {error && !dataUser?.user ? (
                    <GithubLoginButton />
                ) : (
                    <>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-neutral-100 text-neutral-900 hover:bg-neutral-300 hover:text-neutral-800 disabled:bg-neutral-200 disabled:text-neutral-700 transition-all duration-100 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-slate-200 dark:disabled:bg-slate-800 dark:disabled:text-slate-300 dark:disabled:hover:bg-slate-700 dark:disabled:hover:text-slate-200"
                        >
                            Send Message
                        </button>
                        <GithubLogoutButton />
                    </>
                )}
            </form>
        </section>
    )
}

export default ContentGuestBook
