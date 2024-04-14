import { collection, config, fields, singleton } from '@keystatic/core'
import { SiApachekafka } from 'react-icons/si'

const isProd = process.env.NODE_ENV === 'production'

const localCnf = {
    kind: 'local',
}

const remoteCnf = {
    kind: 'github',
    repo: 'elskow/helmyl-pages',
}

export default config({
    storage: {
        ...(isProd ? remoteCnf : localCnf),
    },
    ui: {
        brand: { name: 'helmyl.com', mark: SiApachekafka },
        navigation: {
            dynamic: ['posts', 'projects'],
        },
    },
    collections: {
        posts: collection({
            label: 'Post',
            slugField: 'title',
            entryLayout: 'content',
            path: '/content/posts/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                date: fields.date({ label: 'Date', validation: { isRequired: true } }),
                summary: fields.text({ label: 'Summary', validation: { isRequired: true } }),
                draft: fields.checkbox({ label: 'Draft', description: 'Is this post a draft?' }),
                banner: fields.image({
                    label: 'Banner',
                    validation: { isRequired: false },
                    directory: 'public/blog',
                    publicPath: '/blog',
                }),
                tags: fields.array(fields.text({ label: 'Tag' }), {
                    label: 'Tag',
                    itemLabel: (props) => props.value,
                }),
                content: fields.mdx({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/blog/images',
                        publicPath: '/blog/images',
                        schema: {
                            title: fields.text({
                                label: 'Caption',
                                description: 'The text to display under the image in a caption.',
                            }),
                        },
                    },
                }),
            },
        }),
    },

    singletons: {
        projects: singleton({
            label: 'Projects',
            path: '/content/project',
            format: { data: 'json' },
            schema: {
                projects: fields.array(
                    fields.object(
                        {
                            name: fields.text({
                                label: 'Name',
                                description: 'The name of the project',
                                validation: { isRequired: true },
                            }),
                            description: fields.text({
                                label: 'Description',
                                description: 'The description of the project',
                                validation: { isRequired: true },
                            }),
                            link: fields.url({
                                label: 'Link',
                                required: false,
                                description: 'The link to the project',
                                validation: { isRequired: true },
                            }),
                            stacks: fields.array(
                                fields.text({
                                    label: 'Stack',
                                    description: 'The stack of the project',
                                    validation: { isRequired: true },
                                }),
                                {
                                    label: 'Stack',
                                    itemLabel: (props) => props.value,
                                }
                            ),
                            image: fields.image({
                                label: 'Image',
                                directory: 'public',
                                publicPath: '/',
                                description: 'The image of the project',
                                validation: { isRequired: true },
                            }),
                            date: fields.integer({
                                label: 'Date',
                                description: 'The date of the project',
                                validation: { isRequired: true },
                            }),
                        },
                        {
                            label: 'Project Entry',
                            itemLabel: (props) => props.object.name.value,
                        }
                    ),
                    {
                        label: 'Project Entries',
                        slugField: 'name',
                        itemLabel: (props) => props.fields.name.value,
                    }
                ),
            },
        }),
    },
})
