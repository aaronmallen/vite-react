function mergeClassNames(...classNameStrings: (string | undefined | null)[]): string {
  const classNames: string[] = []

  classNameStrings.forEach((classNameCollection) => {
    if (typeof classNameCollection === 'string') {
      classNameCollection
        .split(' ')
        .map((className) => className.trim())
        .forEach((className) => classNames.push(className))
    }
  })

  return classNames
    .filter((className, index) => classNames.indexOf(className) === index)
    .join(' ')
    .trim()
}

export const JSX = {
  mergeClassNames,
}
