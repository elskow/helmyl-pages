import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdOutlineAttachEmail } from 'react-icons/md'

const socialMedias = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/helmyluqman/',
        icon: FaLinkedin,
        text: 'LinkedIn Profile',
    },
    {
        name: 'Github',
        href: 'https://github.com/elskow',
        icon: FaGithub,
        text: 'Github Profile',
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/helmy_lh',
        icon: FaTwitter,
        text: 'Follow on Twitter',
    },
    {
        name: 'Email',
        href: 'mailto:helmyl.work@gmail.com',
        icon: MdOutlineAttachEmail,
        text: 'Send Email',
    },
]

export default socialMedias
