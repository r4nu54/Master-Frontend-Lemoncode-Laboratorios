import Axios from 'axios';
import { MemberEntityApi } from './index';

export const getMembersByOrg = async (
  org: string,
  perPage: number,
  currentPage: number
): Promise<MemberEntityApi[]> => {
  const url = `https://api.github.com/orgs/${org}/members?per_page=${perPage}&page=${currentPage}`;
  const token = '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';
  // Eliminar el token cuando termine el Lab.
  const { data } = await Axios.get<MemberEntityApi[]>(url, { headers: { Authorization: `Bearer ${token}` } });
  return data;
};
