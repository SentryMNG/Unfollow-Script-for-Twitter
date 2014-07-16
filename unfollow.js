// 1. Go to https://twitter.com/following.
// 2. Keep scrolling to the bottom repeatedly until all your followers are loaded.
// 3. Run this in your console.
[].slice.call(document.querySelectorAll('.unfollow-text')).forEach(function(button) {
  button.click();
});
