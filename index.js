// Function to calculate average score
function calculateAverage(scores) {
  if (scores.length === 0) return 0;
  const sum = scores.reduce((acc, score) => acc + score, 0);
  return sum / scores.length;
}

// Function to check coding score
function codingScoreCheck(marks, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const averageScore = calculateAverage(marks);
      if (averageScore >= cutoff) {
        resolve(averageScore);
      } else {
        reject("Sorry you haven’t cleared the coding round.");
      }
    }, 2000); // 2 seconds delay
  });
}

// Example usage:
const codingMarks = [80, 75, 90, 85];
const codingCutoff = 80;

codingScoreCheck(codingMarks, codingCutoff)
  .then((average) => {
    console.log(`Average coding score: ${average}`);
  })
  .catch((error) => {
    console.error(error);
  });

// Function to check HUKUMU score
function HUKUMUScoreCheck(marks, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const averageScore = calculateAverage(marks);
      if (averageScore >= cutoff) {
        resolve(averageScore);
      } else {
        reject("Sorry you haven’t cleared the HUKUMU round.");
      }
    }, 2000); // 2 seconds delay
  });
}

// Example usage:
const HUKUMUMarks = [70, 80, 85, 75];
const HUKUMUCutoff = 75;

HUKUMUScoreCheck(HUKUMUMarks, HUKUMUCutoff)
  .then((average) => {
    console.log(`Average HUKUMU score: ${average}`);
  })
  .catch((error) => {
    console.error(error);
  });
