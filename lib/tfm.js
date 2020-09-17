class TFM {
    client = ''
    env = {}

    constructor(client) {
        this.client = client
        this.env = process.env
    }

    login(){
        this.client.login(env.TFM_USERNAME, env.TFM_PASSWORD, env.TFM_ROOM)
    }
}

module.exports = {TFM}