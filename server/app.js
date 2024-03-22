const express = require('express');

const dotenv = require('dotenv');
// models 객체 중 sequelize 인스턴스 불러옴
const { sequelize } = require('./models');
const cookieParser = require('cookie-parser');

const app = express();

dotenv.config();

app.set('port', process.env.DATABASE_PORT || 3000);
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());

// 불러온 sequelize의 메소드 sync 이용해 데이터베이스 연결
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((err) => {
    console.error('Error synchronizing database:', err);
  });

app.use('/auth', require('./routes/auth'));

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중 ');
});
