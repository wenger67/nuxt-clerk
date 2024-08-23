export const useUserInfo = () =>
  useState<User>('user_info', () => {
    let user: User = {
      email: '',
      nickname: '',
      avatar_url: '',
      uuid: ''
    }
    return user
  })
