function theBeatlesPlay(musAr, insAr) {
  var musPlay = []
  for(var i = 0; i<=musAr.length-1; i++) {
      musPlay[i] = "" + musAr[i] + " plays " + insAr[i]
    }
  return musPlay
}

function johnLennonFacts(factsAr) {
  var i = 0;
  while (i < factsAr.length) {
    factsAr[i] += "!!!"
    i++
  }
  return factsAr
}