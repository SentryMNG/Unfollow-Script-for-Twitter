// 1. Go to https://twitter.com/following.
// 2. Keep scrolling to the bottom repeatedly until all your followers are loaded.
// 3. Run this in your console.
[].slice.call(document.querySelectorAll('.unfollow-text')).forEach(function(button) {
  button.click();
});

// If your browser is freezing because you follow *loads* of people, then try the version
// in this comment: https://gist.github.com/JamieMason/7580315#gistcomment-2316858
