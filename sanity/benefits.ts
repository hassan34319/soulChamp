export default {
    name: 'benefits',
    title: 'Benefits',
    type: 'document',
    fields: [
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [{ type: 'image' }]
        }
      ]
  };