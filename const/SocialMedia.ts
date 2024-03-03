import { GitHubLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { MdCallToAction } from 'react-icons/md'

const socialMedia = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/helmyluqman/',
        icon: LinkedInLogoIcon,
        text: 'LinkedIn Profile',
    },
    {
        name: 'Github',
        href: 'https://github.com/elskow',
        icon: GitHubLogoIcon,
        text: 'Github Profile',
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/helmy_lh',
        icon: TwitterLogoIcon,
        text: 'Follow on Twitter',
    },
    {
        name: 'Email',
        href: 'mailto:helmyl.work@gmail.com',
        icon: MdCallToAction,
        text: 'Send Email',
    },
]

export default socialMedia