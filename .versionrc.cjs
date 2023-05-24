module.exports = {
  skip: {
    changelog: false,// 是否跳过changelog
    tag: true,// 是否跳过tag
  },
  // server-version自动commit的模板
  releaseCommitMessageFormat: 'build: v{{currentTag}}版本发布',
  // 需要server-version更新版本号的文件
  bumpFiles: [
    {
      filename: 'package.json',
      // The `json` updater assumes the version is available under a `version` key in the provided JSON document.
      type: 'json',
    },
  ],
  types: [
    {"type": "chore", "section":"Others", "hidden": false},
    {"type": "revert", "section":"Reverts", "hidden": false},
    {"type": "feat", "section": "Features", "hidden": false},
    {"type": "fix", "section": "Bug Fixes", "hidden": false},
    {"type": "improvement", "section": "Feature Improvements", "hidden": false},
    {"type": "docs", "section":"Docs", "hidden": false},
    {"type": "style", "section":"Styling", "hidden": false},
    {"type": "refactor", "section":"Code Refactoring", "hidden": false},
    {"type": "perf", "section":"Performance Improvements", "hidden": false},
    {"type": "test", "section":"Tests", "hidden": false},
    {"type": "build", "section":"Build System", "hidden": false},
    {"type": "ci", "section":"CI", "hidden":false}
  ]
};
