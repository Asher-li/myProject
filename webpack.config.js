const path=require('path');
var htmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
  mode:'development',
  entry:path.join(__dirname,'./src/main.js'),
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
  },
  plugins:[
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename:'index.html'
    })
  ],
  module: { // 用来配置第三方loader模块的
    rules: [ // 文件的匹配规则
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则
        { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
        { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' },
        {test:/\.(ttf|eot|svg|woff|woff2|otf)$/,use:'url-loader'},
        { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ },
        // { test: /\.css$/, use: ['style-loader', 'css-loader'] },

      { test: /\.vue$/, use: 'vue-loader' }
      ]
}
}