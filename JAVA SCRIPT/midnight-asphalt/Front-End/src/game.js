import Phaser from 'phaser';

class MidnightAsphalt extends Phaser.Scene {
    constructor() {
        super("MidnightAsphalt");
    }

    preload() {
        this.load.image('player', '/assets/car_player.png');
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
    }
}