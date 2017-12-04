
let SaveUser = (data) => {
  return {
    type: 'USER_SAVE',
    user: data
  }
}

export default {
  SaveUser
}
