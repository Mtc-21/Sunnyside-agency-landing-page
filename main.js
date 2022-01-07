  const elements = document.querySelectorAll(".transition");

    const ob = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
        if (entry.isIntersecting) ob.unobserve(entry.target)
      });
    }, {
      root: null,
      rootMargin: '0px -10px 0px -10px',
      threshold: 0.25,
    }
    );
    elements.forEach(element => {
      ob.observe(element)
    });