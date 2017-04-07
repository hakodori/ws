var http = require("http");
// const querystring = require('querystring');
// var url = require('url');

http.createServer(function(request, response) {

      str = request.url;
      if (str != "/") {
        str = decodeURI(str);
        str = str.replace("/", "");
        str = str.toLowerCase();

        //console.log(str);
        //console.log(decodeURI(str));
        var res = {};
        parseString(str, res);
        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        // response.setHeader('Content-type', 'text/html');
        // response.setHeader('Content-type', 'text/html');
        response.end(JSON.stringify(res));
      } else {
        response.end();
      }

}).listen(process.env.PORT || 5000);

function parseString(str, res){

    splitArr = str.split('_', 50);

    splitArr.forEach(function(item, i, splitArr) {
      //console.log(item);
      analyzeText(item, res);
    });

}

function analyzeText(text, res){

    if (text == 'за') {
      res.readPeriodPo = false;
      res.readPeriodS = false;
      res.readPeriodZa  = true;
    } else if (text == 'с') {
      res.readPeriodPo = false;
      res.readPeriodS = true;
      res.readPeriodZa  = false;
    } else if (text == 'по') {
      res.readPeriodPo = true;
      res.readPeriodS = false;
      res.readPeriodZa  = false;
    }

    if ((text == 'прошлый') || (text == 'прошлого') || (text == 'прошлой') || (text == 'прошлую')) {
      res.readPastPeriod = true;
    }

    if (text == 'продажи') {
      res.intent = 'продажи';
    }

    if (res.readPeriodZa || res.readPeriodS || res.readPeriodPo) {
      readPeriod(text, res);
    }
}

function readPeriod(text, res){

    if (text == 'январь' || text == 'января'){
      res.month = 1;
    } else if (text == 'февраль' || text == 'февраля'){
      res.month = 2;
    } else if (text == 'март' || text == 'марта'){
      res.month = 3;
    } else if (text == 'апрель' || text == 'апреля'){
      res.month = 4;
    } else if (text == 'май' || text == 'мая'){
      res.month = 5;
    } else if (text == 'июнь' || text == 'июня'){
      res.month = 6;
    } else if (text == 'июль' || text == 'июля'){
      res.month = 7;
    } else if (text == 'август' || text == 'августа'){
      res.month = 8;
    } else if (text == 'сентябрь' || text == 'сентября'){
      res.month = 9;
    } else if (text == 'октябрь' || text == 'октября'){
      res.month = 10;
    } else if (text == 'ноябрь' || text == 'ноября'){
      res.month = 11;
    } else if (text == 'декабрь' || text == 'декабря'){
      res.month = 12;
    }

}
