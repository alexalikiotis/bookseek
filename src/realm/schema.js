const bookSchema = {
  name: 'Book',
  properties: {
    id: 'string',
    title: 'string',
    authors: 'string[]',
  },
};

export const databaseOptions = {
  schema: [bookSchema],
  schemaVersion: 1,
  path: 'bookseekLocal.realm',
};
