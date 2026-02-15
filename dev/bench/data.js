window.BENCHMARK_DATA = {
  "lastUpdate": 1771155143907,
  "repoUrl": "https://github.com/zqr10159/NoKV",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "songguocheng348@gmail.com",
            "name": "eric_song",
            "username": "feichai0017"
          },
          "committer": {
            "email": "songguocheng348@gmail.com",
            "name": "eric_song",
            "username": "feichai0017"
          },
          "distinct": true,
          "id": "e7503188813218b2a8d55e38505798bfd2da7595",
          "message": "docs: add vfs design note and flow comparison",
          "timestamp": "2026-02-15T18:34:43+08:00",
          "tree_id": "511cc766514f3606070d656b93a6c582740333c0",
          "url": "https://github.com/zqr10159/NoKV/commit/e7503188813218b2a8d55e38505798bfd2da7595"
        },
        "date": 1771155143480,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDBSetSmall",
            "value": 7331,
            "unit": "ns/op\t   4.36 MB/s\t     344 B/op\t      15 allocs/op",
            "extra": "168234 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - ns/op",
            "value": 7331,
            "unit": "ns/op",
            "extra": "168234 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - MB/s",
            "value": 4.36,
            "unit": "MB/s",
            "extra": "168234 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - B/op",
            "value": 344,
            "unit": "B/op",
            "extra": "168234 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "168234 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge",
            "value": 16827,
            "unit": "ns/op\t 243.41 MB/s\t     538 B/op\t      23 allocs/op",
            "extra": "66757 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - ns/op",
            "value": 16827,
            "unit": "ns/op",
            "extra": "66757 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - MB/s",
            "value": 243.41,
            "unit": "MB/s",
            "extra": "66757 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - B/op",
            "value": 538,
            "unit": "B/op",
            "extra": "66757 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "66757 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall",
            "value": 7861,
            "unit": "ns/op\t   8.14 MB/s\t   17917 B/op\t       8 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - ns/op",
            "value": 7861,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - MB/s",
            "value": 8.14,
            "unit": "MB/s",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - B/op",
            "value": 17917,
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
            "value": 12250,
            "unit": "ns/op\t 334.37 MB/s\t   35635 B/op\t      12 allocs/op",
            "extra": "316394 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - ns/op",
            "value": 12250,
            "unit": "ns/op",
            "extra": "316394 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - MB/s",
            "value": 334.37,
            "unit": "MB/s",
            "extra": "316394 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - B/op",
            "value": 35635,
            "unit": "B/op",
            "extra": "316394 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "316394 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet",
            "value": 124869,
            "unit": "ns/op\t 131.21 MB/s\t   56847 B/op\t     659 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet - ns/op",
            "value": 124869,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet - MB/s",
            "value": 131.21,
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
            "value": 1513416,
            "unit": "ns/op\t       3 B/op\t       0 allocs/op",
            "extra": "804 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan - ns/op",
            "value": 1513416,
            "unit": "ns/op",
            "extra": "804 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "804 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "804 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek",
            "value": 597.2,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "1950399 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek - ns/op",
            "value": 597.2,
            "unit": "ns/op",
            "extra": "1950399 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "1950399 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1950399 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch",
            "value": 49283,
            "unit": "ns/op\t 166.22 MB/s\t   28075 B/op\t     454 allocs/op",
            "extra": "24400 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - ns/op",
            "value": 49283,
            "unit": "ns/op",
            "extra": "24400 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - MB/s",
            "value": 166.22,
            "unit": "MB/s",
            "extra": "24400 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - B/op",
            "value": 28075,
            "unit": "B/op",
            "extra": "24400 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - allocs/op",
            "value": 454,
            "unit": "allocs/op",
            "extra": "24400 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush",
            "value": 6423467,
            "unit": "ns/op\t67523040 B/op\t    2578 allocs/op",
            "extra": "187 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush - ns/op",
            "value": 6423467,
            "unit": "ns/op",
            "extra": "187 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush - B/op",
            "value": 67523040,
            "unit": "B/op",
            "extra": "187 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush - allocs/op",
            "value": 2578,
            "unit": "allocs/op",
            "extra": "187 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert",
            "value": 590.2,
            "unit": "ns/op\t 108.43 MB/s\t    1543 B/op\t       0 allocs/op",
            "extra": "1989698 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - ns/op",
            "value": 590.2,
            "unit": "ns/op",
            "extra": "1989698 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - MB/s",
            "value": 108.43,
            "unit": "MB/s",
            "extra": "1989698 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - B/op",
            "value": 1543,
            "unit": "B/op",
            "extra": "1989698 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1989698 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet",
            "value": 130.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9309716 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet - ns/op",
            "value": 130.3,
            "unit": "ns/op",
            "extra": "9309716 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9309716 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9309716 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert",
            "value": 1416,
            "unit": "ns/op\t  45.18 MB/s\t     162 B/op\t       1 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert - ns/op",
            "value": 1416,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert - MB/s",
            "value": 45.18,
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
            "value": 444.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2688224 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet - ns/op",
            "value": 444.2,
            "unit": "ns/op",
            "extra": "2688224 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2688224 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2688224 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries",
            "value": 26970,
            "unit": "ns/op\t 303.74 MB/s\t    1794 B/op\t      35 allocs/op",
            "extra": "73666 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - ns/op",
            "value": 26970,
            "unit": "ns/op",
            "extra": "73666 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - MB/s",
            "value": 303.74,
            "unit": "MB/s",
            "extra": "73666 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - B/op",
            "value": 1794,
            "unit": "B/op",
            "extra": "73666 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "73666 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue",
            "value": 167.2,
            "unit": "ns/op\t1530.82 MB/s\t     272 B/op\t       2 allocs/op",
            "extra": "7576522 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - ns/op",
            "value": 167.2,
            "unit": "ns/op",
            "extra": "7576522 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - MB/s",
            "value": 1530.82,
            "unit": "MB/s",
            "extra": "7576522 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - B/op",
            "value": 272,
            "unit": "B/op",
            "extra": "7576522 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7576522 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend",
            "value": 685.8,
            "unit": "ns/op\t 373.29 MB/s\t      36 B/op\t       5 allocs/op",
            "extra": "3458204 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - ns/op",
            "value": 685.8,
            "unit": "ns/op",
            "extra": "3458204 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - MB/s",
            "value": 373.29,
            "unit": "MB/s",
            "extra": "3458204 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - B/op",
            "value": 36,
            "unit": "B/op",
            "extra": "3458204 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3458204 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay",
            "value": 2003015,
            "unit": "ns/op\t 3064033 B/op\t   40017 allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay - ns/op",
            "value": 2003015,
            "unit": "ns/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay - B/op",
            "value": 3064033,
            "unit": "B/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay - allocs/op",
            "value": 40017,
            "unit": "allocs/op",
            "extra": "596 times\n4 procs"
          }
        ]
      }
    ]
  }
}