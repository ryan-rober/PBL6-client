import moment from 'moment'
import { FORMAT_TIME } from '@constants'

const formatDate = (date: any, f = FORMAT_TIME.DATE_HOUR_MINUTES) => (moment(date).isValid() ? moment(date).format(f) : '')

const formatDateShort = (date: any, f = FORMAT_TIME.FULL_DATE) => moment(date).format(f)

const combineDateAndTime = (date: any, time: any) => {
  if (!date) return null
  if (time) return new Date(`${date}T${time}`)
  return new Date(date)
}

const combineDateAndTimeV2 = (date: any, time: any) => {
  if (!date) return null
  if (time) {
    return new Date(`${date.format(FORMAT_TIME.YEAR_MONTH_DATE)} ${time.format(FORMAT_TIME.HOUR_MINUTES)}`)
  }
  return moment(date).startOf('day')
}

export {
  formatDate,
  combineDateAndTime,
  combineDateAndTimeV2,
  formatDateShort
}
