import "reflect-metadata";
import { AppServer } from "./app-server";
import { container } from "tsyringe";

const bootstrap = async () => {
  const appServer = container.resolve(AppServer);
  await appServer.Start();
  console.log("Server is listening at port: [3000]");
};

bootstrap().catch((error: Error) => {
  console.error({
    error,
  });
  process.exit(1);
});
