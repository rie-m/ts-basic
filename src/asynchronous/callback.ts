export default function callbackSample() {
    const url = "https://api.github.com/users/rie-m"

    // コールバックで呼び出す非同期処理
    const fetchProfile = () => {
        // fetchメソッド (非同期処理)
        return fetch(url)
        .then((res: Response) => {
                // レスポンスのBodyをJSONで読み取った結果を返す
                res.json()
                .then((json) => {
                    console.log("Asynchronous Callback Sample 1:", json)
                    return json
                })
                .catch((error) => {
                    console.error(error)
                })
        .catch((error) => {
            console.error(error)
        })
        
        })

    }
    const profile = fetchProfile()
    console.log("Asynchronous Callback Sample 2:", profile)


}