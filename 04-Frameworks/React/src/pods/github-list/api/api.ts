import axios from 'axios';
import { MemberEntityApi, ResponseApi } from './index';

export const getMembersByOrg = async (org: string, perPage: number, currentPage: number): Promise<ResponseApi> => {
  const url = `https://api.github.com/orgs/${org}/members?page=${currentPage}&per_page=${perPage}`;

  const response = await axios.get(url);

  const linkHeader = response.headers['link'];
  const data: MemberEntityApi[] = response.data;

  const lastPageApi = linkHeader.split(',').map((link: string) => {
    if (link.includes('rel="last"')) {
      const regex = /page=(\d+)/;
      const match = link.match(regex);
      if (match) {
        const lastPage = parseInt(match[1]);
        return lastPage;
      }
    }
  });

  if (!lastPageApi) {
    return { data, lastPageApi };
  }

  return { data, lastPageApi: lastPageApi[1] };
};
