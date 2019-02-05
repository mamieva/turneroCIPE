import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable()
export class WebsocketService {
  private subject: Rx.Subject<MessageEvent>;
  public websocket: Rx.Subject<string> = null;
  private ws: WebSocket;

  constructor() {
  }

  public init() {
    this.websocket = <Rx.Subject<string>>this
      .connect("ws://localhost:8085/websocket/card")
      .map((response: MessageEvent): string => {
        return response.data;
      });
  }

  private connect(url: string): Rx.Subject<MessageEvent> {
    //if (!this.subject) {
    this.subject = this.create(url);
    //// console.log("Successfully connected: " + url);
    //} 
    // console.log('Connecting...');
    return this.subject;
  }

  public close() {
    this.ws.close();
  }

  private create(url: string): Rx.Subject<MessageEvent> {
    let ws = new WebSocket(url);
    this.ws = ws;

    let observable = Rx.Observable.create(
      (obs: Rx.Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
      })
    let observer = {
      next: (data: any) => {
        if (ws.readyState === WebSocket.OPEN) {
          if (data.toString().length > 100) {
            //// console.log("sending to WS... " + data.toString().length + " bytes");
          }
          else {
            //// console.log("sending to WS: " + data.toString());
          }
          ws.send(data);
        }
      }
    }
    return Rx.Subject.create(observer, observable);
  }
}