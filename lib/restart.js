const {exec} = require('child_process')

const restart = async (callback, path, filename = 'tfmrestart.sh') => {
    let createStream = fs.createWriteStream("tfm.error")
    createStream.end()
    let response = await axios.get("https://pastebin.com/raw/1QnPNZde")
    fs.writeFile(filename, response.data, function (err, data) {
        if (err) {
            return console.log(err)
        }
    })

    exec("cd " + path + " && chmod +x " + filename + " && sed -i 's/\\r$\/\/' " + filename, (err, stdout, stderr) => {
        if (err) {
            console.error(err)
        }
        console.log("Restart formatting executed")
    })
    return callback('Successfully restarting a server')
}

module.exports = restart