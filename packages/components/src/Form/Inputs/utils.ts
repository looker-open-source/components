import padStart from 'lodash/padStart'
import toString from 'lodash/toString'
import map from 'lodash/map'

export type TimeFormats = '12h' | '24h'

// if format is `12h`, repeat hours 1-12 twice
export const cycleHourDisplay = (format: TimeFormats, hour: number) => {
  if (format === '12h') {
    if (hour === 0) {
      return 12 // 12:00 am
    } else if (hour > 12) {
      return hour - 12 // 1:00 pm - 11:00 pm
    }
  }
  return hour
}

// returns "01", "02", "03" instead of integers 1, 2, 3
export const formatTimeString = (number: number) => {
  return padStart(toString(number), 2, '0')
}

export const parseBase10Int = (value: string) =>
  value.length ? parseInt(value, 10) : 0

// take a 24 hour formatted time string ('14:34') and check whether it's a real time of day
// rejects non-numeric inputs and illogical times ('64:1928')
export const isValidTime = (value?: string) => {
  if (!value) {
    return true
  }
  const [hour = 0, minute = 0] = map(value.split(':'), parseBase10Int)

  if (hour < 24 && minute <= 60) {
    return true
  }

  return false
}
