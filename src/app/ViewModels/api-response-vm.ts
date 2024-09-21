export interface ApiResponseVM {
  success: boolean,
  data: any,
  messsages : string[],
  pageIndex? : number,
  totalPages? : number,
  pageSize? : number
}
