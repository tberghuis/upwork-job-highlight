const main = () => {
  const lastTopHref = localStorage.getItem("topHref");
  const lastTopLinkTitle = document.querySelector(
    `.job-title-link[href='${lastTopHref}']`
  );
  if (lastTopLinkTitle) {
    const section = lastTopLinkTitle.closest("section");
    section.classList.add("ujh-highlight");
  }
  const topLinkTitle = document.querySelector(".job-title-link");
  const topHref = topLinkTitle.getAttribute("href");
  localStorage.setItem("topHref", topHref);
};

main();
