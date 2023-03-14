import Snake from "../entity/Snake";
import Food from "../entity/Food";
import ScorePanel from "../entity/ScorePanel";

class GameControl {
    // 蛇
    snake: Snake;
    // 食物
    food: Food;
    // 面板
    scorePanel: ScorePanel;
    // 方向
    direction: string = "right";
    // 是否死亡
    islive = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    // 初始化
    init() {
        // 绑定键盘事件
        document.addEventListener("keydown", (e) => { this.keyDownHandler(e) })
        this.run()
    }
    // 键盘事件
    keyDownHandler(event: KeyboardEvent) {
        console.log(event);

        switch (event.key) {
            case "w":
            case "ArrowUp":
                this.direction = "up";
                break;
            case "s":
            case "ArrowDown":
                this.direction = "down";
                break;
            case "a":
            case "ArrowLeft":
                this.direction = "left";
                break;
            case "d":
            case "ArrowRight":
                this.direction = "right";
                break;
            default:
                break;
        }
    }
    // 移动
    run() {
        // 获取蛇当前坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        // 判断方向
        switch (this.direction) {
            case "up":
                Y -= 10;
                break;
            case "down":
                Y += 10;
                break;
            case "left":
                X -= 10;
                break;
            case "right":
                X += 10
                break;
            default:
                break;
        }

        // 检查是否吃到食物
        this.checkFood(X, Y);


        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e: any) {
            alert(e.message + " Game Over!");
            this.islive = false
        }

        // 游戏帧
        this.islive && setTimeout(this.run.bind(this), 100 - (this.scorePanel.level - 1) * 30)

    }
    // 检查是否吃到食物
    checkFood(snake_x: number, snake_y: number) {
        let food_x = this.food.X;
        let food_y = this.food.Y;
        // 吃到食物
        if (food_x === snake_x && food_y === snake_y) {
            this.food.changeLoc();
            this.scorePanel.addScore();
            this.snake.addBody();

        }
    }
}


export default GameControl