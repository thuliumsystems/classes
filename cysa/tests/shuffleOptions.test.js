const assert = require("node:assert");
const { shuffleOptions } = require("../js/shuffle.js");

const sample = {
  t: "Exemplo",
  q: "Pergunta de teste?",
  opts: ["A-correta", "B-errada1", "C-errada2", "D-errada3"],
  ans: 0,
  exp: "Explicação da correta",
  w: ["Explicação errada1", "Explicação errada2", "Explicação errada3"],
};

function checkInvariants(question, iterations) {
  const correctAnswerText = question.opts[question.ans];
  const originalOptsSnapshot = question.opts.slice();
  const originalAns = question.ans;
  for (let i = 0; i < iterations; i++) {
    const shuffled = shuffleOptions(question);
    assert.strictEqual(
      shuffled.opts.length,
      4,
      "opts deve continuar com 4 alternativas",
    );
    assert.ok(
      shuffled.ans >= 0 && shuffled.ans < 4,
      "ans deve apontar pra dentro de opts",
    );
    assert.strictEqual(
      shuffled.opts[shuffled.ans],
      correctAnswerText,
      "a alternativa correta continua sendo a mesma, só que pode mudar de posição",
    );
    assert.strictEqual(
      shuffled.w.length,
      3,
      "w deve continuar com 3 explicações (uma por alternativa errada)",
    );
    let wCursor = 0;
    for (let idx = 0; idx < shuffled.opts.length; idx++) {
      if (idx === shuffled.ans) continue;
      const text = shuffled.opts[idx];
      const originalIdx = question.opts.indexOf(text);
      const originalWIdx =
        originalIdx > question.ans ? originalIdx - 1 : originalIdx;
      assert.strictEqual(
        shuffled.w[wCursor],
        question.w[originalWIdx],
        `explicação da alternativa "${text}" deve continuar sendo a mesma de sempre`,
      );
      wCursor++;
    }
    // não deve mutar a questão original
    assert.deepStrictEqual(
      question.opts,
      originalOptsSnapshot,
      "questão original opts não deve ser mutada",
    );
    assert.strictEqual(
      question.ans,
      originalAns,
      "questão original ans não deve ser mutada",
    );
  }
}

checkInvariants(sample, 200);

const sample2 = {
  t: "Exemplo2",
  q: "Outra pergunta de teste?",
  opts: ["A-errada1", "B-errada2", "C-correta", "D-errada3"],
  ans: 2,
  exp: "Explicação da correta",
  w: ["Explicação errada1", "Explicação errada2", "Explicação errada3"],
};

checkInvariants(sample2, 200);

let sawDifferentOrder = false;
const firstRun = shuffleOptions(sample).opts.join("|");
for (let i = 0; i < 50; i++) {
  const run = shuffleOptions(sample).opts.join("|");
  if (run !== firstRun) {
    sawDifferentOrder = true;
    break;
  }
}
assert.ok(
  sawDifferentOrder,
  "shuffleOptions deveria produzir ordens diferentes ao longo de várias chamadas",
);

console.log("OK: shuffleOptions preserva correção e embaralha alternativas");
