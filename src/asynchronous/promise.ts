export default function promiseSample() {
    const url = "https://api.github.com/users/rie-m"

    type Profile = {
        login: string
        id: number
    }

    type FetchProfile = () => Promise<Profile | null>

    const fetchProfile: FetchProfile = () => {
        // 正常だとresolve = jsonが返る
        //エラーが起きるとreject = nullが返る
        return new Promise((resolve, reject) => {
            // fetchメソッド (非同期処理)
            return fetch(url)
            .then((res: Response) => {
                    // レスポンスのBodyをJSONで読み取った結果を返す
                    res.json()
                    .then((json: Profile) => {
                        console.log("Asynchronous Promise Sample 1:", json)
                        resolve(json)
                    })
                    .catch((error) => {
                        console.error(error)
                        reject(null)
                    })
            .catch((error) => {
                console.error(error)
                reject(null)
            })
        
        })

    })

    }

    fetchProfile()
    .then((profile: Profile | null) => {
        if (profile) {
            console.log("Asynchronous Promise Sample 2:", profile)
        }

    })
    .catch(() => {})


}