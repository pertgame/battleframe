package myWebSocket

//
//from https://www.godoc.org/github.com/gorilla/websocket
// 

import (
	"net/http"
	"github.com/gorilla/websocket"
	"fmt"
	"time"
)

type WebSocketSvr struct {
	Addr 	string
	offch 	chan *WebSession //离线通道
}

func NewWebsocketSvr(addr string)*WebSocketSvr{
	return &WebSocketSvr{
		Addr: addr,
		offch: make(chan *WebSession, 1024),
	}
}

var upgrader = websocket.Upgrader{
    ReadBufferSize:  1024,
    WriteBufferSize: 1024,
    CheckOrigin: func(r *http.Request) bool {
        return true
    },
}

func (this *WebSocketSvr) wsSvrHandler(resp http.ResponseWriter, req *http.Request){

	wsSocket, err := upgrader.Upgrade(resp, req, nil)
    if err != nil {
        fmt.Println("upgrader websocket fail, err: ", err.Error())
        return
	}
	
	sess := NewWebSession(wsSocket, this.offch)
	sess.Handle()
	fmt.Println("connect ws socket: ", sess.RemoteAddr, time.Now().Unix())
	GwebSessionMgr.AddSession(sess)
}

func (this *WebSocketSvr) disconnloop(){
	for {
		sess := <-this.offch
		fmt.Println("exit ws socket: ", sess.RemoteAddr, time.Now().Unix())
		GwebSessionMgr.RemoveSession(sess.RemoteAddr)
	}
}

func (this *WebSocketSvr) Run(){
	http.HandleFunc("/ws", this.wsSvrHandler)
	go this.disconnloop()
}
