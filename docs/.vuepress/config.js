const path = require('path');
const nav =  [{
    text: 'JavaScript',
    link: '/base/js/define'
}, {
    text: '综合素质',
    link: '/base/summary/http'
}, {
    text: '练习',
    link: '/base/record/test'
}];

const sidebar = {
    '/base/js/': [{
        // title: 'js',
        collapsable: false,
        children: [{
            title: '解释型语言与编译过程',
            path: 'define'
        }, 
        {
            title: '作用域与闭包',
            path: 'scope'
        },
        {
            title: '执行上下文',
            path: 'context'
        }, 
        {
            title: '从浏览器->V8->JS的执行过程',
            path: 'execute'
        },
        {
            title: '事件循环',
            path: 'eventLoop'
        },  {
            title: '原型',
            path: 'proto'
        }, {
            title: 'this',
            path: 'this'
        }, {
            title: '面向对象相关',
            path: 'extend'
        }]
    }],
    '/base/summary/': [{
        // title: '记录',
        collapsable: false,
        children: [{
            title: 'HTTP',
            path: 'http'
        }, {
            title: '浏览器与内核',
            path: 'browser'
        }]
    }],
    '/base/record/': [{
        // title: '记录',
        collapsable: false,
        children: [{
            title: '掌握自测',
            path: 'test'
        }, {
            title: '八股记录',
            path: 'bagu1'
        }]
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