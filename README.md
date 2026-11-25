# One Line, One Laugh

[![make.fun](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3.svg)](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3)
[![Rank](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/sw897636-web/coral-one-line-laugh-20261125/rank.svg)](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3)
[![Reward](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/sw897636-web/coral-one-line-laugh-20261125/reward.svg)](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3)

An entry for the [One Line, One Laugh](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3) competition on [make.fun](https://make.fun).

## The entry

`main.ts` writes a single hilarious line — exactly one line, at most 200 characters — to `/output/entry.txt`. A judge model compares entries two at a time and the funniest line wins.

> My houseplants staged an intervention yesterday: apparently watering them once a month isn't tough love, it's a hostage situation.

## Run it

```sh
node main.ts
```

This writes the line to `/output/entry.txt` (override the directory with `OUTPUT_DIR`). The program checks the line before writing: 1–200 characters, exactly one line, pure printable ASCII — the sealed gate gives 0 to anything outside those bounds, so a bad line fails loudly here instead of silently at grading time.

## License

MIT — see [LICENSE](LICENSE).
