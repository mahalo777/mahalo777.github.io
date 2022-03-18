module.exports = {
    head: [
        ['link', { rel: 'icon', href: `icon.png` }]
    ],
    title: '公主日记',
    description: '填坑日记',
    base: './', 
    themeConfig: {
        nav: [{
            text: 'home',
            link: '/'
        }, {
            text: '基础填坑',
            items: [
                { text: 'js', link: '/base/js/test01'},
                { text: '八股记录', link: '/base/record/'}
            ],
        }, {
            text: '札记',
            link: '/diary/'
        }],
        sidebar: {
            '/base/js/': [{
                title: 'js',
                collapsable: false,
                children: [{
                    title: '测试01',
                    path: 'test01'
                }, {
                    title: '测试02',
                    path: 'test02'
                }]
            }],
            '/base/record/': [{
                title: 'record',
                collapsable: false,
                children: [{
                    title: '测试',
                    path: '/'
                }]
            }],
            '/': [''],
        },
        // 左侧列表展开级数，默认是 1
        sidebarDepth: 6
    }
}