import PraiseButton from "./PraiseButton.js";

/*
 * Thumb
 * @class
 */

 class Thumb extends PraiseButton {
    constructor(selector = {}) {
        super();

        this.praiseBox = selector.praiseNode;

        this.node = $(this.praiseBox);

        this.addNode = `<div class="priase-count">当前点赞次数：<span>${this.PraiseCount}</span></div>`;

        this.node.prepend(this.addNode);

        this.showCountNode = this.node.find('.priase-count span');

    }
    
    
    handlePraise() {
        if(!this.praiseBox) return;
        this.praiseBox.onclick = () => 
            this.addCount();
    }

    changeCount() {
        this.showCountNode.text(this.PraiseCount);
    }
}

export default Thumb;