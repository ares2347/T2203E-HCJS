var xhttp = new XMLHttpRequest();
var currentWeather=0;
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        currentWeather=JSON.parse(this.responseText);
        // let container= document.getElementById("main");
        // for (let i in currentWeather.list.length){
        //     let content = "<div id=\"container\">"+ "<h2><span id=\"date\">"+ currentWeather[i].list[0].dt_txt+ "</span></h2>"+"<h1><span id=\"temp\">"+currentWeather.list[i].main.temp +"</span></h1>" + "<h3><span id=\"weather\">"+currentWeather.list[i].weather[0].description + "</span></h3>"+ "<div id=\"icon\">" + currentWeather.list[i].weather[0].icon+ "</div>" +"</div>"
        //     container += content;
        // }}
        console.log(currentWeather)
};
xhttp.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric", true);
xhttp.send();
