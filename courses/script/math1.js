var parent = document.getElementById('game');
var content = document.getElementById('content');

const start_menu = new PIXI.Application({
    width: parent.getBoundingClientRect().width,
    height: parent.getBoundingClientRect().height,
    transparent: true,
});
parent.appendChild(start_menu.view);

start_menu.stage.interactive = true;
start_menu.stage.hitArea = start_menu.renderer.screen;

const start_menu_container = new PIXI.Container();

start_menu.stage.addChild(start_menu_container);



const outlineFilterBlue = new PIXI.filters.OutlineFilter(2, 0x24aadd);
const outlineFilterRed = new PIXI.filters.GlowFilter(150, 20, 10, 0xdd2255, 100);


texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

const bunny = new PIXI.Sprite(texture);
    bunny.width /= 2;
    bunny.height /= 2;
    bunny.x = (start_menu.screen.width / 2) - (bunny.width / 2);
    bunny.y = (start_menu.screen.height / 2) - (bunny.height / 2);
    start_menu_container.addChild(bunny);

start_menu.stage.on('click', (e) => {
    const game = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0x24aadd,
    });
    content.style.display = "none";
    document.body.appendChild(game.view);

    
    const player = new PIXI.Sprite(player_texture);
    player.interactive = true
    player.buttonMode = true
    player.height /= 8
    player.width /= 8;
    player.x = (game.screen.width / 2) - (player.width / 2);
    player.y = (game.screen.height / 2) - (player.height / 2);
    player
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove)
        .on('pointerover', filterOn)
        .on('pointerout', filterOff);

    game.stage.addChild(player);
});



function onDragStart(event) {
    this.data = event.data;
    this.dragging = true;
    const newPosition = this.data.getLocalPosition(this.parent);
    this.delta_x = this.x - newPosition.x;
    this.delta_y = this.y - newPosition.y;
}

function onDragEnd() {
    this.dragging = false;
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x + this.delta_x;
        this.y = newPosition.y + this.delta_y;
    }
}

function filterOn() {
    this.filters = [outlineFilterRed];
}

function filterOff() {
    this.filters = [outlineFilterBlue];
}
