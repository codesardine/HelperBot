const fetch = require('node-fetch');
module.exports = function (robot) {
    robot.respond(/search wiki (.*)/i, function (res) {
        searchQuery = res.match[1]
        endpoint = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&srlimit=10&search=${searchQuery}`;

        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                titles = data[1]
                links = data[3]
                text = ""
                for (var index in data) {
                    console.log(index)
                    
                }
                res.reply(text)
            })
            .catch((err) => console.log(err));

    })
}