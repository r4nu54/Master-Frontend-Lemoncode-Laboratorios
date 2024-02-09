import { MemberEntityApi, MemberDetailApi } from '@/core/models';

export const getMembersByOrg = async (org: string): Promise<MemberEntityApi[]> => {
  return await fetch(`https://api.github.com/orgs/${org}/members`)
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
      return [];
    });
};

export const getMembersByLogin = async (login: string): Promise<MemberDetailApi> => {
  return await fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
      return [];
    });
};
