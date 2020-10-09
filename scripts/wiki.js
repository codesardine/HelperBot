const fetch = require('node-fetch');
module.exports = function (robot) {
    robot.respond(/search wiki (.*)/i, function (res) {
        searchQuery = res.match[1]
        endpoints = ["http://freshwiki.manjaro.org/", "#https://wiki.archlinux.org/"]
        query = `api.php?action=query&format=json&generator=search&gsrnamespace=0&gsrlimit=4&gsrsearch=${searchQuery}`;
        output = "`I found something, hope it helps!` <br/>"
        for (let wiki in endpoints) {
            if (!wiki.startsWith("#")) {
                fetch(endpoints[wiki] + query)
                    .then(response => response.json())
                    .then(data => {
                        result = data.query.pages

                        for (let [key, value] of Object.entries(result)) {
                            output += `[${value.title}](${endpoints[wiki]}?curid=${value.pageid})<br/>`
                        }
                        if (i = 1) {
                            res.reply(output)
                        }

                    })
                    .catch((err) => console.log(err));
            }
        }
    })
}