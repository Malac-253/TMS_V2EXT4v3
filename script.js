
//main function for success 
var codeMain = function(filmData)
{
    addtopageData(filmData);
    
}

var drawHomepage = function(filmData)
{
    d3.selectAll("body *").remove()
    d3.select("body").append("div").attr("id","heading")
    d3.select("#heading").append("h1").attr("id","heading-text").text("Choose a Movie!")
    d3.select("body").append("div").attr("id", "banner").text("Click on a title to see more!")
    d3.select("body").append("div").attr("id", "bolder").text("")
    d3.select("body").append("div").attr("id", "info-box").text("")
    d3.select("body").append("script").attr("src", "https://d3js.org/d3.v5.min.js")
    d3.select("body").append("link").attr("href", "style.css").attr("rel","stylesheet").attr("type","text/css")
 d3.select("body").append("script").attr("type","text/javascript").attr("src","script.js")
    
    addtopageData(filmData);
}

//draws the pages for each film
var drawFilmpage = function(aFilmData,filmData)
{
    d3.selectAll("body *").remove()
    d3.select("body").append("div").attr("id","heading")
    d3.select("#heading").append("h1").attr("id","heading-text").text(aFilmData.title)
    d3.select("body").append("div").attr("id", "banner")
        d3.select("#banner").append("p").attr("class","director").text("Director: "+aFilmData.director)
        d3.select("#banner").append("p").attr("class","producer").text("Producer: " +aFilmData.producer)
        d3.select("#banner").append("p").attr("class","release_date").text("Release Date: "+aFilmData.release_date)
        d3.select("#banner").append("p").attr("class","rt_score").text("Rotten Tomatoes Score: "+aFilmData.rt_score)
        d3.select("body").append("div").attr("id", "info-box").text("")
        d3.select("#info-box").append("p").attr("class","movie_description").text("Description:  "+aFilmData.description)
        d3.select("body").append("div").attr("id", "back-button").text("Click to Go Back")           .on("click",function(aFilmData){
                d3.selectAll("body *").remove()
        d3.select("body").append("script").attr("src", "https://d3js.org/d3.v5.min.js")
    
        
        d3.select("body").append("script").attr("type","text/javascript").attr("src","script.js")    
                console.log("filmData")
                    drawHomepage(filmData)
                // Promise to get data from API
                var dataPromise = d3.json("https://ghibliapi.herokuapp.com/films")
                dataPromise.then(
                    function(filmData)
                    {
                        console.log("filmData: ", filmData)
                        addtopageData(filmData)
                        
                    },
                    function(err)
                    {
                        console.log("Failure - Error : ", err)
                        d3.select("#heading").append("p").attr("id","heading-text").text(" Backup Movie Load failed  - Check Back later")
                    }
                )

        
                    })
d3.select("body").append("link").attr("href", "style.css").attr("rel","stylesheet").attr("type","text/css")
}


//code to add in and bind the data
var addtopageData = function(filmData)
{
        
        
        d3.select("#bolder")
        .append("div")
        .selectAll("span")
        .data(filmData)
        .enter()
        .append("div")
        .attr("class","threads_icon")
        .attr("id",function(aFilmData){return "id_" + aFilmData.board})
        .text(function(aFilmData){return aFilmData.title})
        .on("click",function(aFilmData){       
          drawFilmpage(aFilmData,filmData)
                }   )
        .on("mouseover",function(aFilmData){
                d3.selectAll("#aside-info *").remove()
                d3.select("#aside-info")
                    .append("div")
                    .attr("class","thread_description")
                    .text(function(){return aFilmData.meta_description})
                    })
                    
}

// Promise to get data from API

var mainFunction = function(){
    
    //Web page event for the Boards pages
    var boardWebEvent = function(boards){
        
        addtopageData(boards.boards)
        
        
        
        
        return boards.boards[3].board} 
    
    //Web page event for the threads pages
    var threadWebEvent = function(threads){return threads[0].threads[0].no}
    
    //Web page event for the post pages
    var postsWebEvent = function(posts){return "Home"}
    
    //Tertiary Data Promise - Gets Posts for thread
    var tertiaryDataPromise = function(postslink,threadlink){
        //note
        console.log("----------------------------------")
        console.log("(PROCESS -) Tertiary Data Promise")
        //Promise Prep
        var REALLINK = "https://a.4cdn.org/"+threadlink+"/thread/"+postslink+".json"
        console.log("(LINK - FR) *** REALLINK TO USE (for: "+threadlink+"-"+postslink+"):",REALLINK ) 
        console.log("(FILE - FR) *** FILELINK TO USE (for: "+threadlink+"-"+postslink+"): "+threadlink+postslink+"posts.json")
        //Promise Main
        var dataPromise = d3.json(threadlink+postslink+"posts.json")
        dataPromise.then(
            function(posts)
            {
                console.log("(OBJECT --) Posts: ", posts)
                console.log("(OBJECT EX) ^- EX: posts.posts[1].com: ", posts.posts[1].com)
                postsWebEvent(posts) 
            },
            function(err)
            {
                console.log("Failure - Error : ", err)
                d3.select("#heading").append("p").attr("id","heading-text").text(" Full Movie Load failed - Check Back later")
            }
        )     
    }
    //Secondary Data Promise - Gets Threads for broad
    var secondaryDataPromise = function(threadlink){
        //note
        console.log("----------------------------------")
        console.log("(PROCESS -) Secondary Data Promise")
        //Promise Prep
        var REALLINK = "https://a.4cdn.org/"+threadlink+"/threads.json"
        console.log("(LINK - FR) *** REALLINK TO USE (for: "+threadlink+"):",REALLINK )
        console.log("(FILE - FR) *** FILELINK TO USE (for: "+threadlink+"): "+threadlink+"threads.json")
        //Promise Main
        var dataPromise = d3.json(threadlink+"threads.json")
        dataPromise.then(
            function(threads)
            {
                console.log("(OBJECT --) threads: ", threads)
                console.log("(OBJECT EX) ^- EX: threads[0].threads[0].no: ", threads[0].threads[0].no)
                tertiaryDataPromise(threadWebEvent(threads),threadlink) 
            },
            function(err)
            {
                console.log("(ERR -M) Failure - Error : ", err)
                d3.select("#heading").append("p").attr("id","heading-text").text(" Full Movie Load failed - Check Back later")
            }
        ) 
    }  
    //Primary Data Promise - Gets broads
    var primaryDataPromise = function(){
        //note
        console.log("----------------------------------")
        console.log("(PROCESS -) Primary Data Promise")
        //Promise Prep
        var REALLINK = "https://a.4cdn.org/boards.json"
        var dataPromise = d3.json("boards.json")
        console.log("(LINK - FR) *** REALLINK TO USE (for: boards):",REALLINK )
        console.log("(FILE - FR) *** FILELINK TO USE (for: boards): boards.json")  
        //Promise Main
        dataPromise.then(
            function(boards)
            {
                console.log("(OBJECT --) boards: ", boards)
                console.log("(OBJECT EX) ^- EX: boards.boards[3].board: ", boards.boards[3].board)
                secondaryDataPromise(boardWebEvent(boards))
            },
            function(err)
            {
                console.log("(ERR -M) Failure - Error : ", err)
                d3.select("#heading").append("p").attr("id","heading-text").text(" Full Movie Load failed - Check Back later")
            }
        )
    }
    
    primaryDataPromise()
    
}
mainFunction()