const prefix = process.env.NEXT_PUBLIC_BASE_PATH;
console.log("prefix ", prefix);

module.exports = {
  trailingSlash: true,
  assetPrefix: prefix ? prefix : "",
  basePath: prefix ? prefix : "",
};
