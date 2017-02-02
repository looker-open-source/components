msg = require('./contents.coffee')
require '../sass/message.scss'
$ = require('jquery')

$ ->
  $('<div id=\'message\'>').text(msg + '!').appendTo 'body'
  return
