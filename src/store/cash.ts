export function providesList(resultsWithIds: { id: number; }[] | null | undefined, tagType: any) {
  return resultsWithIds && Array.isArray(resultsWithIds)
    ? [
        { type: tagType, id: "LIST" },
        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: "LIST" }];
}
