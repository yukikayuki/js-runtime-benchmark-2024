# js-runtime-benchmark-2024

### Run
```
# install aqua
# https://aquaproj.github.io/docs/install

# install asdf
# https://asdf-vm.com/guide/getting-started.html#_1-install-dependencies

# setup
sh setup.sh

# start hono server
npm run bun
npm run deno
npm run node

# start benchmark
npm run benchmark
```

### Tools, Runtimes, Framework
- [aqua](https://aquaproj.github.io/)
- [asdf](https://asdf-vm.com/)
- [bombardier](https://github.com/codesenberg/bombardier)
- [Bun](https://bun.sh/)
- [Deno](https://deno.com/)
- [Node.js](https://nodejs.org/en)
- [Hono](https://hono.dev/)

## Results

### Environment
#### PC
```
Mac mini 2018
3.2 GHz 6 Core Intel Core i7
32 GB 2667 MHz DDR4
```

#### Runtimes
```
bun 1.1.1
nodejs 20.12.1
deno 1.42.1
```

### Bun and Hono
```
❯ bombardier -c 200 -n 1000000 http://localhost:3000 
Bombarding http://localhost:3000 with 1000000 request(s) using 200 connection(s)
 1000000 / 1000000 [=================================================================================================================================================================] 100.00% 54274/s 18s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec     54725.95    3752.52   61177.31
  Latency        3.65ms   504.38us    32.93ms
  HTTP codes:
    1xx - 0, 2xx - 1000000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     9.86MB/s
```

### Deno and Hono
```
❯ bombardier -c 200 -n 1000000 http://localhost:3000 
Bombarding http://localhost:3000 with 1000000 request(s) using 200 connection(s)
 1000000 / 1000000 [=================================================================================================================================================================] 100.00% 43028/s 23s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec     43141.40   10663.61   54593.82
  Latency        4.64ms     2.76ms   123.84ms
  HTTP codes:
    1xx - 0, 2xx - 1000000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     8.71MB/s
```

### Node.js and Hono
```
❯ bombardier -c 200 -n 1000000 http://localhost:3000 
Bombarding http://localhost:3000 with 1000000 request(s) using 200 connection(s)
 1000000 / 1000000 [=================================================================================================================================================================] 100.00% 22394/s 44s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec     22473.56    2109.62   25835.99
  Latency        8.90ms     6.22ms      0.96s
  HTTP codes:
    1xx - 0, 2xx - 1000000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     5.08MB/s
```
