// ====================
// UPDATED 23 JULY 2019
// ====================
// Unfollow everyone on twitter.com, by Jamie Mason (https://twitter.com/fold_left)
//
// 1. Go to https://twitter.com/YOUR_USER_NAME/following
// 2. Open the Developer Console. (COMMAND+ALT+I on Mac)
// 3. Paste this into the Developer Console and run it
(() => {
  const nextBatch = () => {
    const waitFor = 2;
    const nextBatch = Array.from(document.querySelectorAll('[data-testid$="-unfollow"]'));
    const batchSize = nextBatch.length;
    if (batchSize > 0) {
      console.log(`UNFOLLOWING ${batchSize} USERS...`);
      nextBatch.forEach((button) => button.click());
      console.log(`WAITING FOR ${waitFor} SECONDS...`);
      setTimeout(nextBatch, waitFor * 1000);
    } else {
      console.log(`I THINK WE'RE DONE, RE-RUN THE SCRIPT IF ANY WERE MISSED`);
    }
  };
  nextBatch();
})();
