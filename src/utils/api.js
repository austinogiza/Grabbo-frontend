export const host = process.env.NODE_ENV  === 'development' ? 'http://127.0.0.1:8000/' : "https://api.grabbofertilityclinic.com/"

const api = 'grabbo/'
export const blogList = `${host}${api}blog-list/`
export const blogDetail = slug => `${host}${api}blog/${slug}`
export const DepartmentsList = `${host}${api}departments/`
export const PersonnelList = `${host}${api}personnel/`
export const HomePersonnelsList = `${host}${api}home-personnel/`
export const HomeDepartmentsList = `${host}${api}home-departments/`
export const ProfessionalInfo = slug => `${host}${api}personnel/${slug}/`
export const DepartmentDetail = slug => `${host}${api}departments/${slug}/`
export const CareerList = `${host}${api}careers/`
export const ContactURL = `${host}${api}contact/`
export const commentDoneURL = `${host}${api}comment-done/`
export const commentFetchURL = `${host}${api}comment-fetch/`


export const CareerDetailInfo = slug => `${host}${api}careers/${slug}/`







