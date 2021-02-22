const readline = require('readline')
const fs = require('fs')


function menu(callback) {
  console.log('Welcome to the ASCII art-reader')

fs.readdir('./data', 'utf-8', (err, files) => {
  files.forEach((f, i) => {
    console.log(i, f)
  })
  callback(files)
  })
}


function getUserInput(files, callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('Which file should I load? \n', function (input) {
    rl.close()
    const fileName = './data/' + files[input]

    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        console.log('Error: ' + err)
      } else {
        console.log(data)
        callback()
      }
    })
  })
}

function start() {
  menu((files) => {
    getUserInput(files, start)
  })
}

start()