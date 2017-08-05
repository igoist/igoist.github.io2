import React from 'react';
import ReactDOM from 'react-dom';
import FAQ from './FAQ';

ReactDOM.render(<FAQ />, document.getElementById('root'));


let menus = document.querySelector('.menu');
let items = document.querySelectorAll('li.menu-sub-item');
let array = Array.from(items);

// 事件代理：menu 打开以及 item 选择，加特技，哦不，是样式，还有 content 数据请求
menus.addEventListener('click', (e) => {
  if (e.target.className == 'submenu-title') {
    let array = Array.from(e.target.parentNode.parentNode.childNodes);
    array.map(v => {
      if (v != e.target.parentNode) {
        v.classList.remove('submenu-open');
      }
    });
    e.target.parentNode.classList.toggle('submenu-open');
  }
  if (e.target.nodeName == 'LI' && e.target.className.indexOf('submenu') == -1) {
    array.map(v => {
      v.classList.remove('menu-sub-item-selected');
    });

    e.target.classList.add('menu-sub-item-selected');
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          document.querySelector('section.markdown').innerHTML = xhr.response;
        }
      }
    };
    xhr.open('get', e.target.dataset.url, true);
    xhr.send(null);
  }
});

document.querySelector('.menu-sub-item').classList.add('menu-sub-item-selected');

// 这两行用来添加高亮，再下边内容纯粹测试用例，没卵用
// import hljs from 'highlight.js';
// hljs.initHighlightingOnLoad();