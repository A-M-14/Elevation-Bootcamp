// #1
const StringFormatter = function(){

    const capitalizeFirst = function(str){
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }

    const toSkewerCase = function(str){
        return str.split(" ").join("-");
    }

    return{
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy"))//should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box




// #2
const Bank = function(){

    _money = 500

    const depositCash = function(cash){
        _money += cash;
    }

    const checkBalance = function(){
        console.log(_money)
    }

    return{
        deposit: depositCash,
        showBalance: checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950




// #3
const SongsManager = function(){

    const songs = {
        "sax": "3JZ4pnNtyxQ",
        "how long": "CwfoyVa980U"
    }

    const addSong = function(name, url){

        songs[name] = url.split('v=')[1]
    }

    const getSong = function (songName){
        let tmp = songs[songName];
        console.log("https://www.youtube.com/watch?v=" + tmp)
    }

    return {
        addSong, getSong
    }

}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("ain't me");
