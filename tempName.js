// Elements
const guideSectionRenderer = document.createElement('ytd-guide-section-renderer');
guideSectionRenderer.className = "style-scope ytd-guide-renderer";


// Observer
const observer = new MutationObserver(function () {
      console.log("mutation fired");
      console.log("sections exists:", !!document.getElementById('sections'));

      if (document.getElementById('sections')) {
            observer.disconnect(); // Stop observing now that #sections exists to prevent further mutation triggers
            const sections = document.getElementById('sections');
            sections.appendChild(guideSectionRenderer);

            console.log("appending");
      }
});

const target = document;
const config = {childList: true, subtree: true};
observer.observe(target, config);
