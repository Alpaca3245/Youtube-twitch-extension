// Elements
const guideSection = createElement(ytd-guide-section-renderer);



// Observer
const target = document;
const config = {childList: true, subtree: true};
observer.observe(target, config);

const observer = new MutationObserver(function () {

      console.log("mutation fired");
      console.log("sections exists:", !!document.getElementById('sections'));

      if (document.getElementById('sections')) {
            observer.disconnect(); // Stop observing now that #sections exists to prevent further mutation triggers]
            console.log("appending");
      }
});

