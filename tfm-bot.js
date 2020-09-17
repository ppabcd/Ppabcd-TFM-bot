const cheesyjs = require('cheesy.js')
const glob = require("glob")
const fs = require("fs")
const byteArray = cheesyjs.byteArray
const md5 = require('md5')
const axios = require('axios')
const dotenv = require('dotenv')

const restart = require('./lib/restart')
const tfm = require('./lib/tfm')

// Dot ENV
dotenv.config()
const env = process.env;


const start = (cheese = new cheesyjs()) => {
    const {TFM} = require("./lib/tfm")
    const tfm = new TFM(cheese)

    cheese.on('loginReady', async () => {
        tfm.login()
    })

    cheese.start(env.TFM_ID, env.TFM_TOKEN).catch((e) => {
        restart(function (msg) {
            console.log(msg)
        }, __dirname)
    })
}

try {
    start(new cheesyjs())
} catch (e) {
    console.log(e)
}