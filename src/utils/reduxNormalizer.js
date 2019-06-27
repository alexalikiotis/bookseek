const normalize = (list, key) =>
  list.reduce(
    ([keys, entities], { [key]: currentKey, ...restItem }) => [
      [...keys, currentKey],
      {
        ...entities,
        [currentKey]: restItem,
      },
    ],
    [[], {}]
  );

export default normalize;
