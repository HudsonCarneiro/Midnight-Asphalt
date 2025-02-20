import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x00ff00);

<<<<<<< HEAD:midnight-asphalt/template-react-ts-main/src/game/scenes/Game.ts
        this.background = this.add.image(1080, 720, 'background');
        this.background.setAlpha(0.5);

=======
        this.add.image(512, 384, 'background').setAlpha(0.5);

        this.add.text(512, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);

>>>>>>> a3708615c96bb8acd5a71ed8b267b05fbe8cc0d0:midnight-asphalt/template-vue-main/src/game/scenes/Game.js
        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        this.scene.start('GameOver');
    }
}
