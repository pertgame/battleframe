
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ioNet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b591fCkMpNAoTBTiEzeldr', 'ioNet');
// scripts/ioNet.js

"use strict";

/*
    客户端socket.on()监听的事件：
        connect：           连接成功
        connecting：        正在连接
        disconnect：        断开连接
        connect_failed：    连接失败
        error：             错误发生，并且无法被其他事件类型所处理
        message：           同服务器端message事件
        anything：          同服务器端anything事件
        reconnect_failed：  重连失败
        reconnect：         成功重连
        reconnecting：      正在重连

    当第一次连接时，事件触发顺序为：connecting->connect；当失去连接时，事件触发顺序为：disconnect->reconnecting（可能进行多次）->connecting->reconnect->connect。
*/
var Global = require("common");

cc.Class({
  "extends": cc.Component,
  ioConnect: function ioConnect() {
    var iosocket = io.connect(Global.wsAddr);
    iosocket.on("connect", function () {
      cc.log("ionet connect.");
    });
    iosocket.on("message", function (data) {
      cc.log("ionet message: ", data);
    });
    iosocket.on("connecting", function () {
      cc.log("ionet connecting.");
    });
    iosocket.on("disconnect", function () {
      cc.log("ionet disconnect.");
    });
    iosocket.on("reconnecting", function () {
      cc.log("ionet reconnecting.");
    });
    iosocket.on("connecting", function () {
      cc.log("ionet connecting.");
    });
    iosocket.on("reconnect", function () {
      cc.log("ionet reconnect.");
    });
    iosocket.on("error", function () {
      cc.log("ionet error.");
    });
    Global.ioSocket = iosocket;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2lvTmV0LmpzIl0sIm5hbWVzIjpbIkdsb2JhbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiaW9Db25uZWN0IiwiaW9zb2NrZXQiLCJpbyIsImNvbm5lY3QiLCJ3c0FkZHIiLCJvbiIsImxvZyIsImRhdGEiLCJpb1NvY2tldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLElBQUlBLE1BQU0sR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBcEI7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFNBQVMsRUFBRSxxQkFBVztBQUNsQixRQUFJQyxRQUFRLEdBQUdDLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXUixNQUFNLENBQUNTLE1BQWxCLENBQWY7QUFFQUgsSUFBQUEsUUFBUSxDQUFDSSxFQUFULENBQVksU0FBWixFQUF1QixZQUFVO0FBQzdCUixNQUFBQSxFQUFFLENBQUNTLEdBQUgsQ0FBTyxnQkFBUDtBQUNILEtBRkQ7QUFJQUwsSUFBQUEsUUFBUSxDQUFDSSxFQUFULENBQVksU0FBWixFQUF1QixVQUFTRSxJQUFULEVBQWM7QUFDakNWLE1BQUFBLEVBQUUsQ0FBQ1MsR0FBSCxDQUFPLGlCQUFQLEVBQTBCQyxJQUExQjtBQUNILEtBRkQ7QUFJQU4sSUFBQUEsUUFBUSxDQUFDSSxFQUFULENBQVksWUFBWixFQUEwQixZQUFVO0FBQ2hDUixNQUFBQSxFQUFFLENBQUNTLEdBQUgsQ0FBTyxtQkFBUDtBQUNILEtBRkQ7QUFJQUwsSUFBQUEsUUFBUSxDQUFDSSxFQUFULENBQVksWUFBWixFQUEwQixZQUFVO0FBQ2hDUixNQUFBQSxFQUFFLENBQUNTLEdBQUgsQ0FBTyxtQkFBUDtBQUNILEtBRkQ7QUFJQUwsSUFBQUEsUUFBUSxDQUFDSSxFQUFULENBQVksY0FBWixFQUE0QixZQUFVO0FBQ2xDUixNQUFBQSxFQUFFLENBQUNTLEdBQUgsQ0FBTyxxQkFBUDtBQUNILEtBRkQ7QUFJQUwsSUFBQUEsUUFBUSxDQUFDSSxFQUFULENBQVksWUFBWixFQUEwQixZQUFVO0FBQ2hDUixNQUFBQSxFQUFFLENBQUNTLEdBQUgsQ0FBTyxtQkFBUDtBQUNILEtBRkQ7QUFJQUwsSUFBQUEsUUFBUSxDQUFDSSxFQUFULENBQVksV0FBWixFQUF5QixZQUFVO0FBQy9CUixNQUFBQSxFQUFFLENBQUNTLEdBQUgsQ0FBTyxrQkFBUDtBQUNILEtBRkQ7QUFJQUwsSUFBQUEsUUFBUSxDQUFDSSxFQUFULENBQVksT0FBWixFQUFxQixZQUFVO0FBQzNCUixNQUFBQSxFQUFFLENBQUNTLEdBQUgsQ0FBTyxjQUFQO0FBQ0gsS0FGRDtBQUlBWCxJQUFBQSxNQUFNLENBQUNhLFFBQVAsR0FBa0JQLFFBQWxCO0FBQ0g7QUF2Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICDlrqLmiLfnq69zb2NrZXQub24oKeebkeWQrOeahOS6i+S7tu+8mlxuICAgICAgICBjb25uZWN077yaICAgICAgICAgICDov57mjqXmiJDlip9cbiAgICAgICAgY29ubmVjdGluZ++8miAgICAgICAg5q2j5Zyo6L+e5o6lXG4gICAgICAgIGRpc2Nvbm5lY3TvvJogICAgICAgIOaWreW8gOi/nuaOpVxuICAgICAgICBjb25uZWN0X2ZhaWxlZO+8miAgICDov57mjqXlpLHotKVcbiAgICAgICAgZXJyb3LvvJogICAgICAgICAgICAg6ZSZ6K+v5Y+R55Sf77yM5bm25LiU5peg5rOV6KKr5YW25LuW5LqL5Lu257G75Z6L5omA5aSE55CGXG4gICAgICAgIG1lc3NhZ2XvvJogICAgICAgICAgIOWQjOacjeWKoeWZqOerr21lc3NhZ2Xkuovku7ZcbiAgICAgICAgYW55dGhpbmfvvJogICAgICAgICAg5ZCM5pyN5Yqh5Zmo56uvYW55dGhpbmfkuovku7ZcbiAgICAgICAgcmVjb25uZWN0X2ZhaWxlZO+8miAg6YeN6L+e5aSx6LSlXG4gICAgICAgIHJlY29ubmVjdO+8miAgICAgICAgIOaIkOWKn+mHjei/nlxuICAgICAgICByZWNvbm5lY3RpbmfvvJogICAgICDmraPlnKjph43ov55cblxuICAgIOW9k+esrOS4gOasoei/nuaOpeaXtu+8jOS6i+S7tuinpuWPkemhuuW6j+S4uu+8mmNvbm5lY3RpbmctPmNvbm5lY3TvvJvlvZPlpLHljrvov57mjqXml7bvvIzkuovku7bop6blj5Hpobrluo/kuLrvvJpkaXNjb25uZWN0LT5yZWNvbm5lY3RpbmfvvIjlj6/og73ov5vooYzlpJrmrKHvvIktPmNvbm5lY3RpbmctPnJlY29ubmVjdC0+Y29ubmVjdOOAglxuKi9cblxubGV0IEdsb2JhbCA9IHJlcXVpcmUoXCJjb21tb25cIilcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIGlvQ29ubmVjdDogZnVuY3Rpb24gKCl7XG4gICAgICAgIHZhciBpb3NvY2tldCA9IGlvLmNvbm5lY3QoR2xvYmFsLndzQWRkcikgICAgXG4gICAgICAgIFxuICAgICAgICBpb3NvY2tldC5vbihcImNvbm5lY3RcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNjLmxvZyhcImlvbmV0IGNvbm5lY3QuXCIpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlvc29ja2V0Lm9uKFwibWVzc2FnZVwiLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNjLmxvZyhcImlvbmV0IG1lc3NhZ2U6IFwiLCBkYXRhKVxuICAgICAgICB9KTtcblxuICAgICAgICBpb3NvY2tldC5vbihcImNvbm5lY3RpbmdcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNjLmxvZyhcImlvbmV0IGNvbm5lY3RpbmcuXCIpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlvc29ja2V0Lm9uKFwiZGlzY29ubmVjdFwiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY2MubG9nKFwiaW9uZXQgZGlzY29ubmVjdC5cIilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW9zb2NrZXQub24oXCJyZWNvbm5lY3RpbmdcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNjLmxvZyhcImlvbmV0IHJlY29ubmVjdGluZy5cIilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW9zb2NrZXQub24oXCJjb25uZWN0aW5nXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjYy5sb2coXCJpb25ldCBjb25uZWN0aW5nLlwiKVxuICAgICAgICB9KTtcblxuICAgICAgICBpb3NvY2tldC5vbihcInJlY29ubmVjdFwiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY2MubG9nKFwiaW9uZXQgcmVjb25uZWN0LlwiKVxuICAgICAgICB9KTtcblxuICAgICAgICBpb3NvY2tldC5vbihcImVycm9yXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjYy5sb2coXCJpb25ldCBlcnJvci5cIilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgR2xvYmFsLmlvU29ja2V0ID0gaW9zb2NrZXRcbiAgICB9XG59KSJdfQ==