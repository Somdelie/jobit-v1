export function formatCreatedAt(createdAt) {
  const date = new Date(createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
