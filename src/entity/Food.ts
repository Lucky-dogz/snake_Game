// 食物类
class Food {
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById("food")!;
        this.changeLoc()
    }
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    changeLoc() {
        this.element.style.left = Math.floor(Math.random() * 29) * 10 + "px";
        this.element.style.top = Math.floor(Math.random() * 29) * 10 + "px";
    }

}


export default Food;