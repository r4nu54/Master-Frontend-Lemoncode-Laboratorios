import { githubApi } from '@/core/api/github.api';
import { MemberEntityApi, ResponseApi } from './index';

export const getMembersByOrg = async (org: string, perPage: number, currentPage: number): Promise<ResponseApi> => {
  const url = `/orgs/${org}/members?page=${currentPage}&per_page=${perPage}`;

  const response = await githubApi.get(url);

  const linkHeader = response.headers['link'];
  const data: MemberEntityApi[] = response.data;

  if (!linkHeader) {
    return { data, lastPageApi: undefined };
  }

  // If there is no link header, there is no last page so is not the first call
  const linkForLastPage = linkHeader.split(',').find((link: string) => link.includes('rel="last"'));
  if (!linkForLastPage) {
    return { data, lastPageApi: undefined };
  }

  const newDirtyURl = linkForLastPage.split(';')[0].replace('<', '').replace('>', '');
  const lastPageApi = parseInt(newDirtyURl.split('&')[0].split('=')[1]);

  return { data, lastPageApi };
};
