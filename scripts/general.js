module.exports = function(robot) {
  
    // Listen to direct questions ( @HelperBot)
    robot.respond(/help/i, function(res) {
      console.log(res)
      res.reply("I can help you search the wiki, type `search wiki keyword`")
    })

    robot.respond(/thank*/i, function(res) {
        console.log(res)
        res.reply("You are welcome!")
      })
  };