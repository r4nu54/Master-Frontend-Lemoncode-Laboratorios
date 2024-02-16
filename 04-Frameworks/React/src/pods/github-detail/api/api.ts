import { MemberDetailApi } from './index';

export const getMembersByLogin = async (login: string): Promise<MemberDetailApi> => {
  return await fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
      return [];
    });
};
