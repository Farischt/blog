import { format, parseISO } from 'date-fns'

export function PostDate({ dateString }: { dateString: string }) {
  if (!dateString) return null

  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'E, Qo MMM yyyy')}</time>
}
