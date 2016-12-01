# socrata-stream

[![Travis](https://api.travis-ci.org/karissa/socrata-stream.svg)](https://travis-ci.org/karissa/socrata-stream)

A node API to download raw data from Socrata.

```
npm install socrata-stream
```

## Usage

Go to a socrata page and copy the URL in the browser. For example, [NYC Civic Service Titles](https://data.cityofnewyork.us/Business/NYC-Civil-Service-Titles/nzjr-3966).

This module will parse the url to get the correct key `nzjr-3966` to construct the API call for downloading bulk data.

## API

### var stream = socrata(url, [options])

Returns a stream of data from socrata.

##### Options

  * `format`: can be one of 'csv' (default), 'tsv', 'rdf', 'rss', 'xml'
