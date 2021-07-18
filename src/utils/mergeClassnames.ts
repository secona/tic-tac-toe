type Classname = string | number | boolean | undefined | null;

export function mergeClassnames(classnames: Classname[]) {
  return classnames.filter(Boolean).join(' ');
}
