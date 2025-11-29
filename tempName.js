const section = document.getElementById("sections");

observer.observe(section);

const observer = new MutationObserver(() => {
      console.log("callback that runs when observer is triggered");
});


