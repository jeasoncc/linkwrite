export const schema = {
  version: 0,
  title: "Lexical Data Schema",
  primaryKey: 'id',
  type: 'object',
  required: ['id'],
  encrypted: ['name'],
  properties: {
    id: {
      type: 'string',
      maxLength: 100
    },
    title: {
      type: 'string'
    },
    content: {
      type: 'object'
    },
    createTime: {
      type: 'string'
    }
  }
};

