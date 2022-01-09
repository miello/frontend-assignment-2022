export interface IPaginationPages {
  current: number
  allPages: number
  handlePagination(num: number): void
}
