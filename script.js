
//main function for success 
var mainFunction = function(){
   
    //drawing to pages
        //draws main page
        var drawBroadpage = function(){
        //Remove
        d3.selectAll("body *").remove()
        //Heading
        d3.select("body").append("div").attr("id","heading")

            //Box 1 - TMS
            d3.select("#heading").append("div").attr("id","heading-tms").attr("class","heading-box")
                d3.select("#heading-tms").append("p").attr("id","p-tms").attr("class","heading-text").text("TMS")

            //Box 2 - "Choose a Broad"
            d3.select("#heading").append("div").attr("id","heading-banner").attr("class","heading-box")
                d3.select("#heading-banner").append("p").attr("id","p-banner").attr("class","heading-text").text("Choose a Broad")

            //Box 3 - "4 Chan Safe Display/Converter"
            d3.select("#heading").append("div").attr("id","heading-title").attr("class","heading-box")
                d3.select("#heading-title").append("p").attr("id","p-title").attr("class","heading-text").text("4 Chan Safe Display")

            //Box 4 - "Featured Broads"
            d3.select("#heading").append("div").attr("id","heading-featured").attr("class","heading-box")
                d3.select("#heading-featured").append("p").attr("id","p-featured").attr("class","heading-text").text("Featured Broads")
                //Button 1 - Advice
                    d3.select("#heading-featured").append("div").attr("id","one-featured").attr("class","featured-but")
                        d3.select("#one-featured").append("p").attr("id","adv-featured").attr("class","featured-text heading-text").text("Advice")
                //Button 2 - Quest
                    d3.select("#heading-featured").append("div").attr("id","two-featured").attr("class","featured-but")
                        d3.select("#two-featured").append("p").attr("id","que-featured").attr("class","featured-text heading-text").text("Quest")
                //Button 3 - Home
                    d3.select("#heading-featured").append("div").attr("id","thr-featured").attr("class","featured-but")
                        d3.select("#thr-featured").append("p").attr("id","hom-featured").attr("class","featured-text heading-text").text("Home")
                //Button 4 - Back
                    d3.select("#heading-featured").append("div").attr("id","fou-featured").attr("class","featured-but")
                        d3.select("#fou-featured").append("p").attr("id","pur-featured").attr("class","featured-text heading-text").text("Back")

            //Box 5 - "Olny if err"
            d3.select("#heading").append("div").attr("id","heading-err").attr("class","heading-box")

        //Aside
        d3.select("body").append("div").attr("id","aside")

            d3.select("#aside").append("div").attr("id","aside-warning").attr("class","aside-box")
                d3.select("#aside-warning").append("p").attr("id","p-warning").attr("class","aside-text").text("Click Here for Warning")

            d3.select("#aside").append("div").attr("id","aside-description").attr("class","aside-box")
                d3.select("#aside-description").append("p").attr("id","p-description").attr("class","aside-text").text("Description")

            d3.select("#aside").append("div").attr("id","aside-info").attr("class","aside-box")
                d3.select("#aside-info").append("p").attr("id","p-info").attr("class","aside-text").text("Info")

        //B Boxes 
        d3.select("body").append("div").attr("id","B-Holder")
        d3.select("body").append("div").attr("id","bottom")

        //Links to code
        d3.select("body").append("script").attr("src", "https://d3js.org/d3.v5.min.js")
        d3.select("body").append("link").attr("href", "style.css").attr("rel","stylesheet").attr("type","text/css")
        d3.select("body").append("script").attr("type","text/javascript").attr("src","script.js")
 }

        //draws sec page
        var drawthreadpage = function(page){
        //Remove
        d3.selectAll("body *").remove()
        //Heading
        d3.select("body").append("div").attr("id","heading")

            //Box 1 - TMS
            d3.select("#heading").append("div").attr("id","heading-tms").attr("class","heading-box")
                d3.select("#heading-tms").append("p").attr("id","p-tms").attr("class","heading-text").text("TMS")

            //Box 2 - "Choose a Broad"
            d3.select("#heading").append("div").attr("id","heading-banner").attr("class","heading-box")
                d3.select("#heading-banner").append("p").attr("id","p-banner").attr("class","heading-text").text("Choose a Broad")

            //Box 3 - "4 Chan Safe Display/Converter"
            d3.select("#heading").append("div").attr("id","heading-title").attr("class","heading-box")
                d3.select("#heading-title").append("p").attr("id","p-title").attr("class","heading-text").text("4 Chan Safe Display")

            //Box 4 - "Featured Broads"
            d3.select("#heading").append("div").attr("id","heading-featured").attr("class","heading-box")
                d3.select("#heading-featured").append("p").attr("id","p-featured").attr("class","heading-text").text("Featured Broads")
                //Button 1 - Advice
                    d3.select("#heading-featured").append("div").attr("id","one-featured").attr("class","featured-but")
                        d3.select("#one-featured").append("p").attr("id","adv-featured").attr("class","featured-text heading-text").text("Advice")
                //Button 2 - Quest
                    d3.select("#heading-featured").append("div").attr("id","two-featured").attr("class","featured-but")
                        d3.select("#two-featured").append("p").attr("id","que-featured").attr("class","featured-text heading-text").text("Quest")
                //Button 3 - Home
                    d3.select("#heading-featured").append("div").attr("id","thr-featured").attr("class","featured-but")
                        d3.select("#thr-featured").append("p").attr("id","hom-featured").attr("class","featured-text heading-text").text("Home")
                //Button 4 - Back
                    d3.select("#heading-featured").append("div").attr("id","fou-featured").attr("class","featured-but")
                        d3.select("#fou-featured").append("p").attr("id","pur-featured").attr("class","featured-text heading-text").text("Back")

            //Box 5 - "Olny if err"
            d3.select("#heading").append("div").attr("id","heading-err").attr("class","heading-box")

        //T boxes
        d3.select("body").append("div").attr("id","T-Holder")
        d3.select("body").append("div").attr("id","T-info")
        d3.select("body").append("div").attr("id","bottom")

        //Page Nav
        d3.select("#bottom").append("div").attr("class","pagebutton").attr("id","pagebutton1").text("<<< page")
        d3.select("#bottom").append("div").attr("class","pagebutton").attr("id","pagebutton2").text("Curr page: " +(page+1))
        d3.select("#bottom").append("div").attr("class","pagebutton").attr("id","pagebutton3").text("page >>>")

        //Links to code
        d3.select("body").append("script").attr("src", "https://d3js.org/d3.v5.min.js")
        d3.select("body").append("link").attr("href", "style.css").attr("rel","stylesheet").attr("type","text/css")
        d3.select("body").append("script").attr("type","text/javascript").attr("src","script.js")
}

        //draws post page
        var drawpostpage = function(page){
            //Remove
            d3.selectAll("body *").remove()
            //Heading
            d3.select("body").append("div").attr("id","heading")

                //Box 1 - TMS
                d3.select("#heading").append("div").attr("id","heading-tms").attr("class","heading-box")
                    d3.select("#heading-tms").append("p").attr("id","p-tms").attr("class","heading-text").text("TMS")

                //Box 2 - "Choose a Broad"
                d3.select("#heading").append("div").attr("id","heading-banner").attr("class","heading-box")
                    d3.select("#heading-banner").append("p").attr("id","p-banner").attr("class","heading-text").text("Choose a Broad")

                //Box 3 - "4 Chan Safe Display/Converter"
                d3.select("#heading").append("div").attr("id","heading-title").attr("class","heading-box")
                    d3.select("#heading-title").append("p").attr("id","p-title").attr("class","heading-text").text("4 Chan Safe Display")

                //Box 4 - "Featured Broads"
                d3.select("#heading").append("div").attr("id","heading-featured").attr("class","heading-box")
                    d3.select("#heading-featured").append("p").attr("id","p-featured").attr("class","heading-text").text("Featured Broads")
                    //Button 1 - Advice
                        d3.select("#heading-featured").append("div").attr("id","one-featured").attr("class","featured-but")
                            d3.select("#one-featured").append("p").attr("id","adv-featured").attr("class","featured-text heading-text").text("Advice")
                    //Button 2 - Quest
                        d3.select("#heading-featured").append("div").attr("id","two-featured").attr("class","featured-but")
                            d3.select("#two-featured").append("p").attr("id","que-featured").attr("class","featured-text heading-text").text("Quest")
                    //Button 3 - Home
                        d3.select("#heading-featured").append("div").attr("id","thr-featured").attr("class","featured-but")
                            d3.select("#thr-featured").append("p").attr("id","hom-featured").attr("class","featured-text heading-text").text("Home")
                    //Button 4 - Back
                        d3.select("#heading-featured").append("div").attr("id","fou-featured").attr("class","featured-but")
                            d3.select("#fou-featured").append("p").attr("id","pur-featured").attr("class","featured-text heading-text").text("Back")

                //Box 5 - "Olny if err"
                d3.select("#heading").append("div").attr("id","heading-err").attr("class","heading-box")

            //P boxes
            d3.select("body").append("div").attr("id","P-Holder")

            //Page Nav
            d3.select("#bottom").append("div").attr("class","pagebutton").attr("id","pagebutton1").text("<<< page")
            d3.select("#bottom").append("div").attr("class","pagebutton").attr("id","pagebutton2").text("Curr page: " +(page+1))
            d3.select("#bottom").append("div").attr("class","pagebutton").attr("id","pagebutton3").text("page >>>")

            //Links to code
            d3.select("body").append("script").attr("src", "https://d3js.org/d3.v5.min.js")
            d3.select("body").append("link").attr("href", "style.css").attr("rel","stylesheet").attr("type","text/css")
            d3.select("body").append("script").attr("type","text/javascript").attr("src","script.js")
        }
    
    //Web events
        //Web page event for the Boards pages
        var boardWebEvent = function(boards){
            primaryAddToPageData(boards.boards)
} 

        //Web page event for the threads pages
        var threadWebEvent = function(threads,threadlink,page){
            secondaryAddToPageData(threads,threadlink,page)
}

        //Web page event for the post pages
        var postsWebEvent = function(posts,postslink,threadlink,page){
        tertiaryAddToPageData(posts,postslink,threadlink,page)
        
        return "Home"}
    
    //Promises
        //Tertiary Data Promise - Gets Posts for thread
        var tertiaryDataPromise = function(threadData,postslink,threadlink,page){
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
                    postsWebEvent(posts,postslink,threadlink,page) 
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
        var secondaryDataPromise = function(threadlink,page){
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

                    threadWebEvent(threads,threadlink,page) 
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
    
    //add to pages
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
                secondaryDataPromise(aData.board,0)
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
            topNavButtons("home","null",0)
            warningbutton()
}

        //Adds Secondary Data from Promise to a page
        var secondaryAddToPageData = function(Data,datalink,page){ 
            drawthreadpage(page)
            //console.log("*******(PATH TEST)",Data)
            //console.log("*******(PATH TEST)",Data[0].threads)
            d3.select("#T-Holder")
            .append("div")
            .selectAll("span")
            .data(Data[page].threads)
            .enter()
            .append("div")
            .attr("class","threads_icon threadSingle_icon")
            .attr("id",function(aData){return "id_" + aData.no})
            .text(function(aData){return aData.no})
            .on("click",function(aData){
                //console.log("(PATH TEST)",aData)
                //console.log("(PATH TEST)",datalink)
                //console.log("(PATH TEST)",aData.no)
                tertiaryDataPromise(Data,aData.no,datalink,page)
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
            //page nav 
            d3.select("#pagebutton1").on("click",function(){
                if(page > 0){
                    secondaryAddToPageData(Data,datalink,page-1)}
                else{console.log((page > 1)+" -Not able:"+ page)}
            })
            d3.select("#pagebutton2").on("click",function(){
                console.log("Page:"+ page)  
                    })
            d3.select("#pagebutton3").on("click",function(){
                if(page < 5){secondaryAddToPageData(Data,datalink,page+1)}  
                    else{console.log((page > 5)+" +Not able:"+ page)}
            })

            //Top nav
            topNavButtons("home","null",0)

            //console.log("********S*****(PATH TEST) done",)            
}

        //Adds Tertiary Data from Promise to a page
        var tertiaryAddToPageData = function(Data,Datalink,Pastlink,oldpage){ 
        drawpostpage()
        console.log("*******(PATH TEST)",Data)
        console.log("*******(PATH TEST)",Data.posts)
            
            
        d3.select("#P-Holder")
        .append("div")
        .selectAll("span")
        .data(Data.posts)
        .enter()
        .append("div")
        .attr("class","threads_icon post")
        .attr("id",function(aData){return "p" + aData.no})
        .html(function(aData){return aData.com})
        .on("click",function(aData){
            //console.log("(PATH TEST)",aData)
            //console.log("(PATH TEST)",datalink)
            //console.log("(PATH TEST)",aData.no)
            tertiaryDataPromise(Data,aData.no,Datalink)
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
        //Top nav
            //console.log(Pastlink)
            //console.log(oldpage)
            topNavButtons("thre",Pastlink,oldpage)           
    }
    
    //smaller fuctions
        //top Nav Buttons
        var topNavButtons = function(back,link,page){        
            d3.select("#one-featured").on("click",function(){drawthreadpage();secondaryDataPromise("adv",0)})
            d3.select("#two-featured").on("click",function(){drawthreadpage();secondaryDataPromise("qst",0)})
            d3.select("#thr-featured").on("click",function(){drawBroadpage();primaryDataPromise();})
            d3.select("#fou-featured").on("click",function(){
                if(back == "home"){drawBroadpage();primaryDataPromise();}
                if(back == "thre"){drawthreadpage();;secondaryDataPromise(link,page)}
        })}
            
        var warningbutton = function() {
             d3.select("#aside-warning").on("click",function(){
                 d3.select("#aside-warning")
                    .style("height","")
                 
                 d3.select("#aside-warning")
                    .append("p")
                    .text("test")})
        
                 
                     
             }
         
    
    
    //Start
    primaryDataPromise()
}
mainFunction()