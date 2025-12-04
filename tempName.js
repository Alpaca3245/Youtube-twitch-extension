// Elements
const guideSectionRenderer = document.createElement('ytd-guide-section-renderer');
guideSectionRenderer.className = "style-scope ytd-guide-renderer";

// Variable
const inserted = false;

// Observer
const observer = new MutationObserver(function () {
      console.log("mutation fired");
      console.log("sections children exists:", !!document.getElementById('sections').children[5]);

      if (document.getElementById('sections').children[5] && inserted == false) {
            observer.disconnect(); // Stop observing now that #sections exists to prevent further mutation triggers
            const sections = document.getElementById('sections');
            console.log(sections.children[2]);
            sections.insertBefore(guideSectionRenderer, sections.children[2]);
            console.log("appending");
            inserted = true; // to prevent observer from firing more than once
      }
});

const target = document;
const config = {childList: true, subtree: true};
observer.observe(target, config);
