const fs = require('fs')

const ev6 = JSON.parse(fs.readFileSync('ev6.geojson'))
const ev9 = JSON.parse(fs.readFileSync('ev9.geojson'))

ev6.features.forEach(f => {
  f.properties.route = 'EV6'
})

ev9.features.forEach(f => {
  f.properties.route = 'EV9'
})

result = {
  type: 'FeatureCollection',
  features: ev6.features.concat(ev9.features)
}

fs.writeFileSync('eurovelo.geojson', JSON.stringify(result))
