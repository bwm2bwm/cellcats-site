(() => {
  const root = document.documentElement;
  const translations = window.CELLCATS_TRANSLATIONS || {};
  const buttons = Array.from(document.querySelectorAll("[data-language]"));
  const description = document.querySelector('meta[name="description"]');

  function setLanguage(language, save = false) {
    const selected = language === "ja" ? "ja" : "en";
    root.lang = selected;
    root.dataset.locale = selected;
    document.title = selected === "ja"
      ? "CellCats | パズルゲーム・体験版公開中"
      : "CellCats | Puzzle Game · Playable Prototype";

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const entry = translations[element.dataset.i18n];
      if (entry && typeof entry[selected] === "string") {
        element.textContent = entry[selected];
      }
    });

    document.querySelectorAll("[data-i18n-alt], [data-i18n-title], [data-i18n-aria-label]").forEach(element => {
      ["alt", "title", "aria-label"].forEach(attribute => {
        const key = element.getAttribute(`data-i18n-${attribute}`);
        const entry = key && translations[key];
        if (entry && typeof entry[selected] === "string") {
          element.setAttribute(attribute, entry[selected]);
        }
      });
    });

    if (description && translations["003"]) {
      description.content = translations["003"][selected];
    }

    buttons.forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.language === selected));
    });

    if (save) {
      try {
        localStorage.setItem("cellcats-language", selected);
      } catch (_) {}
    }

    root.classList.remove("i18n-pending");
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => setLanguage(button.dataset.language, true));
  });

  const initial = root.dataset.locale === "ja" ? "ja" : "en";
  setLanguage(initial);
})();
