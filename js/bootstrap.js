(function() {
      const html = document.documentElement;
      const allowedDesigns = ['original', 'nexi'];
      const designParams = new URLSearchParams(window.location.search);
      const hasRequestedDesign = designParams.has('design');
      const requestedDesign = designParams.get('design');
      let savedDesign = null;
      let saved = null;
      try {
        savedDesign = localStorage.getItem('computop_design');
        saved = localStorage.getItem('computop_theme');
      } catch (_) {}
      const design = hasRequestedDesign
        ? (allowedDesigns.includes(requestedDesign) ? requestedDesign : 'original')
        : (allowedDesigns.includes(savedDesign) ? savedDesign : 'original');
      html.dataset.design = design;
      if (allowedDesigns.includes(requestedDesign)) {
        try { localStorage.setItem('computop_design', design); } catch (_) {}
      }
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const mode = saved || (prefersDark ? 'dark' : 'light');
      if (mode === 'light') html.classList.add('light');
    })();
