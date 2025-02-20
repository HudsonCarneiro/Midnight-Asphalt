import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class GameOver extends Scene
{
    constructor ()
    {
        super('GameOver');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0xff0000);

<<<<<<< HEAD:midnight-asphalt/template-react-ts-main/src/game/scenes/GameOver.ts
        this.background = this.add.image(1080, 720, 'background');
        this.background.setAlpha(0.5);
=======
        this.add.image(512, 384, 'background').setAlpha(0.5);
>>>>>>> a3708615c96bb8acd5a71ed8b267b05fbe8cc0d0:midnight-asphalt/template-vue-main/src/game/scenes/GameOver.js

        this.add.text(512, 384, 'Game Over', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);

        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        this.scene.start('MainMenu');
    }
}
