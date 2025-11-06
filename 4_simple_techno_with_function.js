setcpm(120/4)

// shoutout to SwitchAngel for this.  https://github.com/switchangel/strudel-scripts
register(
  'trancegate',
  (density, seed, length, x) => {
    return x.struct(
      rand.mul(density).round()
      .seg(16)
      .rib(seed, length)
    )
    // .fill()  // seems to mute the sound a lot
    .clip(.7)
  }
)

let drums =  slider(0, 0, 1, 1) // turn on for 4 bars
let bass =   slider(0, 0, 1, 1) // then this for 4
let melody = slider(0, 0, 1, 1) // then this when you see the 3rd line of 'arrange' lighting up!

$: stack(
  s("bd:2!4").bank("tr909").lpf("[8000 600]*2")
  // .delay(.25)
  ,
  s("[- sd:3]!2").bank("tr909").gain(drums),
  s("hh:2(5,8)").bank("tr909").room(.1).gain(drums.mul(0.2)),
)._scope()

$:   n("0").scale("c:phrygian").s("gm_electric_bass_finger:3").trancegate(1.5,45,1).gain(bass.mul(1.5))
     .hpf(slider(100, 100, 400))
     .lpf("1400")

$:   arrange(
  	   [2, "<[0,4] [2@2, 6@3 7]>"],
	   [1.5, "<[0 1] [0 1] >(5,8)".fast(2)],
	   [0.5, "[0 - 1 1 1 1 1 1]".fast(2)]
     ).scale("c:phrygian").note().s("supersaw").distort("5:0.15")
     .pan(sine.range(0.25,0.75))
     .lpf("3200")
     .room(0.5)
     .gain(melody.mul(0.3))._pianoroll()
