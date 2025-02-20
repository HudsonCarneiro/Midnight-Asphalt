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

        this.load.image('background', 'assets/bootScene.png');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
