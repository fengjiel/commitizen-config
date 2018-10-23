'use strict';
/**
 *  1.npm install -g commitizen
 *  2.npm install cz-customizable --save-dev
 *  3. package.json
        "config": {
            "commitizen": {
                "path": "node_modules/cz-customizable"
            },
            "cz-customizable": {
                "config": "path to this file"
            }
        }
    4. git add ***file
       git cz
 */

module.exports = {
    types: [
        {
            'value': 'feat',
            'name': 'feat:     新功能：一个新功能'
        },
        {
            'value': 'fix',
            'name': 'fix:      修复：修复一个bug'
        },
        {
            'value': 'docs',
            'name': 'docs:     文档：只更改了文档'
        },
        {
            'value': 'style',
            'name': 'style:    样式：不影响代码含义的更改\n            （空格，格式，缺少分号等）'
        },
        {
            'value': 'refactor',
            'name': 'refactor: 重构：代码更改既不修复错误也不添加功能'
        },
        {
            'value': 'perf',
            'name': 'perf:     性能：改进性能的代码更改'
        },
        {
            'value': 'test',
            'name': 'test:     测试：添加（缺失的）测试'
        },
        {
            'value': 'chore',
            'name': 'chore:    杂务：对构建过程或辅助工具的更改\n            以及文档生成等库'
        },
        {
            'value': 'revert',
            'name': 'revert:   重提：重提历史记录'
        },
        {
            'value': 'WIP',
            'name': 'WIP:      进行中：工作正在进行中'
        }
    ],
    /**
     * 自定义 scopes
     */
    scopes: [
        {
            name: 'overall'
        },
        {
            name: 'data'
        },
        {
            name: 'style'
        },
        {
            name: 'view'
        },
        {
            name: 'chore'
        }
    ],

    // it needs to match the value for field type. Eg.: 'fix'

    // scopeOverrides: {
    //     fix: [
    //         {
    //             'name': 'merge'
    //         }
    //     ]
    // },
    // override the messages, defaults are as follows
    messages: {
        type: '选择要提交的更改类型:',
        scope: '\n表示此更改的范围(可选):',
        customScope: '表示此更改的范围:',
        subject: '简短的描述变化:\n',
        body: '提供更长的变更描述(可选)。使用“|”换行:\n',
        breaking: '列出任何中断的更改(可选):\n',
        footer: '列出因此更改而修复的任何问题(可选). E.g.: #31, #34:\n',
        confirmCommit: '您确定要继续进行上述提交吗?'
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'WIP'],
    subjectLimit: 100

};
