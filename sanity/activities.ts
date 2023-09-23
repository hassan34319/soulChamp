export default {
    name: 'activities',
    title: 'Program Activities',
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