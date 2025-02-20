import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //A cena de inicialização normalmente é usada para carregar quaisquer recursos necessários para o seu pré-carregador, como o logotipo ou o plano de fundo do jogo.
        // Quanto menor o tamanho do arquivo dos ativos, melhor, já que a cena de inicialização em si não possui pré-carregador.

<<<<<<< HEAD:midnight-asphalt/template-react-ts-main/src/game/scenes/Boot.ts
        this.load.image('background', 'assets/bootScene.png');
=======
        this.load.image('background', 'assets/layout.png');
>>>>>>> a3708615c96bb8acd5a71ed8b267b05fbe8cc0d0:midnight-asphalt/template-vue-main/src/game/scenes/Boot.js
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
