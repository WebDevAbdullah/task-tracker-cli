export function getDateTimeNow(): string {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: number = date.getMonth();
  const day: number = date.getDate();
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  const format: string = `${day}-${month}-${year} ${hours}:${minutes}`;
  return format;
}

export function getMonthShortName(month: number): string {
  if (month < 1 || month > 12) {
    throw new Error("Invalid month");
  }

  const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return months[month - 1];
}
