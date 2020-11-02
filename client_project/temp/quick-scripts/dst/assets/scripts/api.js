
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/api.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd36e5DJLYRPSYxoKddtNFw3', 'api');
// scripts/api.js

"use strict";

cc.Class({
  "extends": cc.Component,
  realrnd: function realrnd(seed) {
    seed = (seed * 9301 + 49297) % 233280; //为何使用这三个数: https://www.zhihu.com/question/22818104

    return seed / 233280.0;
  },
  Rand: function Rand(number, seed) {
    //today = new Date(); 
    //seed = today.getTime();
    return Math.ceil(this.realrnd(seed) * number);
  },
  // is samed to Math.random
  RandOne: function RandOne(seed) {
    return Math.ceil(this.realrnd(seed) * 9999.0) / 10000.0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FwaS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicmVhbHJuZCIsInNlZWQiLCJSYW5kIiwibnVtYmVyIiwiTWF0aCIsImNlaWwiLCJSYW5kT25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDckJBLElBQUFBLElBQUksR0FBRyxDQUFFQSxJQUFJLEdBQUcsSUFBUCxHQUFjLEtBQWhCLElBQTBCLE1BQWpDLENBRHFCLENBQ29COztBQUN6QyxXQUFPQSxJQUFJLEdBQUssUUFBaEI7QUFDSCxHQU5JO0FBUUxDLEVBQUFBLElBQUksRUFBRSxjQUFVQyxNQUFWLEVBQWtCRixJQUFsQixFQUF3QjtBQUMxQjtBQUNBO0FBQ0EsV0FBT0csSUFBSSxDQUFDQyxJQUFMLENBQVcsS0FBS0wsT0FBTCxDQUFjQyxJQUFkLElBQXVCRSxNQUFsQyxDQUFQO0FBQ0gsR0FaSTtBQWNMO0FBQ0FHLEVBQUFBLE9BQU8sRUFBRSxpQkFBU0wsSUFBVCxFQUFlO0FBQ3BCLFdBQU9HLElBQUksQ0FBQ0MsSUFBTCxDQUFXLEtBQUtMLE9BQUwsQ0FBY0MsSUFBZCxJQUF1QixNQUFsQyxJQUEyQyxPQUFsRDtBQUNIO0FBakJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICByZWFscm5kOiBmdW5jdGlvbiggc2VlZCApe1xuICAgICAgICBzZWVkID0gKCBzZWVkICogOTMwMSArIDQ5Mjk3ICkgJSAyMzMyODA7IC8v5Li65L2V5L2/55So6L+Z5LiJ5Liq5pWwOiBodHRwczovL3d3dy56aGlodS5jb20vcXVlc3Rpb24vMjI4MTgxMDRcbiAgICAgICAgcmV0dXJuIHNlZWQgLyAoIDIzMzI4MC4wICk7XG4gICAgfSxcblxuICAgIFJhbmQ6IGZ1bmN0aW9uKCBudW1iZXIsIHNlZWQgKXtcbiAgICAgICAgLy90b2RheSA9IG5ldyBEYXRlKCk7IFxuICAgICAgICAvL3NlZWQgPSB0b2RheS5nZXRUaW1lKCk7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoIHRoaXMucmVhbHJuZCggc2VlZCApICogbnVtYmVyICk7XG4gICAgfSxcblxuICAgIC8vIGlzIHNhbWVkIHRvIE1hdGgucmFuZG9tXG4gICAgUmFuZE9uZTogZnVuY3Rpb24oc2VlZCkge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKCB0aGlzLnJlYWxybmQoIHNlZWQgKSAqIDk5OTkuMCApLzEwMDAwLjA7XG4gICAgfVxufSkiXX0=