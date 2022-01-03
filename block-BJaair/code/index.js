/*<div>
            <h4>Sports</h4>
            <h2>Play Basketball</h2>
        </div>*/

let root = document.querySelector(".notice-display");
let submit = document.querySelector("#submit");

class Submit {
    constructor(title, category) {
        this.title = title;
        this.category = category;
    }
    createUI() {
        root.innerHTML = "";
        let div = document.createElement("div");
        let h4 = document.createElement("h4");
        h4.innerText = this.title;
        let h2 = document.createElement("h2");
        h2.innerText = this.category;
        div.append(h4, h2);
        root.append(div);
        return root;
    }
}




submit.addEventListener('click', Submit);
