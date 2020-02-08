import http from 'http'
import url from 'url'
import querystring from 'querystring'

const server = http.createServer((req, res) => {
  // response.setHeader('Content-Type', 'x-www-form-urlencoded');
  const datas = [];
  // content-length формируется автоматически!

//  const queryData = url.parse(datas[0], true)
//  console.log(queryData)


  req
    .on('data', chunk => datas.push(chunk.toString()))
    .on('end', () => {
       console.log(datas[0])
       const parsedData = querystring.parse(datas[0])
       console.log(parsedData)
       const sum = Number(parsedData.x) + Number(parsedData.y)
       const multiplication = Number(parsedData.x) * Number(parsedData.y)
       const result = 'Sum is ' + sum + '. Multiplicaition is ' + multiplication
       res.end(result)
    })
  // const sum = Number(queryData.query.a) + Number(queryData.query.b)
  // const multiplication = Number(queryData.query.a) * Number(queryData.query.b)
  // const result = 'Sum is ' + sum + '. Multiplicaition is ' + multiplication
  // response.write(String(result))
  // response.end()
})

const port = 4000
server.listen(port, () => {
  console.log('Server has been started')
})
