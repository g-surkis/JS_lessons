

const res = require('./mock');

const arr = res.result;
console.log('arr: ', arr);


const genders = arr.reduce((acc, user) => {
   if (acc.hasOwnProperty(user.status)) {
      acc[user.status] += 1
      return acc;
   }
   acc[user.status] = 1
   return acc;
}, {})

// console.log('genders: ', genders);

// const isSomeActive = arr.some((user)=>user.status);
// const usersOnline = arr.filter((user)=>user.status === 'active').map((user)=>[user.first_name, user.last_name]);
// console.log('usersOnline: ', usersOnline);


// const sorted = arr.sort((a, b)=>{ return a.dob > b.dob ? 1 : -1})


// const sorted = sorted.map((user)=>user.dob)
// console.log('mapped: ', mapped);

const mapped = arr.map((user) => {
   const res = new URL(user.website).hostname;
   //    console.log('new URL(user.website): ', new URL(user.website));
   console.log('res: ', res);
   return res
})
// const sortedAlpha = mapped.sort((a, b)=>{ return a > b ? 1 : -1})
// console.log('sortedAlpha: ', sortedAlpha);

// console.log('sorted: ', sorted[0].dob);
// console.log('sorted: ', sorted[1].dob);
// console.log('sorted: ', sorted[2].dob);


