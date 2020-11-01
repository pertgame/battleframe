package main

import (
	"net/http"
	//"common/tcpNet"
	"battle/battleSvr/game"
	"battle/common/AsyncLock"
	"battle/common/cache"
	"battle/common/myWebSocket"
	"os"
)

func init() {
	http.HandleFunc("/BattleStart", BeginBattleHandler)
	http.HandleFunc("/UpdateStarPos", UpdateStarPosHandler)
	http.HandleFunc("/Attack", AttackHandler)
}

func main() {
	os.Setenv("GOTRACEBACK", "crash")
	game.Reg()
	AsyncLock.NewZKLock([]string{"127.0.0.1:2181"})
	cache.GMemCache.Run()
	game.GLogicFrame.Run()
	ws := myWebSocket.NewWebsocketSvr(":13001")
	ws.Run()
	http.ListenAndServe(":13001", nil)
}
