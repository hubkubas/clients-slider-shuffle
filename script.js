var clientsSlider = {
  
  clients: [
    "https://cdn.glitch.com/9e10365b-c704-4f66-b12a-f002faf03af3%2FMbank-logo.jpg?1557398130183", 
    "https://cdn.glitch.com/9e10365b-c704-4f66-b12a-f002faf03af3%2Fnetia-logo.png?1557398130339", 
    "https://cdn.glitch.com/9e10365b-c704-4f66-b12a-f002faf03af3%2Ffines_logo.jpg?1557398130199",
    "https://cdn.glitch.com/9e10365b-c704-4f66-b12a-f002faf03af3%2Fsevenet_logo.jpg?1557398130497",
    "https://cdn.glitch.com/9e10365b-c704-4f66-b12a-f002faf03af3%2FMcDonalds_logo.png?1557398130570"

  ],
  
    shuffle: function(clients) {
    this.clients.sort(() => Math.random() - 0.5);
      
    document.getElementById("firstSlideImage").src = this.clients[0];
    document.getElementById("secondSlideImage").src = this.clients[1];
    document.getElementById("thirdSlideImage").src = this.clients[2];
    document.getElementById("fourthSlideImage").src = this.clients[3];
      
    },
  
  
};


clientsSlider.shuffle();

setInterval(function(){
        clientsSlider.shuffle()}, 3000)