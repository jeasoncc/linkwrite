export const DRAFTSCHEMA = {
  version: 0,
  title: "Lexical Data Schema",
  primaryKey: "id",
  type: "object",
  required: ["id"],
  encrypted: ["secret"],
  properties: {
    id: {
      type: "string",
      maxLength: 100,
    },
    secret: {
      type: "string",
      maxLength: 100,
    },
    title: {
      type: "string",
    },
    content: {
      type: "object",
    },
    createTime: {
      type: "string",
    },
  },
};
