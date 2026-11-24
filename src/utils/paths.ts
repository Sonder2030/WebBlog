const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export function href(path: string) {
  return `${basePath}${path}` || '/';
}
