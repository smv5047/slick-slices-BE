import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  name: 'pizza',
  title: 'Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',

      options: {
        // allows you to highlight portion of image such as a face
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'PRice of a Pizza in cents',
      validation: (Rule) => Rule.min(1000),
      // TODO: Add custom inpout component
    },
  ],
};
