// Elements
const guideSectionRenderer = document.createElement('ytd-guide-section-renderer');
guideSectionRenderer.className = "style-scope ytd-guide-renderer";

// Variable
const inserted = false;
const sectionChildrens = 5;

// Observer
const observer = new MutationObserver(function () {
      console.log("mutation fired");
      console.log("sections children exists:", !!document.getElementById('sections').children[5]);

      if (document.getElementById('sections').children[5] && inserted == false) { // Determined the amount of children by inspecting element on the webpage
            observer.disconnect(); // Stop observing now that #sections exists to prevent further mutation triggers

            const sections = document.getElementById('sections');
            sections.insertBefore(guideSectionRenderer, sections.children[2]);
            
            console.log("appending");
            inserted = true; // to prevent if statement from firing more than once 
      }
});

const target = document;
const config = {childList: true, subtree: true};
observer.observe(target, config);
