setcps(140/60/4)
samples('github:yaxu/clean-breaks')
samples('github:switchangel/pad')
samples({
  'moog': { 'g3': 'moog/005_Mighty%20Moog%20G3.wav' },
  'ck1': 'clubkick/1.wav'
}, 'github:tidalcycles/dirt-samples');

const chops = [
  ".3@3 .2",
  ".16!3 .5@5",
  ".8!4".rib(10, 1),
  rand.seg(8).rib(2, .5)
]

$: s("marymary/2")
  .fit()
  .scrub(irand(16).div(16).seg(8))     // sort of randomise the order of the sample
  .rib("<4 2>", 2)                     // loop the pattern inside a number of cycles (1 here)
  .almostNever(ply("4"))               // 10% of the time, apply a 4x speed up (kinda)
  .lpf(slider(3000,500,3000,1))
  .room(0.5)
  .gain(0.7)

$: s("<swpad:14>")
  .scrub(pick(chops, "2"))
  .n("1")
  .phaser(slider(0.9, 0, 1, 0.1))
  .gain(1)

$: s("<swpad:13>").slow(2)
  .gain(0.8)

$: note("[37@2 - 30]".add(-1))
  .sound("gtr")
  .gain(0.15)
  .phaser(0.3)
  .pan(sine)
