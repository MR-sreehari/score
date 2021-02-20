class Form{
    constructor(){
    this.input=createInput("NAME");
    this.button=createButton("PLAY");
    this.greeting=createElement("h3");

    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        var title=createElement("h2");
        title.html("MULTIPLAYER CAR RACING GAME");
        title.position(40,0);

        this.input.position(130,160);
        this.button.position(250,200);
        
        this.button.mousePressed(()=>{
           this.input.hide();
            this.button.hide();
            
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount (playerCount);

            this.greeting.html("HELLO PLAYER "+player.name);
            this.greeting.position(180,200);
        })
    }
}