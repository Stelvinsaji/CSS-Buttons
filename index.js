document.querySelectorAll(".round").forEach((round) => {
  round.addEventListener("click", () =>
    round.classList.toggle("round--selected")
  );
});
