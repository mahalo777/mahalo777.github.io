const path = require('path');

module.exports = {
    head: [
        ['link', { rel: 'icon', href: `icon.png` }]
    ],
    title: '公主日记',
    description: '公主填坑日记',
    base: '/', 
    themeConfig: {
        nav: [{
            text: '首页',
            link: '/'
        }, {
            text: '基础填坑',
            items: [
                { text: 'js', link: '/base/js/define'},
                { text: '八股记录', link: '/base/record/bagu1'}
            ],
        }, {
            text: '札记',
            link: '/diary/summary'
        }],
        sidebar: {
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
                },{
                    title: '继承',
                    path: 'extend'
                }, {
                    title: '精分现场-预编译',
                    path: 'jingfen1'
                }]
            }],
            '/base/record/': [{
                // title: '记录',
                collapsable: false,
                children: [{
                    title: '八股记录',
                    path: 'bagu1'
                }, {
                    title: '扫书记录',
                    path: 'link'
                }]
            }],
            '/diary/': [{
                // title: '记录',
                collapsable: false,
                children: [{
                    title: '随写',
                    path: 'summary'
                }]
            }],
            '/': [''],
        },
        sidebarDepth: 6
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@imgs': path.join(__dirname, '../assets')
            }
        }
    }
}