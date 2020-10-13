import { Application, Router } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import Route from './Route.ts';
import ServerOptions from './ServerOptions.ts';

const router = new Router();

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

export class Server {
    private port: number = 8080;
    private defaultRedirect: string = 'https://igalaxy.dev';

    constructor(options?: ServerOptions){
        this.port = options?.port || this.port;
        this.defaultRedirect = options?.defaultRedirect || this.defaultRedirect;
    }

    public register = (route: Route) => {
        router.get(`/${route.path}`, ctx => {
            return ctx.response.redirect(route.result);
        });
    }

    public start = async () => {
        router.get('/(.*)', ctx => {
            return ctx.response.redirect(this.defaultRedirect);
        });

        await app.listen({port: this.port});

        console.log(`URL shortener started on port ${this.port}`);
    }
}