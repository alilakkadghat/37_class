class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;
    }
    getCount(){
        var playerref=database.ref('playerCount');
        playerref.on("value",(data)=>{
            playerCount=data.val();
    
        });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count

        })
        
    }
    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        var playersinforef=database.ref('players');
        playersinforef.on("value",function(data){
            allPlayers=data.val();
            
        });
    }
}