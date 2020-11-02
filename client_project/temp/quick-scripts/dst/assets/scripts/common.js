
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '134b45CQE9DKqR6yRMNUY1V', 'common');
// scripts/common.js

"use strict";

module.exports = {
  // addr
  Addr: "localhost:13001",
  wsAddr: "ws://localhost:13001/ws",
  //rand
  randseed: null,
  starPosRandseed: null,
  starPosRandN: null,
  //socket
  ws: null,
  ioSocket: null,
  //player data
  PlayerSessionMap: null,
  NewplayerMap: null,
  //同屏玩家具体数据
  newPlayerIds: null,
  //同屏玩家session id
  DelPlayerIds: null,
  //同屏下限玩家
  mySessionId: null,
  //当前客户端id
  // 
  FirstLogin: null,
  //1:表示首次
  // messag define
  MID_login: 1,
  MID_logout: 2,
  MID_move: 3,
  MID_Bump: 4,
  MID_HeartBeat: 5,
  MID_StarBorn: 6,
  MID_GM: 7,
  MID_Online4Other: 8,
  MID_Register: 9,
  MID_SyncPos: 10,
  MID_MonsterInfo: 11,
  MID_LogicFrameSync: 12,
  //逻辑帧同步其他客户端moster信息
  //是否碰撞 
  Bumped: null,
  BumpedPlayerId: null,
  //星星数据
  newStarKey: "Star",
  newStarPos: null,
  syncStarPos: false,
  syncOnline4Other: false,
  //用户数据
  AccountName: null,
  AccountPwd: null,
  DoRegisterAction: null,
  RegisterSucc: null,
  DoLoginAction: null,
  LoginSucc: null,
  maxDigital: 2100000000,
  MonsterScore: null,
  MosterPosX: 0,
  MosterPosY: 0,
  EnterUpdateMoster: false,
  //测试
  test: null
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiQWRkciIsIndzQWRkciIsInJhbmRzZWVkIiwic3RhclBvc1JhbmRzZWVkIiwic3RhclBvc1JhbmROIiwid3MiLCJpb1NvY2tldCIsIlBsYXllclNlc3Npb25NYXAiLCJOZXdwbGF5ZXJNYXAiLCJuZXdQbGF5ZXJJZHMiLCJEZWxQbGF5ZXJJZHMiLCJteVNlc3Npb25JZCIsIkZpcnN0TG9naW4iLCJNSURfbG9naW4iLCJNSURfbG9nb3V0IiwiTUlEX21vdmUiLCJNSURfQnVtcCIsIk1JRF9IZWFydEJlYXQiLCJNSURfU3RhckJvcm4iLCJNSURfR00iLCJNSURfT25saW5lNE90aGVyIiwiTUlEX1JlZ2lzdGVyIiwiTUlEX1N5bmNQb3MiLCJNSURfTW9uc3RlckluZm8iLCJNSURfTG9naWNGcmFtZVN5bmMiLCJCdW1wZWQiLCJCdW1wZWRQbGF5ZXJJZCIsIm5ld1N0YXJLZXkiLCJuZXdTdGFyUG9zIiwic3luY1N0YXJQb3MiLCJzeW5jT25saW5lNE90aGVyIiwiQWNjb3VudE5hbWUiLCJBY2NvdW50UHdkIiwiRG9SZWdpc3RlckFjdGlvbiIsIlJlZ2lzdGVyU3VjYyIsIkRvTG9naW5BY3Rpb24iLCJMb2dpblN1Y2MiLCJtYXhEaWdpdGFsIiwiTW9uc3RlclNjb3JlIiwiTW9zdGVyUG9zWCIsIk1vc3RlclBvc1kiLCJFbnRlclVwZGF0ZU1vc3RlciIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiO0FBQ0FDLEVBQUFBLElBQUksRUFBRSxpQkFGTztBQUdiQyxFQUFBQSxNQUFNLEVBQUUseUJBSEs7QUFLYjtBQUNBQyxFQUFBQSxRQUFRLEVBQUcsSUFORTtBQU9iQyxFQUFBQSxlQUFlLEVBQUUsSUFQSjtBQVFiQyxFQUFBQSxZQUFZLEVBQUUsSUFSRDtBQVViO0FBQ0FDLEVBQUFBLEVBQUUsRUFBRSxJQVhTO0FBWWJDLEVBQUFBLFFBQVEsRUFBRSxJQVpHO0FBY2I7QUFDQUMsRUFBQUEsZ0JBQWdCLEVBQUUsSUFmTDtBQWdCYkMsRUFBQUEsWUFBWSxFQUFFLElBaEJEO0FBZ0JPO0FBQ3BCQyxFQUFBQSxZQUFZLEVBQUUsSUFqQkQ7QUFpQk87QUFDcEJDLEVBQUFBLFlBQVksRUFBRSxJQWxCRDtBQWtCTztBQUNwQkMsRUFBQUEsV0FBVyxFQUFFLElBbkJBO0FBbUJPO0FBRXBCO0FBQ0FDLEVBQUFBLFVBQVUsRUFBRSxJQXRCQztBQXNCSztBQUVsQjtBQUNBQyxFQUFBQSxTQUFTLEVBQUUsQ0F6QkU7QUEwQmJDLEVBQUFBLFVBQVUsRUFBRSxDQTFCQztBQTJCYkMsRUFBQUEsUUFBUSxFQUFFLENBM0JHO0FBNEJiQyxFQUFBQSxRQUFRLEVBQUUsQ0E1Qkc7QUE2QmJDLEVBQUFBLGFBQWEsRUFBRSxDQTdCRjtBQThCYkMsRUFBQUEsWUFBWSxFQUFFLENBOUJEO0FBK0JiQyxFQUFBQSxNQUFNLEVBQUUsQ0EvQks7QUFnQ2JDLEVBQUFBLGdCQUFnQixFQUFFLENBaENMO0FBaUNiQyxFQUFBQSxZQUFZLEVBQUUsQ0FqQ0Q7QUFrQ2JDLEVBQUFBLFdBQVcsRUFBRSxFQWxDQTtBQW1DYkMsRUFBQUEsZUFBZSxFQUFFLEVBbkNKO0FBb0NiQyxFQUFBQSxrQkFBa0IsRUFBRSxFQXBDUDtBQW9DWTtBQUV6QjtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsSUF2Q0s7QUF3Q2JDLEVBQUFBLGNBQWMsRUFBRSxJQXhDSDtBQXlDYjtBQUNBQyxFQUFBQSxVQUFVLEVBQUUsTUExQ0M7QUEyQ2JDLEVBQUFBLFVBQVUsRUFBRSxJQTNDQztBQTRDYkMsRUFBQUEsV0FBVyxFQUFFLEtBNUNBO0FBOENiQyxFQUFBQSxnQkFBZ0IsRUFBRSxLQTlDTDtBQWdEYjtBQUNBQyxFQUFBQSxXQUFXLEVBQUUsSUFqREE7QUFrRGJDLEVBQUFBLFVBQVUsRUFBRSxJQWxEQztBQW1EYkMsRUFBQUEsZ0JBQWdCLEVBQUUsSUFuREw7QUFvRGJDLEVBQUFBLFlBQVksRUFBRSxJQXBERDtBQXFEYkMsRUFBQUEsYUFBYSxFQUFFLElBckRGO0FBc0RiQyxFQUFBQSxTQUFTLEVBQUUsSUF0REU7QUF1RGJDLEVBQUFBLFVBQVUsRUFBRSxVQXZEQztBQXdEYkMsRUFBQUEsWUFBWSxFQUFFLElBeEREO0FBeURiQyxFQUFBQSxVQUFVLEVBQUUsQ0F6REM7QUEwRGJDLEVBQUFBLFVBQVUsRUFBRSxDQTFEQztBQTJEYkMsRUFBQUEsaUJBQWlCLEVBQUUsS0EzRE47QUE2RGI7QUFDQUMsRUFBQUEsSUFBSSxFQUFFO0FBOURPLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBhZGRyXG4gICAgQWRkcjogXCJsb2NhbGhvc3Q6MTMwMDFcIixcbiAgICB3c0FkZHI6IFwid3M6Ly9sb2NhbGhvc3Q6MTMwMDEvd3NcIixcblxuICAgIC8vcmFuZFxuICAgIHJhbmRzZWVkIDogbnVsbCxcbiAgICBzdGFyUG9zUmFuZHNlZWQ6IG51bGwsXG4gICAgc3RhclBvc1JhbmROOiBudWxsLFxuXG4gICAgLy9zb2NrZXRcbiAgICB3czogbnVsbCxcbiAgICBpb1NvY2tldDogbnVsbCxcblxuICAgIC8vcGxheWVyIGRhdGFcbiAgICBQbGF5ZXJTZXNzaW9uTWFwOiBudWxsLFxuICAgIE5ld3BsYXllck1hcDogbnVsbCwgLy/lkIzlsY/njqnlrrblhbfkvZPmlbDmja5cbiAgICBuZXdQbGF5ZXJJZHM6IG51bGwsIC8v5ZCM5bGP546p5a62c2Vzc2lvbiBpZFxuICAgIERlbFBsYXllcklkczogbnVsbCwgLy/lkIzlsY/kuIvpmZDnjqnlrrZcbiAgICBteVNlc3Npb25JZDogbnVsbCwgIC8v5b2T5YmN5a6i5oi356uvaWRcblxuICAgIC8vIFxuICAgIEZpcnN0TG9naW46IG51bGwsIC8vMTrooajnpLrpppbmrKFcblxuICAgIC8vIG1lc3NhZyBkZWZpbmVcbiAgICBNSURfbG9naW46IDEsXG4gICAgTUlEX2xvZ291dDogMixcbiAgICBNSURfbW92ZTogMyxcbiAgICBNSURfQnVtcDogNCxcbiAgICBNSURfSGVhcnRCZWF0OiA1LFxuICAgIE1JRF9TdGFyQm9ybjogNixcbiAgICBNSURfR006IDcsXG4gICAgTUlEX09ubGluZTRPdGhlcjogOCxcbiAgICBNSURfUmVnaXN0ZXI6IDksXG4gICAgTUlEX1N5bmNQb3M6IDEwLFxuICAgIE1JRF9Nb25zdGVySW5mbzogMTEsXG4gICAgTUlEX0xvZ2ljRnJhbWVTeW5jOiAxMiwgIC8v6YC76L6R5bin5ZCM5q2l5YW25LuW5a6i5oi356uvbW9zdGVy5L+h5oGvXG5cbiAgICAvL+aYr+WQpueisOaSniBcbiAgICBCdW1wZWQ6IG51bGwsXG4gICAgQnVtcGVkUGxheWVySWQ6IG51bGwsXG4gICAgLy/mmJ/mmJ/mlbDmja5cbiAgICBuZXdTdGFyS2V5OiBcIlN0YXJcIixcbiAgICBuZXdTdGFyUG9zOiBudWxsLFxuICAgIHN5bmNTdGFyUG9zOiBmYWxzZSxcblxuICAgIHN5bmNPbmxpbmU0T3RoZXI6IGZhbHNlLFxuXG4gICAgLy/nlKjmiLfmlbDmja5cbiAgICBBY2NvdW50TmFtZTogbnVsbCxcbiAgICBBY2NvdW50UHdkOiBudWxsLFxuICAgIERvUmVnaXN0ZXJBY3Rpb246IG51bGwsXG4gICAgUmVnaXN0ZXJTdWNjOiBudWxsLFxuICAgIERvTG9naW5BY3Rpb246IG51bGwsXG4gICAgTG9naW5TdWNjOiBudWxsLFxuICAgIG1heERpZ2l0YWw6IDIxMDAwMDAwMDAsXG4gICAgTW9uc3RlclNjb3JlOiBudWxsLFxuICAgIE1vc3RlclBvc1g6IDAsXG4gICAgTW9zdGVyUG9zWTogMCxcbiAgICBFbnRlclVwZGF0ZU1vc3RlcjogZmFsc2UsXG5cbiAgICAvL+a1i+ivlVxuICAgIHRlc3Q6IG51bGxcbn07Il19