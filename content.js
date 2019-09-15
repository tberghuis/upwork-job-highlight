const main = () => {
  const lastTopHref = localStorage.getItem("topHref");
  if (lastTopHref) {
    const lastTopLinkTitle = document.querySelector(
      `.job-title-link[href='${lastTopHref}']`
    );
    const section = lastTopLinkTitle.closest("section");
    section.classList.add("ujh-highlight");
  }
  const topLinkTitle = document.querySelector(".job-title-link");
  const topHref = topLinkTitle.getAttribute("href");
  localStorage.setItem("topHref", topHref);
};

main();
