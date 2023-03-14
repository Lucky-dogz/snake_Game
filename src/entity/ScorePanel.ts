// 面板类
class ScorePanel {
    // 分数
    score = 0;

    // 等级
    level = 1;

    // 元素
    ele_score: HTMLElement;
    ele_level: HTMLElement;

    // 最高等级
    max_level: number;

    // 等级间隔
    exp: number;

    constructor(max_level: number = 10, exp: number = 10) {
        this.ele_score = document.getElementById("score")!;
        this.ele_level = document.getElementById("level")!;
        this.max_level = max_level;
        this.exp = exp;
    }
    // 增加分数
    addScore() {
        this.ele_score.innerText = ++this.score + "";
        if (this.score % this.exp === 0) {
            this.addLevel()
        }
    }
    // 提升等级
    addLevel() {
        if (this.level < this.max_level) {
            this.ele_level.innerText = ++this.level + "";
        }
    }
    // 重置
    reset() {
        this.level = 0;
        this.score = 0;
        this.ele_score.innerText = this.score + "";
        this.ele_level.innerText = this.level + "";
    }
}


export default ScorePanel;