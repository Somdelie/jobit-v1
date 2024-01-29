export const getPageHeading = (pathname, query) => {
  // Split the pathname into segments
  const segments = pathname.split("/").filter((segment) => segment !== "");

  // Construct the page heading based on the segments
  let pageHeading = "Home";
  segments.forEach((segment) => {
    pageHeading += ` / ${segment}`;
  });

  // Add query parameters if available
  const queryParams = Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join("&");
  if (queryParams !== "") {
    pageHeading += ` / ${queryParams}`;
  }

  return pageHeading;
};
