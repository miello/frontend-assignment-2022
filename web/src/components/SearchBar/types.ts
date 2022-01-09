export interface ISearchBarProps {
  search: string
  handleSearch(e: React.ChangeEvent<HTMLInputElement> | string): void
}
