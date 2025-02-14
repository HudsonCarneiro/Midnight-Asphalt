import Phaser from 'phaser';

class MidnightAsphalt extends Phaser.Scene {
    constructor() {
        super("MidnightAsphalt");
    }

    preload() {
        this.load.image('player', './assets/car_player.png');
        this.load.image('road', '/assets/layout00.png');
        this.load.image('car2', '/assets/car002.png');
        this.load.image('car3', '/assets/car003.png');
    }

    create() {
        this.road1 = this.add.tileSprite(0, 0, 1280, 720, 'road').setOrigin(0,0);
        this.road2 = this.add.titleSprie(0, -720, 1280, 720, 'road').setOrigin(0,0);

        this.player = this.physics.add.sprite(530, 600, 'player');
        this.cursors = this.input.keyboard.createCursorKeys();

        this.car2 = this.physics.add.sprite(9275, -100, 'car2');
        this.car3 = this.physics.add.sprite(1005, -300, 'car3');

    }

    update(){
        this.road1.y += 5;
        this.road2.y += 5;
        if(this.road1.y >= 720) this.road1.y = -720;
        if(this.road2.y >= 720) this.road2.y = -720;

        if(this.cursors.left.isDown){
            this.player.x -= 5;
        }

        this.car2.y += 5;
        this.car3.y +=5;
        if(this.car2.y > 800) this.car2.y = -100;
        if(this.car3.y >800) this.car3.y = -300;
    }
}
const config = {
    type: Phaser.AUTO,
    width:1280,
    height:720,
    physics: {
        default: 'arcade',
        arcade:{ debug: false}
    },
    scene: MidnightAsphalt
};
const game = new Phaser.Game(config);