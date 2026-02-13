import { SET_PROJECTS } from '../../constants/actionTypes'

const setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    payload: projects,
  }
}

export { setProjects }