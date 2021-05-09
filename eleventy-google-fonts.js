const https = require('https')

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36'

const isValidURL = url => {
  return /fonts.googleapis.com/.test(url)
}

const downloadFont = url => {
  return new Promise((resolve) => {
    let rawData = ''
    https.get(
      url,
      {
        headers: {
          'user-agent': UA,
        },
      },
      res => {
        res.on('data', chunk => {
          rawData += chunk
        })
        res.on('end', () => {
          resolve(rawData.toString('utf8'))
        })
      }
    )
  })
}

const createInlineCss = async url => {
  if (!isValidURL(url)) {
    throw new Error('Invalid Google Fonts URL')
  }

  const content = await downloadFont(url)

  return (
    `<link rel="preconnect" href="https://fonts.gstatic.com">`+
    `<link data-href="${url}" rel="stylesheet">`+
    `<style data-href='${url}'>${content}</style>`
  )
}

module.exports = {
  isValidURL: isValidURL,
  createInlineCss: createInlineCss
}
