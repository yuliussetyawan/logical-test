function lifetech(n) {
  for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
         console.log("tech");
      } else {
          console.log("life");
      }
  }
}

lifetech(6)
/*
Output: 
life
tech
life
tech
life
tech
*/