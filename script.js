//main function for the success of malachi
var mainFunction = function(){
        var test = false
        //var test = true
    
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
            
            d3.select("#aside").append("div").attr("id","aside-Con").attr("class","aside-box")
                d3.select("#aside-Con").append("p").attr("id","p-Con").attr("class","aside-text")
                    d3.select("#p-Con").append("a").attr("href","convert.html").text("Convert Link")
            

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
        
        var convertWebEvent = function(posts,postslink,threadlink){
        convertAddToPageData(posts,postslink,threadlink)
        }
    
    //Promises
        //convert Data Promise - Gets Posts for thread
        var convertDataPromise = function(){
            // Grabbing button
            var dateStart = document.getElementById('LinkGetter');
            //Getting values        
            d3.select("#CONbutton1").on("click",function(){
                var hardLink = dateStart.value.replace('http://boards.4channel.org/','').split('/thread/');
                var BASELINK = "https://cors-anywhere.herokuapp.com/"
                var REALLINK = "https://a.4cdn.org/"+hardLink[0]+"/thread/"+hardLink[1]+".json"
            //Promise Main    
            var dataPromise = d3.json(hardLink[0]+hardLink[1]+"posts.json")
            if (!test){var dataPromise = d3.json(BASELINK+REALLINK)}
            dataPromise.then(
                function(posts)
                {
                    console.log("(OBJECT --) Posts: ", posts)
                    //console.log("(OBJECT EX) ^- EX: posts.posts[1].com: ", posts.posts[1].com)
                    convertWebEvent(posts,hardLink[1],hardLink[0])
                    //note
                    addconvertInfo("Converter",hardLink[0],hardLink[1],REALLINK) 
                },
                function(err)
                {
                    console.log("(ERR -M) Failure - Error : ", err)
                    d3.selectAll("#heading-err *").remove()
                    d3.select("#heading-err").append("p").attr("id","heading-errs").text("Load failed - Check Console")
                }
            ) 
            })
        }
          
        //Tertiary Data Promise - Gets Posts for thread
        var tertiaryDataPromise = function(threadData,postslink,threadlink,page){
            //Promise Prep
            var BASELINK = "https://cors-anywhere.herokuapp.com/"
            var REALLINK = "https://a.4cdn.org/"+threadlink+"/thread/"+postslink+".json"
            //Promise Main
            var dataPromise = d3.json(threadlink+postslink+"posts.json")
            if (!test){var dataPromise = d3.json(BASELINK+REALLINK)}
            dataPromise.then(
                function(posts)
                {
                    console.log("(OBJECT --) Posts: ", posts)
                    //console.log("(OBJECT EX) ^- EX: posts.posts[1].com: ", posts.posts[1].com)
                    postsWebEvent(posts,postslink,threadlink,page)
                    //note
                    addconvertInfo("Tertiary",threadlink,postslink,REALLINK)
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
            var BASELINK = "https://cors-anywhere.herokuapp.com/"
            var REALLINK = "https://a.4cdn.org/"+threadlink+"/threads.json"
            console.log("(LINK - FR) *** REALLINK TO USE (for: "+threadlink+"):",REALLINK )
            console.log("(FILE - FR) *** FILELINK TO USE (for: "+threadlink+"): "+threadlink+"threads.json")
            //Promise Main
            //var dataPromise = d3.json(BASELINK+REALLINK)
            var dataPromise = d3.json(threadlink+"threads.json")
            if (!test){var dataPromise = d3.json(BASELINK+REALLINK)}
            dataPromise.then(
                function(threads)
                {
                    //console.log("(OBJECT --) threads: ", threads)
                    //console.log("(OBJECT EX) ^- EX: threads[0].threads[0].no: ", threads[0].threads[0].no)

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
        //console.log("----------------------------------")
        //console.log("(PROCESS -) Primary Data Promise")
        //Promise Prep
        var BASELINK = "https://cors-anywhere.herokuapp.com/" 
        var REALLINK = "https://a.4cdn.org/boards.json"
        //var dataPromise = d3.json(BASELINK+"https://a.4cdn.org/boards.json")
        var dataPromise = d3.json("boards.json")
        if (!test){var dataPromise = d3.json(BASELINK+REALLINK)}
        //console.log("(LINK - FR) *** REALLINK TO USE (for: boards):",REALLINK )
        //console.log("(FILE - FR) *** FILELINK TO USE (for: boards): boards.json")  
        //Promise Main
        dataPromise.then(
            function(boards)
            {
                //console.log("(OBJECT --) boards: ", boards)
                //drawBroadpage()
                //console.log("(OBJECT EX) ^- EX: boards.boards[3].board: ", boards.boards[3].board)
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
            d3.selectAll("#B-Holder *").remove()
            
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
                //console.log("(PATH TEST)",aData)
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

                    d3.select("#T-info").append("p").attr("id","p-description").attr("class","aside-text").text("Info :",datalink)

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
        //console.log("*******(PATH TEST)",Data)
        //console.log("*******(PATH TEST)",Data.posts)
        
        //addconvertInfo()
        putinreplyMain(Data,"#P-Holder",Datalink,Pastlink)
        
                //d3.select("#T-info")
                    //.append("p")
                    //.attr("class","thread_description")
                    //.text(function(){return "replies: "+aFilmData.replies})
                    
        
        
        //Top nav
            //console.log(Pastlink)
            //console.log(oldpage)
            topNavButtons("thre",Pastlink,oldpage)           
    }
        
        //Adds Convert Data from Promise to a page
        var convertAddToPageData = function(Data,Datalink,Pastlink){ 
        //drawpostpage()
        //console.log("*******(PATH TEST)",Data)
        //console.log("*******(PATH TEST)",Data.posts)
            
            //addconvertInfo()
            putinreplyMainConvertPatch(Data)
            putinreplyMain(Data,"#R-Holder",Datalink,Pastlink)
            //putinreplyMainConvertPatch()
                //d3.select("#T-info")
                    //.append("p")
                    //.attr("class","thread_description")
                    //.text(function(){return "replies: "+aFilmData.replies})
        //Top nav
            //console.log(Pastlink)
            //console.log(oldpage)
            topNavButtons("thre",Pastlink,0)           
    }
           
        convertDataPromise()
        
    //Other fuctions
    
        //patch to reply adder for converter
        function putinreplyMainConvertPatch(Data) {
            //clean house
            d3.select("#CONbutton2").remove()
            //Input
            d3.select("#R-Holder *").remove()
        
            d3.select("#C-Holder")
                .append("div")
                .attr("class","ConvertBUTT")
                .attr("id","CONbutton2")
                .text("Video it")
                .on("click",function(){
                    //window.open('convert.html', '_blank');
                    videotype(Data);
                })
        }
    
        //main Post adder function
        function putinreplyMain(Data,where,Datalink,Pastlink) {
            var pData = postConverter(Data.posts)
            
            //console.log("pData",pData)
            d3.selectAll((where+" *")).remove() 
            
            //console.log("where",where)
        
            var BASELINK = "https://cors-anywhere.herokuapp.com/"
            
            d3.select(where)
            .append("div")
            .selectAll("span")
            .data(pData)
            .enter()
            .append("div")
            .attr("class","threads_icon post")
            .attr("id",function(aData){return "P" + aData.idnum + aData.chp})
            .html(function(aData){return aData.com})
            
            
            putInreplysMedia(pData,Pastlink)
            putInreplys(pData,Datalink,Pastlink)              
        }
    
        //main Post Media adder function
        function putInreplysMedia(pData,Pastlink) {
            var sizefix = 3
            pData.forEach(function(aData){
                if(aData.ext == ".jpg"){
                    // 
                    d3.select("#P" + aData.idnum + aData.chp)
                    .append("p")
                    .append("img")
                    .attr("src",function(aData){return ("http://is2.4chan.org/"+ Pastlink +"/"+aData.tim+aData.ext)})
                    .attr("alt","test")
                    .attr("height",(aData.h)/sizefix)
                    .attr("width",(aData.w)/sizefix)  
                }
               if(aData.ext == ".png"){
                    // 
                    d3.select("#P" + aData.idnum + aData.chp)
                    .append("p")
                    .append("img")
                    .attr("src",function(aData){return ("http://is2.4chan.org/"+ Pastlink +"/"+aData.tim+aData.ext)})
                    .attr("alt","test")
                    .attr("height",(aData.h)/sizefix)
                    .attr("width",(aData.w)/sizefix)  
                }
               if(aData.ext == ".gif"){
                    // 
                    d3.select("#P" + aData.idnum + aData.chp)
                    .append("p")
                    .append("img")
                    .attr("src",function(aData){return ("http://is2.4chan.org/"+ Pastlink +"/"+aData.tim+aData.ext)})
                    .attr("alt","test")
                    .attr("height",(aData.h)/sizefix)
                    .attr("width",(aData.w)/sizefix)  
                }
                if(aData.ext == ".webm"){
                    d3.select("#P" + aData.idnum + aData.chp)
                    .append("p")
                    .append("video")
                    .attr("height",(aData.h)/sizefix)
                    .attr("width",(aData.w)/sizefix)
                    .attr("autoplay","")
                    .text("Your browser does not support the video tag.")
                    .append("source")
                    .attr("src",function(aData){return ("http://is2.4chan.org/"+ Pastlink +"/"+aData.tim+aData.ext)})
                    .attr("type","video/webm")
                    
                } 
                
            }) 
            
            
            
        }
    
        //main Post adder tool, used in main function
        function putInreplys(pData,Datalink,Pastlink) {
                    
                    pData.forEach(function(element){
                        if(!(element.replieCount == undefined)){
                            //element.replies = [] **********************************************************
                        }
                        if (element.replies.length > 0){  
                            d3.select("#P"+element.idnum + element.chp)
                                .append("div")
                                .selectAll("span")
                                .data(element.replies)
                                .enter()
                                .append("div")
                                .attr("class","threads_icon post reply")
                                .attr("id",function(element){return "P" + element.idnum + element.chp})
                                .html(function(aData){return aData.com})
                                //.append("p")
                                //.append("video")
                                //.attr("src",function(aData){return ("http://is2.4chan.org/"+ Pastlink +"/"+aData.tim+aData.ext)})
                                //.attr("height",function(aData){return (aData.h/4)})
                                //.attr("width",function(aData){return (aData.w/4)})
                            //console.log(element.replies)
                            putInreplysMedia(element.replies,Pastlink)
                            putInreplys(element.replies,Datalink,Pastlink)
                            
                        }
                        if (!(element.filename == undefined)){ 
                            d3.select("#P"+element.idnum + element.chp)
                            .append("div")
                            console.log("http://is2.4chan.org/"+ Pastlink +"/"+element.tim+element.ext)
                        
                        }
                    
                    
                    
                    });
        }
     
        //adds thread intel to top of page, an in console
        function addconvertInfo(ProcessType,threadlink,postslink,REALLINK) {
        //('http://boards.4channel.org/','').split('/thread/');
        //console.log("---------------------------------- call remove")
        d3.selectAll("#heading-banner *").remove() 
        
        d3.select("#heading-banner")
            .append("h1")
            .attr("class","heading-banner_ConvertIntel")
            .attr("class","heading-banner_ConvertIntel_part")
            .text(ProcessType+" Data Promise (for: "+threadlink+"-"+postslink+")")
        
        //note
        console.log("----------------------------------")
        console.log("(PROCESS -) "+ProcessType+" Data Promise")

        //Server File Link
        var FILELink = ("(FILE - FR) *** FILELINK TO USE (for: "+threadlink+"-"+postslink+"): "+threadlink+postslink+"posts.json")
        console.log(FILELink)
        addconvertInfoHelper("FILELINK",(threadlink+postslink+"posts.json"))

        //JSON Link
        var JSONLink = ("(JSON - FR) *** JSONLINK TO USE (for: "+threadlink+"-"+postslink+"): " + REALLINK ) 
        console.log(JSONLink)
        addconvertInfoHelper("JSONLINK",(REALLINK))
        
        //Wed Link
        var WEDLLink = ("(LINK - FR) *** REALLINK TO USE (for: "+threadlink+"-"+postslink+"): http://boards.4channel.org/"+threadlink+"/thread/"+postslink)
        console.log(WEDLLink)
        addconvertInfoHelper("REALLINK",("http://boards.4channel.org/"+threadlink+"/thread/"+postslink))
        
        var NotConverter = ProcessType.localeCompare("Converter")
        
        console.log(NotConverter)
        
        if (NotConverter == 1){
            d3.select("#heading-banner")
                .append("p")
                .attr("class","heading-banner_ConvertIntel_part")
                .attr("id","Convert")
                .text("Convert Here: ")
                .append("a")
                .attr("href","convert.html")
                .attr("target","_blank")
                .attr("rel","noopener noreferrer")
                .text("Convert Page")
        }
    }
        
        //thread intel adding tool, used in main function 
        function addconvertInfoHelper(idt,LLink){
        d3.select("#heading-banner")
            .append("p")
            .attr("class","heading-banner_ConvertIntel_part")
            .attr("id",("Intel_part"+idt))
            .text(idt+" TO USE :")
            .append("a")
            .attr("href",LLink)
            .attr("target","_blank")
            .attr("rel","noopener noreferrer")
            .text(LLink)       
        }
    
        //top Nav Buttons
        var topNavButtons = function(back,link,page){        
            d3.select("#one-featured").on("click",function(){drawthreadpage();secondaryDataPromise("adv",0)})
            d3.select("#two-featured").on("click",function(){drawthreadpage();secondaryDataPromise("qst",0)})
            d3.select("#thr-featured").on("click",function(){drawBroadpage();primaryDataPromise();})
            d3.select("#fou-featured").on("click",function(){
                if(back == "home"){drawBroadpage();primaryDataPromise();}
                if(back == "thre"){drawthreadpage();;secondaryDataPromise(link,page)}
        })}
        
        // warningbutton text    
        var warningbutton = function() {
             d3.select("#aside-warning").on("click",function(){
                 d3.select("#aside-warning")
                    .style("height","")
                 
                 d3.select("#aside-warning")
                    .append("p")
                    .text("4chan can be bad - Like the code for this text")})
        
             }
        
        //Gets post and puts them with thire replys
        var postConverter = function(data) {
            var ans = []
            var Hnums = []
            //console.log("************************", data)
      
            data.forEach(function(aPost) {
                
                var level = 0
                var currPost = {}
                    currPost.no = aPost.no
                    currPost.idnum = aPost.no
                    currPost.chp = "W"
                    currPost.now = aPost.now
                    currPost.name = aPost.name
                    currPost.replieCount = aPost.replies
                    currPost.com = aPost.com
                    currPost.sub = aPost.sub
                    currPost.level = level
                    currPost.replies = []
                    //image update
                    currPost.filename = aPost.filename
                    currPost.ext = aPost.ext
                    currPost.tim = aPost.tim
                    currPost.semantic_url = aPost.semantic_url
                    currPost.fsize = aPost.fsize
                    currPost.tn_w = aPost.tn_w
                    currPost.tn_h = aPost.tn_h
                    currPost.w = aPost.w
                    currPost.h = aPost.h
                    //video Update
                    currPost.olddata = null
                    currPost.oldi = null
                    currPost.used = false
            
            
            
                var hi = true
                //console.log(hi,"POST - ",currPost.no," - :",currPost.com);
                
                
    
                var getReplys = function(data,lookingFor,replyBox,level,oldcode,oldplace) {
                     
                    //console.log("-- Looking Relpys For :",lookingFor);
                    
                    data.forEach(function(onePost,i){ 
                        
                        //console.log("--onePost.com", onePost.com)
                        if (onePost.com == undefined){
                            if (!(onePost.filename == undefined))
                            {onePost.com = ("TMS Console - 'UNPROTECTED IMAGE FILE' File Name:", onePost.filename)
                            }else{
                            onePost.com = ("TMS Console - 'UNPROTECTED IMAGE FILE' File Name: CAN NOT LOCATE") 
                            }
                        }
                        var check = onePost.com.includes('<a href') //this means it is a reply of some sort
                        //console.log(" -- is reply of some sort",check)
                        if(check){ //if it is a reply of some sort
                            var find = onePost.com.includes(lookingFor) //checks if it is a rely for curr post
                            //console.log(" -- //checks if it is a rely for curr post" , find)
                            if(find){
                                //onePost.com = onePost.com.replace('<a href="p'+aPost.no+'" class="quotelink">&gt;&gt;'+aPost.no+'</a>')
                                level = level + 1
                                //console.log(find,level,"REPLY TO:",lookingFor,"-------",onePost.no," - :",onePost.com);
                                var thePost = {}// create post OBject
                                    thePost.no = onePost.no
                                    thePost.idnum = onePost.no
                                    thePost.chp = oldcode
                                    if((occurrences(onePost.com,'<a href')) >= 2){
                                        //console.log(onePost.com)
                                        Hnums.push(onePost.no)
                                        //console.log("Hnums",Hnums)
                                        var codehelper = 0
                                        codehelper = countInArray(Hnums,onePost.no)
                                        if(codehelper > 0){
                                            thePost.idnum = (onePost.no + "CH" + codehelper)
                                            thePost.chp = ("CH" + codehelper)
                                            //console.log("CH" + codehelper)
                                        }
                                    } 
                                    //thePost.idnum = onePost.no
                                    //nums.push(thePost.no)
                                    thePost.now = onePost.now
                                    thePost.name = onePost.name
                                    thePost.replieCount = onePost.replies
                                    thePost.com = onePost.com
                                    thePost.sub = onePost.sub
                                    thePost.level = level
                                    thePost.replies = []
                                    //image update
                                    thePost.filename = onePost.filename
                                    thePost.ext = onePost.ext
                                    thePost.tim = onePost.tim
                                    thePost.semantic_url = onePost.semantic_url
                                    thePost.fsize = onePost.fsize
                                    thePost.tn_w = onePost.tn_w
                                    thePost.tn_h = onePost.tn_h
                                    thePost.w = onePost.w
                                    thePost.h = onePost.h
                                    //video Update
                                    thePost.olddata = oldplace
                                    thePost.oldi = i
                                    thePost.used = false

                                
                                var postnum = []
                                getReplys(data,thePost.no,thePost.replies,(level),thePost.chp,replyBox)//check for replys
                                level = level - 1
                                replyBox.push(thePost)
                                    
                            }
                            
                        }
   
                    })
                //console.log("nums",nums)    
                // return      
                }
                
                //console.log("NOT <a href in it (IS A MAIN COM ? = -- > )", !aPost.com.includes('<a href'))
                //var postnum = []
                //console.log(aPost)
                if (aPost.com == undefined){
                    aPost.com = "undefined"
                    if (!(aPost.filename == undefined))
                    {aPost.com = ("TMS Console - 'UNPROTECTED IMAGE FILE' File Name:", aPost.filename)
                    }else{
                    aPost.com = ("TMS Console - 'UNPROTECTED IMAGE FILE' File Name: CAN NOT LOCATE") 
                    }
   
                }
                //console.log(!aPost.com.includes('<a href'))
                if (!aPost.com.includes('<a href')){
                    
                    getReplys(data,currPost.no,currPost.replies,level,"W",ans)
                    //console.log("postnum",postnum)
                    ans.push(currPost)
                }
                
                //ans.push(currPost)
            })  
            //console.log(ans)    
            return ans;
        }
        
    
    //helper fuctions
        //abbreviate a string
        function abbreviate(string) {
        var words = string.split(" ");
        console.log("words", words)
        var answer = "";
        for (var i = 0; i < words.length; i += 1) {
            
            setTimeout(function() {
                console.log(words[i])
                   
            },(i*300))
            
            var count = words[i].length - 2;
            var last = words[i].charAt(words[i].length - 1);
            answer= answer + words[i][0] + count + last;
        }
        return answer;
}
        
        //forces health sleep in code
        function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
        //demo code
        async function timeDelayDemo() { 
        
        console.log('(1) Taking a break...');
        await sleep(2000);
        console.log('(1) Two seconds later, showing sleep in a loop...');

        // Sleep in loop
        for (let i = 0; i < 5; i++) {
            
            if (i === 3){
                await sleep(2000);
                console.log("(1) demo --> Break of 2000");
            }
            
            console.log("(1) demo -->",i);
                
        }
    } //timeDelayDemo();
    
        //finds how many time a subString occurrences in string 
        function occurrences(string, subString, allowOverlapping) {

            string += "";
            subString += "";
            if (subString.length <= 0) return (string.length + 1);

            var n = 0,
                pos = 0,
                step = allowOverlapping ? 1 : subString.length;

            while (true) {
                pos = string.indexOf(subString, pos);
                if (pos >= 0) {
                    ++n;
                    pos += step;
                } else break;
            }
            return n;
        }
    
        //returns a count of how many times somethings comes up in an array
        function countInArray(array, what) {
        var count = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === what) {
                count++;
            }
        }
        return count;
        }
    
    // All video final Stufff
        // All video Helper stuff
        
        //this will never work, here to distract and remind u that failure is part of the process
        function videotypeFAIL(Data) {
            var pData = postConverter(Data.posts)

            console.log("pData",pData)
            console.log("pData[1]com : ",pData[1].com)


            console.log("pData[1]com abbreviate: " + (abbreviate(pData[1].com)))


            console.log("TEST")
            d3.select("#R-Holder *").remove()

            setTimeout(function(data) {
                //console.log(data)
                d3.select("#R-Holder")
                    .append("p")
                    .text("Work 1")
            console.log("1000")
            }, 1000);

            setTimeout(function(data) {
                //console.log(data)
                d3.select("#R-Holder")
                    .append("p")
                    .text("Work 2")
            console.log("2000")
            }, 2000);//not relative

            setTimeout(function(data) {
                //console.log(data)
                d3.select("#R-Holder")
                    .append("p")
                    .text("Work 3")
            console.log("3000")
            }, 3000);
        
    }
    
        //adds link to java code in head
        function addLinkCodeHead(){
            //Links to code
            d3.select("head").append("script").attr("src", "https://d3js.org/d3.v5.min.js")
            d3.select("head").append("link").attr("href", "style.css").attr("rel","stylesheet").attr("type","text/css")
            d3.select("head").append("script").attr("type","text/javascript").attr("src","script.js")
            d3.select("head").append("link").attr("href", "video.css").attr("rel","stylesheet").attr("type","text/css")
            
            d3.select("head").append("script").attr("src", "/js/jquery-1.2.6.min.js").attr("language","JavaScript").attr("type","text/javascript")
            
            d3.select("head").append("script").attr("src","http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js")
            d3.select("head").append("script").attr("src","http://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.1/js/materialize.min.js")
            
            
            d3.select("head").append("script").attr("src", "/js/jquery-ui-personalized-1.5.2.packed.js").attr("language","JavaScript").attr("type","text/javascript")
            d3.select("head").append("script").attr("src", "/js/sprinkle.js").attr("language","JavaScript").attr("type","text/javascript")
        }
    
        //adds link to java code in body, removes it from head
        function addLinkCodeBody(){
            //Links to code
            d3.selectAll("head *").remove()
            d3.select("body").append("script").attr("src", "https://d3js.org/d3.v5.min.js")
            d3.select("body").append("link").attr("href", "style.css").attr("rel","stylesheet").attr("type","text/css")
            d3.select("body").append("script").attr("type","text/javascript").attr("src","script.js")
        }
    
        //Gets configs for video
        function videoPageInfoGetter(){
            //Start button
            d3.select("body")
            .append("div")
            .attr("id","speak_holder")
            .append("button")
            .attr("id","speak")
            .text("tester")
             
            //adder
            d3.select("body")
            .append("div")
            .attr("id","text_holder")
            
            //inputs
            var configs = {}
            
            configs["test"] = "jonh"
            
            return configs 
        }
    
    //video Main stuff
        async function videotype(Data) {  
            
            //moves code linkes from body.
                addLinkCodeHead()
            
            //clean House
                d3.selectAll("body *").remove()
                    //addLinkCodeBody()
            
            //Getting Video Configs
                var VidConfigs = videoPageInfoGetter()
            
                console.log(VidConfigs)
            
            //Starting main system
                TMSVidMain(Data,VidConfigs)          
        }
    
    
    //The End Game, the goal of this hold thing
    async function TMSVidMain(Data,VidConfigs){
    //getting data
    var pData = postConverter(Data.posts)
    //main if state
    if ('speechSynthesis' in window) {
        d3.select('#speak').on("click",async function(){
            
            //helpers
                //Uses configs for video
                function videoPageSetUp() {

                }
                
                //Sets the WPM of the thing being said
                var wordspermin = function(words){
                    var wordsperminans = 140
                    var wordsperminStr = 170
                    var corrector = 3
                    
                    var lowl = 0
                    var spacer = 5
                    var mul = 6
                    
            if ((words.length >= lowl)&&(words.length <= (lowl+spacer))) {wordsperminans = wordsperminStr}
            if ((words.length >= (lowl+(mul*1)))&&(words.length <= ((lowl+spacer)+(mul*1)))) {wordsperminans = wordsperminStr+(corrector *2)}
            if ((words.length >= (lowl+(mul*2)))&&(words.length <= ((lowl+spacer)+(mul*2)))) {wordsperminans = wordsperminStr+(corrector *3)}
            if ((words.length >= (lowl+(mul*3)))&&(words.length <= ((lowl+spacer)+(mul*3)))) {wordsperminans = wordsperminStr+(corrector *4)}
            if ((words.length >= (lowl+(mul*4)))&&(words.length <= ((lowl+spacer)+(mul*4)))) {wordsperminans = wordsperminStr+(corrector *5)}
            if ((words.length >= (lowl+(mul*5)))&&(words.length <= ((lowl+spacer)+(mul*5)))) {wordsperminans = wordsperminStr+(corrector *6)}
            if ((words.length >= (lowl+(mul*6)))&&(words.length <= ((lowl+spacer)+(mul*6)))) {wordsperminans = wordsperminStr+(corrector *7)}
            if ((words.length >= (lowl+(mul*7)))&&(words.length <= ((lowl+spacer)+(mul*7)))) {wordsperminans = wordsperminStr+(corrector *8)}
            if ((words.length >= (lowl+(mul*8)))&&(words.length <= ((lowl+spacer)+(mul*8)))) {wordsperminans = wordsperminStr+(corrector *9)}
            if ((words.length >= (lowl+(mul*9)))&&(words.length <= ((lowl+spacer)+(mul*9)))) {wordsperminans = wordsperminStr+(corrector *10)}
            if ((words.length >= (lowl+(mul*10)))&&(words.length <= ((lowl+spacer)+(mul*10)))) {wordsperminans = wordsperminStr+(corrector *11)}
            if ((words.length >= (lowl+(mul*11)))&&(words.length <= ((lowl+spacer)+(mul*11)))) {wordsperminans = wordsperminStr+(corrector *12)}
            if ((words.length >= (lowl+(mul*12)))&&(words.length <= ((lowl+spacer)+(mul*12)))) {wordsperminans = wordsperminStr+(corrector *13)}
                    //console.log(" --- --- highset",(lowl+spacer)+(mul*12))
                    
                    return wordsperminans
                }
                
                //finds the words count
                function wordcount(str) { 
                    return str.split(" ").length;
                }
            
            //mainws
                //Handles speaking
                async function massSpeakingtoolv1(pData){
                    
                    window.speechSynthesis.cancel();
                    //speaktool("Searcher",0)
                    //await sleep(600)

                    for (var i = 0; i < pData.length; i += 1) {
                        await sleep(20)
                        var senten = (pData[i].com).match(/\(?[^\.\?\!]+[\.!\?]\)?/g);
                        if (senten == null){senten = []; senten[0] = pData[i].com;}
                        console.log("(v1) Test "+(i+1)+ "start")
                        console.log("(v1) Test "+(i+1)+" precheck :", senten)
                        for (var r = 0; r < senten.length; r += 1) {
                            var words = (senten[r]).split(" ");
                                console.log("(v1) Test "+(i+1)+"."+(r+1)+" start")
                                console.log(" ---(v1) Test "+(i+1)+ "."+(r+1)+" - com :",senten[r])
                                console.log(" ---(v1) Test "+(i+1)+ "."+(r+1)+" - wordspermin ?:",wordspermin(words))
                                console.log(" ---(v1) Test "+(i+1)+ "."+(r+1)+" - sleep time:",(words.length/wordspermin(words))*60000)
                                console.log(" ---(v1) Test "+(i+1)+ "."+(r+1)+"- Word:",words.length)
                            speaktool(senten[r],(i+1),(r+1))
                            await sleep((words.length/wordspermin(words))*60000);
                            console.log("(v1) Test "+(i+1)+"."+(r+1)+" done")
                        }  
                        console.log("(v1) Test "+(i+1)+ "done")
                    }
                }
                async function massSpeakingtoolv2(pData){

                        window.speechSynthesis.cancel();
                        //speaktool("Searcher",0)
                        //await sleep(600)

                        for (var i = 0; i < pData.length; i += 1) {
                            await sleep(20)
                            console.log("(v2) Test "+(i+1)+ "start")
                            console.log("(v2) Test "+(i+1)+" precheck :", pData.com)
                            
                            var words = (pData[i].com).split(" ");
                            console.log("(v2) Test "+(i+1)+" start")
                            console.log(" ---(v2) Test "+(i+1)+ " - com :",pData[i].com)
                            console.log(" ---(v2) Test "+(i+1)+ " - wordspermin ?:",wordspermin(words))
                            console.log(" ---(v2) Test "+(i+1)+ " - sleep time:",(words.length/wordspermin(words))*60000)
                            console.log(" ---(v2) Test "+(i+1)+ " - Word:",words.length)
                            
                            speaktool(pData[i].com,(i+1)),
         
                            await sleep((words.length/wordspermin(words))*60000);
                            massSpeakingtoolv2(pData[i].replies)
                            console.log("(v2) Test "+(i+1)+" done")           
                        }
                    }
                
                async function massSpeakingtoolv3(pData,i){
                        var allVoices = window.speechSynthesis.getVoices();
                        var tester = new SpeechSynthesisUtterance(); 
                            tester.voice = allVoices[5]
                            tester.rate = 1.3
                            tester.pitch = 1
                            tester.text = pData[i].com;
                            tester.onstart = function(e) {
                                //var words = (pData[i].com).split(" ");
                                //await sleep((words.length/wordspermin(words))*60000); 
                                
                                console.log("(v3) Test "+(i+1)+ " start")
                                //console.log("(v3) Test "+(i+1)+" precheck :", pData[i].com)
                            
                                var words = (pData[i].com).split(" ");
                                console.log("(v3) Test "+(i+1)+"."+pData[i].level+" start")
                                console.log(" ---(v3) Test "+(i+1)+"."+pData[i].level+" - com :",pData[i].com)
                                //console.log(" ---(v3) Test "+(i+1)+ " - wordspermin ?:",wordspermin(words))
                                //console.log(" ---(v3) Test "+(i+1)+ " - sleep time:",(words.length/wordspermin(words))*60000)
                                console.log(" ---(v3) Test "+(i+1)+"."+pData[i].level+" - Word:",words.length)

                            };
                            tester.onend = function(e) {
                                //massSpeakingtoolv3(pData[i].replies,(0))
                                if (!(pData.length == (i + 1))){massSpeakingtoolv3(pData,(i+1))}
                                console.log(" --- (v3)Test "+(i + 1)+"."+pData[i].level+" Finished in " + (event.elapsedTime) + " millseconds.");
                                console.log("(v3) Test "+(i+1)+"."+pData[i].level+" done")  
                            };   

                        //console.log("Before") 
                        window.speechSynthesis.cancel();
                        window.speechSynthesis.speak(tester); 
                        //console.log("After")   
                    }
                async function massSpeakingtoolv4(pData,i,oldpData,oldi){
    
    //if(pData[i] == null){console.log(" --- (v"+ver+")    >THAT FUCKING ERROR");}
    if(pData.length == i ){
            //notes
            //console.log(" --- (v"+ver+") Test -."+(i)+" inside if GUARD");
            // self id
            //console.log(" --- (v"+ver+")    >Self check");
            //console.log(" --- (v"+ver+")        check : "+ pData[i]);
            //console.log(" --- (v"+ver+")        check : "+ pData[i].used);
            //notes
            //console.log(" --- (v"+ver+")        Test -."+(i)+" inside if GUARD");
            // tool id
            //console.log(" --- (v"+ver+")    >Tool id check");
            //console.log(" --- (v"+ver+")        check : "+ oldpData);
            //console.log(" --- (v"+ver+")        check : "+ oldi);
            //notes
            //console.log(" --- (v"+ver+")        Test -."+(i)+" inside if GUARD");
            // tool out id
            //console.log(" --- (v"+ver+")    >Tool out self check");
            //console.log(" --- (v"+ver+")        check : "+ oldpData[0]);
            // tool id
            //console.log(" --- (v"+ver+")    >Tool out seif id check");
            //console.log(" --- (v"+ver+")        check : "+ oldpData[0].olddata);
            //console.log(" --- (v"+ver+")        check : "+ oldpData[0].oldi);
            //notes
            //console.log(" --- (v"+ver+")        Test -."+(i)+" inside if GUARD");
            // Con tag
            //console.log(" --- (v"+ver+")    >Con tag check");
            //console.log(" --- (v"+ver+")        check : ",oldpData,(oldi)+1,oldpData[0].olddata,oldpData[0].oldi); 
            await massSpeakingtoolv4(oldpData,(oldi)+1,oldpData[0].olddata,oldpData[0].oldi)
    }else{
        //console.log("(v"+ver+") Test -."+(i)+" precheck :", pData[i].com)
        var allVoices = window.speechSynthesis.getVoices();
        var tester = new SpeechSynthesisUtterance();
        window.speechSynthesis.resume()
            tester.voice = allVoices[5]
            tester.rate = 1.3
            tester.pitch = 1
            //if(pData[i] == null){}
            tester.text = pData[i].com;
        
            

            var fakeonstart = async function(e) {
                
                //window.speechSynthesis.pause()
                
                //await sleep (1000)
                console.log(" ----- pretend stop WORKKKKKK")
                
                //var words = (pData[i].com).split(" ");
                //await sleep((words.length/wordspermin(words))*60000); 
                //console.log("(v"+ver+") Test "+(i+1)+ " start")
                var words = (pData[i].com).split(" ");
                console.log(" ----- pretend Speak",pData[i].com)
                //console.log("(v"+ver+") Test "+pData[i].level+"."+(i)+" start")
                //console.log(" --- (v"+ver+") Test "+pData[i].level+"."+(i)+" - com :",pData[i].com)
                //console.log(" --- (v"+ver+") Test "+pData[i].level+"."+(i)+" - Word:",words.length)
            } 
            //tester.onstart = fakeonstart()
        
            tester.onstart = async function(e) { await fakeonstart() }
              
            var fakeonend = async function(e) {    
                //console.log(" --- (v"+ver+") Test "+pData[i].level+"."+(i)+" in end");

                if (pData[i].replies.length != 0) { //This is to step in to a level of replys (Steps In)
                    pData[i].replies[0].oldi = i
                    pData[i].replies[0].olddata = pData
                    //note
                    //console.log(" --- (v"+ver+") Test "+pData[i].level+"."+(i)+" inside if 1");
                    // self id
                    //console.log(" --- (v"+ver+")    >Self id check");
                    //console.log(" --- (v"+ver+")        check : "+ pData[i].olddata);
                    //console.log(" --- (v"+ver+")        check : "+ pData[i].oldi);
                    //console.log(" --- (v"+ver+")        check : "+ pData[i].used);
                    //notes
                    //console.log(" --- (v"+ver+")        Test "+pData[i].level+"."+(i)+" inside if 1");
                    // kids id
                    //console.log(" --- (v"+ver+")    >Kid id check");
                    //console.log(" --- (v"+ver+")        check : "+ pData[i].replies[0].oldi);
                    //console.log(" --- (v"+ver+")        check : "+ pData[i].replies[0].olddata);
                    //notes
                    //console.log(" --- (v"+ver+")        Test "+pData[i].level+"."+(i)+" inside if 1");
                    // tool id
                    //console.log(" --- (v"+ver+")    >Tool id check");
                    //console.log(" --- (v"+ver+")        check : "+ oldpData);
                    //console.log(" --- (v"+ver+")        check : "+ oldi); 

                    // Con tag
                    //console.log(" --- (v"+ver+")    >Con tag check");
                    //console.log(" --- (v"+ver+")        check : ",pData[i].replies,0,pData,i); 

                    await massSpeakingtoolv4(pData[i].replies,0,pData,i)

                }
                if((i+1)< pData.length){ //This is to step to the next replys (Steps Down)
                    pData[i+1].oldi = pData[i].oldi

                    if (pData[i].oldi != null){
                        if (pData[i].oldi > pData[i].olddata.length){ 
                                pData[i+1].oldi = oldi;
                                pData[i].oldi = oldi;
                            }
                    }

                    pData[i+1].olddata = pData[i].olddata

                    //notes
                    //console.log(" --- (v"+ver+") Test "+pData[i].level+"."+(i)+" inside if 2");
                    // self id
                    //console.log(" --- (v"+ver+")    >Self id check");
                    //console.log(" --- (v"+ver+")        check : "+ pData[i].olddata);
                    //console.log(" --- (v"+ver+")        check : "+ pData[i].oldi);
                    //console.log(" --- (v"+ver+")        check : "+ pData[i].used);
                    //notes
                    //console.log(" --- (v"+ver+")        Test "+pData[i].level+"."+(i)+" inside if 2");
                    // Down id
                    //console.log(" --- (v"+ver+")    >Next Down id check");
                    //console.log(" --- (v"+ver+")        check : "+ pData[i+1].olddata);
                    //console.log(" --- (v"+ver+")        check : "+ pData[i+1].oldi);
                    //notes
                    //console.log(" --- (v"+ver+")        Test "+pData[i].level+"."+(i)+" inside if 2");
                    // tool id
                    //console.log(" --- (v"+ver+")    >Tool id check");
                    //console.log(" --- (v"+ver+")        check : "+ oldpData);
                    //console.log(" --- (v"+ver+")        check : "+ oldi); 

                    // Con tag
                    //console.log(" --- (v"+ver+")    >Con tag check");
                    //console.log(" --- (v"+ver+")        check : ",pData,(i+1),pData[i].olddata,pData[i].oldi);
                    await massSpeakingtoolv4(pData,(i+1),pData[i].olddata,pData[i].oldi)

                }
                if (((i+1) == pData.length)&&(oldpData != null)&&(oldi != null)&&(!(pData[i].used))){ //This is to step to the nextlead (Steps Out)
                    var kill = false
                    if ((pData[i].olddata == null)&&(pData[i].oldi == null)){
                            //console.log(" --- (v"+ver+") Test "+pData[i].level+"."+(i)+" inside if 3f --- DONE");
                            //notes
                            //console.log(" --- (v"+ver+") Test "+pData[i].level+"."+(i)+" inside if 3");
                            // self id
                            //console.log(" --- (v"+ver+")    >Self id check");
                            //console.log(" --- (v"+ver+")        check : "+ pData[i].olddata);
                            //console.log(" --- (v"+ver+")        check : "+ pData[i].oldi);//wrong
                            //console.log(" --- (v"+ver+")        check : "+ pData[i].used);
                            //notes
                            //console.log(" --- (v"+ver+")        Test "+pData[i].level+"."+(i)+" inside if 3");
                            // Outs id
                            //console.log(" --- (v"+ver+")    >Out id check");
                            //console.log(" --- (v"+ver+")        check : "+ pData[i].olddata[oldi].olddata);
                            //console.log(" --- (v"+ver+")        check : "+ pData[i].olddata[oldi].oldi);
                            //notes
                            //console.log(" --- (v"+ver+")        Test "+pData[i].level+"."+(i)+" inside if 3");
                            // tool id
                            //console.log(" --- (v"+ver+")    >Tool id check");
                            //console.log(" --- (v"+ver+")        check : "+ oldpData);
                            //console.log(" --- (v"+ver+")        check : "+ oldi); 

                    }else{
                            pData[i].olddata = oldpData
                            pData[i].oldi = oldi
                            //notes
                            //console.log(" --- (v"+ver+") Test "+pData[i].level+"."+(i)+" inside if 3");
                            // self id
                            //console.log(" --- (v"+ver+")    >Self id check");
                            //console.log(" --- (v"+ver+")        check : "+ pData[i].olddata);
                            //console.log(" --- (v"+ver+")        check : "+ pData[i].oldi);//wrong
                            //console.log(" --- (v"+ver+")        check : "+ pData[i].used);

                            //notes
                            //console.log(" --- (v"+ver+")        Test "+pData[i].level+"."+(i)+" inside if 3");
                            // Outs id
                            //console.log(" --- (v"+ver+")    >Out id check");
                            //console.log(" --- (v"+ver+")        check : "+ pData[i].olddata[oldi].olddata);
                            //console.log(" --- (v"+ver+")        check : "+ pData[i].olddata[oldi].oldi);
                            //notes
                            //console.log(" --- (v"+ver+")        Test "+pData[i].level+"."+(i)+" inside if 3");
                            // tool id
                            //console.log(" --- (v"+ver+")    >Tool id check");
                            //console.log(" --- (v"+ver+")        check : "+ oldpData);
                            //console.log(" --- (v"+ver+")        check : "+ oldi); 

                            // Con tag
                            //console.log(" --- (v"+ver+")    >Con tag check");
                            //console.log(" --- (v"+ver+")        check : ",oldpData,(oldi)+1,(pData[i].olddata[0].olddata),(pData[i].olddata[0].oldi)); 

                            await massSpeakingtoolv4(oldpData,(oldi)+1,(pData[i].olddata[0].olddata),(pData[i].olddata[0].oldi)) 
                    }
                }else{
                    //notes
                    //console.log(" --- (v"+ver+") Test "+pData[i].level+"."+(i)+" inside if 4 --- finish");
                    // self id
                    //console.log(" --- (v"+ver+")    >Self id check");
                    //console.log(" --- (v"+ver+")        check : "+ pData[i].olddata);
                    //console.log(" --- (v"+ver+")        check : "+ pData[i].oldi);//wrong
                    //console.log(" --- (v"+ver+")        check : "+ pData[i].used);

                    //notes
                    //console.log(" --- (v"+ver+")        Test "+pData[i].level+"."+(i)+" inside if 4");
                    //notes
                    //console.log(" --- (v"+ver+")        Test com :", pData[i].com);
                    // tool id
                    //console.log(" --- (v"+ver+")    >Tool id check");
                    //console.log(" --- (v"+ver+")        check : "+ oldpData);
                    //console.log(" --- (v"+ver+")        check : "+ oldi); 

                }
                //console.log("(v"+ver+") Test "+pData[i].level+"."+(i)+" done") 
                //console.log("(v"+ver+") Test com:"+pData[i].com) 
            };
            //tester.onend = fakeonend()

            tester.onend = async function(e) { await fakeonend() }
        
            pData[i].used = true
        
            console.log("Before")
        
            window.speechSynthesis.speak(tester);
            
        
            //console.log("Before") 
            //window.speechSynthesis.cancel();
            //console.log(" --- (v"+ver+")        check : "+ pData[i].used);
            //if (pData[i].used == false){
            //    console.log(" ----- pretend Speak")
            //    pData[i].used = true
            //}
            //console.log(" --- fakeonend()")
            //fakeonend()
            //console.log("After")   
        }
    }      

                async function massSpeakingtoolv5(pData,i,oldpData,oldi){
                    if(pData.length == i ){
                            await massSpeakingtoolv5(oldpData,(oldi)+1,oldpData[0].olddata,oldpData[0].oldi)
                    }else{
                        var allVoices = window.speechSynthesis.getVoices();
                        var tester = new SpeechSynthesisUtterance();
                        window.speechSynthesis.resume()
                            tester.voice = allVoices[5]
                            tester.rate = 1.3
                            tester.pitch = 1
                            tester.text = pData[i].com;
                            var fakeonstart = async function(e) {
                                console.log(" ----- pretend Speak start time",pData[i].com)
                            }
                            var fakeonend = async function(e) {    
                                await sleep(800)
                                console.log(" ----- pretend Speak end time")

                                if (pData[i].replies.length != 0) { //This is to step in to a level of replys (Steps In)
                                    pData[i].replies[0].oldi = i
                                    pData[i].replies[0].olddata = pData

                                    await massSpeakingtoolv5(pData[i].replies,0,pData,i)
                                }
                                if((i+1)< pData.length){ //This is to step to the next replys (Steps Down)
                                    pData[i+1].oldi = pData[i].oldi

                                    if (pData[i].oldi != null){
                                        if (pData[i].oldi > pData[i].olddata.length){ 
                                                pData[i+1].oldi = oldi;
                                                pData[i].oldi = oldi;
                                        }
                                    }
                                    pData[i+1].olddata = pData[i].olddata
                                    await massSpeakingtoolv5(pData,(i+1),pData[i].olddata,pData[i].oldi)

                                }
                                if (((i+1) == pData.length)&&(oldpData != null)&&(oldi != null)&&(!(pData[i].used))){ //This is to step to the nextlead (Steps Out)
                                    var kill = false
                                    if ((pData[i].olddata == null)&&(pData[i].oldi == null)){

                                    }else{
                                            pData[i].olddata = oldpData
                                            pData[i].oldi = oldi
                                        await massSpeakingtoolv5(oldpData,(oldi)+1,(pData[i].olddata[0].olddata),(pData[i].olddata[0].oldi)) 
                                    }
                                }else{

                                } 
                            };

                            tester.onstart = async function(e) { await fakeonend() }
                            tester.onend = async function(e) { await fakeonend() }

                            pData[i].used = true
                            //console.log("Before")
                            fakeonstart()
                            console.log(" ----- pretend Speak")
                            fakeonend()
                            //window.speechSynthesis.speak(tester);

}
                }    
            
            
                //main start  
                async function massSpeakingtoolv8(tester,pData,i,oldpData,oldi){
                //Start of massSpeakingtoolv8
                    var deferred = $.Deferred();
                    var timeoutResumeInfinity
                    window.speechSynthesis.cancel();
                    if(pData.length == i ){
                        var promiseTEMP =  massSpeakingtoolv8(tester,oldpData,(oldi)+1,oldpData[0].olddata,oldpData[0].oldi)
                        promiseTEMP.then(function(result) {
                            deferred.resolve(i);
                        }) 
                    }
                    else{
                        //console.log(tester,pData,i,oldpData,oldi)
                        var allVoices = window.speechSynthesis.getVoices();
                        var BotVoicer = new SpeechSynthesisUtterance();
                        BotVoicer.voice = allVoices[5]
                        BotVoicer.rate = 1.5
                        BotVoicer.pitch = 1
                        BotVoicer.text = textfixer(pData[i].com)
                        //fakeonstart
                        var fakeonstart = async function(e) {
                            resumeInfinity(pData[i].com);
                            //console.log(" ----- pretend Speak start time ")
                            //console.log(" ----- pretend Speak start time ", e)
                            //video manger test
                            pageEdittest(pData,i)
                             
                        }
                        //fakeonend
                        var fakeonend = function(e) {
                            //inside onend (top)

                            //Resets Speaker
                            clearTimeout(timeoutResumeInfinity);
                            window.speechSynthesis.cancel();
                            
                            Steps_in_helper(tester,pData,i,oldpData,oldi)
                            //console.log(" ----- pretend Speak end time",("Object: " + e));
                            //console.log(" ----- pretend Speak end time",("Step: " + i));

                            //This is to step in to a level of replys (Steps In)
                            function Steps_in_helper(tester,pData,i,oldpData,oldi){
                            //inside Steps In (top)   
                                if (pData[i].replies.length != 0) { //This is to step in to a level of replys (Steps In)
                                pData[i].replies[0].oldi = i
                                pData[i].replies[0].olddata = pData
                                //console.log(" ----- promiseTEMP type 1 - (Steps In)");
                                var promiseTEMP = massSpeakingtoolv8(tester,pData[i].replies,0,pData,i)
                                promiseTEMP.then(function(result) { 
                                    //This is to step to the next replys (Steps Down)
                                    Steps_do_helper(tester,pData,i,oldpData,oldi)
                                })
                                }else{
                                    //This is to step to the next replys (Steps Down)
                                    Steps_do_helper(tester,pData,i,oldpData,oldi)  
                                }
                            //inside Steps In (bottom)
                            }

                            //This is to step to the next replys (Steps Down)
                            function Steps_do_helper(tester,pData,i,oldpData,oldi){
                            //inside Steps Down (top)
                                if((i+1)< pData.length){ //This is to step to the next replys (Steps Down)
                                    pData[i+1].oldi = pData[i].oldi

                                    if (pData[i].oldi != null){
                                        if (pData[i].oldi > pData[i].olddata.length){ 
                                                pData[i+1].oldi = oldi;
                                                pData[i].oldi = oldi;
                                        }
                                    }
                                    pData[i+1].olddata = pData[i].olddata
                                    var promiseTEMP =  massSpeakingtoolv8(tester,pData,(i+1),pData[i].olddata,pData[i].oldi)
                                    promiseTEMP.then(function(result) { 
                                        //This is to step to the next lead (Steps Out)
                                        Steps_ou_helper(tester,pData,i,oldpData,oldi)
                                    })
                                }else{
                                    //This is to step to the next lead (Steps Out)
                                    Steps_ou_helper(tester,pData,i,oldpData,oldi) 
                                } 
                            //inside Steps Down (bottom)
                            }

                            //This is to step to the next lead (Steps Out)
                            function Steps_ou_helper(tester,pData,i,oldpData,oldi){
                            //inside Steps out (top)
                                pData[i].used = true
                                if (((i+1) == pData.length)&&(oldpData != null)&&(oldi != null)&&(!(pData[i].used))){ //This is to step to the nextlead (Steps Out)
                                    pData[i].olddata = oldpData
                                    pData[i].oldi = oldi
                                    var promiseTEMP =  massSpeakingtoolv8(tester,oldpData,(oldi)+1,(pData[i].olddata[0].olddata),(pData[i].olddata[0].oldi))
                                    promiseTEMP.then(function(result) { 
                                        //deferred.resolve(i);
                                        
                                        deferred.resolve(i);
                                    })
                                    // await massSpeakingtoolv5(oldpData,(oldi)+1,(pData[i].olddata[0].olddata),(pData[i].olddata[0].oldi))  
                                }else{
                                    
                                    deferred.resolve(i);
                                }      
                            //inside Steps out (bottom)    
                            }

                            

                        //inside onend (bottom)
                        }
                        //real time setters
                        BotVoicer.onstart = function(e) {fakeonstart(e)}
                        BotVoicer.onend = function(e) {fakeonend(e)}
                        BotVoicer.onerror = function(e){console.log(".speak(BotVoicer) - onerror")}
                        BotVoicer.onpause = function(e){console.log(".speak(BotVoicer) - onpause")}
                        BotVoicer.onresume = function(e){console.log(".speak(BotVoicer) - onresume")}
                        BotVoicer.onmark = function(e){console.log(".speak(BotVoicer) - onmark")}
                        BotVoicer.onboundary = function(e){console.log(".speak(BotVoicer) - onboundary")}
                        //sim for testing
                        //fakeonstart()
                       
                        
                        
                        
                        
                        
                        window.speechSynthesis.cancel();
                        if (!pData[i].used){
                            pData[i].used = true
                            window.speechSynthesis.cancel();
                            window.speechSynthesis.speak(BotVoicer);
                            console.log("window.speechSynthesis.speak(BotVoicer) - Com:", BotVoicer.text);
                            console.log("Step: " + i);
                        }
                        //window.speechSynthesis.speak(BotVoicer);
                        //window.speechSynthesis.resume();
                        //console.log("window.speechSynthesis.speak(BotVoicer) - Com:", textfixer(pData[i].com));
                        //await sleep(1000)
                        //fakeonend()
                        //printing 
                        //ending   
                    }  
                
                //reture sub end    
                return deferred.promise();    
                //end of massSpeakingtoolv8
                }
        
                
                function resumeInfinity(text) {
                    window.speechSynthesis.resume();
                    
                    //var wc = wordcount(text) 
                    //if (wc <= 50)
                    
                    timeoutResumeInfinity = setTimeout(resumeInfinity, 3500);
                }
            
                function strip(html){
                   var doc = new DOMParser().parseFromString(html, 'text/html');
                   return doc.body.textContent || "";
                }
            
                function textfixer(text){
                    var Rtext = text.match('link">.*</a>')
                    if (Rtext != null){
                        text = text.replace(Rtext,'link"></a>')
                    }
                    text = strip(text)
                    text = text.replace(">",'Quote,: ')
                    
                    var badwords = ["faggot", "bar", "blah", "gay","faggots", "gays"];
                    
                    for (var i = 0; i < badwords.length; i++) {
                        var pat = badwords[i].slice(0, -1).replace(/([a-z])/g, "$1[^a-z]*") + badwords[i].slice(-1);
                        var rxp = new RegExp(pat, "ig");
                        text = text.replace(rxp, " *BLEEP* ");
                    }
                    
                    return text  
                }

                async function massSpeakingtoolv6(pData,i,oldpData,oldi){
    
    var deferred = $.Deferred();
    
    if(pData.length == i ){
        var promise = massSpeakingtoolv6(oldpData,(oldi)+1,oldpData[0].olddata,oldpData[0].oldi)
            promise.then(function(result) {
                console.log("Result: " + result);
                deferred.resolve(i);
        });    
    }else{
        var allVoices = window.speechSynthesis.getVoices();
        var tester = new SpeechSynthesisUtterance();
        window.speechSynthesis.resume()
            tester.voice = allVoices[5]
            tester.rate = 1.3
            tester.pitch = 1
            tester.text = pData[i].com;
            var fakeonstart = async function(e) {
                console.log(" ----- pretend Speak start time",pData[i].com)
            }
            var fakeonend = async function(e) {    
                await sleep(800)
                console.log(" ----- pretend Speak end time")
                
                //This is to step in to a level of replys (Steps In)
                if (pData[i].replies.length != 0) {//This is to step in to a level of replys (Steps In)
                    pData[i].replies[0].oldi = i
                    pData[i].replies[0].olddata = pData
                    
                    var promise =  massSpeakingtoolv5(pData[i].replies,0,pData,i)
                    
                    promise.then(function(result) {
                        console.log("Result: " + result);
                        deferred.resolve(i);                          
                    })
                }
                
                //This is to step to the next replys (Steps Down)
                if((i+1)< pData.length){//This is to step to the next replys (Steps Down)
                    pData[i+1].oldi = pData[i].oldi

                    if (pData[i].oldi != null){
                        if (pData[i].oldi > pData[i].olddata.length){ 
                                pData[i+1].oldi = oldi;
                                pData[i].oldi = oldi;
                        }
                    }
                    pData[i+1].olddata = pData[i].olddata
                    var promise =  massSpeakingtoolv5(pData,(i+1),pData[i].olddata,pData[i].oldi)
                    
                    promise.then(function(result) {
                        console.log("Result: " + result);
                        deferred.resolve(i);                          
                    })

                }
                
                //This is to step to the nextlead (Steps Out)
                if (((i+1) == pData.length)&&(oldpData != null)&&(oldi != null)&&(!(pData[i].used))){//This is to step to the nextlead (Steps Out)
                    var kill = false
                    if ((pData[i].olddata == null)&&(pData[i].oldi == null)){

                    }else{
                            pData[i].olddata = oldpData
                            pData[i].oldi = oldi
                        var promise =  massSpeakingtoolv5(oldpData,(oldi)+1,(pData[i].olddata[0].olddata),(pData[i].olddata[0].oldi))
                        
                        promise.then(function(result) {
                            console.log("Result: " + result);
                            deferred.resolve(i);                          
                        })
                        
                    }
                }
                
                //resolve
                deferred.resolve(i);
            };
            
            tester.onstart = async function(e) { await fakeonend() }
            tester.onend = async function(e) { await fakeonend() }
        
            pData[i].used = true
            //console.log("Before")
            await fakeonstart()
            console.log(" ----- pretend Speak")
            await fakeonend()
            //window.speechSynthesis.speak(tester);
              
        }
return deferred.promise();
//end
}      

                let massSpeakingtoolv7 = new Promise(async function(pData,i,oldpData,oldi,resolve, reject) {
//async function massSpeakingtoolv7(pData,i,oldpData,oldi){
    if(pData.length == i ){
            let result = await massSpeakingtoolv7(oldpData,(oldi)+1,oldpData[0].olddata,oldpData[0].oldi)
            console.log(" --- ",result)
            console.log(' --- next step')
            resolve()
    }else{
            var allVoices = window.speechSynthesis.getVoices();
        var tester = new SpeechSynthesisUtterance();
        window.speechSynthesis.resume()
            tester.voice = allVoices[5]
            tester.rate = 1.3
            tester.pitch = 1
            tester.text = pData[i].com;
            var fakeonstart = async function(e) {
                console.log(" ----- pretend Speak start time",pData[i].com)
            }
            var fakeonend = async function(e) {    
                await sleep(800)
                console.log(" ----- pretend Speak end time")

                if (pData[i].replies.length != 0) { //This is to step in to a level of replys (Steps In)
                    pData[i].replies[0].oldi = i
                    pData[i].replies[0].olddata = pData
                    
                    let result = await massSpeakingtoolv7(pData[i].replies,0,pData,i)
                    console.log(" --- ",result)
                    console.log(' --- next step')
                }
                if((i+1)< pData.length){ //This is to step to the next replys (Steps Down)
                    pData[i+1].oldi = pData[i].oldi

                    if (pData[i].oldi != null){
                        if (pData[i].oldi > pData[i].olddata.length){ 
                                pData[i+1].oldi = oldi;
                                pData[i].oldi = oldi;
                        }
                    }
                    pData[i+1].olddata = pData[i].olddata
                    let result = await massSpeakingtoolv7(pData,(i+1),pData[i].olddata,pData[i].oldi)
                    console.log(" --- ",result)
                    console.log(' --- next step')

                }
                if (((i+1) == pData.length)&&(oldpData != null)&&(oldi != null)&&(!(pData[i].used))){ //This is to step to the nextlead (Steps Out)
                    var kill = false
                    if ((pData[i].olddata == null)&&(pData[i].oldi == null)){

                    }else{
                            pData[i].olddata = oldpData
                            pData[i].oldi = oldi
                        let result = await massSpeakingtoolv7(oldpData,(oldi)+1,(pData[i].olddata[0].olddata),(pData[i].olddata[0].oldi))
                        console.log(" --- ",result)
                        console.log(' --- next step')
                    }
                }else{

                }
                resolve()
            };
            
            tester.onstart = async function(e) { await fakeonend() }
            tester.onend = async function(e) { await fakeonend() }
        
            pData[i].used = true
            //console.log("Before")
            fakeonstart()
            console.log(" ----- pretend Speak")
            fakeonend()
            //window.speechSynthesis.speak(tester);
              
        }
    })      

            //tools
            //Every else thing has to go in here
                //New Page
                    videoPageSetUp()
                window.speechSynthesis.cancel();
                //speaktool("Searcher",0)
                await sleep(800)
            
                console.log("(V8) Test");
            
            
                //caller
                var promise_massSpeakingtoolv8 = massSpeakingtoolv8(0,pData,0,null,null)
                promise_massSpeakingtoolv8.then(function(result) {
                    console.log("promise_massSpeakingtoolv8 - Check:  2");
                    console.log("promise_massSpeakingtoolv8 - Result: " + result);
                })
            
                
                function pageEdittest(text,i){
                    d3.selectAll("#text_holder *").remove()
                    
                    d3.select("#text_holder")
                    .append("p")
                    .attr("class","Tester_text")
                    //.text(text[i].com)
                    .text(textfixer(text[i].com))
                    
                    d3.select("#text_holder")
                    .append("p")
                    .attr("class","Tester_text")
                    .text("This is the Level :" + text[i].level)
                    
                    d3.select("#text_holder")
                    .append("p")
                    .attr("class","Tester_text")
                    .text("This is the index :" + (i+1) +"/"+text.length)
                }
            
                function firsttestFunction(num,has){
                    console.log("(V8) Test --- ("+has+")in: firstFunction(num)");
                    console.log("(V8) Test --- ("+has+")the id:" +num );
                                
                    var deferred = $.Deferred();
                    console.log(" ");
                    var i = 0;
                    var nextStep = function() {
                        if (i<num) {
                            // Do something
                            console.log("("+has+")Step: " + i);
                            i++;
                            setTimeout(nextStep, 10); 
                        }
                        else {
                            deferred.resolve(i);
                        }
                    }
                    nextStep();
                    return deferred.promise();
                }

                function secondtestFunction(){
                    console.log("(V8) Test --- in: firstFunction(num)");
                    
                    //A an B run at the same time
                    //C will run after A
                    
                    var promiseA = firsttestFunction(123,1);
                    promiseA.then(function(result) { 
                        
                        console.log("Result: " + result);
                        
                        var promiseC = firsttestFunction(123,3);
                        promiseC.then(function(result) {
                            
                            console.log("Result: " + result);
                        
                        });
                        
                    });
                    
                    var promiseB = firsttestFunction(123,2);
                    promise.then(function(result) { 
                        console.log("Result: " + result);
                    
                    });
  
                } 
                //secondtestFunction()
                
                function thirdtestFunction(num,has,text){
                    var deferred = $.Deferred();
                    var allVoices = window.speechSynthesis.getVoices();
                    var tester = new SpeechSynthesisUtterance();
                    tester.voice = allVoices[5]
                    tester.rate = 1
                    tester.pitch = 1
                    tester.text = text
                    
                    console.log("(V8) Test --- ("+has+")in: thirdFunction(num,has,text)");
                    console.log("(V8) Test --- ("+has+")the id:" +num );
                                
                    tester.onstart = function(e) {console.log(" ----- pretend Speak start time",text)}
                    tester.onend = function(e) {console.log(" ----- pretend Speak end time",text);deferred.resolve(num);}
                    
                    window.speechSynthesis.speak(tester);
                    
                    console.log(" ----- Happened");
                    var i = 0;
                    var nextStep = function() {
                        if (i<num) {
                            // Do something
                            console.log("("+has+")Step: " + i);
                            i++;
                            setTimeout(nextStep, 10); 
                        }
                        else {
                            deferred.resolve(i);
                        }
                    }
                    //nextStep();
                    
                    return deferred.promise();
                }
                
                function fouthtestFunction(){
                    console.log("(V8) Test --- in: fouthFunction(num)");
                    
                    //A an B run at the same time
                    //C will run after A
                    
                    var promiseA = thirdtestFunction(122,1,"testing 1");
                    promiseA.then(function(result) { 
                        
                        console.log("Result: " + result);
                        
                        var promiseC = thirdtestFunction(123,2,"testing 2");
                        promiseC.then(function(result) {
                            
                            console.log("Result: " + result);
                        
                        });
                        
                        
                    });
                    var promiseB = thirdtestFunction(124,3,"testing 3");
                    promiseB.then(function(result) { 
                        console.log("Result: " + result);
                    
                    });
  
                }
                //fouthtestFunction()
                
                function fivthtestFunction(i){
                    
                    var deferred = $.Deferred();
                    var allVoices = window.speechSynthesis.getVoices();
                    var tester = new SpeechSynthesisUtterance();
                    tester.voice = allVoices[5]
                    tester.rate = 1
                    tester.pitch = 1
                    tester.text = ("Step: " + i)
                    tester.onstart = function(e) {console.log(" ----- pretend Speak start time",("Step: " + i))}
                    window.speechSynthesis.speak(tester);
                    tester.onend = function(e) {
                        console.log(" ----- pretend Speak end time",("Step: " + i));
                        
                        if (i != 10){
                            var promiseTEMP = fivthtestFunction(i+1)
                                promiseTEMP.then(function(result) {
                                //deferred.resolve(i+1);
                                //return deferred.promise();
                            })  
                        }else{
                            deferred.resolve(i);
                        }
                        //deferred.resolve(i);
                    }
                    console.log("Step: " + i);
                    return deferred.promise();
                }
                //var promiseE = fivthtestFunction(0)
                //promiseE.then(function(result) {console.log("Result: " + result);})
         
                
            
            
            function speaktool(Stext,i,r){
                    var allVoices = window.speechSynthesis.getVoices();
                    var tester = new SpeechSynthesisUtterance(); 
                        tester.voice = allVoices[5]
                        tester.rate = 1.3
                        tester.pitch = 1
                        tester.text = Stext;
                        tester.onend = function(e) {
                            console.log(" --- Test "+(i)+ "."+(r)+" Finished in " + (event.elapsedTime) + " millseconds.");
                            console.log(" --- Test "+(i)+ "."+(r)+" Finished")
                            //console.log("onend",e)
                        };   

                    //console.log("Before") 
                    window.speechSynthesis.cancel();
                    window.speechSynthesis.speak(tester); 
                    //console.log("After")   
                }
    //end of it
    })}else {$('#modal1').openModal();}}
    
    
    
    async function testering(){
        var promiseD = thirdFunction(10,0,0);
                    promiseA.then(function(result) {
                        
                    }) 
            
                function thirdFunction(num,i,r){
                    console.log("(V8) Test --- ("+has+")in: firstFunction(num)");
                    console.log("(V8) Test --- ("+has+")the id:" +num );
                                
                    var deferred = $.Deferred();
                    
                    console.log(" ");
                    var i = 0;
                    var nextStep = function() {
                        if (i<num) {
                            // Do something
                            console.log("("+has+")Step: " + i);
                            i++;
                            setTimeout(nextStep, 10); 
                        }
                        else {
                            deferred.resolve(i);
                        }
                    }
                    nextStep();
                    return deferred.promise();
                    
                }
        
        
        
        
        
         var words = (pData[2].com).split(" ");
                console.log("test 2 start")
                console.log(" --- com :", pData[2].com)
                console.log(" --- wordspermin ?:",wordspermin(words))
                console.log(" --- sleep time:",(words.length/wordspermin(words))*60000)
                speaktool(pData[2].com)
                await sleep((words.length/wordspermin(words))*60000);
                console.log("test 2 done")
            
                var words = (pData[3].com).split(" ");
                console.log("test 3 start")
                console.log(" --- com :", pData[3].com)
                console.log(" --- wordspermin ?:",wordspermin(words))
                console.log(" --- sleep time:",(words.length/wordspermin(words))*60000)
                speaktool(pData[3].com)
                await sleep((words.length/wordspermin(words))*60000);
                console.log("test 3 done")
            
                var words = (pData[4].com).split(" ");
                console.log("test 4 start")
                console.log(" --- com :", pData[4].com)
                console.log(" --- wordspermin ?:",wordspermin(words))
                console.log(" --- sleep time:",(words.length/wordspermin(words))*60000)
                speaktool(pData[4].com)
                await sleep((words.length/wordspermin(words))*60000);
                console.log("test 4 done")
            
                var words = (pData[5].com).split(" ");
                console.log("test 3 start")
                console.log(" --- com :", pData[5].com)
                console.log(" --- wordspermin ?:",wordspermin(words))
                console.log(" --- sleep time:",(words.length/wordspermin(words))*60000)
                speaktool(pData[5].com)
                await sleep((words.length/wordspermin(words))*60000);
                console.log("test 5 done")
        
            console.log("pData",pData)
            console.log("pData[1]com : ",pData[1].com)
            
            speaktool(pData[1].com)

            var words = (pData[1].com).split(" ");

            console.log('Taking a break...');
            sleep(2000);
            console.log('Two seconds later, showing sleep in a loop...');

            console.log("TEST")


            
            for (var i = 0; i < words.length; i += 1) {
                //await sleep(100);
                console.log(words[i])
                speaktool(words[i])

                d3.select("body")
                    .append("p")
                    .text(words[i])

            }

            // Sleep in loop
            for (let i = 0; i < 5; i++) {

                if (i === 3){
                    sleep(2000);
                    console.log("(2) demo --> Break of 2000");
                }

                console.log("(2) demo -->",i);

            }
        
        
    }
       
    //Start
    primaryDataPromise()
}
mainFunction()
