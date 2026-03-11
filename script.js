window.addEventListener("load",function(){
    document.getElementById("preloader").style.display="none";
});




let weather={
    apiKey: "38232b6d0bb50f08694a454949344dfc",
    fetchweather: function (place){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        place +
        "&units=metric&appid=" +
        this.apiKey)
    .then((response)=>{
        if(!response.ok){
            alert("Something went wrong");
            return;
  
    }
        return response.json();
    })
    .then((data)=>this.putdata(data));
    
  },
  putdata: function(data){
    const {name} = data;
    const {icon,description}=data.weather[0];
    const {temp,humidity}=data.main;
    const {visibility}=data;             
    document.getElementById("location-name").textContent=name;
    document.getElementById("temperature").textContent=temp+"°C";
    document.getElementById("humidity").textContent=humidity+"%";
    document.getElementById("visibility").textContent=visibility+"m";
    document.getElementById("weather-condition").textContent=description;
    document.getElementById("icon").src="https://openweathermap.org/img/wn/"+icon+".png";
  }


};

let map = L.map("map").setView([33.8938, 35.5018], 10); // default Beirut

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
}).addTo(map);

let marker = null;

async function moveMapToCity(cityName, apiKey){

    try{

        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

        let response = await fetch(url);

        if(response.ok == false){
            alert("City not found");
            return;
        }

        let data = await response.json();

        let latitude = data.coord.lat;
        let longitude = data.coord.lon;

        map.setView([latitude, longitude], 10);

        if(marker != null){
            map.removeLayer(marker);                                                             
        }

        marker = L.marker([latitude, longitude]);
        marker.addTo(map);

        marker.bindPopup(cityName);
        marker.openPopup();

    }
    catch(error){
        alert("There was an error");
    }

}


document.getElementById("location-input").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
       moveMapToCity(document.getElementById("location-input").value, weather.apiKey);
        weather.fetchweather(document.getElementById("location-input").value);
        document.getElementById("location-input").value="";
    }
});


let menubtn=document.getElementById("menu-btn");


menubtn.addEventListener("click",function(){
    document.getElementById("mbmenu").classList.toggle("active");
});

let newsarray=[];

 let newsobtaining={
    news: function(){
        fetch("https://newsdata.io/api/1/latest?apikey=pub_79bbad64eb794cc89a8470b63a074012&language=en&category=politics,business,sports,science&size=9&removeduplicate=1&image=1")
        .then((response)=>{
            if(!response.ok){
                alert("something went wrong please refresh the page");
                return;
            }
            return response.json();})
        .then((data)=>{
            newsarray=[...data.results];
            assigningnews();
        })
    }
 };

function getrandomnew(){
    const randomnewindex=Math.floor(Math.random()*newsarray.length);
    const randomnew=newsarray[randomnewindex];
    newsarray.splice(randomnewindex,1);
    return randomnew;
}

function assigningnews(){
    if(newsarray.length==0){return null};
    const randomnew1=getrandomnew();
    const {title:title1, description:desc1 , link:link1} = randomnew1;
    document.getElementById("newtitle1").textContent=title1;
    document.getElementById("description1").textContent=desc1 || "No description available.";
    document.getElementById("div1").addEventListener("click",function(){
        window.location.href=link1;
    })

    if(newsarray.length==0){return null};
    const randomnew2=getrandomnew();
    const {title:title2, description:desc2, link:link2} = randomnew2;
    document.getElementById("newtitle2").textContent=title2;
    document.getElementById("description2").textContent=desc2 || "No description available.";
    document.getElementById("div2").addEventListener("click",function(){
        window.location.href=link2;
    })

    if(newsarray.length==0){return null};
    const randomnew3=getrandomnew();
    const {title:title3, description:desc3, link:link3} = randomnew3;
    document.getElementById("newtitle3").textContent=title3;
    document.getElementById("description3").textContent=desc3 || "No description available.";
    document.getElementById("div3").addEventListener("click",function(){
        window.location.href=link3;
    })     
    
    if(newsarray.length==0){return null};
    const randomnew4=getrandomnew();
    const {image_url:image4, description:desc4, link:link4} = randomnew4;
    document.getElementById("image4").src=image4 || "https://picsum.photos/600/400";
    document.getElementById("description4").textContent=desc4 || "No description available.";
    document.getElementById("div4").addEventListener("click",function(){
        window.location.href=link4;
    })     

    if(newsarray.length==0){return null};
    const randomnew5=getrandomnew();
    const {image_url:image5, description:desc5, link:link5} = randomnew5;
    document.getElementById("image5").src=image5 || "https://picsum.photos/600/400";
    document.getElementById("description5").textContent=desc5 || "No description available.";
    document.getElementById("div5").addEventListener("click",function(){
        window.location.href=link5;
    })

    if(newsarray.length==0){return null};
    const randomnew6=getrandomnew();
    const {image_url:image6, description:desc6, link:link6} = randomnew6;
    document.getElementById("image6").src=image6 || "https://picsum.photos/600/400";
    document.getElementById("description6").textContent=desc6 || "No description available.";
    document.getElementById("div6").addEventListener("click",function(){
        window.location.href=link6;
    });

    const slides=document.querySelectorAll(".carousel-item");
    
    slides.forEach(e=>{
        if(newsarray.length===0) return;
        const randomnew=getrandomnew();
        if(!randomnew) return;
        const btn=e.querySelector(".btn");
        const desc=e.querySelector(".desc1");
        const title=e.querySelector(".title");
        const cardimg=e.querySelector(".img-fluid");
        
        const {image_url:image, description:carddescription ,link:cardlink , title:cardtitle }=randomnew;
        btn.addEventListener("click",function(){
             window.location.href=cardlink;
       });
        desc.textContent=carddescription || "No description available.";
        title.textContent=cardtitle;
        cardimg.src=image || "https://picsum.photos/600/400";}
 
)};

newsobtaining.news();