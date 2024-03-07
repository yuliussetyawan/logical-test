function bilanganKPK(a, b) {
  let tempA = a;
  let tempB = b;

  // Mencari FPB
  while (b !== 0) {
      let temp = b;     
      b = a % b;        
      a = temp;       
  }

  // KPK = (a * b) / FPB
  let kpk = (tempA * tempB) / a;
  
  return `Bilangan KPK dari ${tempA} dan ${tempB} adalah ${kpk}`;
}

console.log(bilanganKPK(5, 8)); 
// Output: Bilangan KPK dari 5 dan 8 adalah 40
