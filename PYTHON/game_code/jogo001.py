import pygame

# Inicializando o Pygame
pygame.init()

# Configurações da tela
LARGURA, ALTURA = 1280, 720
screen = pygame.display.set_mode((LARGURA, ALTURA))
pygame.display.set_caption("Sprite")

# Variáveis do jogador
velocidade = 5
player = pygame.image.load("car_player.png")
pos_player_x = 530
pos_player_y = 300


# Classe para representar a pista
class Layout(pygame.sprite.Sprite):
    def __init__(self, y_pos):
        super().__init__()
        self.image = pygame.image.load("layout00.png")
        self.rect = self.image.get_rect()
        self.rect.x = 0
        self.rect.y = y_pos

    def update(self):
        self.rect.y += velocidade
        if self.rect.y >= ALTURA:
            self.rect.y = -1440


# Classe para representar os carros
class Carro(pygame.sprite.Sprite):
    def __init__(self, image_path, x, y):
        super().__init__()
        self.image = pygame.image.load(image_path)
        self.rect = self.image.get_rect()
        self.rect.center = (x, y)

    def update(self):
        self.rect.y -= velocidade
        if self.rect.y < -700:
            self.rect.y = 1000


# Criando os sprites
pista1 = Layout(0)
pista2 = Layout(-720)
pista3 = Layout(-1440)
car2 = Carro("car002.png", 275, 1000)
car3 = Carro("car003.png", 1005, 1000)

todas_sprites = pygame.sprite.Group(pista1, pista2, pista3, car2, car3)

clock = pygame.time.Clock()
running = True

while running:
    clock.tick(30)
    screen.fill((0, 0, 0))

    # Processamento de eventos
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            running = False

    # Controle do jogador
    keys = pygame.key.get_pressed()
    if keys[pygame.K_RIGHT]:
        pos_player_x += 5
    if keys[pygame.K_LEFT]:
        pos_player_x -= 5

    # Atualizando e desenhando os sprites
    todas_sprites.update()
    todas_sprites.draw(screen)
    screen.blit(player, (pos_player_x, pos_player_y))

    pygame.display.update()

pygame.quit()
