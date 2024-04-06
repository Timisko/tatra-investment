function ApiFunc() {
    const url = 'http://localhost:3000/'

    async function get(path: string) {
        const val = await fetch(url + path)
        return await val.json()
    }

    async function post(path: string, params: any) {
        const val = await fetch(url + path, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async function postAudio(path: string, params: any) {
        const val = await fetch(url + path, {
            method: 'POST',
            body: params,
            headers: {
                //'Content-Type': 'application/json'
            }
        })

        return await val.json()
    }

    return {get, post, postAudio}
}

export const Api = ApiFunc()