export default eventHandler(event => {
  console.log('new request: ' + getRequestURL(event))
})
