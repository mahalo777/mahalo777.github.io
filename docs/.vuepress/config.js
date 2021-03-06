const path = require('path');
const nav =  [{
    text: 'JavaScript',
    link: '/base/js/define'
}, {
    text: '练习',
    link: '/base/record/test'
}, {
    text: '札记',
    link: '/diary/summary'
}];

const sidebar = {
    '/base/js/': [{
        // title: 'js',
        collapsable: false,
        children: [{
            title: 'JS语言定义',
            path: 'define'
        }, {
            title: '作用域与闭包',
            path: 'scope'
        }, {
            title: '事件循环',
            path: 'eventLoop'
        }, {
            title: '执行上下文',
            path: 'context'
        }, {
            title: '原型',
            path: 'proto'
        }, {
            title: 'this',
            path: 'this'
        }, {
            title: '面向对象相关',
            path: 'extend'
        }, {
            title: '浏览器与内核',
            path: 'browser'
        }, {
            title: '精分现场-预编译',
            path: 'jingfen1'
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
    '/diary/': [{
        // title: '日记',
        collapsable: false,
        children: [{
            title: '随写',
            path: 'summary'
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