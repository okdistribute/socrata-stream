var socrata = require('./')
var csv = require('csv-parser')
var test = require('tape')
var url = 'https://data.cityofnewyork.us/Housing-Development/Property-Data-Buildings-Information-System-/e98g-f8hy'

test('get data stream for csv', function (t) {
  var stream = socrata(url, {format: 'csv'})
  var parsed = stream.pipe(csv())
  parsed.on('data', function (data) {
    t.ok(data['Permit BIN'], 'has permit bin')
    stream.pause()
  })
  t.end()
})
