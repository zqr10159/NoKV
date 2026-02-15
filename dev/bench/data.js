window.BENCHMARK_DATA = {
  "lastUpdate": 1771121216340,
  "repoUrl": "https://github.com/zqr10159/NoKV",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "zqr10159@126.com",
            "name": "Logic",
            "username": "zqr10159"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8fb0b33c60afaa43aa2108bb65c7b2d4869a3e54",
          "message": "Merge branch 'feichai0017:main' into main",
          "timestamp": "2026-02-15T10:05:21+08:00",
          "tree_id": "0e03a53d4d38dd2920c7073655f0dfbeb5659709",
          "url": "https://github.com/zqr10159/NoKV/commit/8fb0b33c60afaa43aa2108bb65c7b2d4869a3e54"
        },
        "date": 1771121215898,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDBSetSmall",
            "value": 9733,
            "unit": "ns/op\t   3.29 MB/s\t     344 B/op\t      15 allocs/op",
            "extra": "143656 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - ns/op",
            "value": 9733,
            "unit": "ns/op",
            "extra": "143656 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - MB/s",
            "value": 3.29,
            "unit": "MB/s",
            "extra": "143656 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - B/op",
            "value": 344,
            "unit": "B/op",
            "extra": "143656 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "143656 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge",
            "value": 20371,
            "unit": "ns/op\t 201.07 MB/s\t     538 B/op\t      23 allocs/op",
            "extra": "65834 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - ns/op",
            "value": 20371,
            "unit": "ns/op",
            "extra": "65834 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - MB/s",
            "value": 201.07,
            "unit": "MB/s",
            "extra": "65834 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - B/op",
            "value": 538,
            "unit": "B/op",
            "extra": "65834 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "65834 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall",
            "value": 8035,
            "unit": "ns/op\t   7.97 MB/s\t   18113 B/op\t       8 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - ns/op",
            "value": 8035,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - MB/s",
            "value": 7.97,
            "unit": "MB/s",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - B/op",
            "value": 18113,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge",
            "value": 11153,
            "unit": "ns/op\t 367.25 MB/s\t   31549 B/op\t      11 allocs/op",
            "extra": "311264 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - ns/op",
            "value": 11153,
            "unit": "ns/op",
            "extra": "311264 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - MB/s",
            "value": 367.25,
            "unit": "MB/s",
            "extra": "311264 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - B/op",
            "value": 31549,
            "unit": "B/op",
            "extra": "311264 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "311264 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet",
            "value": 125349,
            "unit": "ns/op\t 130.71 MB/s\t   56847 B/op\t     659 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet - ns/op",
            "value": 125349,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet - MB/s",
            "value": 130.71,
            "unit": "MB/s",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet - B/op",
            "value": 56847,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet - allocs/op",
            "value": 659,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan",
            "value": 1505486,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "769 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan - ns/op",
            "value": 1505486,
            "unit": "ns/op",
            "extra": "769 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "769 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "769 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek",
            "value": 582.4,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "2087434 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek - ns/op",
            "value": 582.4,
            "unit": "ns/op",
            "extra": "2087434 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "2087434 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "2087434 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch",
            "value": 49241,
            "unit": "ns/op\t 166.36 MB/s\t   27957 B/op\t     454 allocs/op",
            "extra": "24664 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - ns/op",
            "value": 49241,
            "unit": "ns/op",
            "extra": "24664 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - MB/s",
            "value": 166.36,
            "unit": "MB/s",
            "extra": "24664 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - B/op",
            "value": 27957,
            "unit": "B/op",
            "extra": "24664 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - allocs/op",
            "value": 454,
            "unit": "allocs/op",
            "extra": "24664 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush",
            "value": 6759448,
            "unit": "ns/op\t67523226 B/op\t    2579 allocs/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush - ns/op",
            "value": 6759448,
            "unit": "ns/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush - B/op",
            "value": 67523226,
            "unit": "B/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush - allocs/op",
            "value": 2579,
            "unit": "allocs/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert",
            "value": 580.2,
            "unit": "ns/op\t 110.30 MB/s\t    1543 B/op\t       0 allocs/op",
            "extra": "2026720 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - ns/op",
            "value": 580.2,
            "unit": "ns/op",
            "extra": "2026720 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - MB/s",
            "value": 110.3,
            "unit": "MB/s",
            "extra": "2026720 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - B/op",
            "value": 1543,
            "unit": "B/op",
            "extra": "2026720 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2026720 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet",
            "value": 128.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9315799 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet - ns/op",
            "value": 128.5,
            "unit": "ns/op",
            "extra": "9315799 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9315799 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9315799 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert",
            "value": 1391,
            "unit": "ns/op\t  46.01 MB/s\t     162 B/op\t       1 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert - ns/op",
            "value": 1391,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert - MB/s",
            "value": 46.01,
            "unit": "MB/s",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert - B/op",
            "value": 162,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet",
            "value": 510.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2434131 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet - ns/op",
            "value": 510.3,
            "unit": "ns/op",
            "extra": "2434131 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2434131 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2434131 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries",
            "value": 27122,
            "unit": "ns/op\t 302.05 MB/s\t    1794 B/op\t      35 allocs/op",
            "extra": "72548 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - ns/op",
            "value": 27122,
            "unit": "ns/op",
            "extra": "72548 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - MB/s",
            "value": 302.05,
            "unit": "MB/s",
            "extra": "72548 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - B/op",
            "value": 1794,
            "unit": "B/op",
            "extra": "72548 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "72548 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue",
            "value": 161.9,
            "unit": "ns/op\t1581.33 MB/s\t     272 B/op\t       2 allocs/op",
            "extra": "7393305 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - ns/op",
            "value": 161.9,
            "unit": "ns/op",
            "extra": "7393305 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - MB/s",
            "value": 1581.33,
            "unit": "MB/s",
            "extra": "7393305 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - B/op",
            "value": 272,
            "unit": "B/op",
            "extra": "7393305 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7393305 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend",
            "value": 672.8,
            "unit": "ns/op\t 380.49 MB/s\t      36 B/op\t       5 allocs/op",
            "extra": "3420634 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - ns/op",
            "value": 672.8,
            "unit": "ns/op",
            "extra": "3420634 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - MB/s",
            "value": 380.49,
            "unit": "MB/s",
            "extra": "3420634 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - B/op",
            "value": 36,
            "unit": "B/op",
            "extra": "3420634 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3420634 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay",
            "value": 2138290,
            "unit": "ns/op\t 3064003 B/op\t   40017 allocs/op",
            "extra": "552 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay - ns/op",
            "value": 2138290,
            "unit": "ns/op",
            "extra": "552 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay - B/op",
            "value": 3064003,
            "unit": "B/op",
            "extra": "552 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay - allocs/op",
            "value": 40017,
            "unit": "allocs/op",
            "extra": "552 times\n4 procs"
          }
        ]
      }
    ]
  }
}