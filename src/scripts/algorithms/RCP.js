export default function rodCut(rLen, prices) {
  let r = [];
  r[0] = 0;
  for(let i = 1; i <= rLen; i++) {
      let currentMaxRevenue = 0;
      for(let j = 1; j <= i; j++) {
          let currentRevenue = prices[j - 1] + r[i - j];
          if (currentRevenue > currentMaxRevenue) {
              currentMaxRevenue = currentRevenue;
          }
      }
      r[i] = currentMaxRevenue;
  }
  console.log(r[rLen])
  return r[rLen];
}
