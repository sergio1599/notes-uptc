class Giphy{
    constructor(keyword){
      this.keyword="not found"; 
      this.endpoint="http://api.giphy.com/v1/gifs";
      this.api_key="plobrDQyWSvY0VJ9mk8NRMz5YEpyd4A3"; 
    }

 
getGifUrl(callback){
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET",this.endpoint+"/translate?api_key="+this.api_key+"$s="+this.keyword); 
    xhr.responseType = "json"; 
    xhr.onload = function(){
        callback(this.response.data.images.original.mp4)
    }
    xhr.send(); 
}


static getUrlAsync(){
   return new Giphy(keyword)
}

}