

// Class Bot
class Bot extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, xMin, xMax, xZone1, yZone1, xZone2, yZone2) {
        super(scene, x, y, "none");
        scene.add.existing(this); //Ajoute l'objet à la scène 
        scene.physics.add.existing(this); //Donne un physic body à l'objet

        //Propriétés à passer de scène en scène
        this.x = x;
        this.y = y;

        this.xMin = xMin;
        this.xMax = xMax;

        this.xZone1 = xZone1;
        this.yZone1 = yZone1;
        this.xZone2 = xZone2;
        this.yZone2 = yZone2;

        
      
        this.init();
        this.initEvents();

    }
    

    init() {
        //Variables personnage


        // Defini la position initiale de ton bot
        this.setPosition(this.x,this.y);


        // Créé la première grande zone de detection
        this.detect = this.scene.add.rectangle(this.xZone1, this.yZone1, 650, 400);
        this.rectDeDetect = this.scene.physics.add.existing(this.detect, true);

        // Créé la seconde grande zone de detection
        this.detect2 = this.scene.add.rectangle(this.xZone2, this.yZone2, 650, 400, );
        this.rectDeDetect2 = this.scene.physics.add.existing(this.detect2, true);

        // Créé le trigger qui active la zone de detection gauche
        this.detectB = this.scene.add.rectangle(this.xMin, this.y, 30, 30, );
        this.rectDeDetectB = this.scene.physics.add.existing(this.detectB, true);
        this.scene.physics.add.overlap(this.scene.player, this.detect, this.detectionGauche, null , this);

        // Créé le trigger qui active la zone de detection droite
        this.detectB2 = this.scene.add.rectangle(this.xMax, this.y, 30, 30, );
        this.rectDeDetectB2 = this.scene.physics.add.existing(this.detectB2, true);
        this.scene.physics.add.overlap(this.scene.player, this.detect2, this.detectionDroite, null , this);


        this.anims.play('rightEnnemi',true);
        this.setSize(64, 128);
        this.setOffset(0, 16);

        
    }

    initEvents() {
        //Ecoute la fonction update de la scène et appelle la fonction update de l'objet
        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
    }

    update(time, delta) {
        if (this.body) { // Vérifie si this.body est défini
            if (this.body.velocity.x < 0){
                this.setFlipX(true);
            } else {
                this.setFlipX(false);
            }

            if (this.x < this.xMin) {
                this.body.setVelocityX(0);
                this.pauseTimeout = setTimeout(() => {
                    if (this.body) { // Vérifie à nouveau si this.body est défini
                        this.body.setVelocityX(100); // Changement de direction après la pause
                    }
                }, 3000);
            } else if (this.x > this.xMax) {
                this.body.setVelocityX(0);
                this.pauseTimeout = setTimeout(() => {
                    if (this.body) { // Vérifie à nouveau si this.body est défini
                        this.body.setVelocityX(-100); // Changement de direction après la pause
                    }
                }, 3000);
            }
        }
    }

    detectionGauche(player, detect){
        if (this.scene.physics.overlap(this, this.detectB) && !this.scene.player.safe){
            console.log("DETECTER");
            this.scene.player.setX(this.scene.lastCheckpoint.x);
            this.scene.player.setY(this.scene.lastCheckpoint.y);
        }
    }

    detectionDroite(player, detect){
        if (this.scene.physics.overlap(this, this.detectB2) && !this.scene.player.safe){
            console.log("DETECTER");
            this.scene.player.setX(this.scene.lastCheckpoint.x);
            this.scene.player.setY(this.scene.lastCheckpoint.y);
        }
    }

}

export default Bot;