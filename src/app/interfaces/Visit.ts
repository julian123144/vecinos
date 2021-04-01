export interface Visit {
  visitor_name: string,
  visit_date?: string,
  isRecurring?: boolean,
  comments?: string,
  user_address_id?: number | any,
  isDailyAccess?: boolean,
}
