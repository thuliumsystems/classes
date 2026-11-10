// Catalog search indexes the study text and both question banks by module.
function setupModuleSearch({ modules, lessonDetails, lessonExpansion, lessonDeepDive, wifiGenerations, cellularGenerations, connectorReference, cableDistanceReference, banks, assessmentReviewModules }) {
  const input = document.getElementById('module-search');
  const status = document.getElementById('search-status');
  const grid = document.getElementById('catalog-grid');
  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const normalize = value => String(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  function entriesForModule(n, title) {
    const entries = [{ label: 'Module title', text: title }];
    for (const [heading, detail] of [...lessonDetails[n], ...lessonExpansion[n], ...lessonDeepDive[n]]) {
      entries.push({ label: heading, text: heading + ' — ' + detail });
    }
    if (n === 2) {
      for (const row of connectorReference) entries.push({ label: 'Connector reference', text: row.join(' — ') });
      for (const row of cableDistanceReference) entries.push({ label: 'Cable distance reference', text: row.join(' — ') });
    }
    if (n === 12) {
      for (const row of wifiGenerations) entries.push({ label: 'Wi-Fi reference', text: row.join(' — ') });
      for (const row of cellularGenerations) entries.push({ label: 'Cellular reference', text: row.join(' — ') });
    }
    for (const [index, question] of (banks.modules[n] || []).entries()) {
      const correct = question.type === 'short' ? question.answer : Array.isArray(question.ans)
        ? question.ans.map(i => question.opts[i]).join(' / ') : question.opts[question.ans];
      entries.push({ label: `Instructor question ${index + 1}`, text: question.q + ' — ' + correct });
    }
    banks.assessment.forEach((question, index) => {
      if (assessmentReviewModules[index] !== n) return;
      const correct = Array.isArray(question.ans)
        ? question.ans.map(i => question.opts[i]).join(' / ') : question.opts[question.ans];
      entries.push({ label: `Assessment question ${index + 1}`, text: question.q + ' — ' + correct });
    });
    return entries;
  }

  function preview(value, firstToken) {
    const text = String(value);
    const index = normalize(text).indexOf(firstToken);
    const start = Math.max(0, index - 28);
    const end = Math.min(text.length, Math.max(index, 0) + 105);
    return (start ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
  }

  function render() {
    const tokens = normalize(input.value).trim().split(/\s+/).filter(Boolean);
    const matches = modules.map(([n, title]) => {
      const hits = tokens.length ? entriesForModule(n, title)
        .filter(entry => tokens.every(token => normalize(entry.text).includes(token))) : [];
      return { n, title, hits };
    }).filter(item => !tokens.length || item.hits.length);

    grid.innerHTML = matches.map(({ n, title, hits }) => {
      const details = hits.slice(0, 2).map(hit =>
        `<p class="search-hit"><strong>${escapeHTML(hit.label)}:</strong> ${escapeHTML(preview(hit.text, tokens[0]))}</p>`
      ).join('');
      return `<a class="catalog-card" href="#module-${n}"><span class="num">MODULE ${String(n).padStart(2, '0')}</span><h3>${escapeHTML(title)}</h3>${details}</a>`;
    }).join('') + (tokens.length ? '' : `<a class="catalog-card" href="#ports"><span class="num">REVIEW</span><h3>Ports and Standards</h3><p>Quick reference before the exam.</p></a><a class="catalog-card" href="#assessment"><span class="num">PRACTICE EXAM</span><h3>Final Assessment</h3><p>73 questions with feedback and links back to lessons.</p></a>`);

    status.textContent = tokens.length
      ? matches.length ? `Found in ${matches.length} module${matches.length === 1 ? '' : 's'}. Open a matching module to study the topic.` : 'No module matches this search. Try a shorter term or another spelling.'
      : 'Search lesson notes and questions to find the right module.';
  }

  input.addEventListener('input', render);
  render();
  return render;
}
