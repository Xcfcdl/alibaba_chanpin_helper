// ==UserScript==
// @name         Alibaba Helper
// @namespace    https://xcfcdl.github.io
// @version      0.0.1
// @description  try to make alibaba easier
// @author       Dony
// @match        https://passport.alibaba.com/*
// @match        https://hz-productposting.alibaba.com/product/manage_products.htm?spm=*
// @match        https://post.alibaba.com/product/publish.htm?spm=*



// ==/UserScript==

(function () {
    'use strict';
    //config{网址库}
    const CONFIG = { 
        login: 'https://passport.alibaba.com/', 
        postpage: 'https://post.alibaba.com/product/publish.htm?spm=*', 
        manager: 'https://hz-productposting.alibaba.com/product/manage_products.htm?spm=',
        };
    var css_248z$1 = ".__do-button{align-items:center;background:#4c98f7;border-radius:3px;color:#fff;cursor:pointer;display:flex;font-size:13px;height:30px;justify-content:center;opacity:0;position:absolute;transition:opacity .3s;width:60px;z-index:-1000}";
    //按钮样式

    const DOM_READY = "DOMContentLoaded";
    const initBaseStyle = () => {
        document.addEventListener(DOM_READY, () => {
            dom$1.append("head", `<style>${css_248z$1}</style>`);
            //dom$1.append("head", `<style>${css_248z}</style>`);
        });
    };
    //paths
    const PATHS = {}

    //快捷selector
    const dom$1 = {
        //doc操作简写
        query: function (selector) {
            //获取dom
            return document.querySelector(selector);
        },
        attr: function (selector, attr, value) {
            //改attr
            const dom2 = document.querySelector(selector);
            dom2 && dom2.setAttribute(attr, value);
        },
        append: function (selector, content) {
            //加元素
            const container = document.createElement("div");
            if (isString(content)) {
                container.innerHTML = content;
            } else {
                container.appendChild(content);
            }
            const targetDOM = document.querySelector(selector);
            targetDOM && targetDOM.append(container);
            return container;
        },
        remove: function (selector) {
            //删元素
            const targetDOM = document.querySelector(selector);
            targetDOM && targetDOM.remove();
        }
    };
    const website$p = {
      regexp: CONFIG.postpage,
      init: function() {
        utils.hideButton();
        utils.enableOnSelectStartByCapture();
        window.onload = () => {
          dom$1.attr(".sf-edu-wenku-vw-container", "style", "");
        };
      }
    };
    (function(){
        //主程序
        const websiteConfig = initWebsite();//匹配网址
        initBaseStyle();//加入按钮样式


    })()

})();