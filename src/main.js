import string from './script.js';

let n = 0;
let time = 50;
const codeLength = 10;

const run = () => {
    // 删除原来的script
    if( n !== 0){
        const newDemo = demo.childNodes;
        for (let i = newDemo.length - 1; i >= 0; i--) { // 一定要倒序，正序是删不干净的，可自行尝试
            demo.removeChild(newDemo[i]);
        }
    }

    n += codeLength;
    if( n > string.length + codeLength) {
        window.clearInterval(id);
        return;
    }

    // 代码展示
    codeDisplay.innerText = string.substr(0, n);

    // 让JS代码生效
    // 创建新的script
    let newScript = document.createElement('script');
    newScript.innerHTML = string.substr(0, n);
    demo.appendChild(newScript);

    // 代码展示区向上滚动
    codeDisplay.scrollTop = codeDisplay.scrollHeight;
}

const play = () => {
    return setInterval(run, time);
}

const pause = () => {
    window.clearInterval(id)
}

let id = play();

// 设置按钮点击事件
btnPause.onclick = () => {
    pause();
}

btnPlay.onclick = () => {
    id = play();
}

btnSlow.onclick = () => {
    pause();
    time = 150;
    id = play();
}

btnFast.onclick = () => {
    pause();
    time = 0;
    id = setInterval(run, time)
}

btnNormal.onclick = () => {
    pause();
    time = 100;
    id = setInterval(run, time)
}
