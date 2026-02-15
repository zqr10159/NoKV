window.BENCHMARK_DATA = {
  "lastUpdate": 1771161518905,
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
          "id": "540354f19c3ea32e4b11a30237d3bcb5964bf692",
          "message": "benchmark: add pebble engine and isolate benchmark deps",
          "timestamp": "2026-02-15T20:29:12+08:00",
          "tree_id": "155d5e47f24f16dd4100709d607781cbcd1e8f4c",
          "url": "https://github.com/zqr10159/NoKV/commit/540354f19c3ea32e4b11a30237d3bcb5964bf692"
        },
        "date": 1771161517734,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDBSetSmall",
            "value": 8183,
            "unit": "ns/op\t   3.91 MB/s\t     344 B/op\t      15 allocs/op",
            "extra": "150150 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - ns/op",
            "value": 8183,
            "unit": "ns/op",
            "extra": "150150 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - MB/s",
            "value": 3.91,
            "unit": "MB/s",
            "extra": "150150 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - B/op",
            "value": 344,
            "unit": "B/op",
            "extra": "150150 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "150150 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge",
            "value": 14305,
            "unit": "ns/op\t 286.34 MB/s\t     537 B/op\t      23 allocs/op",
            "extra": "107948 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - ns/op",
            "value": 14305,
            "unit": "ns/op",
            "extra": "107948 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - MB/s",
            "value": 286.34,
            "unit": "MB/s",
            "extra": "107948 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - B/op",
            "value": 537,
            "unit": "B/op",
            "extra": "107948 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "107948 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall",
            "value": 7076,
            "unit": "ns/op\t   9.04 MB/s\t   17158 B/op\t       8 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - ns/op",
            "value": 7076,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - MB/s",
            "value": 9.04,
            "unit": "MB/s",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - B/op",
            "value": 17158,
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
            "value": 8938,
            "unit": "ns/op\t 458.29 MB/s\t   26470 B/op\t      11 allocs/op",
            "extra": "283914 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - ns/op",
            "value": 8938,
            "unit": "ns/op",
            "extra": "283914 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - MB/s",
            "value": 458.29,
            "unit": "MB/s",
            "extra": "283914 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - B/op",
            "value": 26470,
            "unit": "B/op",
            "extra": "283914 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "283914 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet",
            "value": 121064,
            "unit": "ns/op\t 135.33 MB/s\t   56849 B/op\t     659 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet - ns/op",
            "value": 121064,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet - MB/s",
            "value": 135.33,
            "unit": "MB/s",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet - B/op",
            "value": 56849,
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
            "value": 1608705,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "747 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan - ns/op",
            "value": 1608705,
            "unit": "ns/op",
            "extra": "747 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "747 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "747 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek",
            "value": 539.9,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "2207674 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek - ns/op",
            "value": 539.9,
            "unit": "ns/op",
            "extra": "2207674 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "2207674 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "2207674 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch",
            "value": 48136,
            "unit": "ns/op\t 170.18 MB/s\t   27849 B/op\t     454 allocs/op",
            "extra": "24909 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - ns/op",
            "value": 48136,
            "unit": "ns/op",
            "extra": "24909 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - MB/s",
            "value": 170.18,
            "unit": "MB/s",
            "extra": "24909 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - B/op",
            "value": 27849,
            "unit": "B/op",
            "extra": "24909 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - allocs/op",
            "value": 454,
            "unit": "allocs/op",
            "extra": "24909 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush",
            "value": 8709875,
            "unit": "ns/op\t67523244 B/op\t    2580 allocs/op",
            "extra": "135 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush - ns/op",
            "value": 8709875,
            "unit": "ns/op",
            "extra": "135 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush - B/op",
            "value": 67523244,
            "unit": "B/op",
            "extra": "135 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush - allocs/op",
            "value": 2580,
            "unit": "allocs/op",
            "extra": "135 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert",
            "value": 666.1,
            "unit": "ns/op\t  96.08 MB/s\t    1544 B/op\t       0 allocs/op",
            "extra": "1699360 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - ns/op",
            "value": 666.1,
            "unit": "ns/op",
            "extra": "1699360 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - MB/s",
            "value": 96.08,
            "unit": "MB/s",
            "extra": "1699360 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - B/op",
            "value": 1544,
            "unit": "B/op",
            "extra": "1699360 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1699360 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet",
            "value": 112.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10679756 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet - ns/op",
            "value": 112.3,
            "unit": "ns/op",
            "extra": "10679756 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10679756 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10679756 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert",
            "value": 1306,
            "unit": "ns/op\t  49.01 MB/s\t     162 B/op\t       1 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert - ns/op",
            "value": 1306,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert - MB/s",
            "value": 49.01,
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
            "value": 467.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2537547 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet - ns/op",
            "value": 467.3,
            "unit": "ns/op",
            "extra": "2537547 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2537547 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2537547 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries",
            "value": 23795,
            "unit": "ns/op\t 344.27 MB/s\t    1794 B/op\t      35 allocs/op",
            "extra": "100170 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - ns/op",
            "value": 23795,
            "unit": "ns/op",
            "extra": "100170 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - MB/s",
            "value": 344.27,
            "unit": "MB/s",
            "extra": "100170 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - B/op",
            "value": 1794,
            "unit": "B/op",
            "extra": "100170 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "100170 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue",
            "value": 157.6,
            "unit": "ns/op\t1624.56 MB/s\t     272 B/op\t       2 allocs/op",
            "extra": "7598184 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - ns/op",
            "value": 157.6,
            "unit": "ns/op",
            "extra": "7598184 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - MB/s",
            "value": 1624.56,
            "unit": "MB/s",
            "extra": "7598184 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - B/op",
            "value": 272,
            "unit": "B/op",
            "extra": "7598184 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7598184 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend",
            "value": 639,
            "unit": "ns/op\t 400.64 MB/s\t      36 B/op\t       5 allocs/op",
            "extra": "4214857 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - ns/op",
            "value": 639,
            "unit": "ns/op",
            "extra": "4214857 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - MB/s",
            "value": 400.64,
            "unit": "MB/s",
            "extra": "4214857 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - B/op",
            "value": 36,
            "unit": "B/op",
            "extra": "4214857 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "4214857 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay",
            "value": 1951017,
            "unit": "ns/op\t 3064039 B/op\t   40018 allocs/op",
            "extra": "606 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay - ns/op",
            "value": 1951017,
            "unit": "ns/op",
            "extra": "606 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay - B/op",
            "value": 3064039,
            "unit": "B/op",
            "extra": "606 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay - allocs/op",
            "value": 40018,
            "unit": "allocs/op",
            "extra": "606 times\n4 procs"
          }
        ]
      }
    ]
  }
}