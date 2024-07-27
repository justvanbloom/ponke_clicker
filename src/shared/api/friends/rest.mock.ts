import { FriendsApi } from './types'

export const friendsApi: FriendsApi = {
    async getFriends() {
        await new Promise(resolve => setTimeout(resolve, 2000))

        return {
            data: {
                points: 20050,
                friends: 10,
                tg: 2500,
                premium: 2500
            }
        }
    }
}