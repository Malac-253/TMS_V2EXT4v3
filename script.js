

var drawBroadpage = function(){
    d3.selectAll("body *").remove()
    d3.select("body").append("div").attr("id","heading")
    
        d3.select("#heading").append("div").attr("id","heading-tms").attr("class","heading-box")
            d3.select("#heading-tms").append("p").attr("id","p-tms").attr("class","heading-text").text("TMS")
    
        d3.select("#heading").append("div").attr("id","heading-banner").attr("class","heading-box")
            d3.select("#heading-banner").append("p").attr("id","p-banner").attr("class","heading-text").text("Choose a Broad")
    
        d3.select("#heading").append("div").attr("id","heading-title").attr("class","heading-box")
            d3.select("#heading-title").append("p").attr("id","p-title").attr("class","heading-text").text("4 Chan Safe Display")
    
        d3.select("#heading").append("div").attr("id","heading-featured").attr("class","heading-box")
            d3.select("#heading-featured").append("p").attr("id","p-featured").attr("class","heading-text").text("Featured(Safe) Broads")
    
        d3.select("#heading").append("div").attr("id","heading-err").attr("class","heading-box")
    
    d3.select("body").append("div").attr("id","aside")
    
        d3.select("#aside").append("div").attr("id","aside-warning").attr("class","aside-box")
            d3.select("#aside-warning").append("p").attr("id","p-warning").attr("class","aside-text").text("Click Here for Warning")
    
        d3.select("#aside").append("div").attr("id","aside-description").attr("class","aside-box")
            d3.select("#aside-description").append("p").attr("id","p-description").attr("class","aside-text").text("Description")
    
        d3.select("#aside").append("div").attr("id","aside-info").attr("class","aside-box")
            d3.select("#aside-info").append("p").attr("id","p-info").attr("class","aside-text").text("Info")
    
    
    d3.select("body").append("div").attr("id","B-Holder")
    
    d3.select("body").append("div").attr("id","bottom")
    
    d3.select("body").append("script").attr("src", "https://d3js.org/d3.v5.min.js")
    d3.select("body").append("link").attr("href", "style.css").attr("rel","stylesheet").attr("type","text/css")
    d3.select("body").append("script").attr("type","text/javascript").attr("src","script.js")
}

var drawthreadpage = function(){
    d3.selectAll("body *").remove()
    d3.select("body").append("div").attr("id","heading")
    
        d3.select("#heading").append("div").attr("id","heading-tms").attr("class","heading-box")
            d3.select("#heading-tms").append("p").attr("id","p-tms").attr("class","heading-text").text("TMS")
    
        d3.select("#heading").append("div").attr("id","heading-banner").attr("class","heading-box")
            d3.select("#heading-banner").append("p").attr("id","p-banner").attr("class","heading-text").text("Choose a Thread")
    
        d3.select("#heading").append("div").attr("id","heading-title").attr("class","heading-box")
            d3.select("#heading-title").append("p").attr("id","p-title").attr("class","heading-text").text("4 Chan Safe Display")
    
        d3.select("#heading").append("div").attr("id","heading-featured").attr("class","heading-box")
            d3.select("#heading-featured").append("p").attr("id","p-featured").attr("class","heading-text").text("Featured(Safe) Broads")
    
        d3.select("#heading").append("div").attr("id","heading-err").attr("class","heading-box")
    
    d3.select("body").append("div").attr("id","T-Holder")
    
    d3.select("body").append("div").attr("id","T-info")
    
    d3.select("body").append("div").attr("id","bottom")
    d3.select("#bottom").append("div").attr("class","pagebutton").attr("id","pagebutton1").text("<<< page")
    d3.select("#bottom").append("div").attr("class","pagebutton").attr("id","pagebutton1").text("page >>>")
    
    d3.select("body").append("script").attr("src", "https://d3js.org/d3.v5.min.js")
    d3.select("body").append("link").attr("href", "style.css").attr("rel","stylesheet").attr("type","text/css")
    d3.select("body").append("script").attr("type","text/javascript").attr("src","script.js")
}

//main function for success 
var mainFunction = function(){
    //Web page event for the Boards pages
    var boardWebEvent = function(boards){
        primaryAddToPageData(boards.boards)
        } 
    
    //Web page event for the threads pages
    var threadWebEvent = function(threads,threadlink){
        secondaryAddToPageData(threads,threadlink)
    }
    
    //Web page event for the post pages
    var postsWebEvent = function(posts,postslink,threadlink){
        tertiaryAddToPageData(posts,postslink,threadlink)
        
        return "Home"}
    
    //Tertiary Data Promise - Gets Posts for thread
    var tertiaryDataPromise = function(threadData,postslink,threadlink){
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
                postsWebEvent(posts,postslink,threadlink) 
            },
            function(err)
            {
                console.log("(ERR -M) Failure - Error : ", err)
                d3.selectAll("#heading-err *").remove()
                d3.select("#heading-err").append("p").attr("id","heading-errs").text("Load failed - Check Console")
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
                
                threadWebEvent(threads,threadlink) 
            },
            function(err)
            {
                console.log("(ERR -M) Failure - Error : ", err)
                d3.selectAll("#heading-err *").remove()
                d3.select("#heading-err").append("p").attr("id","heading-errs").text("Load failed - Check Console")
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
                //drawBroadpage()
                console.log("(OBJECT EX) ^- EX: boards.boards[3].board: ", boards.boards[3].board)
                boardWebEvent(boards)
            },
            function(err)
            {
                console.log("(ERR -M) Failure - Error : ", err)
                d3.selectAll("#heading-err *").remove()
                d3.select("#heading-err").append("p").attr("id","heading-errs").text("Load failed - Check Console")
            
            })
    }
    
    //Adds Primary Data from Promise to a page
    var primaryAddToPageData = function(Data){ 
        
        d3.select("#B-Holder")
        .append("div")
        .selectAll("span")
        .data(Data)
        .enter()
        .append("div")
        .attr("class","threads_icon")
        .attr("id",function(Data){return "id_" + Data.board})
        .text(function(Data){return Data.title})
        .on("click",function(aData){
            console.log("(PATH TEST)",aData)
            secondaryDataPromise(aData.board)
                }   )
        .on("mouseover",function(aFilmData){
                d3.selectAll("#aside-description *").remove()
            
                d3.select("#aside-description").append("p").attr("id","p-description").attr("class","aside-text").text("Description :")
            
                d3.select("#aside-description")
                    .append("p")
                    .attr("class","thread_description")
                    .text(function(){return aFilmData.meta_description})
                    
                
                d3.selectAll("#aside-info *").remove()
            
                d3.select("#aside-info").append("p").attr("id","p-description").attr("class","aside-text").text("Info :")
            
                d3.select("#aside-info")
                    .append("p")
                    .attr("class","thread_description")
                    .text(function(){return "Title: "+aFilmData.title})
            
                d3.select("#aside-info")
                    .append("p")
                    .attr("class","thread_description")
                    .text(function(){return "Pages: "+aFilmData.pages})
                    
        
        })
                    
    }
    
    //Adds Secondary Data from Promise to a page
    var secondaryAddToPageData = function(Data,datalink){ 
        drawthreadpage()
        //console.log("*******(PATH TEST)",Data)
        //console.log("*******(PATH TEST)",Data[0].threads)
        d3.select("#T-Holder")
        .append("div")
        .selectAll("span")
        .data(Data[0].threads)
        .enter()
        .append("div")
        .attr("class","threads_icon")
        .attr("id",function(aData){return "id_" + aData.no})
        .text(function(aData){return aData.no})
        .on("click",function(aData){
            console.log("(PATH TEST)",aData)
            console.log("(PATH TEST)",datalink)
            console.log("(PATH TEST)",aData.no)
            tertiaryDataPromise(Data,aData.no,datalink)
                }   )
        .on("mouseover",function(aFilmData){
                d3.selectAll("#T-Info *").remove()
            
                d3.select("#aside-description").append("p").attr("id","p-description").attr("class","aside-text").text("Description :")
            
                d3.select("#aside-description")
                    .append("p")
                    .attr("class","thread_description")
                    .text(function(){return aFilmData.meta_description})
                    
                
                d3.selectAll("#T-info *").remove()
            
                d3.select("#T-info").append("p").attr("id","p-description").attr("class","aside-text").text("Info :")
            
                d3.select("#T-info")
                    .append("p")
                    .attr("class","thread_description")
                    .text(function(){return "last_modified: "+aFilmData.last_modified})
            
                d3.select("#T-info")
                    .append("p")
                    .attr("class","thread_description")
                    .text(function(){return "replies: "+aFilmData.replies})
                    
        
        })
        //console.log("********S*****(PATH TEST) done",)            
    }
    
    //Adds Tertiary Data from Promise to a page
    var tertiaryAddToPageData = function(Data,Datalink,Pastlink){ 
        drawthreadpage()
        console.log("*******(PATH TEST)",Data)
        console.log("*******(PATH TEST)",Data.posts)
        d3.select("#T-Holder")
        .append("div")
        .selectAll("span")
        .data(Data.posts)
        .enter()
        .append("div")
        .attr("class","threads_icon")
        .attr("id",function(aData){return "id_" + aData.no})
        .text(function(aData){return aData.com})
        .on("click",function(aData){
            console.log("(PATH TEST)",aData)
            console.log("(PATH TEST)",datalink)
            console.log("(PATH TEST)",aData.no)
            tertiaryDataPromise(Data,aData.no,datalink)
                }   )
        .on("mouseover",function(aFilmData){
                d3.selectAll("#T-Info *").remove()
            
                d3.select("#aside-description").append("p").attr("id","p-description").attr("class","aside-text").text("Description :")
            
                d3.select("#aside-description")
                    .append("p")
                    .attr("class","thread_description")
                    .text(function(){return aFilmData.meta_description})
                    
                
                d3.selectAll("#T-info *").remove()
            
                d3.select("#T-info").append("p").attr("id","p-description").attr("class","aside-text").text("Info :")
            
                d3.select("#T-info")
                    .append("p")
                    .attr("class","thread_description")
                    .text(function(){return "last_modified: "+aFilmData.last_modified})
            
                d3.select("#T-info")
                    .append("p")
                    .attr("class","thread_description")
                    .text(function(){return "replies: "+aFilmData.replies})
                    
        
        })
        //console.log("********S*****(PATH TEST) done",)            
    }
    
    //Start
    primaryDataPromise()
}
mainFunction()