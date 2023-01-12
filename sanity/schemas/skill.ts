import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the skill',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'progress of the skill from 0 to 100%',
      // validation: (Rule) => Rule.min(0).max(100)
    }),
  ],
})
