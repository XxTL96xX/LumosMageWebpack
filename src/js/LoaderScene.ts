import { io } from "socket.io-client";

export default class LoaderScene extends Phaser.Scene {
  
  public preload() {

    //get user default weapon
    // try{
    //   var socket = io("http://localhost:3010");

    //   socket.emit('get_current_weapon', "");

    //   socket.on('output_current_weapon', function(msg) {
    //     console.log("msg", msg)
    //   });

    // }catch(e){
    //     console.log(e)
    // }


    this.load.image("smallUIBox", 'assets/ui/SmallUIBox.png');
    this.load.image("UIBox", 'assets/ui/UIBox.png');
    this.load.image("choiceBox", 'assets/ui/ChoiceBox.png');
    this.load.image("buyBox", 'assets/ui/BuyBox.png');
    this.load.image("okBox", 'assets/ui/OkBox.png');
    this.load.image("equipBox", 'assets/ui/EquipBox.png');
    this.load.image('baseBall', 'assets/weapons/BaseBall.png');

    this.load.tilemapTiledJSON("baseMap", "assets/game.json");
    this.load.image('iceworld', 'assets/ice-tileset.png');

    this.load.spritesheet("PlayerLeft", "assets/character/OldMan-Left.png", {
        frameWidth: 16,
        frameHeight: 16
    });

    this.load.spritesheet("PlayerRight", "assets/character/OldMan-Right.png", {
        frameWidth: 16,
        frameHeight: 16
    });

    this.load.image("Enemy", "assets/character/Enemy-Left.png");

    this.load.image('Layer1BG', 'assets/ui/Layer1Grass.png');
    this.load.image('Layer2BG', 'assets/ui/Layer2Forest.png');
    this.load.image('Layer3BG', 'assets/ui/Layer3Mountain.png');
  }

  public create() {
    
    this.scene.start("MainMenu-Scene");
  }
}
