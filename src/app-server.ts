import { singleton } from "tsyringe";
import express from "express";
import { Server } from "http";
import helmet from "helmet";
import path from "node:path";
import { Eta } from "eta";

@singleton()
export class AppServer {
  private _app: express.Application;

  constructor() {
    this._app = express();
    this._preInit();
  }

  public async Start(): Promise<Server> {
    return this._app.listen(3000);
  }

  private _preInit() {
    this._app.use(helmet());
    this._app.use(express.json());
    this._app.use(
      express.urlencoded({
        extended: true,
      })
    );
    this._app.all("/health", (_req, res, _next) => {
      res.send("ok");
    });
    let viewpath = path.join(__dirname, "../views");
    let eta = new Eta({ views: viewpath, cache: true });
    this._app.get("/", (_req, res) => {
      res
        .status(200)
        .send(eta.render("index", { title: "Hey", place: "Hello there!" }));
    });
  }
}
