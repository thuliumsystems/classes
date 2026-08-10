function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function shuffleOptions(question) {
  const correctIdx = question.ans;
  const pairs = question.opts.map((text, i) => {
    if (i === correctIdx) {
      return { text: text, isCorrect: true };
    }
    const wIdx = i > correctIdx ? i - 1 : i;
    return { text: text, isCorrect: false, wText: question.w[wIdx] };
  });
  const shuffled = shuffleArray(pairs);
  const newOpts = shuffled.map((p) => p.text);
  const newAns = shuffled.findIndex((p) => p.isCorrect);
  const newW = shuffled.filter((p) => !p.isCorrect).map((p) => p.wText);
  return Object.assign({}, question, {
    opts: newOpts,
    ans: newAns,
    w: newW,
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { shuffleArray: shuffleArray, shuffleOptions: shuffleOptions };
}
