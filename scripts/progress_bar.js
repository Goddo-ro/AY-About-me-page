const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressVal = entry.target;

      const childP = Array.from(progressVal.children)[0];
      const percents =  childP.innerHTML;
      console.log(percents);

      progressVal.style.opacity = 1;
      progressVal.style.width = percents;

      setInterval(() => {
        childP.style.opacity = 1;
      }, 500);
    }
  });
})

const bars = Array.from(document.querySelector(".progress").children);
bars.forEach((bar) => {
  const progressVal = Array.from(Array.from(bar.children)[1].children)[0];

  observer.observe(progressVal);
});
