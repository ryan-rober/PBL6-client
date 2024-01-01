const END_POINT: any = {
  TEST_API: 'api/0.4/',

  // auth
  LOGIN: '/api/auth/login',
  REGISTER : '/api/auth/register',
  PROFILE_USER: '/api/profile/info',
  UPDATE_PROFILE : '/api/profile/update',
  CURRENT_PROFILE: '/api/auth/current',
  //route 
  BOOKSEAT : '/api/booking/book-seat',
  BOOKPARTSEAT: '/api/booking/book-part-seat',
  PAYMENT : '/api/payment',
  HISTORY :'/api/get-history-by-user',
  REFUND : '/api/refund',
  RATINGTRIP : '/api/create-rating',
  GETRATINGBYAGENCY : '/api/get-list-rating-by-agency',
  GETRATINGBYUSER : '/api/get-list-rating-by-user',
  GETNOTIFI : '/api/get-notification',
  GETNOPAYMENT : '/api/get-payment',
}

export default END_POINT
