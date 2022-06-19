var parent = document.getElementById('game');
var content = document.getElementById('content');

window.addEventListener('load', () => {
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
    
    
    start_texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    
    const start_button = new PIXI.Sprite(start_texture);
        start_button.interactive = true
        start_button.buttonMode = true
        start_button.width /= 1;
        start_button.height /= 1;
        start_button.x = (start_menu.screen.width / 2) - (start_button.width / 2);
        start_button.y = (start_menu.screen.height / 2) - (start_button.height / 2);
        start_button
            .on('pointerover', filterOn)
            .on('pointerout', filterOff);
        start_menu_container.addChild(start_button);
    
    const exit_button = new PIXI.Sprite(exit_texture);
        exit_button.interactive = true
        exit_button.buttonMode = true
        exit_button.width /= 3;
        exit_button.height /= 3;
        exit_button.x = 20;
        exit_button.y = 20;
        exit_button
            .on('pointerover', filterOn)
            .on('pointerout', filterOff);
            
    
    var game;
    
    start_menu.stage.on('click', (e) => {
        game = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0x24aadd,
        });
    
        content.style.display = "none";
        document.body.appendChild(game.view);
    
        
    
        var players = [];
        
        for (var i = 0; i < 10; i ++){
            var rand01 = Math.round(Math.random());
            players[i] = new PIXI.Sprite(player_texture[rand01]);
            players[i].interactive = true
            players[i].buttonMode = true
            if(rand01 == 0){
                players[i].height /= 3
                players[i].width /= 3;
            } else {
                players[i].height /= 8
                players[i].width /= 8;
            }
            // players[i].x = (game.screen.width / 2) - (players[i].width / 2);
            // players[i].y = (game.screen.height / 2) - (players[i].height / 2);
            players[i].position.set((Math.random() * game.screen.width - players[i].width), 
                                    (Math.random() * (game.screen.height - players[i].height/2) + players[i].height));
            players[i]
                .on('pointerdown', onDragStart)
                .on('pointerup', onDragEnd)
                .on('pointerupoutside', onDragEnd)
                .on('pointermove', onDragMove)
                .on('pointerover', filterOn)
                .on('pointerout', filterOff);
    
            game.stage.addChild(players[i]);
        }
        game.stage.addChild(exit_button);
    
    
    });
    
    exit_button.on('click', (e) => {
        content.style.display = "block";
        game.destroy(true);
        // game = null;
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
        this.x -= .02 * this.width;
        this.y -= .02 * this.height;
        this.width += .04 * this.width;
        this.height += .04 * this.height;
    }
    
    function filterOff() {
        this.filters = [outlineFilterBlue];
        this.x += .02 * this.width;
        this.y += .02 * this.height;
        this.width -= .04 * this.width;
        this.height -= .04 * this.height;
    }
    
});

