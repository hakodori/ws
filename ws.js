var http = require("http");
const querystring = require('querystring');
var url = require('url');

http.createServer(function(request, response) {

      str = request.url;
      if (str != "/") {
        str = str.replace("/", "");
        //console.log(str);
        var res = {};
        parseString(str, res);
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

    if (text == "za") {
      res.readPeriodPo = false;
      res.readPeriodS = false;
      res.readPeriodZa  = true;
    } else if (text == 's') {
      res.readPeriodPo = false;
      res.readPeriodS = true;
      res.readPeriodZa  = false;
    } else if (text == 'po') {
      res.readPeriodPo = true;
      res.readPeriodS = false;
      res.readPeriodZa  = false;
    }

    if ((text == 'proshlyi') || (text == 'прошлого') || (text == 'прошлой') || (text == 'прошлую')) {
      res.readPastPeriod = true;
    }

    if (text == 'sales') {
      res.intent = 'Sales';
    }

    if (res.readPeriodZa || res.readPeriodS || res.readPeriodPo) {
      readPeriod(text, res);
    }
}

function readPeriod(text, res){

    if (text == 'yanvar' || text == 'января'){
      res.month = 1;
    } else if (text == 'fevral' || text == 'февраля'){
      res.month = 2;
    } else if (text == 'mart' || text == 'марта'){
      res.month = 3;
    } else if (text == 'aprel' || text == 'апреля'){
      res.month = 4;
    } else if (text == 'mai' || text == 'мая'){
      res.month = 5;
    } else if (text == 'iun' || text == 'июня'){
      res.month = 6;
    } else if (text == 'uil' || text == 'июля'){
      res.month = 7;
    } else if (text == 'avgust' || text == 'августа'){
      res.month = 8;
    } else if (text == 'sentyabr' || text == 'сентября'){
      res.month = 9;
    } else if (text == 'oktyabr' || text == 'октября'){
      res.month = 10;
    } else if (text == 'noyabr' || text == 'ноября'){
      res.month = 11;
    } else if (text == 'dekabr' || text == 'декабря'){
      res.month = 12;
    }

}
