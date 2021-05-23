export const host = process.env.NODE_ENV  === 'development' ? 'http://127.0.0.1:8000/' : null

const api = 'grabbo/'
export const blogList = `${host}${api}blog-list/`
export const blogDetail = slug => `${host}${api}blog/${slug}`
