export default {
    name: 'members',
    title: 'Members',
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