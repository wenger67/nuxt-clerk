## Vue app aliases are not allowed in server runtime

```log
Vue app aliases are not allowed in server runtime. [importing #build/nuxt.config.mjs from node_modules/.pnpm/nuxt@3.12.4_@parcel+watcher@2.4.1_@types+node@20.14.14_eslint@9.8.0_ioredis@5.4.1_magicast@0._konnes3csvkocrqymu3l25sm6i/node_modules/nuxt/dist/app/nuxt.js]

ERROR  Could not load C:/work/proj/nuxt-clerk-template/.nuxt/nuxt.config.mjs (imported by node_modules/.pnpm/nuxt@3.12.4_@parcel+watcher@2.4.1_@types+node@20.14.14_eslint@9.8.0_ioredis@5.4.1_magicast@0._konnes3csvkocrqymu3l25sm6i/node_modules/nuxt/dist/app/composables/error.js): ENOENT: no such file or directory, open 'C:\work\proj\nuxt-clerk-template\.nuxt\nuxt.config.mjs'
```

## postgress: pg issue

https://github.com/brianc/node-postgres/issues/2819

```log
ERROR  [worker reload] [worker init] The requested module 'file://C:/work/proj/nuxt-clerk-template/node_modules/.pnpm/pg@8.12.0/node_modules/pg/lib/index.js' does not provide an export named 'Pool'

import { Pool } from 'C:/work/proj/nuxt-clerk-template/node_modules/.pnpm/pg@8.12.0/node_modules/pg/lib/index.js';
^^^^
SyntaxError: The requested module 'C:/work/proj/nuxt-clerk-template/node_modules/.pnpm/pg@8.12.0/node_modules/pg/lib/index.js' does not provide an export named 'Pool'
at ModuleJob._instantiate (node:internal/modules/esm/module_job:124:21)
at async ModuleJob.run (node:internal/modules/esm/module_job:190:5)
```
