const express = require('express');
const fs = require('fs');
const marked = require('marked');
const path = require('path');

const webpack = require('webpack');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    chunks: false,
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

const docMap = {
    'type1': {
        'doc1': 'docs/README.md',
        'doc2': 'docs/README2.md'
    },
    'type2': {
        'doc1': 'docs/README3.md',
        'doc2': 'docs/README4.md'
    }
};

app.get('/faq/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/faq/index.html'));
  // let markedStr = fs.readFile(path.resolve(process.cwd(), 'docs/README3.md'), 'utf-8', (err, data) => {
  //   if (err) throw err;
  // });
});

app.get('/doc/:type/:id', (req, res) => {
  const { type, id } = req.params;
  let markedStr = fs.readFile(path.resolve(process.cwd(), docMap[type][id]), 'utf-8', (err, data) => {
    if (err) throw err;
    res.send(marked(data));
  });
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000/');
});
