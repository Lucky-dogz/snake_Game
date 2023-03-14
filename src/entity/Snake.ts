// 蛇类
class Snake {
    // 蛇头
    head: HTMLElement;
    // 蛇身
    body: HTMLCollection;
    // 蛇（包括头）
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById("snake")!;
        this.head = this.element.querySelector("#snake > div")!;
        this.head.style.backgroundColor = "red";
        this.body = this.element.getElementsByTagName("div")!;
    }
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(value) {
        if (value === this.X) {
            return
        }
        // 判断撞墙
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了!")
        }

        // 判断调头
        if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
            // 想往右
            if (value > this.X) {
                value = this.X - 10;
            }
            else {
                value = this.X + 10;
            }

        }

        this.moveBody()

        this.head.style.left = value + "px";
        this.checkHeadBang();
    }
    set Y(value) {
        if (value === this.Y) {
            return
        }

        // 判断撞墙
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了!")
        }

        // 判断调头
        if (this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
            // 想往上
            if (value < this.Y) {
                value = this.Y + 10
            }
            else {
                value = this.Y - 10
            }

        }

        this.moveBody()
        this.head.style.top = value + "px";
        this.checkHeadBang();
    }
    // 增加身体
    addBody() {
        // 向element添加一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>")

    }
    // 移动身体
    moveBody() {
        for (let i = this.body.length - 1; i > 0; i--) {
            // 获取前面身体的坐标
            let X = (this.body[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.body[i - 1] as HTMLElement).offsetTop;

            // 设置为自己的
            (this.body[i] as HTMLElement).style.left = X + "px";
            (this.body[i] as HTMLElement).style.top = Y + "px";
        }
    }
    // 判断是否撞到自己
    checkHeadBang() {
        // 遍历蛇身子
        for (let i = 1; i < this.body.length; i++) {
            let bd = this.body[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 进入判断说明蛇头撞到了身体，游戏结束
                throw new Error('撞到自己了！');
            }
        }
    }
}

export default Snake;