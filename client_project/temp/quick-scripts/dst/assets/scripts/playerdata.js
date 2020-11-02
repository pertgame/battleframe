
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/playerdata.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ee2a6wFRAZDzLnGbuzH7dEf', 'playerdata');
// scripts/playerdata.js

"use strict";

var player = cc.Class({
  name: 'player',
  properties: {
    sessionId: null,
    nodex: null,
    nodey: null
  }
});
var playerManager = cc.Class({
  properties: {
    playerMap: [player]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BsYXllcmRhdGEuanMiXSwibmFtZXMiOlsicGxheWVyIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwic2Vzc2lvbklkIiwibm9kZXgiLCJub2RleSIsInBsYXllck1hbmFnZXIiLCJwbGF5ZXJNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNsQkMsRUFBQUEsSUFBSSxFQUFFLFFBRFk7QUFFbEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUUsSUFESDtBQUVSQyxJQUFBQSxLQUFLLEVBQUUsSUFGQztBQUdSQyxJQUFBQSxLQUFLLEVBQUU7QUFIQztBQUZNLENBQVQsQ0FBYjtBQVNBLElBQUlDLGFBQWEsR0FBR1AsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDekJFLEVBQUFBLFVBQVUsRUFBRTtBQUNSSyxJQUFBQSxTQUFTLEVBQUUsQ0FBQ1QsTUFBRDtBQURIO0FBRGEsQ0FBVCxDQUFwQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBsYXllciA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAncGxheWVyJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNlc3Npb25JZDogbnVsbCxcbiAgICAgICAgbm9kZXg6IG51bGwsXG4gICAgICAgIG5vZGV5OiBudWxsLFxuICAgIH1cbn0pO1xuXG52YXIgcGxheWVyTWFuYWdlciA9IGNjLkNsYXNzKHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBsYXllck1hcDogW3BsYXllcl0sXG4gICAgfSxcbn0pOyJdfQ==