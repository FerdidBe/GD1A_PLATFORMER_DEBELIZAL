import { Scene01 as Scene01 } from "./Scene01.js";
import { Scene02 as Scene02 } from "./Scene02.js";

var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300},
            debug: true 
        }
    },
    scene: [ Scene01, Scene02],
    scale: {
        parent: 'game_viewport',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH, 
    }
    
}

var game = new Phaser.Game(config);