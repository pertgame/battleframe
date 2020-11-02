
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gm.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b4382aBhFPO6s4qV0x0VrN', 'gm');
// scripts/gm.js

"use strict";

var wsNet = require("wsNet");

var Global = require("common"); // gm id列表


var GMID = {
  resetStarPos: 1
};
cc.Class({
  getwsNetObj: function getwsNetObj() {
    return new wsNet();
  },
  sendResetStarPos: function sendResetStarPos() {
    cc.log("reset star pos...");
    var buff = new ArrayBuffer(28);
    var data = new Uint32Array(buff);
    data[0] = Global.MID_GM; //消息ID

    data[1] = 5; //消息长度

    data[2] = GMID.resetStarPos; //gm 子命令id

    var nodexflag = 1;
    var nodex = 0.0;

    if (nodex < 0.0) {
      nodexflag = 2;
      nodex = 0.0 - nodex;
    }

    data[3] = nodexflag; //x坐标正负

    data[4] = parseInt(nodex); //x坐标

    var nodeyflag = 1;
    var nodey = -88;

    if (nodey < 0.0) {
      nodeyflag = 2;
      nodey = 0.0 - nodey;
    }

    data[5] = nodeyflag; //y坐标正负

    data[6] = parseInt(nodey); //y坐标

    this.getwsNetObj().sendwsmessage(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dtLmpzIl0sIm5hbWVzIjpbIndzTmV0IiwicmVxdWlyZSIsIkdsb2JhbCIsIkdNSUQiLCJyZXNldFN0YXJQb3MiLCJjYyIsIkNsYXNzIiwiZ2V0d3NOZXRPYmoiLCJzZW5kUmVzZXRTdGFyUG9zIiwibG9nIiwiYnVmZiIsIkFycmF5QnVmZmVyIiwiZGF0YSIsIlVpbnQzMkFycmF5IiwiTUlEX0dNIiwibm9kZXhmbGFnIiwibm9kZXgiLCJwYXJzZUludCIsIm5vZGV5ZmxhZyIsIm5vZGV5Iiwic2VuZHdzbWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQW5COztBQUNBLElBQUlDLE1BQU0sR0FBR0QsT0FBTyxDQUFDLFFBQUQsQ0FBcEIsRUFFQTs7O0FBQ0EsSUFBSUUsSUFBSSxHQUFHO0FBQ1BDLEVBQUFBLFlBQVksRUFBRTtBQURQLENBQVg7QUFJQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFFTEMsRUFBQUEsV0FBVyxFQUFFLHVCQUFXO0FBQ3BCLFdBQU8sSUFBSVAsS0FBSixFQUFQO0FBQ0gsR0FKSTtBQU1MUSxFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBVTtBQUN4QkgsSUFBQUEsRUFBRSxDQUFDSSxHQUFILENBQU8sbUJBQVA7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBSUMsV0FBSixDQUFnQixFQUFoQixDQUFYO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLElBQUlDLFdBQUosQ0FBZ0JILElBQWhCLENBQVg7QUFFQUUsSUFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVVixNQUFNLENBQUNZLE1BQWpCLENBTHdCLENBS1E7O0FBQ2hDRixJQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsQ0FBVixDQU53QixDQU1ROztBQUNoQ0EsSUFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVVCxJQUFJLENBQUNDLFlBQWYsQ0FQd0IsQ0FPUTs7QUFFaEMsUUFBSVcsU0FBUyxHQUFHLENBQWhCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEdBQVo7O0FBQ0EsUUFBSUEsS0FBSyxHQUFHLEdBQVosRUFBaUI7QUFDYkQsTUFBQUEsU0FBUyxHQUFHLENBQVo7QUFDQUMsTUFBQUEsS0FBSyxHQUFHLE1BQU1BLEtBQWQ7QUFDSDs7QUFFREosSUFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVRyxTQUFWLENBaEJ3QixDQWdCUTs7QUFDaENILElBQUFBLElBQUksQ0FBQyxDQUFELENBQUosR0FBVUssUUFBUSxDQUFDRCxLQUFELENBQWxCLENBakJ3QixDQWlCUTs7QUFDaEMsUUFBSUUsU0FBUyxHQUFHLENBQWhCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLENBQUMsRUFBYjs7QUFDQSxRQUFJQSxLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUNiRCxNQUFBQSxTQUFTLEdBQUcsQ0FBWjtBQUNBQyxNQUFBQSxLQUFLLEdBQUcsTUFBTUEsS0FBZDtBQUNIOztBQUVEUCxJQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVNLFNBQVYsQ0F6QndCLENBeUJROztBQUNoQ04sSUFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVSyxRQUFRLENBQUNFLEtBQUQsQ0FBbEIsQ0ExQndCLENBMEJROztBQUVoQyxTQUFLWixXQUFMLEdBQW1CYSxhQUFuQixDQUFpQ1IsSUFBakM7QUFDSDtBQW5DSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCB3c05ldCA9IHJlcXVpcmUoXCJ3c05ldFwiKVxubGV0IEdsb2JhbCA9IHJlcXVpcmUoXCJjb21tb25cIilcblxuLy8gZ20gaWTliJfooahcbnZhciBHTUlEID0ge1xuICAgIHJlc2V0U3RhclBvczogMSxcbn1cblxuY2MuQ2xhc3Moe1xuXG4gICAgZ2V0d3NOZXRPYmo6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV3IHdzTmV0KCk7XG4gICAgfSxcblxuICAgIHNlbmRSZXNldFN0YXJQb3M6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNjLmxvZyhcInJlc2V0IHN0YXIgcG9zLi4uXCIpXG4gICAgICAgIHZhciBidWZmID0gbmV3IEFycmF5QnVmZmVyKDI4KVxuICAgICAgICB2YXIgZGF0YSA9IG5ldyBVaW50MzJBcnJheShidWZmKVxuXG4gICAgICAgIGRhdGFbMF0gPSBHbG9iYWwuTUlEX0dNICAgICAgICAgLy/mtojmga9JRFxuICAgICAgICBkYXRhWzFdID0gNSAgICAgICAgICAgICAgICAgICAgIC8v5raI5oGv6ZW/5bqmXG4gICAgICAgIGRhdGFbMl0gPSBHTUlELnJlc2V0U3RhclBvcyAgICAgLy9nbSDlrZDlkb3ku6RpZFxuICAgICAgICBcbiAgICAgICAgdmFyIG5vZGV4ZmxhZyA9IDFcbiAgICAgICAgdmFyIG5vZGV4ID0gMC4wXG4gICAgICAgIGlmIChub2RleCA8IDAuMCkge1xuICAgICAgICAgICAgbm9kZXhmbGFnID0gMlxuICAgICAgICAgICAgbm9kZXggPSAwLjAgLSBub2RleFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVszXSA9IG5vZGV4ZmxhZyAgICAgICAgICAgICAvL3jlnZDmoIfmraPotJ9cbiAgICAgICAgZGF0YVs0XSA9IHBhcnNlSW50KG5vZGV4KSAgICAgICAvL3jlnZDmoIdcbiAgICAgICAgdmFyIG5vZGV5ZmxhZyA9IDFcbiAgICAgICAgdmFyIG5vZGV5ID0gLTg4IFxuICAgICAgICBpZiAobm9kZXkgPCAwLjApIHtcbiAgICAgICAgICAgIG5vZGV5ZmxhZyA9IDJcbiAgICAgICAgICAgIG5vZGV5ID0gMC4wIC0gbm9kZXlcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbNV0gPSBub2RleWZsYWcgICAgICAgICAgICAgLy955Z2Q5qCH5q2j6LSfXG4gICAgICAgIGRhdGFbNl0gPSBwYXJzZUludChub2RleSkgICAgICAgLy955Z2Q5qCHXG5cbiAgICAgICAgdGhpcy5nZXR3c05ldE9iaigpLnNlbmR3c21lc3NhZ2UoZGF0YSlcbiAgICB9XG59KSJdfQ==