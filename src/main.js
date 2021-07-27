import string from './script';

let codeNum = 1;
let scriptNum = 1;

let time = 0;

const run = () => {
    codeNum += 10;
    scriptNum += 15;
    if( (codeNum > string.length + codeNum) && (scriptNum > string.length + scriptNum)) {
        window.clearInterval(id);
        return;
    }

    // 代码展示
    codeDisplay.innerText = string.substr(0, codeNum);

    // 让JS代码生效
    // 删除原来的script
    if( scriptNum != 0){
        var newDemo = demo.childNodes;
        for (var i = newDemo.length - 1; i >= 0; i--) { // 一定要倒序，正序是删不干净的，可自行尝试
            demo.removeChild(newDemo[i]);
        }
    }
    // 创建新的script
    var newScript = document.createElement('script');
    newScript.innerHTML = string.substr(0, scriptNum);
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
    time = 300;
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

