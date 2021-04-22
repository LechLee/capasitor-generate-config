const fs = require('fs-extra')
const helper = require('./utils')
const pwd = process.cwd()
const config = require(`${pwd}/capacitor.config.tpl.js`)

const args = helper.args(process.argv)

console.log(args.profile)
config.server.cleartext = args.profile && args.profile === 'prod' ? false : true
const str = `${JSON.stringify(config, null, 2)}`

fs.writeFileSync(`${pwd}/capacitor.config.json`, str, (err) => {
    if (err) throw err
})