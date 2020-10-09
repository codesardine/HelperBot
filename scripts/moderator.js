const badWords = [
    "abortion",
    "anal",
    "anus",
    "arse",
    "ass",
    "ass-fucker",
    "asses",
    "asshole",
    "assholes",
    "ballbag",
    "balls",
    "bastard",
    "bellend",
    "bestial",
    "bestiality",
    "bitch",
    "bitches",
    "bitching",
    "bloody",
    "blowjob",
    "bollok",
    "boob",
    "boobs",
    "breasts",
    "buceta",
    "bum",
    "butt",
    "carpet muncher",
    "chink",
    "cipa",
    "clitoris",
    "cock",
    "cock-sucker",
    "cocks",
    "coon",
    "crap",
    "creep",
    "creepy",
    "cum",
    "cumshot",
    "cunillingus",
    "cunt",
    "damn",
    "dick",
    "dildo",
    "dildos",
    "dink",
    "dog-fucker",
    "duche",
    "dyke",
    "ejaculate",
    "ejaculated",
    "ejaculates",
    "ejaculating",
    "ejaculation",
    "fag",
    "fagging",
    "faggot",
    "fagot",
    "fagots",
    "fanny",
    "felching",
    "fellatio",
    "flange",
    "fuck",
    "fucked",
    "fucker",
    "fuckers",
    "fucking",
    "fuckings",
    "fucks",
    "fudge packer",
    "god-damned",
    "goddamn",
    "hell",
    "hore",
    "horny",
    "jerk-off",
    "kock",
    "labia",
    "lust",
    "lusting",
    "masochist",
    "masturbate",
    "mother fucker",
    "nazi",
    "nigger",
    "niggers",
    "orgasim",
    "orgasm",
    "orgasms",
    "pecker",
    "penis",
    "piss",
    "pissed",
    "pisser",
    "pisses",
    "pissing",
    "pissoff",
    "poop",
    "peadophily",
    "peado",
    "peadophile",
    "pedo",
    "porn",
    "porno",
    "pornography",
    "prick",
    "pricks",
    "pube",
    "pussies",
    "pussy",
    "rape",
    "rapist",
    "rectum",
    "retard",
    "rimming",
    "sadist",
    "screwing",
    "scrotum",
    "semen",
    "sex",
    "shag",
    "shagging",
    "shemale",
    "shit",
    "shite",
    "shits",
    "shitted",
    "shitting",
    "shitty",
    "skank",
    "slut",
    "sluts",
    "smegma",
    "smut",
    "snatch",
    "son-of-a-bitch",
    "spac",
    "spunk",
    "testicle",
    "tit",
    "tits",
    "titt",
    "turd",
    "vagina",
    "viagra",
    "vulva",
    "wang",
    "wank",
    "whore",
    "x rated",
    "xxx"
];

const Discourse = require('discourse-js');
const discourse = new Discourse();
const KEY = process.env.HUBOT_DISCOURSE_KEY
const USERNAME = process.env.HUBOT_DISCOURSE_USERNAME
const SERVER = process.env.HUBOT_DISCOURSE_SERVER
discourse.config(
    {
        KEY,
        USERNAME,
        SERVER
    }
)
module.exports = (robot) => {
    robot.hear(/.*/i, (res) => {
        msg = res.message
        //console.log(res)
        for (let word of badWords) {
            user = res.envelope.user.username
            link = res.message.slug
            regex = new RegExp("\\b" + word + "\\b", "i")
            function alertMods(user, link, word) {
                //res.robot.messageRoom("moderators", `@${user}, breaking-community-rules!`, `${link}
                //Bad word found ( ${word} ), follow excalation policy.`
                //) 
                console.log(res)

                discourse.posts.reply({
                    topic_id: res.envelope.room,
                    reply_to_post_number: res.envelope.message.id,
                    message: msg
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err));

            }
            if (regex.test(user) || regex.test(msg.text) || regex.test(msg.title)) {
                alertMods(user, link, word)
            }
            if (res.envelope.user.bio_raw) {
                if (regex.test(res.envelope.user.bio_raw)) {
                    alertMods(user, link, "profile bio: " + word)
                }
            }
        }
    })
}