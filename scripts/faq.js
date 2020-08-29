module.exports = function(robot) {
  
  // Listen to any user input
   robot.hear(/\b(?:|switch|switching|change) branch*\b/i, function(res) {
     res.reply("Istructions for switching branch are available in the [WIKI](https://wiki.manjaro.org/index.php?title=Switching_Branches).")
   })

   robot.hear(/update broke*|bad update/i, function(res) {
    res.reply("Did you read latest update #announcements for your branch before updating?")
  })

  robot.hear(/graphics driver*|graphics card*|black screen*|radeon rx|nvidia|won't boot|not booting/i, function(res) {
    res.reply("Did you try this [tutorial](https://forum.manjaro.org/t/fix-system-doesn-t-boot-boots-to-a-black-screen-or-stops-at-a-message/3906) or [Graphics Cards](https://wiki.manjaro.org/index.php?title=Configure_Graphics_Cards) or [grub](https://wiki.manjaro.org/index.php?title=GRUB/Restore_the_GRUB_Bootloader).")
  })

  robot.hear(/can't login|account deleted|recover old account/i, function(res) {
    res.reply("Welcome to the brand new [forum](https://forum.manjaro.org/t/welcome-to-the-new-manjaro-forum/151/3).")
  })

  //robot.hear(/hi* |hello* |hey* /g, function(res) {
   // res.reply("Welcome to the forum, use the search before posting, read [how to provide good information](https://forum.manjaro.org/t/how-to-provide-good-information/874) and [code of conduct](https://forum.manjaro.org/t/contributor-covenant-code-of-conduct/5068/1), have fun.")
  //})

  // Listen to direct questions ( @HelperBot)
  robot.respond(/help/i, function(res) {
    console.log(res)
    res.reply("I am busy, help commands not done yet.")
  })

};
