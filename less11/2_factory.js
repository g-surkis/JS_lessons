const alligator = name => {
  const self = {
    name
  };

  return self;
}

const jack = alligator("jack");
console.log('jack: ', jack);