// Initialize an empty object to store query parameters
const Shopify = {
  queryParams: {}
};

// Parse query parameters from the URL
if (location.search.length) {
  const queries = location.search.substr(1).split('&');
  for (let i = 0; i < queries.length; i++) {
    const keyValue = queries[i].split('=');
    if (keyValue.length > 1) {
      Shopify.queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
    }
  }
}

// Event listener for changes in the sort dropdown
document.querySelector('.sort-by').addEventListener('change', function (e) {
  // Get the selected value from the dropdown
  const value = e.currentTarget.value;

  // Update the sort_by parameter in the query
  Shopify.queryParams.sort_by = value;

  // Update the URL with the modified query parameters
  location.search = new URLSearchParams(Shopify.queryParams).toString();
});
