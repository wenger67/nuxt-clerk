import { clerkClient, getAuth } from 'h3-clerk'
import { respData, respError } from '@/composables/resp'
import {
  findUserByEmail,
  getUserCredits,
  insertUser,
  User
} from '@/composables/user'

export default eventHandler(async event => {
  const { userId } = getAuth(event)
  if (!userId) {
    setResponseStatus(event, 403)
    return
  }

  const user = await clerkClient.users.getUser(userId)
  try {
    const email = user.emailAddresses[0].emailAddress
    const nickName = user.firstName
    const avatarUrl = user.imageUrl

    let userInfo: User = {
      email: email,
      nickname: nickName || '',
      avatar_url: avatarUrl,
      // uuid: useId()
      uuid: userId
    }

    const existUser = await findUserByEmail(email)
    if (existUser) {
      userInfo.uuid = existUser.uuid
    } else {
      await insertUser(userInfo)
    }

    const user_credits = await getUserCredits(email)
    userInfo.credits = user_credits
    return respData(userInfo)
  } catch (e) {
    console.log('get current user info failed:', e)
    return respError('get current user info failed')
  }
})
