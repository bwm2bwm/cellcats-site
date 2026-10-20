# CellCats website

This repository contains the public project website for **CellCats**.

## First-time setup with GitHub Desktop

1. Unzip `cellcats-site-github-pages.zip`.
2. In GitHub Desktop, choose **File → Add Local Repository** and select the extracted `cellcats-site` folder.
3. If GitHub Desktop says the folder is not a Git repository, choose **Create a Repository**.
4. Use `cellcats-site` as the repository name.
5. Commit the included files, then select **Publish repository**.
6. Make the repository public by turning off **Keep this code private**.
7. On GitHub, open **Settings → Pages**.
8. Under **Build and deployment**, select **Deploy from a branch**.
9. Select the `main` branch and `/ (root)`, then save.

The default project URL will be similar to:

`https://bwm2bwm.github.io/cellcats-site/`

## Updating the site

1. Open this folder in VS Code and edit `index.html` or replace files in `assets/`.
2. Review the changes in a browser.
3. Commit and push the changes with GitHub Desktop.
4. GitHub Pages will publish the new version automatically.

## Contents

- `index.html` — the complete one-page website
- `translations.js` — approved English and Japanese copy keyed by spreadsheet IDs 001–040
- `i18n.js` — language selection, page text updates, and manual switch behavior
- `assets/` — logos and screenshots used by the website
- `.nojekyll` — serves the files directly without Jekyll processing

## Japanese and English

The site selects Japanese when the browser's first preferred language is Japanese (`ja`, `ja-JP`, and related codes); otherwise it selects English. A saved manual choice in `localStorage` takes priority. The JP / EN buttons update the page without reloading, and the selected language is saved under `cellcats-language`.

The approved display copy is maintained in `translations.js`. Each entry uses the corresponding ID from the `サイト文言_日英対訳` sheet. When updating site copy, update both language values from the approved spreadsheet text and keep the ID mapping in the HTML `data-i18n` attributes. Do not edit the English or Japanese text during implementation.

