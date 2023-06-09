import Bot from "./bot.js";


export class Scene01 extends Phaser.Scene {
    constructor() {
        super("Scene01");

        this.direction = 'right'; // par défaut, le bot avance vers la droite
        this.direction2 = 'right';
        this.direction3 = 'right'; // Nouvelle direction pour le troisième bot
        this.lastCheckpoint = { x: 2050, y: 2752 };
    }

    preload() {
        this.load.spritesheet('perso', 'assets/animperso2.png', { frameWidth: 55, frameHeight:80});
        this.load.tilemapTiledJSON('map', "assets/MapMarioLike.json");
        this.load.image("tileset", "assets/tile..png");
        this.load.image('bot', 'assets/bot.png');
        this.load.image('item', 'assets/item.png');
        this.load.image('box', 'assets/box.png');
        this.load.image('cam', 'assets/cam.png');
        this.load.spritesheet('iddle', 'assets/persoface.png',{ frameWidth: 55, frameHeight:80});
        this.load.image('fond1', 'assets/fond1.png');
        this.load.image('fond2', 'assets/fond2.png');
        this.load.image('ciel', 'assets/ciel.png');
        this.load.spritesheet('ennemi', 'assets/animennemi.png', { frameWidth: 95, frameHeight:146});
        this.load.image('echelle', 'assets/echelle.png');
        this.load.audio('musique', 'assets/musique.mp3');
        
        
    }

    create() {

        this.musique = this.sound.add('musique', { loop: true });
        this.musique.play();
        
        

        this.add.image(300, 450, 'fond1').setScrollFactor(0.5).setDepth(-1);
        this.add.image(1000, 450, 'fond2').setScrollFactor(0.6).setDepth(-2);
        this.add.image(300, 450, 'ciel').setScrollFactor(0.7).setDepth(-3);
      
        const map = this.add.tilemap("map");
        const tiles = map.addTilesetImage("tile.", "tileset");
        const calque_fond = map.createLayer("Calque de Tuiles 2", tiles);
        const calque_plateforme = map.createLayer("Calque de Tuiles 1", tiles);
        const calque_details = map.createLayer("Calque de Tuiles 3", tiles);
        const calque_fenêtre = map.createLayer("Calque de Tuiles 7", tiles);
        
        

      
      
       
        this.bot2 = this.physics.add.sprite(101*32, 73*32, 'bot');
        this.bot3 = this.physics.add.sprite(75*32, 63*32, 'bot');
        this.bot4 = this.physics.add.sprite(158*32, 44*32, 'bot');
        this.bot5 = this.physics.add.sprite(146*32, 52*32, 'bot');
        this.bot6 = this.physics.add.sprite(127*32, 69*32, 'bot');
        this.bot7 = this.physics.add.sprite(151*32, 79*32, 'bot');
        this.bot8 = this.physics.add.sprite(202*32, 66*32, 'bot');
        this.bot9 = this.physics.add.sprite(230*32, 35*32, 'bot');
        this.bot10 = this.physics.add.sprite(277*32, 54*32, 'bot');
        this.bot11 = this.physics.add.sprite(325*32, 56*32, 'bot');
        this.bot12 = this.physics.add.sprite(329*32, 71*32, 'bot');
        this.bot13 = this.physics.add.sprite(385*32, 73*32, 'bot');
        this.bot14 = this.physics.add.sprite(419*32, 70*32, 'bot');
        this.bot15 = this.physics.add.sprite(366*32, 80*32, 'bot');
        this.bot16 = this.physics.add.sprite(408*32, 80*32, 'bot');
        //this.bot17 = this.physics.add.sprite(87*32, 90*32, 'bot');
        this.bot18 = this.physics.add.sprite(367*32, 68*32, 'bot');
       
        this.cam = this.physics.add.sprite(98*32, 53*32, 'cam'); // Ajout du troisième bot
        this.cam2 = this.physics.add.sprite(249*32, 90*32, 'cam'); // Ajout du troisième bot
        this.cam.active = true;
        this.cam2.active = true;
        this.cam3 = this.physics.add.sprite(350*32, 52*32, 'cam'); // Ajout du troisième bot
        this.cam3.active = true;

        this.item = this.physics.add.sprite(169*32, 31*32, 'item'); 
        this.item2 = this.physics.add.sprite(209*32, 53*32, 'item'); 
        this.box = this.physics.add.sprite(244*32, 89*32, 'box');
        this.box.setImmovable(true); // Permet à la boîte d'être immobile initialement
        this.box2 = this.physics.add.sprite(269*32, 51*32, 'box');
        this.box2.setImmovable(true); // Permet à la boîte d'être immobile initialement
        this.box3 = this.physics.add.sprite(316*32, 49*32, 'box');
        this.box3.setImmovable(true); // Permet à la boîte d'être immobile initialement
        this.box4 = this.physics.add.sprite(276*32, 36*32, 'box');
        this.box4.setImmovable(true); // Permet à la boîte d'être immobile initialement






        this.echelles = this.physics.add.group();
        this.createEchelle(89*32,83*32, 40,530);
        this.echelles2 = this.physics.add.group();
        this.createEchelle2(92*32, 70*32, 40, 350);
        this.echelles3 = this.physics.add.group();
        this.createEchelle3(87*32, 59*32, 40, 350);
        this.echelles4 = this.physics.add.group();
        this.createEchelle4(111*32, 47*32, 40, 500);
        this.echelles5 = this.physics.add.group();
        this.createEchelle5(188*32, 43*32, 40, 250);
        this.echelles6 = this.physics.add.group();
        this.createEchelle6(165*32, 51*32, 40, 320);
        this.echelles7 = this.physics.add.group();
        this.createEchelle7(157*32, 58*32, 40, 200);
        this.echelles8 = this.physics.add.group();
        this.createEchelle8(139*32, 75*32, 40, 1000);
        this.echelles9 = this.physics.add.group();
        this.createEchelle9(231*32, 80*32, 40, 750);
        this.echelles10 = this.physics.add.group();
        this.createEchelle10(205*32, 62*32, 40, 470);
        this.echelles11 = this.physics.add.group();
        this.createEchelle11(234*32, 33*32, 40, 300);
        this.echelles12 = this.physics.add.group();
        this.createEchelle12(245*32, 48*32, 40, 670);
        this.echelles13 = this.physics.add.group();
        this.createEchelle13(270*32, 59*32, 50, 150);
        this.echelles14 = this.physics.add.group();
        this.createEchelle14(279*32, 54*32, 40, 180);
        this.echelles15 = this.physics.add.group();
        this.createEchelle15(312*32, 54*32, 40, 300);
        this.echelles16 = this.physics.add.group();
        this.createEchelle16(271*32, 47*32, 40, 350);
        this.echelles17 = this.physics.add.group();
        this.createEchelle17(272*32, 33*32, 40, 300);
        this.echelles18 = this.physics.add.group();
        this.createEchelle18(338*32, 52*32, 40, 750);
        this.echelles19 = this.physics.add.group();
        this.createEchelle19(375*32, 78*32, 40, 1000);
        this.echelles20 = this.physics.add.group();
        this.createEchelle20(394*32, 74*32, 40, 800);
        this.echelles21 = this.physics.add.group();
        this.createEchelle21(403*32, 88*32, 40, 250);
        this.echelles22 = this.physics.add.group();
        this.createEchelle22(435*32, 78*32, 40, 950);
        this.echelles23 = this.physics.add.group();
        this.createEchelle23(320*32, 85*32, 40, 550);
        this.echelles24 = this.physics.add.group();
        this.createEchelle24(314*32, 72*32, 40, 350);
        this.echelles25 = this.physics.add.group();
        this.createEchelle25(319*32, 63*32, 40, 270);

        this.echelles26 = this.physics.add.group();
        this.createEchelle26(63*32,56*32, 40,180);



        this.player = this.physics.add.sprite(3*32, 90*32, 'perso').setDepth(100);
        this.player.setBounce(0.2);
        this.player.safe = false;
        this.player.detected = false;

        this.nbPierre = 0;
        this.pierrelance = false;

       

        calque_plateforme.setCollisionByProperty({ estSolide: true });

        this.bouton1 = this.add.rectangle(68*32, 58*32, 30, 30, "blue");
        this.rectbouton1 = this.physics.add.existing(this.bouton1, true);

        this.bouton2 = this.add.rectangle(217*32, 54*32, 30, 30, "blue");
        this.rectbouton2 = this.physics.add.existing(this.bouton2, true);

        this.bouton3 = this.add.rectangle(230*32, 28*32, 30, 30, "blue");
        this.rectbouton3 = this.physics.add.existing(this.bouton3, true);



        this.safe = this.add.rectangle(82*32, 90*32, 80, 80, "green");
        this.rectDeDetectSafe = this.physics.add.existing(this.safe, true);
        this.safe2 = this.add.rectangle(253*32, 90*32, 80, 80, "green");
        this.rectDeDetectSafe2 = this.physics.add.existing(this.safe2, true);
        this.safe3 = this.add.rectangle(430*32, 63*32, 80, 80, "green");
        this.rectDeDetectSafe3 = this.physics.add.existing(this.safe3, true);
        this.safe4 = this.add.rectangle(285*32, 90*32, 80, 80, "green");
        this.rectDeDetectSafe4 = this.physics.add.existing(this.safe4, true);
        this.safe5 = this.add.rectangle(220*32, 90*32, 80, 80, "green");
        this.rectDeDetectSafe5 = this.physics.add.existing(this.safe5, true);
        this.safe6 = this.add.rectangle(325*32, 58*32, 80, 80, "green");
        this.rectDeDetectSafe6 = this.physics.add.existing(this.safe6, true);
        this.safe7 = this.add.rectangle(168*32, 39*32, 80, 80, "green");
        this.rectDeDetectSafe7 = this.physics.add.existing(this.safe7, true);




        
        this.physics.add.collider(this.player, calque_plateforme);
       
        this.physics.add.collider(this.bot2, calque_plateforme);
        this.physics.add.collider(this.bot3, calque_plateforme);
        this.physics.add.collider(this.bot4, calque_plateforme);
        this.physics.add.collider(this.bot5, calque_plateforme);
        this.physics.add.collider(this.bot6, calque_plateforme);
        this.physics.add.collider(this.bot7, calque_plateforme);
        this.physics.add.collider(this.bot8, calque_plateforme);
        this.physics.add.collider(this.bot9, calque_plateforme);
        this.physics.add.collider(this.bot10, calque_plateforme);
        this.physics.add.collider(this.bot11, calque_plateforme);
        this.physics.add.collider(this.bot12, calque_plateforme);
        this.physics.add.collider(this.bot13, calque_plateforme);
        this.physics.add.collider(this.bot14, calque_plateforme);
        this.physics.add.collider(this.bot15, calque_plateforme);
        this.physics.add.collider(this.bot16, calque_plateforme);
        //this.physics.add.collider(this.bot17, calque_plateforme);
        this.physics.add.collider(this.bot18, calque_plateforme);

        this.physics.add.collider(this.item, calque_plateforme, this.collisionSol, null, this);
        this.physics.add.collider(this.item2, calque_plateforme, this.collisionSol, null, this);
        this.physics.add.collider(this.player, this.box, this.pushBox, null, this);
        this.physics.add.collider( this.box, calque_plateforme);
        this.physics.add.collider(this.player, this.box2, this.pushBox2, null, this);
        this.physics.add.collider( this.box2, calque_plateforme);
        this.physics.add.collider(this.player, this.box3, this.pushBox3, null, this);
        this.physics.add.collider( this.box3, calque_plateforme);
        this.physics.add.collider(this.player, this.box4, this.pushBox4, null, this);
        this.physics.add.collider( this.box4, calque_plateforme);
        
        this.physics.add.collider( this.cam, calque_plateforme);
        this.physics.add.collider( this.cam2, calque_plateforme);
        this.physics.add.collider( this.cam3, calque_plateforme);


        //this.physics.add.collider(this.player, this.item);

        // Détection de collision entre le joueur et les objets collectables
        this.physics.add.overlap(this.player, this.item, this.collectItem, null, this);
        this.physics.add.overlap(this.player, this.item2, this.collectItem, null, this);
        this.physics.add.overlap(this.player, this.bouton1, this.destroyCam, null, this);
        this.physics.add.overlap(this.player, this.bouton2, this.destroyCam2, null, this);
        this.physics.add.overlap(this.player, this.bouton3, this.destroyCam3, null, this);

        this.overlapDetect = this.physics.add.overlap(this.player, this.rectDeDetect1, this.playerDetected, null, this);
        this.overlapDetect2 = this.physics.add.overlap(this.player, this.rectDeDetect2, this.playerDetected, null, this);
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 5}),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: this.anims.generateFrameNumbers('iddle', { start: 0, end: 2}),
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('perso', { start: 7, end: 13 }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'rightEnnemi',
            frames: this.anims.generateFrameNumbers('ennemi', { start: 11, end: 19 }),
            frameRate: 8,
            repeat: -1
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.world.setBounds(0, 0, 116000, 116000);
        this.cameras.main.startFollow(this.player);

      
        
        this.cam.setVelocityX(50); // Initialisation de la vitesse du troisième bot
        this.cam.setCollideWorldBounds(true);
        this.cam.body.setImmovable(true)

        this.cam2.setVelocityX(50); // Initialisation de la vitesse du troisième bot
        this.cam2.setCollideWorldBounds(true);
        this.cam2.body.setImmovable(true)

        this.cam3.setVelocityX(50); // Initialisation de la vitesse du troisième bot
        this.cam3.setCollideWorldBounds(true);
        this.cam3.body.setImmovable(true)




        this.botGroup = this.physics.add.group();
        this.physics.add.collider(this.botGroup, calque_plateforme);
        
        this.botUn = new Bot(this,150*32, 28*32, 155*32,147*32,169*32,35*32,133*32,35*32);
        this.botGroup.add(this.botUn);
        this.botDeux = new Bot(this,195*32, 77*32, 198*32,188*32,211*32,85*32,176*32,85*32);
        this.botGroup.add(this.botDeux);
        this.botTrois = new Bot(this,269*32, 78*32, 273*32,265*32,286*32,84*32,253*32,84*32);
        this.botGroup.add(this.botTrois);
        this.botQuatre = new Bot(this,326*32, 34*32, 331*32,322*32,344*32,35*32,310*32,35*32);
        this.botGroup.add(this.botQuatre);
        this.botCinq = new Bot(this,422*32, 55*32, 426*32,418*32,439*32,57*32,405*32,57*32);
        this.botGroup.add(this.botCinq);

    const calque_avant = map.createLayer("Calque de Tuiles 4", tiles).setDepth(150);
    const calquelumiere = map.createLayer("Calque de Tuiles 5", tiles).setDepth(150);
    const calquelumiere2 = map.createLayer("Calque de Tuiles 6", tiles).setDepth(150);

    this.bot2.anims.play('rightEnnemi',true);
    this.bot2.body.setOffset(0,75);

    this.bot3.anims.play('rightEnnemi',true);
    this.bot3.body.setOffset(0,75);

    this.bot4.anims.play('rightEnnemi',true);
    this.bot4.body.setOffset(0,75);

    this.bot5.anims.play('rightEnnemi',true);
    this.bot5.body.setOffset(0,75);

    this.bot6.anims.play('rightEnnemi',true);
    this.bot6.body.setOffset(0,75);

    
    this.bot7.anims.play('rightEnnemi',true);
    this.bot7.body.setOffset(0,75);

       
    this.bot8.anims.play('rightEnnemi',true);
    this.bot8.body.setOffset(0,75);

        
    this.bot9.anims.play('rightEnnemi',true);
    this.bot9.body.setOffset(0,75);

    this.bot10.anims.play('rightEnnemi',true);
    this.bot10.body.setOffset(0,75);

    this.bot11.anims.play('rightEnnemi',true);
    this.bot11.body.setOffset(0,75);

    this.bot12.anims.play('rightEnnemi',true);
    this.bot12.body.setOffset(0,75);

    this.bot13.anims.play('rightEnnemi',true);
    this.bot13.body.setOffset(0,75);

    this.bot14.anims.play('rightEnnemi',true);
    this.bot14.body.setOffset(0,75);
    
    this.bot15.anims.play('rightEnnemi',true);
    this.bot15.body.setOffset(0,75);


    this.bot16.anims.play('rightEnnemi',true);
    this.bot16.body.setOffset(0,75);

    
    this.bot18.anims.play('rightEnnemi',true);
    this.bot18.body.setOffset(0,75);

   // this.bot17.anims.play('rightEnnemi',true);
    //this.bot17.body.setOffset(0,75);








    }


 pushBox(player, box) 
 {  
        if (this.player.body.touching.down && (this.cursors.left.isDown || this.cursors.right.isDown)) {
            box.setVelocityX(0); // Arrête la boîte si le joueur est sur celle-ci et pousse dans une direction
        } else if (this.cursors.left.isDown) {
            box.setVelocityX(-40); // Déplace la boîte vers la gauche lorsque le joueur pousse vers la gauche
        } else if (this.cursors.right.isDown) {
            box.setVelocityX(40); // Déplace la boîte vers la droite lorsque le joueur pousse vers la droite
        } else {
            box.setVelocityX(0); // Arrête la boîte si le joueur ne pousse pas dans une direction
        }
 
    }

    pushBox2(player, box2) 
    {  
           if (this.player.body.touching.down && (this.cursors.left.isDown || this.cursors.right.isDown)) {
               box2.setVelocityX(0); // Arrête la boîte si le joueur est sur celle-ci et pousse dans une direction
           } else if (this.cursors.left.isDown) {
               box2.setVelocityX(-40); // Déplace la boîte vers la gauche lorsque le joueur pousse vers la gauche
           } else if (this.cursors.right.isDown) {
               box2.setVelocityX(40); // Déplace la boîte vers la droite lorsque le joueur pousse vers la droite
           } else {
               box2.setVelocityX(0); // Arrête la boîte si le joueur ne pousse pas dans une direction
           }
    
       }
    
       pushBox3(player, box3) 
       {  
              if (this.player.body.touching.down && (this.cursors.left.isDown || this.cursors.right.isDown)) {
                box3.setVelocityX(0); // Arrête la boîte si le joueur est sur celle-ci et pousse dans une direction
              } else if (this.cursors.left.isDown) {
                box3.setVelocityX(-40); // Déplace la boîte vers la gauche lorsque le joueur pousse vers la gauche
              } else if (this.cursors.right.isDown) {
                box3.setVelocityX(40); // Déplace la boîte vers la droite lorsque le joueur pousse vers la droite
              } else {
                box3.setVelocityX(0); // Arrête la boîte si le joueur ne pousse pas dans une direction
              }
       
          }
          
    pushBox4(player, box4) 
    {  
           if (this.player.body.touching.down && (this.cursors.left.isDown || this.cursors.right.isDown)) {
            box4.setVelocityX(0); // Arrête la boîte si le joueur est sur celle-ci et pousse dans une direction
           } else if (this.cursors.left.isDown) {
            box4.setVelocityX(-40); // Déplace la boîte vers la gauche lorsque le joueur pousse vers la gauche
           } else if (this.cursors.right.isDown) {
            box4.setVelocityX(40); // Déplace la boîte vers la droite lorsque le joueur pousse vers la droite
           } else {
            box4.setVelocityX(0); // Arrête la boîte si le joueur ne pousse pas dans une direction
           }
    
       }
   

    destroyCam(player, bouton1)
    {
        if(this.cursors.down.isDown)
        {
            if(this.cam)
            {
                this.cam.destroy();
            }
        }
    }


    destroyCam2(player, bouton2)
    {
        if(this.cursors.down.isDown)
        {
            if(this.cam2)
            {
                this.cam2.destroy();
            }
        }
    }

    
    destroyCam3(player, bouton3)
    {
        if(this.cursors.down.isDown)
        {
            if(this.cam3)
            {
                this.cam3.destroy();
            }
        }
    }

    update() {
       

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-200);
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(200);
            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn',true);
        }

       if (this.player.body.velocity.y > 300) {
            // Le joueur a chuté d'une hauteur importante, redémarrer la scène
            this.player.setX(this.lastCheckpoint.x);
            this.player.setY(this.lastCheckpoint.y);
        }
    

        if (this.cursors.up.isDown && this.player.body.blocked.down) {
            this.player.setVelocityY(-140);
        }
       /* if (this.cursors.up.isDown && this.player.body.blocked.right) {
            this.player.setVelocityY(-200);
         }
         if (this.cursors.up.isDown && this.player.body.blocked.left) {
             this.player.setVelocityY(-200);
         }*/

      
        
        


        
        
 

        //console.log(this.pierrelance);
        if (this.nbPierre >0 && this.cursors.space.isDown && this.pierrelance == false
            && Math.sqrt(Math.pow(this.item.y - this.player.y, 2) + Math.pow(this.item.x - this.player.x, 2)) < 50 ){
            this.nbPierre -= 1;
            this.lancePierre();
        } else if (this.item.body.blocked.down) {
            this.item.setVelocity(0);
            this.item.setVisible(false);
        }
        //console.log(this.pierrelance);
        if (this.nbPierre >0 && this.cursors.space.isDown && this.pierrelance == false
            && Math.sqrt(Math.pow(this.item2.y - this.player.y, 2) + Math.pow(this.item2.x - this.player.x, 2)) < 50 ){
            this.nbPierre -= 1;
            this.lancePierre();
        } else if (this.item2.body.blocked.down) {
            this.item2.setVelocity(0);
            this.item2.setVisible(false);
        }
        


        if (this.physics.overlap(this.player, this.echelles)) {
            this.player.setVelocityY(0);
        
            if (this.cursors.up.isDown) {
                this.player.setVelocityY(-100); // Vitesse de montée
            } else if (this.cursors.down.isDown) {
                this.player.setVelocityY(100); // Vitesse de descente
            }
        }
       
        
        if(this.cam.active)
        {
            this.camUpdate(this.cam);
        }

        if(this.cam2.active)
        {
            this.cam2Update(this.cam2);
        }

        if(this.cam3.active)
        {
            this.cam3Update(this.cam3);
        }
    
        this.bot2update();
        this.bot3update();
        this.bot4update();
        this.bot5update();
        this.bot6update();
        this.bot7update();
        this.bot8update();
        this.bot9update();
        this.bot10update();
        this.bot11update();
        this.bot12update();
        this.bot13update();
        this.bot14update();
        this.bot15update();
        this.bot16update();
        //this.bot17update();
        this.bot18update();
        

      // Vérifie si l'action n'a pas encore été réalisée
      if (!this.actionExecuted && this.player.x >= 70) {
        //this.cinematic1()

        
    };

    if (Phaser.Geom.Intersects.RectangleToRectangle(this.bot4.getBounds(), this.item.getBounds())) {
        this.bot4.setVelocityX(0); // Arrête le bot2 lorsqu'il atteint l'objet "item"
        this.time.delayedCall(3000, () => {
            this.bot4.setVelocityX(50); // Fait bouger le bot2 après une pause de 3 secondes
        });
    }
    if (Phaser.Geom.Intersects.RectangleToRectangle(this.bot8.getBounds(), this.item2.getBounds())) {
        this.bot8.setVelocityX(0); // Arrête le bot2 lorsqu'il atteint l'objet "item"
        this.time2.delayedCall(3000, () => {
            this.bot8.setVelocityX(50); // Fait bouger le bot2 après une pause de 3 secondes
        });
    }

    if (this.physics.overlap(this.player, this.rectDeDetectSafe)|| this.physics.overlap(this.player, this.rectDeDetectSafe2) || this.physics.overlap(this.player, this.rectDeDetectSafe3) || this.physics.overlap(this.player, this.rectDeDetectSafe4) || this.physics.overlap(this.player, this.rectDeDetectSafe5) || this.physics.overlap(this.player, this.rectDeDetectSafe6) || this.physics.overlap(this.player, this.rectDeDetectSafe7))  {
        this.lastCheckpoint = { x: this.player.x, y: this.player.y };
    }
    
}

    camUpdate(currentCam)
    {
        if (this.cam.body.velocity.x > 0) {
            this.direction3 = "right";
        } else if (this.cam.body.velocity.x < 0) {
            this.direction3 = "left";
        }

        if (this.cam.x >= 111*32) {
            console.log("je vais vers la gauche !")
            this.direction3 = 'left';
            this.cam.setVelocityX(-50);
            this.cam.flipX = true;
        } else if (this.cam.x <= 95*32 ) {

            console.log("je vais vers la droite !")
            this.direction3 = 'right';
            this.cam.setVelocityX(50);
            this.cam.flipX = false;
        }

        if (this.direction3 === 'left') {
            this.cam.setVelocityX(-50);
            this.cam.flipX = true;
        } else if (this.direction2 === 'right') {
            this.cam.setVelocityX(50);
            this.cam.flipX = false;
         }
         var distX = Math.abs(this.player.x - this.cam.x);
         var distY = Math.abs(this.player.y - this.cam.y);
 
         if (distX < 140 && distY < 140) {
             console.log("Player detected!");
             this.playerDetected();
         
            }
         if (this.cam.body.velocity.x > 0) {
            this.direction3 = "right";
        } else if (this.cam.body.velocity.x < 0) {
            this.direction3 = "left";
        }
        
    
    }


    cam2Update()
    {
        if (this.cam2.body.velocity.x > 0) {
            this.direction3 = "right";
        } else if (this.cam2.body.velocity.x < 0) {
            this.direction3 = "left";
        }

        if (this.cam2.x >= 253*32) {
            console.log("je vais vers la gauche !")
            this.direction3 = 'left';
            this.cam2.setVelocityX(-50);
            this.cam2.flipX = true;
        } else if (this.cam2.x <= 239*32 ) {
            console.log("je vais vers la droite !")
            this.direction3 = 'right';
            this.cam2.setVelocityX(50);
            this.cam2.flipX = false;
        }

        
         var distX = Math.abs(this.player.x - this.cam2.x);
         var distY = Math.abs(this.player.y - this.cam2.y);

       
 
         if (distX < 140 && distY < 140) {
             console.log("Player detected!");
             this.playerDetected();
         
            }
         if (this.cam2.body.velocity.x > 0) {
            this.direction3 = "right";
        } else if (this.cam2.body.velocity.x < 0) {
            this.direction3 = "left";
        }
        
    
    }

    cam3Update()
    {
        if (this.cam3.body.velocity.x > 0) {
            this.direction3 = "right";
        } else if (this.cam3.body.velocity.x < 0) {
            this.direction3 = "left";
        }

        if (this.cam3.x >= 362*32) {
            console.log("je vais vers la gauche !")
            this.direction3 = 'left';
            this.cam3.setVelocityX(-50);
            this.cam3.flipX = true;
        } else if (this.cam3.x <= 344*32 ) {
            console.log("je vais vers la droite !")
            this.direction3 = 'right';
            this.cam3.setVelocityX(50);
            this.cam3.flipX = false;
        }

        
         var distX = Math.abs(this.player.x - this.cam3.x);
         var distY = Math.abs(this.player.y - this.cam3.y);

       
 
         if (distX < 140 && distY < 140) {
             console.log("Player detected!");
             this.playerDetected();
         
            }
         if (this.cam3.body.velocity.x > 0) {
            this.direction3 = "right";
        } else if (this.cam3.body.velocity.x < 0) {
            this.direction3 = "left";
        }
        
    
    }


    bot2update ()
    {
        if (this.bot2.body.velocity.x > 0) {
            this.direction2 = "right";
        } else if (this.bot2.body.velocity.x < 0) {
            this.direction2 = "left";
        }

        //if (Math.sqrt(Math.pow(this.item.y - this.bot2.y, 2) + Math.pow(this.item.x - this.bot2.x, 2)) < 200) {
            //this.physics.moveTo(this.bot2, this.item.x, this.bot2.y);
            
        //}

        if (this.bot2.x >= 108*32) {
            this.direction2 = 'left';
            this.bot2.setVelocityX(-50);
            this.bot2.flipX = true;
        } else if (this.bot2.x <= 93*32) {
            this.direction2 = 'right';
            this.bot2.setVelocityX(50);
            this.bot2.flipX = false;
        }

        if (this.direction2 === 'left') {
            this.bot2.setVelocityX(-50);
            this.bot2.flipX = true;
        } else if (this.direction2 === 'right') {
            this.bot2.setVelocityX(50);
            this.bot2.flipX = false;
         }
         var distX = Math.abs(this.player.x - this.bot2.x);
         var distY = Math.abs(this.player.y - this.bot2.y);
 
         if (distX < 100 && distY < 100) {
             console.log("Player detected!");
             this.playerDetected();
         
            }
         if (this.bot2.body.velocity.x > 0) {
            this.direction2 = "right";
        } else if (this.bot2.body.velocity.x < 0) {
            this.direction2 = "left";
        }

        }

        bot3update ()
        {
            if (this.bot3.body.velocity.x > 0) {
                this.direction2 = "right";
            } else if (this.bot3.body.velocity.x < 0) {
                this.direction2 = "left";
            }
    
            //if (Math.sqrt(Math.pow(this.item.y - this.bot2.y, 2) + Math.pow(this.item.x - this.bot2.x, 2)) < 200) {
                //this.physics.moveTo(this.bot2, this.item.x, this.bot2.y);
                
            //}
    
            if (this.bot3.x >= 90*32) {
                this.direction2 = 'left';
                this.bot3.setVelocityX(-50);
                this.bot3.flipX = true;
            } else if (this.bot3.x <= 74*32) {
                this.direction2 = 'right';
                this.bot3.setVelocityX(50);
                this.bot3.flipX = false;
            }
    
            if (this.direction2 === 'left') {
                this.bot3.setVelocityX(-50);
                this.bot3.flipX = true;
            } else if (this.direction2 === 'right') {
                this.bot3.setVelocityX(50);
                this.bot3.flipX = false;
             }
             var distX = Math.abs(this.player.x - this.bot3.x);
             var distY = Math.abs(this.player.y - this.bot3.y);
     
             if (distX < 150 && distY < 150) {
                 console.log("Player detected!");
                 this.playerDetected();
             
                }
             if (this.bot3.body.velocity.x > 0) {
                this.direction2 = "right";
            } else if (this.bot3.body.velocity.x < 0) {
                this.direction2 = "left";
            }
            }
            
            bot4update ()
            {
                if (this.bot4.body.velocity.x > 0) {
                    this.direction2 = "right";
                } else if (this.bot4.body.velocity.x < 0) {
                    this.direction2 = "left";
                }
        
                if (Math.sqrt(Math.pow(this.item.y - this.bot4.y, 2) + Math.pow(this.item.x - this.bot4.x, 2)) < 200) {
                    this.physics.moveTo(this.bot4, this.item.x, this.bot4.y);
                    
                }
        
                if (this.bot4.x >= 163*32) {
                    this.direction2 = 'left';
                    this.bot4.setVelocityX(-50);
                    this.bot4.flipX = true;
                } else if (this.bot4.x <= 148*32) {
                    this.direction2 = 'right';
                    this.bot4.setVelocityX(50);
                    this.bot4.flipX = false;
                }
        
                if (this.direction2 === 'left') {
                    this.bot4.setVelocityX(-50);
                    this.bot4.flipX = true;
                } else if (this.direction2 === 'right') {
                    this.bot4.setVelocityX(50);
                    this.bot4.flipX = false;
                 }
                 var distX = Math.abs(this.player.x - this.bot4.x);
                 var distY = Math.abs(this.player.y - this.bot4.y);
         
                 if (distX < 100 && distY < 100) {
                     console.log("Player detected!");
                     this.playerDetected();
                 
                    }
                 if (this.bot4.body.velocity.x > 0) {
                    this.direction2 = "right";
                } else if (this.bot4.body.velocity.x < 0) {
                    this.direction2 = "left";
                }
                }
        
     bot5update ()
    {
        if (this.bot5.body.velocity.x > 0) {
            this.direction2 = "right";
        } else if (this.bot5.body.velocity.x < 0) {
            this.direction2 = "left";
        }

        //if (Math.sqrt(Math.pow(this.item.y - this.bot2.y, 2) + Math.pow(this.item.x - this.bot2.x, 2)) < 200) {
            //this.physics.moveTo(this.bot2, this.item.x, this.bot2.y);
            
        //}

        if (this.bot5.x >= 155*32) {
            this.direction2 = 'left';
            this.bot5.setVelocityX(-50);
            this.bot5.flipX = true;
        } else if (this.bot5.x <= 142*32) {
            this.direction2 = 'right';
            this.bot5.setVelocityX(50);
            this.bot5.flipX = false;
        }

        if (this.direction2 === 'left') {
            this.bot5.setVelocityX(-50);
            this.bot5.flipX = true;
        } else if (this.direction2 === 'right') {
            this.bot5.setVelocityX(50);
            this.bot5.flipX = false;
         }
         var distX = Math.abs(this.player.x - this.bot5.x);
         var distY = Math.abs(this.player.y - this.bot5.y);
 
         if (distX < 100 && distY < 100) {
             console.log("Player detected!");
             this.playerDetected();
         
            }
         if (this.bot5.body.velocity.x > 0) {
            this.direction2 = "right";
        } else if (this.bot5.body.velocity.x < 0) {
            this.direction2 = "left";
        }
        }

        bot6update ()
        {
            if (this.bot6.body.velocity.x > 0) {
                this.direction2 = "right";
            } else if (this.bot6.body.velocity.x < 0) {
                this.direction2 = "left";
            }
    
            //if (Math.sqrt(Math.pow(this.item.y - this.bot2.y, 2) + Math.pow(this.item.x - this.bot2.x, 2)) < 200) {
                //this.physics.moveTo(this.bot2, this.item.x, this.bot2.y);
                
            //}
    
            if (this.bot6.x >= 134*32) {
                this.direction2 = 'left';
                this.bot6.setVelocityX(-50);
                this.bot6.flipX = true;
            } else if (this.bot6.x <= 121*32) {
                this.direction2 = 'right';
                this.bot6.setVelocityX(50);
                this.bot6.flipX = false;
            }
    
            if (this.direction2 === 'left') {
                this.bot6.setVelocityX(-50);
                this.bot6.flipX = true;
            } else if (this.direction2 === 'right') {
                this.bot6.setVelocityX(50);
                this.bot6.flipX = false;
             }
             var distX = Math.abs(this.player.x - this.bot6.x);
             var distY = Math.abs(this.player.y - this.bot6.y);
     
             if (distX < 200 && distY < 200) {
                 console.log("Player detected!");
                 this.playerDetected();
             
                }
             if (this.bot6.body.velocity.x > 0) {
                this.direction2 = "right";
            } else if (this.bot6.body.velocity.x < 0) {
                this.direction2 = "left";
            }
            }
    
            bot7update ()
            {
                if (this.bot7.body.velocity.x > 0) {
                    this.direction2 = "right";
                } else if (this.bot7.body.velocity.x < 0) {
                    this.direction2 = "left";
                }
        
                //if (Math.sqrt(Math.pow(this.item.y - this.bot2.y, 2) + Math.pow(this.item.x - this.bot2.x, 2)) < 200) {
                    //this.physics.moveTo(this.bot2, this.item.x, this.bot2.y);
                    
                //}
        
                if (this.bot7.x >= 157*32) {
                    this.direction2 = 'left';
                    this.bot7.setVelocityX(-50);
                    this.bot7.flipX = true;
                } else if (this.bot7.x <= 73*32) {
                    this.direction2 = 'right';
                    this.bot7.setVelocityX(50);
                    this.bot7.flipX = false;
                }
        
                if (this.direction2 === 'left') {
                    this.bot7.setVelocityX(-50);
                    this.bot7.flipX = true;
                } else if (this.direction2 === 'right') {
                    this.bot7.setVelocityX(50);
                    this.bot7.flipX = false;
                 }
                 var distX = Math.abs(this.player.x - this.bot7.x);
                 var distY = Math.abs(this.player.y - this.bot7.y);
         
                 if (distX < 200 && distY < 200) {
                     console.log("Player detected!");
                     this.playerDetected();
                 
                    }
                 if (this.bot7.body.velocity.x > 0) {
                    this.direction2 = "right";
                } else if (this.bot7.body.velocity.x < 0) {
                    this.direction2 = "left";
                }
            }

            bot8update ()
            {
                if (this.bot8.body.velocity.x > 0) {
                    this.direction2 = "right";
                } else if (this.bot8.body.velocity.x < 0) {
                    this.direction2 = "left";
                }
        
                if (Math.sqrt(Math.pow(this.item2.y - this.bot8.y, 2) + Math.pow(this.item2.x - this.bot8.x, 2)) < 200) {
                    this.physics.moveTo(this.bot8, this.item2.x, this.bot8.y);
                    
                }
        
                if (this.bot8.x >= 202*32) {
                    this.direction2 = 'left';
                    this.bot8.setVelocityX(-50);
                    this.bot8.flipX = true;
                } else if (this.bot8.x <= 191*32) {
                    this.direction2 = 'right';
                    this.bot8.setVelocityX(50);
                    this.bot8.flipX = false;
                }
        
                if (this.direction2 === 'left') {
                    this.bot8.setVelocityX(-50);
                    this.bot8.flipX = true;
                } else if (this.direction2 === 'right') {
                    this.bot8.setVelocityX(50);
                    this.bot8.flipX = false;
                 }
                 var distX = Math.abs(this.player.x - this.bot8.x);
                 var distY = Math.abs(this.player.y - this.bot8.y);
         
                 if (distX < 100 && distY < 100) {
                     console.log("Player detected!");
                     this.playerDetected();
                 
                    }
                 if (this.bot8.body.velocity.x > 0) {
                    this.direction2 = "right";
                } else if (this.bot8.body.velocity.x < 0) {
                    this.direction2 = "left";
                }
                }

        bot9update ()
                {
                    if (this.bot9.body.velocity.x > 0) {
                        this.direction2 = "right";
                    } else if (this.bot9.body.velocity.x < 0) {
                        this.direction2 = "left";
                    }
            
                    //if (Math.sqrt(Math.pow(this.item.y - this.bot2.y, 2) + Math.pow(this.item.x - this.bot2.x, 2)) < 200) {
                        //this.physics.moveTo(this.bot2, this.item.x, this.bot2.y);
                        
                    //}
            
                    if (this.bot9.x >= 232*32) {
                        this.direction2 = 'left';
                        this.bot9.setVelocityX(-50);
                        this.bot9.flipX = true;
                    } else if (this.bot9.x <= 224*32) {
                        this.direction2 = 'right';
                        this.bot9.setVelocityX(50);
                        this.bot9.flipX = false;
                    }
            
                    if (this.direction2 === 'left') {
                        this.bot9.setVelocityX(-50);
                        this.bot9.flipX = true;
                    } else if (this.direction2 === 'right') {
                        this.bot9.setVelocityX(50);
                        this.bot9.flipX = false;
                     }
                     var distX = Math.abs(this.player.x - this.bot9.x);
                     var distY = Math.abs(this.player.y - this.bot9.y);
             
                     if (distX < 100 && distY < 100) {
                         console.log("Player detected!");
                         this.playerDetected();
                     
                        }
                     if (this.bot9.body.velocity.x > 0) {
                        this.direction2 = "right";
                    } else if (this.bot9.body.velocity.x < 0) {
                        this.direction2 = "left";
                    }
                    }
                
            bot10update ()
                    {
                        if (this.bot10.body.velocity.x > 0) {
                            this.direction2 = "right";
                        } else if (this.bot10.body.velocity.x < 0) {
                            this.direction2 = "left";
                        }
                
                        //if (Math.sqrt(Math.pow(this.item.y - this.bot2.y, 2) + Math.pow(this.item.x - this.bot2.x, 2)) < 200) {
                            //this.physics.moveTo(this.bot2, this.item.x, this.bot2.y);
                            
                        //}
                
                        if (this.bot10.x >= 287*32) {
                            this.direction2 = 'left';
                            this.bot10.setVelocityX(-50);
                            this.bot10.flipX = true;
                        } else if (this.bot10.x <= 271*32) {
                            this.direction2 = 'right';
                            this.bot10.setVelocityX(50);
                            this.bot10.flipX = false;
                        }
                
                        if (this.direction2 === 'left') {
                            this.bot10.setVelocityX(-50);
                            this.bot10.flipX = true;
                        } else if (this.direction2 === 'right') {
                            this.bot10.setVelocityX(50);
                            this.bot10.flipX = false;
                         }
                         var distX = Math.abs(this.player.x - this.bot10.x);
                         var distY = Math.abs(this.player.y - this.bot10.y);
                 
                         if (distX < 100 && distY < 100) {
                             console.log("Player detected!");
                             this.playerDetected();
                         
                            }
                         if (this.bot10.body.velocity.x > 0) {
                            this.direction2 = "right";
                        } else if (this.bot10.body.velocity.x < 0) {
                            this.direction2 = "left";
                        }
                        }  
    
                bot11update ()
                        {
                            if (this.bot11.body.velocity.x > 0) {
                                this.direction2 = "right";
                            } else if (this.bot11.body.velocity.x < 0) {
                                this.direction2 = "left";
                            }
                    
                            //if (Math.sqrt(Math.pow(this.item.y - this.bot2.y, 2) + Math.pow(this.item.x - this.bot2.x, 2)) < 200) {
                                //this.physics.moveTo(this.bot2, this.item.x, this.bot2.y);
                                
                            //}
                    
                            if (this.bot11.x >= 329*32) {
                                this.direction2 = 'left';
                                this.bot11.setVelocityX(-50);
                                this.bot11.flipX = true;
                            } else if (this.bot11.x <= 321*32) {
                                this.direction2 = 'right';
                                this.bot11.setVelocityX(50);
                                this.bot11.flipX = false;
                            }
                    
                            if (this.direction2 === 'left') {
                                this.bot11.setVelocityX(-50);
                                this.bot11.flipX = true;
                            } else if (this.direction2 === 'right') {
                                this.bot11.setVelocityX(50);
                                this.bot11.flipX = false;
                             }
                             var distX = Math.abs(this.player.x - this.bot11.x);
                             var distY = Math.abs(this.player.y - this.bot11.y);
                     
                             if (distX < 100 && distY < 100) {
                                 console.log("Player detected!");
                                 this.playerDetected();
                             
                                }
                             if (this.bot11.body.velocity.x > 0) {
                                this.direction2 = "right";
                            } else if (this.bot11.body.velocity.x < 0) {
                                this.direction2 = "left";
                            }
                            }
                        
                        
            bot12update ()
                 {
                                  if (this.bot12.body.velocity.x > 0) {
                                    this.direction2 = "right";
                                } else if (this.bot12.body.velocity.x < 0) {
                                    this.direction2 = "left";
                                }
                        
                                //if (Math.sqrt(Math.pow(this.item.y - this.bot2.y, 2) + Math.pow(this.item.x - this.bot2.x, 2)) < 200) {
                                    //this.physics.moveTo(this.bot2, this.item.x, this.bot2.y);
                                    
                                //}
                        
                                if (this.bot12.x >= 334*32) {
                                    this.direction2 = 'left';
                                    this.bot12.setVelocityX(-50);
                                    this.bot12.flipX = true;
                                } else if (this.bot12.x <= 322*32) {
                                    this.direction2 = 'right';
                                    this.bot12.setVelocityX(50);
                                    this.bot12.flipX = false;
                                }
                        
                                if (this.direction2 === 'left') {
                                    this.bot12.setVelocityX(-50);
                                    this.bot12.flipX = true;
                                } else if (this.direction2 === 'right') {
                                    this.bot12.setVelocityX(50);
                                    this.bot12.flipX = false;
                                 }
                                 var distX = Math.abs(this.player.x - this.bot12.x);
                                 var distY = Math.abs(this.player.y - this.bot12.y);
                         
                                 if (distX < 100 && distY < 100) {
                                     console.log("Player detected!");
                                     this.playerDetected();
                                 
                                    }
                                 if (this.bot12.body.velocity.x > 0) {
                                    this.direction2 = "right";
                                } else if (this.bot12.body.velocity.x < 0) {
                                    this.direction2 = "left";
                                }
                                }
    
    
                                bot13update ()
                                {
                                    if (this.bot13.body.velocity.x > 0) {
                                        this.direction2 = "right";
                                    } else if (this.bot13.body.velocity.x < 0) {
                                        this.direction2 = "left";
                                    }
                            
                                    //if (Math.sqrt(Math.pow(this.item.y - this.bot2.y, 2) + Math.pow(this.item.x - this.bot2.x, 2)) < 200) {
                                        //this.physics.moveTo(this.bot2, this.item.x, this.bot2.y);
                                        
                                    //}
                            
                                    if (this.bot13.x >= 391*32) {
                                        this.direction2 = 'left';
                                        this.bot13.setVelocityX(-50);
                                        this.bot13.flipX = true;
                                    } else if (this.bot13.x <= 378*32) {
                                        this.direction2 = 'right';
                                        this.bot13.setVelocityX(50);
                                        this.bot13.flipX = false;
                                    }
                            
                                    if (this.direction2 === 'left') {
                                        this.bot13.setVelocityX(-50);
                                        this.bot13.flipX = true;
                                    } else if (this.direction2 === 'right') {
                                        this.bot13.setVelocityX(50);
                                        this.bot13.flipX = false;
                                     }
                                     var distX = Math.abs(this.player.x - this.bot13.x);
                                     var distY = Math.abs(this.player.y - this.bot13.y);
                             
                                     if (distX < 100 && distY < 100) {
                                         console.log("Player detected!");
                                         this.playerDetected();
                                     
                                        }
                                     if (this.bot13.body.velocity.x > 0) {
                                        this.direction2 = "right";
                                    } else if (this.bot13.body.velocity.x < 0) {
                                        this.direction2 = "left";
                                    }
                                    }
                            
                                    bot14update ()
                                    {
                                        if (this.bot14.body.velocity.x > 0) {
                                            this.direction2 = "right";
                                        } else if (this.bot14.body.velocity.x < 0) {
                                            this.direction2 = "left";
                                        }
                                
                                        //if (Math.sqrt(Math.pow(this.item.y - this.bot2.y, 2) + Math.pow(this.item.x - this.bot2.x, 2)) < 200) {
                                            //this.physics.moveTo(this.bot2, this.item.x, this.bot2.y);
                                            
                                        //}
                                
                                        if (this.bot14.x >= 426*32) {
                                            this.direction2 = 'left';
                                            this.bot14.setVelocityX(-50);
                                            this.bot14.flipX = true;
                                        } else if (this.bot14.x <= 413*32) {
                                            this.direction2 = 'right';
                                            this.bot14.setVelocityX(50);
                                            this.bot14.flipX = false;
                                        }
                                
                                        if (this.direction2 === 'left') {
                                            this.bot14.setVelocityX(-50);
                                            this.bot14.flipX = true;
                                        } else if (this.direction2 === 'right') {
                                            this.bot14.setVelocityX(50);
                                            this.bot14.flipX = false;
                                         }
                                         var distX = Math.abs(this.player.x - this.bot14.x);
                                         var distY = Math.abs(this.player.y - this.bot14.y);
                                 
                                         if (distX < 150 && distY < 150) {
                                             console.log("Player detected!");
                                             this.playerDetected();
                                         
                                            }
                                         if (this.bot14.body.velocity.x > 0) {
                                            this.direction2 = "right";
                                        } else if (this.bot14.body.velocity.x < 0) {
                                            this.direction2 = "left";
                                        }
                                        }
                                        
                                        bot15update ()
                                        {
                                            if (this.bot15.body.velocity.x > 0) {
                                                this.direction2 = "right";
                                            } else if (this.bot15.body.velocity.x < 0) {
                                                this.direction2 = "left";
                                            }
                                    
                                           // if (Math.sqrt(Math.pow(this.item.y - this.bot4.y, 2) + Math.pow(this.item.x - this.bot4.x, 2)) < 200) {
                                              //  this.physics.moveTo(this.bot4, this.item.x, this.bot4.y);
                                                
                                            //}
                                    
                                            if (this.bot15.x >= 372*32) {
                                                this.direction2 = 'left';
                                                this.bot15.setVelocityX(-50);
                                                this.bot15.flipX = true;
                                            } else if (this.bot15.x <= 359*32) {
                                                this.direction2 = 'right';
                                                this.bot15.setVelocityX(50);
                                                this.bot15.flipX = false;
                                            }
                                    
                                            if (this.direction2 === 'left') {
                                                this.bot15.setVelocityX(-50);
                                                this.bot15.flipX = true;
                                            } else if (this.direction2 === 'right') {
                                                this.bot15.setVelocityX(50);
                                                this.bot15.flipX = false;
                                             }
                                             var distX = Math.abs(this.player.x - this.bot15.x);
                                             var distY = Math.abs(this.player.y - this.bot15.y);
                                     
                                             if (distX < 100 && distY < 100) {
                                                 console.log("Player detected!");
                                                 this.playerDetected();
                                             
                                                }
                                             if (this.bot15.body.velocity.x > 0) {
                                                this.direction2 = "right";
                                            } else if (this.bot15.body.velocity.x < 0) {
                                                this.direction2 = "left";
                                            }
                                            }
                                    
                                 bot16update ()
                                {
                                    if (this.bot16.body.velocity.x > 0) {
                                        this.direction2 = "right";
                                    } else if (this.bot16.body.velocity.x < 0) {
                                        this.direction2 = "left";
                                    }
                            
                                    //if (Math.sqrt(Math.pow(this.item.y - this.bot2.y, 2) + Math.pow(this.item.x - this.bot2.x, 2)) < 200) {
                                        //this.physics.moveTo(this.bot2, this.item.x, this.bot2.y);
                                        
                                    //}
                            
                                    if (this.bot16.x >= 413*32) {
                                        this.direction2 = 'left';
                                        this.bot16.setVelocityX(-50);
                                        this.bot16.flipX = true;
                                    } else if (this.bot16.x <= 405*32) {
                                        this.direction2 = 'right';
                                        this.bot16.setVelocityX(50);
                                        this.bot16.flipX = false;
                                    }
                            
                                    if (this.direction2 === 'left') {
                                        this.bot16.setVelocityX(-50);
                                        this.bot16.flipX = true;
                                    } else if (this.direction2 === 'right') {
                                        this.bot16.setVelocityX(50);
                                        this.bot16.flipX = false;
                                     }
                                     var distX = Math.abs(this.player.x - this.bot16.x);
                                     var distY = Math.abs(this.player.y - this.bot16.y);
                             
                                     if (distX < 100 && distY < 100) {
                                         console.log("Player detected!");
                                         this.playerDetected();
                                     
                                        }
                                     if (this.bot16.body.velocity.x > 0) {
                                        this.direction2 = "right";
                                    } else if (this.bot16.body.velocity.x < 0) {
                                        this.direction2 = "left";
                                    }
                                    }
                            
                                    /*bot17update ()
                                    {
                                        if (this.bot17.body.velocity.x > 0) {
                                            this.direction2 = "right";
                                        } else if (this.bot17.body.velocity.x < 0) {
                                            this.direction2 = "left";
                                        }
                                
                                        //if (Math.sqrt(Math.pow(this.item.y - this.bot2.y, 2) + Math.pow(this.item.x - this.bot2.x, 2)) < 200) {
                                            //this.physics.moveTo(this.bot2, this.item.x, this.bot2.y);
                                            
                                        //}
                                
                                        if (this.bot17.x >= 92*32) {
                                            this.direction2 = 'left';
                                            this.bot17.setVelocityX(-50);
                                            this.bot17.flipX = true;
                                        } else if (this.bot17.x <= 72*32) {
                                            this.direction2 = 'right';
                                            this.bot17.setVelocityX(50);
                                            this.bot17.flipX = false;
                                        }
                                
                                        if (this.direction2 === 'left') {
                                            this.bot17.setVelocityX(-50);
                                            this.bot17.flipX = true;
                                        } else if (this.direction2 === 'right') {
                                            this.bot17.setVelocityX(50);
                                            this.bot17.flipX = false;
                                         }
                                         var distX = Math.abs(this.player.x - this.bot17.x);
                                         var distY = Math.abs(this.player.y - this.bot17.y);
                                 
                                         if (distX < 100 && distY < 100) {
                                             console.log("Player detected!");
                                             this.playerDetected();
                                         
                                            }
                                         if (this.bot17.body.velocity.x > 0) {
                                            this.direction2 = "right";
                                        } else if (this.bot17.body.velocity.x < 0) {
                                            this.direction2 = "left";
                                        }
                                        }*/
                                    
                            
                            bot18update ()
                                        {
                                            if (this.bot18.body.velocity.x > 0) {
                                                this.direction2 = "right";
                                            } else if (this.bot18.body.velocity.x < 0) {
                                                this.direction2 = "left";
                                            }
                                    
                                            //if (Math.sqrt(Math.pow(this.item.y - this.bot2.y, 2) + Math.pow(this.item.x - this.bot2.x, 2)) < 200) {
                                                //this.physics.moveTo(this.bot2, this.item.x, this.bot2.y);
                                                
                                            //}
                                    
                                            if (this.bot18.x >= 372*32) {
                                                this.direction2 = 'left';
                                                this.bot18.setVelocityX(-50);
                                                this.bot18.flipX = true;
                                            } else if (this.bot18.x <= 359*32) {
                                                this.direction2 = 'right';
                                                this.bot18.setVelocityX(50);
                                                this.bot18.flipX = false;
                                            }
                                    
                                            if (this.direction2 === 'left') {
                                                this.bot18.setVelocityX(-50);
                                                this.bot18.flipX = true;
                                            } else if (this.direction2 === 'right') {
                                                this.bot18.setVelocityX(50);
                                                this.bot18.flipX = false;
                                             }
                                             var distX = Math.abs(this.player.x - this.bot18.x);
                                             var distY = Math.abs(this.player.y - this.bot18.y);
                                     
                                             if (distX < 100 && distY < 100) {
                                                 console.log("Player detected!");
                                                 this.playerDetected();
                                             
                                                }
                                             if (this.bot18.body.velocity.x > 0) {
                                                this.direction2 = "right";
                                            } else if (this.bot18.body.velocity.x < 0) {
                                                this.direction2 = "left";
                                            }
                                            }
                                
    
 /*
cinematic1() {

    // Bloque les mouvements du joueur
        this.player.setImmovable(true);
    
    // Déplace la caméra vers les coordonnées spécifiées (4800, 3530) pendant 3 secondes
         this.cameras.main.pan(2850, 2816, 3000, 'Sine.easeInOut', false, () => {
    // Après quelques secondes, revient à la caméra sur le joueur et débloque ses mouvements
        this.time.delayedCall(5000, () => {
    // Fait revenir la caméra sur le joueur
        this.cameras.main.pan(this.player.x, this.player.y, 1000, 'Sine.easeInOut', false, () => {
    // Débloque les mouvements du joueur
        this.player.setImmovable(false);
    
    // Met à jour la variable pour indiquer que l'action a été réalisée
        this.actionExecuted = true;
    
                    });
                });
            });
        }
        */

    createEchelle(x, y, width, height) {
        const echelle = this.echelles.create(x, y, 'echelle');
        echelle.setOrigin(0, 0);
        echelle.setSize(width, height);
        echelle.setImmovable(true);
        echelle.body.allowGravity = false;
        echelle.body.checkCollision.up = false;
        echelle.body.checkCollision.down = false;
    }
    createEchelle2(x, y, width, height) {
        const echelle2 = this.echelles.create(x, y, 'echelle');
        echelle2.setOrigin(0, 0);
        echelle2.setSize(width, height);
        echelle2.setImmovable(true);
        echelle2.body.allowGravity = false;
        echelle2.body.checkCollision.up = false;
        echelle2.body.checkCollision.down = false;
    }
    createEchelle3(x, y, width, height) {
        const echelle3 = this.echelles.create(x, y, 'echelle');
        echelle3.setOrigin(0, 0);
        echelle3.setSize(width, height);
        echelle3.setImmovable(true);
        echelle3.body.allowGravity = false;
        echelle3.body.checkCollision.up = false;
        echelle3.body.checkCollision.down = false;
    }
    createEchelle4(x, y, width, height) {
        const echelle4 = this.echelles.create(x, y, 'echelle');
        echelle4.setOrigin(0, 0);
        echelle4.setSize(width, height);
        echelle4.setImmovable(true);
        echelle4.body.allowGravity = false;
        echelle4.body.checkCollision.up = false;
        echelle4.body.checkCollision.down = false;
    }
    createEchelle5(x, y, width, height) {
        const echelle5 = this.echelles.create(x, y, 'echelle');
        echelle5.setOrigin(0, 0);
        echelle5.setSize(width, height);
        echelle5.setImmovable(true);
        echelle5.body.allowGravity = false;
        echelle5.body.checkCollision.up = false;
        echelle5.body.checkCollision.down = false;
    }
    createEchelle6(x, y, width, height) {
        const echelle6 = this.echelles.create(x, y, 'echelle');
        echelle6.setOrigin(0, 0);
        echelle6.setSize(width, height);
        echelle6.setImmovable(true);
        echelle6.body.allowGravity = false;
        echelle6.body.checkCollision.up = false;
        echelle6.body.checkCollision.down = false;
    }
    createEchelle7(x, y, width, height) {
        const echelle7 = this.echelles.create(x, y, 'echelle');
        echelle7.setOrigin(0, 0);
        echelle7.setSize(width, height);
        echelle7.setImmovable(true);
        echelle7.body.allowGravity = false;
        echelle7.body.checkCollision.up = false;
        echelle7.body.checkCollision.down = false;
    }
    createEchelle8(x, y, width, height) {
        const echelle8 = this.echelles.create(x, y, 'echelle');
        echelle8.setOrigin(0, 0);
        echelle8.setSize(width, height);
        echelle8.setImmovable(true);
        echelle8.body.allowGravity = false;
        echelle8.body.checkCollision.up = false;
        echelle8.body.checkCollision.down = false;
    } 
    createEchelle9(x, y, width, height) {
        const echelle9 = this.echelles.create(x, y, 'echelle');
        echelle9.setOrigin(0, 0);
        echelle9.setSize(width, height);
        echelle9.setImmovable(true);
        echelle9.body.allowGravity = false;
        echelle9.body.checkCollision.up = false;
        echelle9.body.checkCollision.down = false;
    }
    createEchelle10(x, y, width, height) {
        const echelle10 = this.echelles.create(x, y, 'echelle');
        echelle10.setOrigin(0, 0);
        echelle10.setSize(width, height);
        echelle10.setImmovable(true);
        echelle10.body.allowGravity = false;
        echelle10.body.checkCollision.up = false;
        echelle10.body.checkCollision.down = false;
    }
    createEchelle11(x, y, width, height) {
        const echelle11 = this.echelles.create(x, y, 'echelle');
        echelle11.setOrigin(0, 0);
        echelle11.setSize(width, height);
        echelle11.setImmovable(true);
        echelle11.body.allowGravity = false;
        echelle11.body.checkCollision.up = false;
        echelle11.body.checkCollision.down = false;
    }
    createEchelle12(x, y, width, height) {
        const echelle12 = this.echelles.create(x, y, 'echelle');
        echelle12.setOrigin(0, 0);
        echelle12.setSize(width, height);
        echelle12.setImmovable(true);
        echelle12.body.allowGravity = false;
        echelle12.body.checkCollision.up = false;
        echelle12.body.checkCollision.down = false;
    } createEchelle13(x, y, width, height) {
        const echelle13 = this.echelles.create(x, y, 'echelle');
        echelle13.setOrigin(0, 0);
        echelle13.setSize(width, height);
        echelle13.setImmovable(true);
        echelle13.body.allowGravity = false;
        echelle13.body.checkCollision.up = false;
        echelle13.body.checkCollision.down = false;
    }
    createEchelle14(x, y, width, height) {
        const echelle14 = this.echelles.create(x, y, 'echelle');
        echelle14.setOrigin(0, 0);
        echelle14.setSize(width, height);
        echelle14.setImmovable(true);
        echelle14.body.allowGravity = false;
        echelle14.body.checkCollision.up = false;
        echelle14.body.checkCollision.down = false;
    }
    createEchelle15(x, y, width, height) {
        const echelle15 = this.echelles.create(x, y, 'echelle');
        echelle15.setOrigin(0, 0);
        echelle15.setSize(width, height);
        echelle15.setImmovable(true);
        echelle15.body.allowGravity = false;
        echelle15.body.checkCollision.up = false;
        echelle15.body.checkCollision.down = false;
    }
    createEchelle16(x, y, width, height) {
        const echelle16 = this.echelles.create(x, y, 'echelle');
        echelle16.setOrigin(0, 0);
        echelle16.setSize(width, height);
        echelle16.setImmovable(true);
        echelle16.body.allowGravity = false;
        echelle16.body.checkCollision.up = false;
        echelle16.body.checkCollision.down = false;
    } createEchelle17(x, y, width, height) {
        const echelle17 = this.echelles.create(x, y, 'echelle');
        echelle17.setOrigin(0, 0);
        echelle17.setSize(width, height);
        echelle17.setImmovable(true);
        echelle17.body.allowGravity = false;
        echelle17.body.checkCollision.up = false;
        echelle17.body.checkCollision.down = false;
    }
    createEchelle18(x, y, width, height) {
        const echelle18 = this.echelles.create(x, y, 'echelle');
        echelle18.setOrigin(0, 0);
        echelle18.setSize(width, height);
        echelle18.setImmovable(true);
        echelle18.body.allowGravity = false;
        echelle18.body.checkCollision.up = false;
        echelle18.body.checkCollision.down = false;
    }
    createEchelle19(x, y, width, height) {
        const echelle19 = this.echelles.create(x, y, 'echelle');
        echelle19.setOrigin(0, 0);
        echelle19.setSize(width, height);
        echelle19.setImmovable(true);
        echelle19.body.allowGravity = false;
        echelle19.body.checkCollision.up = false;
        echelle19.body.checkCollision.down = false;
    }
    createEchelle20(x, y, width, height) {
        const echelle20 = this.echelles.create(x, y, 'echelle');
        echelle20.setOrigin(0, 0);
        echelle20.setSize(width, height);
        echelle20.setImmovable(true);
        echelle20.body.allowGravity = false;
        echelle20.body.checkCollision.up = false;
        echelle20.body.checkCollision.down = false;
    } 
    createEchelle21(x, y, width, height) {
        const echelle21 = this.echelles.create(x, y, 'echelle');
        echelle21.setOrigin(0, 0);
        echelle21.setSize(width, height);
        echelle21.setImmovable(true);
        echelle21.body.allowGravity = false;
        echelle21.body.checkCollision.up = false;
        echelle21.body.checkCollision.down = false;
    }
    createEchelle22(x, y, width, height) {
        const echelle22 = this.echelles.create(x, y, 'echelle');
        echelle22.setOrigin(0, 0);
        echelle22.setSize(width, height);
        echelle22.setImmovable(true);
        echelle22.body.allowGravity = false;
        echelle22.body.checkCollision.up = false;
        echelle22.body.checkCollision.down = false;
    }
    createEchelle23(x, y, width, height) {
        const echelle23 = this.echelles.create(x, y, 'echelle');
        echelle23.setOrigin(0, 0);
        echelle23.setSize(width, height);
        echelle23.setImmovable(true);
        echelle23.body.allowGravity = false;
        echelle23.body.checkCollision.up = false;
        echelle23.body.checkCollision.down = false;
    }
    createEchelle24(x, y, width, height) {
        const echelle24 = this.echelles.create(x, y, 'echelle');
        echelle24.setOrigin(0, 0);
        echelle24.setSize(width, height);
        echelle24.setImmovable(true);
        echelle24.body.allowGravity = false;
        echelle24.body.checkCollision.up = false;
        echelle24.body.checkCollision.down = false;
    }
    createEchelle25(x, y, width, height) {
        const echelle25 = this.echelles.create(x, y, 'echelle');
        echelle25.setOrigin(0, 0);
        echelle25.setSize(width, height);
        echelle25.setImmovable(true);
        echelle25.body.allowGravity = false;
        echelle25.body.checkCollision.up = false;
        echelle25.body.checkCollision.down = false;
    }
    createEchelle26(x, y, width, height) {
        const echelle26 = this.echelles.create(x, y, 'echelle');
        echelle26.setOrigin(0, 0);
        echelle26.setSize(width, height);
        echelle26.setImmovable(true);
        echelle26.body.allowGravity = false;
        echelle26.body.checkCollision.up = false;
        echelle26.body.checkCollision.down = false;
    }


    lancePierre() {
        this.pierrelance = true;
        if (this.player.body.velocity.x >= 0) {
            this.item.setVisible(true);
            this.item.setVelocity(200, -300);
        } else if (this.player.body.velocity.x < 0) {
            this.item.setVisible(true);
            this.item.setVelocity(-200, -300);
        }
        this.pierrelance = true;
        if (this.player.body.velocity.x >= 0) {
            this.item2.setVisible(true);
            this.item2.setVelocity(200, -300);
        } else if (this.player.body.velocity.x < 0) {
            this.item2.setVisible(true);
            this.item2.setVelocity(-200, -300);
        }
    }

    collisionSol() {
        if(this.pierrelance){
            this.bot2
        }
        this.pierrelance = false;
    }

    collectItem() {
        this.item.setVisible();
        this.nbPierre += 1;
    }

    playerDetected() {
        if (!this.player.safe)
        this.player.setX(this.lastCheckpoint.x);
        this.player.setY(this.lastCheckpoint.y);
        
    }
}
 