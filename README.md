# url-shortener-deno
A URL shortener for https://link.igalaxy.dev/:path, written in TypeScript using Deno

---
### How to set up
1. Clone repository
3. Edit **routes.json** to your liking *(example routes already in file)*
4. Edit default redirect URL in **index.ts** *(If necessary for your environment, also edit port)*
5. Run `deno run --allow-read --allow-net index.ts`
7. The server is now running on port 8080 unless you specified otherwise

---
#### Notes
Eventually, I'll add a web interface at the root to allow users to add routes with randomized paths (e.g. `abcd1234 -> https://example.com`) if they are authenticated. You'll be able to set the auth token as an environment variable on the server.