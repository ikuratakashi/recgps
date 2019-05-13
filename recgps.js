//========================================================================
//
//名前空間作成
//
//========================================================================

//recgps
if(typeof(recgps)=='undefined')recgps=function(){};

//========================================================================
//
//共通関数
//
//========================================================================

//ログ・コンソール出力
class clsLog {
    constructor(pLevel,pIsOut){
        this.level = pLevel;
        this.isOut = pIsOut;
    }
    //ログ出力
    out(plevel,pMsg){
        if(this.isOut == true){
            if(plevel <= this.level){
                //タイムスタンプ作成
                var bufDate= new Date();
                var year = bufDate.getFullYear();
                var month = bufDate.getMonth() + 1;
                var date = bufDate.getDate();
                var hour = bufDate.getHours();
                var minute = bufDate.getMinutes();
                var second = bufDate.getSeconds();
                var buf = "[" + year + "/" + month + "/" + date + " " + ('00' + hour).slice(-2) + ":" + ('00' + minute).slice(-2) + ":" + ('00' + second).slice(-2) + "]:";
                console.log(buf + pMsg);
            }
        }
    }
    //ライン ログ出力
    line(plevel){
        var _msg = "***********************************"
        this.out(plevel,_msg);
    }
}

//---------------------------------------------
//
//ログ出力設定
//
//---------------------------------------------
recgps.log = new clsLog(3,true);

//---------------------------------------------
//
//タイトル出力
//
//---------------------------------------------
recgps.log.out(3,'============================================================');
recgps.log.out(3,'ArukISoft. 2019 ver 1.00.00 b');
recgps.log.out(3,'============================================================');
recgps.log.out(3,'          8888888 8888888  88888888 ');
recgps.log.out(3,'    8    8        8      8 8        ');
recgps.log.out(3,'  88888  8  88888 8888888  88888888 ');
recgps.log.out(3,'    8    8      8 8               8 ');
recgps.log.out(3,'          888888  8        88888888 ');
recgps.log.out(3,'');
recgps.log.out(3,'============================================================');

//========================================================================
//
//初期設定
//
//========================================================================

//フレームワーク Express
var express = require('express');
var app = express();

//設定ファイルの読み込み
require('dotenv').config();

//バリデーション(HTTPパラメタチェック)使用
var validator = require('express-validator');
app.use(validator());

//クロスサイト制限を外す設定
app.use(cors());

//mySql使用 
recgps.mysql   = require('mysql');
recgps.ConConf = {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
};
