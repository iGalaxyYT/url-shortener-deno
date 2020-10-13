import { Server } from "./Server.ts";
import Route from "./Route.ts";

let port = 8080;
let defaultRedirect = 'https://igalaxy.dev';

const server = new Server({port: port, defaultRedirect: defaultRedirect});

const routes = await Deno.readTextFile('./routes.json');
JSON.parse(routes).forEach((route: Route) => {
    server.register(route);
});
server.start();