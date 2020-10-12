module.exports = function(robot) {
  
  robot.hear(/update broke*|bad update/i, function(res) {
    res.reply("Did you read latest update #announcements for your branch before updating?")
  })

};
