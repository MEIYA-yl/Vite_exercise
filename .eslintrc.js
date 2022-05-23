// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended', // 从 ESLint 本身继承
    'plugin:react/recommended', // 从ESlint 插件继承，可以省略包名中的 `eslint-plugin`
    'plugin:@typescript-eslint/recommended', // 格式一般为： `plugin:${pluginName}${configName}`
    // 1. 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended'
  ], // 继承另一份ESLint配置
  parser: '@typescript-eslint/parser', // 进行AST解析 该包提供了Ts的解析
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }, // 进行AST解析 该包提供了Ts的解析
    ecmaVersion: 'latest', // 使用ES最新语法
    sourceType: 'module' // 使用 ESModule
  },
  // 2. 加入 prettier 的 eslint 插件
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    // 3. 注意要加上这一句，开启 prettier 自动修复的功能
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off'
  }
};
