import express from 'express';
import { Server } from 'http';
const PORT = process.env.PORT || 8021;

export default class App {
  
  static instance = express();
  private server: Server;

  constructor() {      
  }

  start() {
    App.registerRoutes();
    this.server = App.instance.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    })
  }

  static registerRoutes() {
    App.instance.get('/', (req, res) => {
      const params  = req.params;
      const query = req.query;
      const url = req.url;
      const baseUrl = req.baseUrl;
      const now = Date.now();
      res.send({
        title: 'Express + TypeScript Server + TSNode',
        params,
        query,
        url,
        baseUrl,
        now,
      })
    });
  }

  stop(callback: Function) {
    this.server.close((err) => {
      if(err){
        console.error(err);
        return;
      }
      if(callback) {
        callback();
      }
      console.log(
        "The %s listening at %s had been shutdown",
        'APP',
        `http://localhost:${PORT}`
      );      
    })
  }
}