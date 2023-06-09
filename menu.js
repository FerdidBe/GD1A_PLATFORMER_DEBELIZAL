export class Menu extends Phaser.Scene{
    constructor(){
        super("Menu");
    }

    preload(){
        this.load.image('menu', 'assets/menu.png');
        this.load.spritesheet('play', 'assets/boutonPlay2.png', { frameWidth: 149, frameHeight: 100});
        this.load.image('Logo', 'assets/logo.png'); 


    }

    create(){
        this.add.image(0,0, 'menu').setOrigin(0,0);
        var boutonPlay = this.add.sprite(950, 600, 'play').setInteractive();

       
        this.add.image(960, 250, 'Logo');



        boutonPlay.on('pointerup', this.sceneScene01, this);
      

        // Ajoute l'animation au bouton play
        this.anims.create({
            key: 'play_animation',
            frames: this.anims.generateFrameNumbers('play', { start: 0, end: 1 }),
            frameRate: 2,
            repeat: -1
        });

        // Joue l'animation du bouton play
        boutonPlay.anims.play('play_animation');
    }

    update(){

    }
    
    sceneScene01(){
        this.scene.start("Scene01")
    }
};

