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
                { text: 'js', link: '/base/js/'},
                { text: '八股记录', link: '/base/record/'}
            ],
        }, {
            text: '札记',
            link: '/diary/'
        }],
        sidebar: {
            '/base/js/': [{
                // title: 'js',
                collapsable: false,
                children: [{
                    title: 'JS语言定义',
                    path: 'define'
                }, {
                    title: '基础知识1',
                    path: 'point1'
                }]
            }],
            '/base/record/': [{
                // title: '记录',
                collapsable: false,
                children: [{
                    title: '八股记录',
                    path: 'bagu1'
                }, {
                    title: '散落知识记录',
                    path: 'link'
                }, {
                    title: '精分现场-预编译',
                    path: 'jingfen1'
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