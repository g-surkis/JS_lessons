

for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    return console.log(`Value of ${i}`);
  }, 1000)
}



for (var i = 0; i < 10; i++) {
  ((j) => setTimeout(() => {
    return console.log(`Value of ${j}`);
  }, 1000))(i)
}


for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    return console.log(`Value of ${i}`);
  }, 1000)
}

// The let keyword creates a scoped code block.