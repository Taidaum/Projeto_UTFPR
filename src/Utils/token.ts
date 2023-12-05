import { GetUser } from "../services/user";

export function setJwtToken(token = '') {
  try {
    console.log('jwt', token)
    localStorage.setItem(process.env.REACT_APP || 'CMS_DVD_TK', token);
  } catch (error) {
    console.log('jwt', error)
    //
  }
}

export function getJwtToken() {
  try {
    return localStorage.getItem(process.env.REACT_APP || 'CMS_DVD_TK');
  } catch (error) {
    return null;
  }
}

export function deleteJwtToken() {
  try {
    return localStorage.removeItem(process.env.REACT_APP || 'CMS_DVD_TK');
  } catch (error) {
    return null;
  }
}



