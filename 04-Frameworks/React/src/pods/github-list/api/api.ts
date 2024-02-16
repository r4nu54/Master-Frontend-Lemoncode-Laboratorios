import { MemberEntityApi } from './index';

export const getMembersByOrg = async (org: string): Promise<MemberEntityApi[]> => {
  return await fetch(`https://api.github.com/orgs/${org}/members`)
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
      return [];
    });
};
