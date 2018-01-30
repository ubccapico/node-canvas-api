const { buildOptions, fetchAll } = require('./util')
require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

module.exports = {
  getUsers: (courseId, ...options) => {
    return (canvasDomain + `/courses/${courseId}/users?` + buildOptions(options))
  },
  
}