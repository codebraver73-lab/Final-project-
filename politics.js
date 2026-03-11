window.addEventListener("load",function(){
    document.getElementById("preloader").style.display="none";
});



let menubtn=document.getElementById("menu-btn");


menubtn.addEventListener("click",function(){
    document.getElementById("mbmenu").classList.toggle("active");
});

const input=document.getElementById("input1");
const container=document.getElementById("comments-div");


let storage=JSON.parse(localStorage.getItem("storage")) || [];

function addcomment(){
    if(input.value===""){
        alert("you can't add an empty comment")
        return;
    }
    else{
        const comment=input.value;
        storage.push(comment);
        updatingls();
        updatingUI(comment);
    }

}

function updatingls(){
     localStorage.setItem("storage",JSON.stringify(storage));
}


function updatingUI(comment){
    const comment_container=document.createElement("div");
    const del_div=document.createElement("div");
    const del_button=document.createElement("button");
    const paragraph=document.createElement("p");
    del_button.textContent="Delete";
    del_div.appendChild(del_button);
    paragraph.textContent=comment;
    comment_container.appendChild(paragraph);
    comment_container.appendChild(del_div);
    container.appendChild(comment_container);
    comment_container.className="comment-container";
    del_div.className="delete-button-container";
    del_button.addEventListener("click", () => {
    storage = storage.filter(t => t !== comment);
    updatingls();
    comment_container.remove();

    });

};


input.addEventListener("keyup",(e)=>{
    if(e.key=="Enter"){
        addcomment();
        input.value="";
    }
}

)
storage.forEach((comment)=>{updatingUI(comment)})

let articles=[];



function randomarticles(){
    if(articles.length === 0){
        return null;
    }    
    const index = Math.floor(Math.random() * articles.length);
    const article = articles[index];
    articles.splice(index, 1);
    return article;
};


function loadrandomarticles(){
    
    let randomarticle1=randomarticles();
    if(!randomarticle1) return;
    const { description: desc1, image_url: img1, link:link1 } = randomarticle1;
    document.getElementById("paragraph1").textContent = desc1 || "No description available.";
    document.getElementById("image1").src = img1 ||"https://picsum.photos/600/400";
    document.getElementById("main-politic-new").addEventListener("click", function(){
        window.location.href=link1;
    });

    let randomarticle2=randomarticles();
    if(!randomarticle1) return;
    const { description: desc2, image_url: img2, link:link2 } = randomarticle2;
    document.getElementById("image2").src = img2 ||"https://picsum.photos/600/400";
    document.getElementById("paragraph2").textContent=desc2 || "No description available.";
    document.getElementById("card1").addEventListener("click", function(){
        window.location.href=link2;
    });

    let randomarticle3=randomarticles();
    if(!randomarticle1) return;
    const { description: desc3, image_url: img3, link:link3 } = randomarticle3;
    document.getElementById("image3").src = img3 ||"https://picsum.photos/600/400";
    document.getElementById("paragraph3").textContent=desc3 || "No description available.";
    document.getElementById("card2").addEventListener("click", function(){
        window.location.href=link3;
    });


    let randomarticle4=randomarticles();
    if(!randomarticle1) return;
    const { description: desc4, image_url: img4, link:link4 } = randomarticle4;
    document.getElementById("image4").src = img4 ||"https://picsum.photos/600/400";
    document.getElementById("paragraph4").textContent=desc4 || "No description available.";
    document.getElementById("card3").addEventListener("click", function(){
        window.location.href=link4;
    });

    let randomarticle5=randomarticles();
    if(!randomarticle1) return;
    const { description: desc5, image_url: img5, link:link5 } = randomarticle5;
    document.getElementById("image5").src = img5 ||"https://picsum.photos/600/400";
    document.getElementById("paragraph5").textContent=desc5 || "No description available.";
    document.getElementById("card4").addEventListener("click", function(){
        window.location.href=link5;
    });


    let randomarticle6=randomarticles();
    if(!randomarticle1) return;
    const { description: desc6, image_url: img6, link:link6 } = randomarticle6;
    document.getElementById("image6").src = img6 ||"https://picsum.photos/600/400";
    document.getElementById("paragraph6").textContent=desc6 || "No description available.";
    document.getElementById("card5").addEventListener("click", function(){
        window.location.href=link6;
    });

    let randomarticle7=randomarticles();
    if(!randomarticle1) return;
    const { description: desc7, image_url: img7, link:link7 } = randomarticle7;
    document.getElementById("image7").src = img7 ||"https://picsum.photos/600/400";
    document.getElementById("paragraph7").textContent=desc7 || "No description available.";
    document.getElementById("card6").addEventListener("click", function(){
        window.location.href=link7;
    });

    let randomarticle8=randomarticles();
    if(!randomarticle1) return;
    const { description: desc8, image_url: img8, link:link8 } = randomarticle8;
    document.getElementById("image8").src = img8 ||"https://picsum.photos/600/400";
    document.getElementById("paragraph8").textContent=desc8 || "No description available.";
    document.getElementById("big-div").addEventListener("click", function(){
        window.location.href=link8;
    });

    let randomarticle9=randomarticles();
    if(!randomarticle1) return;
    const { description: desc9, image_url: img9, link:link9 } = randomarticle9;
    document.getElementById("image9").src = img9 ||"https://picsum.photos/600/400";
    document.getElementById("paragraph9").textContent=desc9 || "No description available.";
    document.getElementById("row-div1").addEventListener("click", function(){
        window.location.href=link9;
    });

    let randomarticle10=randomarticles();
    if(!randomarticle1) return;
    const { description: desc10, image_url: img10, link:link10 } = randomarticle10;
    document.getElementById("image10").src = img10 ||"https://picsum.photos/600/400";
    document.getElementById("paragraph10").textContent=desc10 || "No description available.";
    document.getElementById("row-div2").addEventListener("click", function(){
        window.location.href=link10;
    });

    let randomarticle11=randomarticles();
    if(!randomarticle1) return;
    const { description: desc11, image_url: img11, link:link11 } = randomarticle11;
    document.getElementById("image11").src = img11 ||"https://picsum.photos/600/400";
    document.getElementById("paragraph11").textContent=desc11 || "No description available.";
    document.getElementById("row-div3").addEventListener("click", function(){
        window.location.href=link11;
    });

    let randomarticle12=randomarticles();
    if(!randomarticle1) return;
    const { description: desc12, image_url: img12, link:link12 } = randomarticle12;
    document.getElementById("image12").src = img12 ||"https://picsum.photos/600/400";
    document.getElementById("paragraph12").textContent=desc12 || "No description available.";
    document.getElementById("column-div1").addEventListener("click", function(){
        window.location.href=link12;
    });


    let randomarticle13=randomarticles();
    if(!randomarticle1) return;
    const { description: desc13, image_url: img13, link:link13 } = randomarticle13;
    document.getElementById("image13").src = img13 ||"https://picsum.photos/600/400";
    document.getElementById("paragraph13").textContent=desc13 || "No description available.";
    document.getElementById("column-div2").addEventListener("click", function(){
        window.location.href=link13;
    });

    let randomarticle14=randomarticles();
    if(!randomarticle1) return;
    const { description: desc14, image_url: img14, link:link14} = randomarticle14;
    document.getElementById("image14").src = img14 ||"https://picsum.photos/600/400";
    document.getElementById("paragraph14").textContent=desc14 || "No description available.";
    document.getElementById("column-div3").addEventListener("click", function(){
        window.location.href=link14;
    });
}

let newsobtaning={
    news: function(){
        let page1Results;
        fetch("https://newsdata.io/api/1/latest?apikey=pub_79bbad64eb794cc89a8470b63a074012&language=en&category=politics&image=1&removeduplicate=1")
        .then((response)=>{
            if(!response.ok){
                alert("there was a mini problem please restart the website")
                return;
            }
            else{
                return response.json()}})
        .then((data)=>{
                if(!data || !data.results){
            console.log("API returned no data");
             return; }
            page1Results = data.results;
            const nextPage=data.nextPage;
            return fetch("https://newsdata.io/api/1/latest?apikey=pub_79bbad64eb794cc89a8470b63a074012&language=en&category=politics&image=1&removeduplicate=1&page="+nextPage)})       
       
        .then((response)=>{
           return response.json();
           })
        .then((datacontent)=>{
            if(!datacontent || !datacontent.results){
                return
            }
            const page2Results = datacontent.results;
            articles=[...page1Results,...page2Results]
            const seen = new Set();
            articles = articles.filter(article => {
            const key = (article.title || "") + (article.link || "");
            if (seen.has(key)) {
            return false;}
            seen.add(key);
            return true;
});
            loadrandomarticles();}); 

                
    }
};

newsobtaning.news();

let videosarray;

let videos = {
  fetching_videos: function() {
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=politics%20news&type=video&maxResults=8&relevanceLanguage=en&videoEmbeddable=true&videoSyndicated=true&eventType=completed&videoDefinition=high&key=AIzaSyA_UaEhpijMs-7Gmawqk5EGLCDRsN0GMZ0")
      .then((response) => {
        if (!response.ok) {
          alert("There is a little problem, please refresh the page");
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (!data || !data.items) {
          alert("Something went wrong, please refresh the page");
          return;
        }
        videosarray = [...data.items];
        assigneRandomVideos();
      });
  }
};

function randomvideos() {
    if(videosarray.length==0){return null};
  const index = Math.floor(Math.random() * videosarray.length);
  const video = videosarray[index];
  videosarray.splice(index, 1);
  return video;
};

function assigneRandomVideos() {
  const videoDivs = document.querySelectorAll(".the-video");

  videoDivs.forEach(div => {
    if (videosarray.length === 0) return;

    const randomVideo = randomvideos();
    const videoId = randomVideo.id.videoId;
    let description = randomVideo.snippet.description;

    const iframe = div.querySelector("iframe");
    const p = div.querySelector("p");
    if(description==""){
        description=randomVideo.snippet.title;
    }
    iframe.src = "https://www.youtube.com/embed/"+videoId;
    p.textContent = description;
  });
};

videos.fetching_videos();