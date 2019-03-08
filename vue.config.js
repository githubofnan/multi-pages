const path = require('path')
const glob = require('glob')

const PAGE_TITLE = {
  index: '首页',
  login: '登录',
}

const getPages = () => {
  let pages = {};
  const FILE_NAME = path.resolve(__dirname, './src/views');
  let entryFile = glob.sync(FILE_NAME + '/**/**/main.js');
  entryFile.forEach((item) => {
    let pageInfo = {};
    let pathName = item.split('/').splice(-5);
    pageInfo['entry'] = pathName.join('/');
    pageInfo['template'] = 'public/index.html',
    pageInfo['title'] = PAGE_TITLE[pathName[3]] || '';
    pageInfo['filename'] = pathName.slice(1, 4).join('/')+'.html';
    pageInfo['chunks'] = ['chunk-vendors', 'chunk-common', pathName[3]];
    pages[pathName[3]] = pageInfo;
  })
  console.log(Object.keys(pages))
  return pages;
}

module.exports = {
  pages: getPages(),
  publicPath: process.env.NODE_ENV === 'production'
    ? '../../'
    : '/'
}