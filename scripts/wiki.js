const fetch = require('node-fetch');
module.exports = function (robot) {
    robot.respond(/search wiki (.*)/i, function (res) {
        searchQuery = res.match[1]
        endpoint = `http://freshwiki.manjaro.org/w/api.php?origin=*&action=opensearch&srlimit=10&format=json&search=${searchQuery}`;

        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                results = []
                for (var title of data[1]) {
                    value = [title] 
                    results.push(value)                 
                }
                data[3].forEach(function (value, i) {
                    results[i].push(value)
                });
                output = "I found some results! :robot: <br /> "
                results.forEach(function (value, i) {
                    output += `[${value[0]}](${value[1]}) <br /> `
                });
                console.log(output)
                res.reply(output)
            })
            .catch((err) => console.log(err));
    })
}