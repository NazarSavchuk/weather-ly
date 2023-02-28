export function getMonthName(dateString: string) {
  const date = new Date(dateString);
  const monthName = date.toLocaleString("default", { month: "short" });
  return monthName;
}
