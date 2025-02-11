export interface Paged<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
}
