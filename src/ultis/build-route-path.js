export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;

  const pathWithparams = path.replaceAll(
    routeParametersRegex,"([a-z0-9--_]+)");
  console.log(Array.from(path.matchAll(routeParametersRegex)));

  const pathRegex = new RegExp(`^${pathWithparams}`);
  return pathRegex

  // const test = /\/users\/([a-z0-9--_]+)/;
}
