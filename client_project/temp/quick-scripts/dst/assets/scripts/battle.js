
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/battle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c75160onE1L85aAYcU40taO', 'battle');
// scripts/battle.js

"use strict";

var Api = require("api");

var Global = require("common");

cc.Class({
  "extends": cc.Component,
  //
  getApi: function getApi() {
    return new Api();
  },
  //获取地址端口
  getHost: function getHost() {
    return Global.Addr;
  },
  //获取随机数
  getRandNumber: function getRandNumber(number) {
    if (Global.randseed == 0) {
      return number;
    }

    return this.getApi().Rand(number, Global.randseed);
  },
  getRandOne: function getRandOne(randseed) {
    if (randseed == 0) {
      randseed = Global.randseed;
    }

    return this.getApi().RandOne(randseed);
  },
  //发送更新star位置更新信息
  postUpdateStarPosMsg: function postUpdateStarPosMsg(maxX) {
    //cc.log("begin send battle start message.")
    var request = cc.loader.getXMLHttpRequest();
    var url = this.getHost() + "/UpdateStarPos";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    request.responseType = "arraybuffer";

    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status >= 200 && request.status < 300) {
        //cc.log("UpdateStarPos response: ", request.response)
        var data = new Uint32Array(request.response); //cc.log("UpdateStarPos data: ", data)

        Global.starPosRandseed = data[0];
        Global.starPosRandN = data[1];
        return;
      }
    };

    request.send(new Uint16Array([1, maxX]));
  },
  //发送战斗开始请求
  postBattleStartMsg: function postBattleStartMsg() {
    if (Global.randseed > 0) {
      return;
    } //cc.log("begin send battle start message.")


    var request = cc.loader.getXMLHttpRequest();
    var url = this.getHost() + "/BattleStart";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");

    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status >= 200 && request.status < 300) {
        Global.randseed = parseInt(request.responseText); //cc.log("BattleStart response: ", request.responseText)
      }
    };

    request.send(new Uint16Array([1])); //param 1: 数据长度，param ...: 具体数据
  },
  //发送攻击请求
  postAttackMsg: function postAttackMsg(frame, dist) {
    //cc.log("begin send Attack message.", Global.randseed)
    var request = cc.loader.getXMLHttpRequest();
    var url = this.getHost() + "/Attack";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");

    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status >= 200 && request.status < 300) {//cc.log("Attack response: ", request.responseText)
      }
    };

    var randn = this.getRandNumber(dist);
    request.send(new Uint16Array([3, frame, dist, randn])); //param 1: 数据长度，param ...: 具体数据
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JhdHRsZS5qcyJdLCJuYW1lcyI6WyJBcGkiLCJyZXF1aXJlIiwiR2xvYmFsIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImdldEFwaSIsImdldEhvc3QiLCJBZGRyIiwiZ2V0UmFuZE51bWJlciIsIm51bWJlciIsInJhbmRzZWVkIiwiUmFuZCIsImdldFJhbmRPbmUiLCJSYW5kT25lIiwicG9zdFVwZGF0ZVN0YXJQb3NNc2ciLCJtYXhYIiwicmVxdWVzdCIsImxvYWRlciIsImdldFhNTEh0dHBSZXF1ZXN0IiwidXJsIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiZGF0YSIsIlVpbnQzMkFycmF5IiwicmVzcG9uc2UiLCJzdGFyUG9zUmFuZHNlZWQiLCJzdGFyUG9zUmFuZE4iLCJzZW5kIiwiVWludDE2QXJyYXkiLCJwb3N0QmF0dGxlU3RhcnRNc2ciLCJwYXJzZUludCIsInJlc3BvbnNlVGV4dCIsInBvc3RBdHRhY2tNc2ciLCJmcmFtZSIsImRpc3QiLCJyYW5kbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxHQUFHLEdBQUdDLE9BQU8sQ0FBQyxLQUFELENBQWpCOztBQUNBLElBQUlDLE1BQU0sR0FBR0QsT0FBTyxDQUFDLFFBQUQsQ0FBcEI7O0FBRUFFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0w7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFVO0FBQ2QsV0FBTyxJQUFJTixHQUFKLEVBQVA7QUFDSCxHQU5JO0FBUUw7QUFDQU8sRUFBQUEsT0FBTyxFQUFFLG1CQUFXO0FBQ2hCLFdBQU9MLE1BQU0sQ0FBQ00sSUFBZDtBQUNILEdBWEk7QUFhTDtBQUNBQyxFQUFBQSxhQUFhLEVBQUUsdUJBQVNDLE1BQVQsRUFBZ0I7QUFDM0IsUUFB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QUEsYUFBYSxFQUFFLHVCQUFTQyxLQUFULEVBQWdCQyxJQUFoQixFQUFzQjtBQUNqQztBQUNBLFFBQUl0QixPQUFPLEdBQUdkLEVBQUUsQ0FBQ2UsTUFBSCxDQUFVQyxpQkFBVixFQUFkO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLEtBQUtiLE9BQUwsS0FBaUIsU0FBM0I7QUFDQVUsSUFBQUEsT0FBTyxDQUFDSSxJQUFSLENBQWEsTUFBYixFQUFxQkQsR0FBckIsRUFBMEIsSUFBMUI7QUFDQUgsSUFBQUEsT0FBTyxDQUFDSyxnQkFBUixDQUF5QixjQUF6QixFQUF5QywwQkFBekM7O0FBQ0FMLElBQUFBLE9BQU8sQ0FBQ08sa0JBQVIsR0FBNkIsWUFBVTtBQUNuQyxVQUFJUCxPQUFPLENBQUNRLFVBQVIsSUFBc0IsQ0FBdEIsSUFBNEJSLE9BQU8sQ0FBQ1MsTUFBUixJQUFrQixHQUFsQixJQUF5QlQsT0FBTyxDQUFDUyxNQUFSLEdBQWlCLEdBQTFFLEVBQWdGLENBQzVFO0FBQ0g7QUFDSixLQUpEOztBQU1BLFFBQUljLEtBQUssR0FBRyxLQUFLL0IsYUFBTCxDQUFtQjhCLElBQW5CLENBQVo7QUFDQXRCLElBQUFBLE9BQU8sQ0FBQ2UsSUFBUixDQUFhLElBQUlDLFdBQUosQ0FBZ0IsQ0FBQyxDQUFELEVBQUlLLEtBQUosRUFBV0MsSUFBWCxFQUFpQkMsS0FBakIsQ0FBaEIsQ0FBYixFQWJpQyxDQWFzQjtBQUMxRDtBQXRGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgQXBpID0gcmVxdWlyZShcImFwaVwiKVxubGV0IEdsb2JhbCA9IHJlcXVpcmUoXCJjb21tb25cIilcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIC8vXG4gICAgZ2V0QXBpOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gbmV3IEFwaSgpXG4gICAgfSxcblxuICAgIC8v6I635Y+W5Zyw5Z2A56uv5Y+jXG4gICAgZ2V0SG9zdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBHbG9iYWwuQWRkcjtcbiAgICB9LFxuXG4gICAgLy/ojrflj5bpmo/mnLrmlbBcbiAgICBnZXRSYW5kTnVtYmVyOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICBpZiAoR2xvYmFsLnJhbmRzZWVkID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGkoKS5SYW5kKG51bWJlciwgR2xvYmFsLnJhbmRzZWVkKTtcbiAgICB9LFxuXG4gICAgZ2V0UmFuZE9uZTogZnVuY3Rpb24ocmFuZHNlZWQpe1xuICAgICAgICBpZiAocmFuZHNlZWQgPT0gMCkge1xuICAgICAgICAgICAgcmFuZHNlZWQgPSBHbG9iYWwucmFuZHNlZWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGkoKS5SYW5kT25lKHJhbmRzZWVkKTtcbiAgICB9LFxuXG4gICAgLy/lj5HpgIHmm7TmlrBzdGFy5L2N572u5pu05paw5L+h5oGvXG4gICAgcG9zdFVwZGF0ZVN0YXJQb3NNc2c6IGZ1bmN0aW9uKG1heFgpe1xuICAgICAgICAvL2NjLmxvZyhcImJlZ2luIHNlbmQgYmF0dGxlIHN0YXJ0IG1lc3NhZ2UuXCIpXG4gICAgICAgIHZhciByZXF1ZXN0ID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmdldEhvc3QoKSArIFwiL1VwZGF0ZVN0YXJQb3NcIlxuICAgICAgICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSlcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCIpO1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0ICYmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCAzMDApKSB7XG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCJVcGRhdGVTdGFyUG9zIHJlc3BvbnNlOiBcIiwgcmVxdWVzdC5yZXNwb25zZSlcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IG5ldyBVaW50MzJBcnJheShyZXF1ZXN0LnJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiVXBkYXRlU3RhclBvcyBkYXRhOiBcIiwgZGF0YSlcbiAgICAgICAgICAgICAgICBHbG9iYWwuc3RhclBvc1JhbmRzZWVkID0gZGF0YVswXVxuICAgICAgICAgICAgICAgIEdsb2JhbC5zdGFyUG9zUmFuZE4gPSBkYXRhWzFdXG4gICAgICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIHJlcXVlc3Quc2VuZChuZXcgVWludDE2QXJyYXkoWzEsIG1heFhdKSlcbiAgICB9LFxuXG4gICAgLy/lj5HpgIHmiJjmlpflvIDlp4vor7fmsYJcbiAgICBwb3N0QmF0dGxlU3RhcnRNc2c6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoR2xvYmFsLnJhbmRzZWVkID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvL2NjLmxvZyhcImJlZ2luIHNlbmQgYmF0dGxlIHN0YXJ0IG1lc3NhZ2UuXCIpXG4gICAgICAgIHZhciByZXF1ZXN0ID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmdldEhvc3QoKSArIFwiL0JhdHRsZVN0YXJ0XCJcbiAgICAgICAgcmVxdWVzdC5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpXG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvcGxhaW47Y2hhcnNldD1VVEYtOFwiKTtcbiAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0ICYmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCAzMDApKSB7XG4gICAgICAgICAgICAgICAgR2xvYmFsLnJhbmRzZWVkID0gcGFyc2VJbnQocmVxdWVzdC5yZXNwb25zZVRleHQpXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCJCYXR0bGVTdGFydCByZXNwb25zZTogXCIsIHJlcXVlc3QucmVzcG9uc2VUZXh0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIHJlcXVlc3Quc2VuZChuZXcgVWludDE2QXJyYXkoWzFdKSkgLy9wYXJhbSAxOiDmlbDmja7plb/luqbvvIxwYXJhbSAuLi46IOWFt+S9k+aVsOaNrlxuICAgIH0sXG5cbiAgICAvL+WPkemAgeaUu+WHu+ivt+axglxuICAgIHBvc3RBdHRhY2tNc2c6IGZ1bmN0aW9uKGZyYW1lLCBkaXN0KSB7XG4gICAgICAgIC8vY2MubG9nKFwiYmVnaW4gc2VuZCBBdHRhY2sgbWVzc2FnZS5cIiwgR2xvYmFsLnJhbmRzZWVkKVxuICAgICAgICB2YXIgcmVxdWVzdCA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB2YXIgdXJsID0gdGhpcy5nZXRIb3N0KCkgKyBcIi9BdHRhY2tcIlxuICAgICAgICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSlcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCIpO1xuICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQgJiYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDMwMCkpIHtcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkF0dGFjayByZXNwb25zZTogXCIsIHJlcXVlc3QucmVzcG9uc2VUZXh0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIHZhciByYW5kbiA9IHRoaXMuZ2V0UmFuZE51bWJlcihkaXN0KVxuICAgICAgICByZXF1ZXN0LnNlbmQobmV3IFVpbnQxNkFycmF5KFszLCBmcmFtZSwgZGlzdCwgcmFuZG5dKSkgLy9wYXJhbSAxOiDmlbDmja7plb/luqbvvIxwYXJhbSAuLi46IOWFt+S9k+aVsOaNrlxuICAgIH1cbn0pXG5cbiJdfQ==