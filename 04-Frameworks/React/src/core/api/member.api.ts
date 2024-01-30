export const getMembersByOrg = async (org: string) => {
  try {
    // await fetch('https://657b7dec394ca9e4af1467db.mockapi.io/members');
    await fetch(`https://api.github.com/orgs/${org}/members`).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }
};
