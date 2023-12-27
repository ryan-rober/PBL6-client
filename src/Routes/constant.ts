import { USER_ROLE } from '@constants/auth'
import HomeLayout from '@layouts/home'

import HomeScreen from '@modules/home'
import TintucScreen from '@modules/tintuc'
import GioithieuScreen from '@modules/gioithieu'
import LienheScreen from '@modules/lienhe'
import DanhgiaScreen from '@modules/danhgia'
import BookingScreen from '@modules/booking'
import ProfileScreen from '@modules/profile'
import PaymentSuccessScreen from '@modules/payment/success'
import PaymentCancelScreen from '@modules/payment/cancel'


const RoutesName = {
  HOME: '/',
  TINTUC :'/tintuc',
  GIOITHIEU : '/gioithieu',
  LIENHE : '/lienhe',
  DANHGIA : '/danhgia',
  BOOKING : '/booking',
  PROFILE : '/profile',
  PAYMENTSUCCESS: '/thanhtoanthanhcong',
  PAYMENTCANCEL: '/huythanhtoan',

}

export const ROUTES = [

  {
    path: RoutesName.HOME,
    component: HomeScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.ADMIN],
    exact: true,
  },
  {
    path: RoutesName.BOOKING,
    component: BookingScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.ADMIN],
    exact: true,
  },
  {
    path: RoutesName.TINTUC,
    component: TintucScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.ADMIN],
    exact: true,
  },
  {
    path: RoutesName.GIOITHIEU,
    component: GioithieuScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.ADMIN],
    exact: true,
  },
  {
    path: RoutesName.LIENHE,
    component: LienheScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.ADMIN],
    exact: true,
  },
  {
    path: RoutesName.DANHGIA,
    component: DanhgiaScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.ADMIN],
    exact: true,
  },
  {
    path: RoutesName.PROFILE,
    component: ProfileScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.ADMIN],
    exact: true,
  },
  {
    path: RoutesName.PAYMENTSUCCESS,
    component: PaymentSuccessScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.ADMIN],
    exact: true,
  },
  {
    path: RoutesName.PAYMENTCANCEL,
    component: PaymentCancelScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.ADMIN],
    exact: true,
  },
]

export default RoutesName
