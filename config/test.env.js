'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  ENV_CONFIG:'"test"',
  BIZ_URL: '"http://192.168.0.105:8080"',
})
