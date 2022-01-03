document.addEventListener('DOMContentLoaded', (event) => {

    function handleDragStart(e) {
        this.style.opacity = '0.8';

        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }
  
    function handleDragEnd(e) {
        this.style.opacity = '1';
  
        items.forEach(function (item) {
            item.classList.remove('over');
        });
    }
  
    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
  
        return false;
    }
  
    function handleDragEnter(e) {
        this.classList.add('over');
    }
  
    function handleDragLeave(e) {
        this.classList.remove('over');
    }

    function handleDrop(e) {
        e.stopPropagation(); // stops the browser from redirecting.
        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
        return false;
    }
   
    let items = document.querySelectorAll('.container .item');
    items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('drop', handleDrop);
    });
});

//<div draggable="true" class="item">Item 5<span>Drag Me</span></div>

let input = document.querySelector("input");
let root = document.querySelector(".container");

input.addEventListener('keyup', (event) => {
    if(e.keyCode === 13) {
        let data = event.target.value;
        createUI(data);
    }
});

function createUI(data) {
    root.innerHTML = "";
    let div = document.createElement('div');
    div.draggable = "true";
    div.classList.add = "item";
    div.innerText = data;
    let span = document.createElement("span");
    div.append(span);
    root.append(div);
}