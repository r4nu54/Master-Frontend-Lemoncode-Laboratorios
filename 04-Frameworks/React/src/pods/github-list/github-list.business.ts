export const getLastPageFromLinkHeader = (linkHeader: string): number | undefined => {
  const page = linkHeader.split(',').map((link: string) => {
    if (link.includes('rel="last"')) {
      const regex = /page=(\d+)/;
      const match = link.match(regex);
      if (match) {
        const lastPage = parseInt(match[1]);
        return lastPage;
      }
    }
  });
  console.log(page);
  return page[1];
};

// const lastPageApi = linkHeader.split(',').map((link: string) => {
//   if (link.includes('rel="last"')) {
//     const regex = /page=(\d+)/;
//     const match = link.match(regex);
//     if (match) {
//       const lastPage = parseInt(match[1]);
//       return lastPage;
//     }
//   }
// });
