export const getNextId = <T extends { id: number }>(list: T[]): number => {
  if (list.length > 0) {
    const ids = list.map((item: T) => item.id);
    return Math.max(...ids) + 1;
  } else {
    return 1;
  }
};
