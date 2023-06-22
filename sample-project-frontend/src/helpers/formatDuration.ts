import { formatDuration as formatDurationDateFns } from 'date-fns'
import intervalToDuration from 'date-fns/fp/intervalToDuration'
import isValid from 'date-fns/isValid'

export const formatDuration = (duration?: number) => {
    if (!duration) return ''
    const date = new Date(duration * 1000).toISOString()
    if (duration >= 3600) {
        return date.slice(11, 19)
    } else if (duration >= 600) {
        return date.slice(14, 19)
    }
    return date.slice(15, 19)
}

export const computeDuration = (from?: Date, to?: Date) => {
    if (!from || !to || !isDateValid(from) || !isDateValid(to)) return ''
    if (from.getHours() === to.getHours() && from.getMinutes() === to.getMinutes() && to.getHours() === 0) return '24h'
    if (to.getHours() === 0 && to.getMinutes() === 0) {
        // 00:00
        to.setDate(to.getDate() + 1)
    }
    if (from >= to) return '' // invalid order
    from.setSeconds(0, 0)
    to.setSeconds(0, 0)

    return formatDurationDateFns(intervalToDuration({ start: from.getTime(), end: to.getTime() }), {
        format: ['hours', 'minutes']
    })
        .replace('hours', 'h')
        .replace('hour', 'h')
        .replace('minutes', 'm')
        .replace('minute', 'm')
        .replace(/\s/g, '')
}

export const isDateValid = (date?: Date): boolean => !!date && !isNaN(date.getTime()) && isValid(date)

export const formatNumber = (i: number): string => {
    return i.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
}
