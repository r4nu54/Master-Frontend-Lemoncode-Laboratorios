import { githubApi } from '@/core/api/github.api';
import { MemberDetailApi } from './index';

export const getMembersByLogin = async (login: string): Promise<MemberDetailApi> => {
  try {
    const response = await githubApi.get(`/users/${login}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
