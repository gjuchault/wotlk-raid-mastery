export interface PaginatedResults<TResult> {
  nextCursor: string | number | null
  data: TResult[]
}
