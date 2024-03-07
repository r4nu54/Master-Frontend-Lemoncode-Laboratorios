export interface PaginationModel {
  currentPage: number
  perPage: number
  lastPage: number
  setCurrentPage: (currentPage: number) => void
  setLastPage: (currentPage: number) => void
}
