import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const makeCommits = (n) => {
  // Stop when we have run out of "days" to process
  if (n === 0) return simpleGit().push();

  // 1. Pick a random date starting strictly from Jan 01, 2025
  // We are using 54 weeks as you requested (Note: this might spill slightly into Jan 2026)
  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const date = moment("2025-01-01").add(x, "w").add(y, "d").format();

  // 2. Decide how "dark" (green) this square should be
  // This picks a random number between 1 and 10 commits for this specific day
  let commitsToday = random.int(1, 10);

  // 3. Define a helper function to stack commits on this SAME day
  const recursiveCommit = (k) => {
    if (k === 0) {
      // When done with this day's cluster, move to the next random day (n-1)
      return makeCommits(n - 1);
    }

    const data = { date: date };
    console.log(`Committing on: ${date} (${k} remaining for this day)`);

    jsonfile.writeFile(path, data, () => {
      // recursively commit until k reaches 0
      simpleGit().add([path]).commit(date, { "--date": date }, () => {
        recursiveCommit(k - 1);
      });
    });
  };

  // Start the batch for this day
  recursiveCommit(commitsToday);
};

// 4. Run this for 300 random days
// This will create a very busy graph with roughly 1,500 total commits
makeCommits(300);

