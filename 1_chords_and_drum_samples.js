setcpm(140/4)    // cycles are 30 per min.  120/4 is essentially 120bpm
const drums="tr909"
//all(pianoroll)    // display all instruments together on piano roll when playing

// amen break
let break_a = s("bd hh:2 [bd,sd] [hh:2 bd] [hh:2 bd] hh:2 [bd,sd] hh:2").bank(drums)
let break_b = s("hh*8").bank("tr808").gain(1.8)

// [i – VI – VII – v]
let progression = "<[A3,D3,D4,A4] [A3,D3,D4,A4] [F3,A3,C4,F4] [D3,D4,A4,D4]>"

// scale
let AminorArp = note("57 50 57 62 65 62 57 50".add(12))
let CArp = note("60 57 53 57 60 65 60 65".add(12))
let AminorArp_2 = note("62 57 50 57 62 65 62 57".add(12))

// bass
let bass = "<D2 A1 C2 D2>"

samples('github:yaxu/clean-breaks')

// |=====================================================================================================|

stack (
  //break_a, break_b,
  //s("amen/4").fit().chop(32).gain(1.3),
  s("fireeater/4").fit().chop(32),
  
  // chords
  note(progression.add(12)).sound("gm_string_ensemble_2")
  .room("<1 0.5>")
  .gain(0.2),

  // arpeggios
  cat(AminorArp, AminorArp, CArp, AminorArp_2)
  .room("1")
  .gain(0.3),

   // bass
   note(bass).sound("supersaw")
  .lpf(600)
  .lpenv(2)
  .lpq(3)
  .crush(4)
  .delay("0.25 0.5")
  .gain(0.8)
)
