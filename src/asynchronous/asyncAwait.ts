export default async function asyncAwaitSample() {
    const url = "https://api.github.com/users/rie-m"

    type Profile = {
        login: string
        id: number
    }

    type FetchProfile = () => Promise<Profile | null>

    const fetchProfile: FetchProfile = async () => {
        const response = await fetch(url)
            .then((res: Response) => res)
            .catch((error) => {
                console.error(error)
                return null
            })

        if (!response) {
            return null
        }
        const json = await response.json()
            .then((json: Profile) => {
                console.log("Asynchronous async/await sample 1:", json)
                return json
            })
            .catch((error) => {
                console.error(error)
                return null
            })
        if (!json) {
            return null
        }
        return json
    }

    const profile = await fetchProfile()
    if (profile) {
        console.log("Asynchronous async/await sample 2:", profile)
    }
        
}