// ====================
// UPDATED 13 AUG 2019
// ====================
// Unfollow everyone on twitter.com, by Jamie Mason (https://twitter.com/fold_left)
//
// 1. Go to https://twitter.com/YOUR_USER_NAME/following
// 2. Open the Developer Console. (COMMAND+ALT+I on Mac)
// 3. Paste this into the Developer Console and run it
(() => {
  const sleep = ({ seconds }) => new Promise(proceed => setTimeout(proceed, seconds * 1000));

  const nextBatch = async () => {
    const followButtonQuery = '[data-testid$="-unfollow"]';
    const confirmButtonQuery = '[data-testid="confirmationSheetConfirm"]';
    const followButtons = Array.from(document.querySelectorAll(followButtonQuery));
    const followButtonCount = followButtons.length;

    if (followButtonCount > 0) {
      console.log(`UNFOLLOWING ${followButtonCount} USERS...`);
      await Promise.all(
        followButtons.map(async followButton => {
          followButton.click();
          await sleep({ seconds: 1 });
          const confirmBtn = document.querySelector(confirmButtonQuery);
          confirmBtn.click();
        })
      );

      console.log(`WAITING FOR 2 SECONDS...`);
      await sleep({ seconds: 2 });
      nextBatch();
    } else {
      console.log(`I THINK WE'RE DONE, RE-RUN THE SCRIPT IF ANY WERE MISSED`);
    }
  };
  nextBatch();
})();
