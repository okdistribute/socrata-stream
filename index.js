var url = require('url')
var got = require('got')

module.exports = function (u, opts) {
  if (!opts) opts = {}
  opts.format = opts.format || 'csv'
  var parsed = url.parse(u)
  var parts = parsed.pathname.split('/')
  var key = parts[parts.length - 1]
  var newurl = `${parsed.host}/api/views/${key}/rows.${opts.format}?accessType=DOWNLOAD`
  return got.stream(newurl)
}
