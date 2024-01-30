const path = require('path');
const nav =  [
    { text: 'JavaScript', link: '/base/js/define'},
    { text: '浏览器机制', link: '/base/browser/browser'},
    { text: '综合素质', link: '/base/summary/http'},
];

const sidebar = {
    '/base/js/': [{
        collapsable: false,
        children: [
        { title: '解释型语言与编译过程', path: 'define'}, 
        { title: 'V8是如何执行JS的', path: 'v8'},
        { title: '从浏览器->V8->JS的执行过程', path: 'execute'},
        { title: '执行上下文', path: 'context'}, 
        { title: '执行上下文与作用域', path: 'contextExpand'},
        { title: '作用域与闭包', path: 'scope'},
        { title: '事件循环', path: 'eventLoop'},
        { title: '原型', path: 'proto'},
        { title: 'this', path: 'this'}, 
        { title: '面向对象相关', path: 'extend'}]
    }],
    '/base/browser/': [{
        collapsable: false,
        children: [
            { title: '浏览器与内核', path: 'browser'},
            { title: '浏览器深度扩展', path: 'source'}
        ]
    }],
    '/base/summary/': [{
        collapsable: false,
        children: [
            { title: 'HTTP', path: 'http'},
        ]
    }],
    '/base/record/': [{
        collapsable: false,
        children: [
            { title: '掌握自测', path: 'test'},
            { title: '八股记录', path: 'bagu1'}
        ]
    }],
    '/': [''],
};

module.exports = {
    head: [
        ['link', { rel: 'icon', href: `icon.png` }]
    ],
    title: '填坑之路',
    description: '填坑日记',
    base: '/', 
    themeConfig: {
        nav,
        sidebar,
        repo: 'mahalo777/mahalo777.github.io',
        repoLabel: 'GitHub',
        sidebarDepth: 2
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@imgs': path.join(__dirname, '../assets')
            }
        }
    }
}