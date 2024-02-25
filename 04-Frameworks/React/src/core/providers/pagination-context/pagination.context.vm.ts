export interface PaginationModel {
  currentPage: number;
  perPage: number;
  setCurrentPage: (currentPage: number) => void;
}
