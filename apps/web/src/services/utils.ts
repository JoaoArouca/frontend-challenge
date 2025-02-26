import qs from 'qs'

export const paramsSerializer = (params: unknown) => {
  return qs.stringify(params, {
    allowEmptyArrays: false,
    skipNulls: true,
    strictNullHandling: true,
    arrayFormat: 'comma',
  })
}
