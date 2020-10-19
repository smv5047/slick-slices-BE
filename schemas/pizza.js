import { MdLocalPizza as icon } from 'react-icons/md';

import PriceInput from '../components/PriceInput';

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

      description: 'Price of a Pizza in cents',
      validation: (Rule) => Rule.min(1000),
      // Overwrites default component from Sanity
      inputComponent: PriceInput,
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
    prepare: ({ title, media, ...toppings }) => {
      console.log(title, media, toppings);
      // filter undefined toppigns out
      // return preview object for pizza
      const tops = Object.values(toppings).filter(
        (topping) => topping !== undefined
      );
      return {
        title,
        media,
        subtitle: tops.join(', '),
      };
    },
  },
};
