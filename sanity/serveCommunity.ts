export default {
    name: 'serveCommunity',
    title: 'Serve Community',
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