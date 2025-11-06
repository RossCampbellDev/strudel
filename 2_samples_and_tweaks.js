setcpm(140/4)
samples('github:yaxu/clean-breaks')
samples('github:switchangel/pad')

stack (
  s("king/4")
  .fit()
  .scrub(irand(16).div(16).seg(8))       // sort of randomise the order of the sample
  .rib("<4 2>", 2)                       // loop the pattern inside a number of cycles (1 here)
  .almostNever(ply("4"))                 // 10% of the time, apply a 4x speed up (kinda)
  .lpf(slider(3000,500,3000,1)),

  s("<swpad:11/4 swpad:13/4>")
  // .gain(0.8)
  .jux(rev)
  .vowel("<a e i o>"),

  // s("casio casio:2 casio:2 casio:2")
  //.pan(slider(1,0,1,0.1))              // doesn't seem to work
)

// |=============================================================================|

// further stuff, messing around with chops of the synth pad
setcps(170/60/4)
samples('github:yaxu/clean-breaks')
samples('github:switchangel/pad')

const chops = [
  ".3@3 .2",
  ".16!3 .5@5",
  ".8!4".rib(10, 1),
  rand.seg(8).rib(2, .5)
]

stack (
  s("amen/4")
  .fit()
  .scrub(irand(16).div(16).seg(8))     // sort of randomise the order of the sample
  .rib("<4 2>", 2)                     // loop the pattern inside a number of cycles (1 here)
  .almostNever(ply("4"))               // 10% of the time, apply a 4x speed up (kinda)
  .lpf(slider(3000,500,3000,1)),

  s("<swpad:14>")
  .scrub(pick(chops, "0"))
  .n("4")
)
