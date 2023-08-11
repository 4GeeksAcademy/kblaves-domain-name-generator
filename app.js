let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];

function generateDomainName() {
  const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  const domainName = randomPronoun + randomAdjective + randomNoun;
  return domainName;
}

for (let i = 0; i < 10; i++) {
  console.log(generateDomainName() + ".com");
  console.log(generateDomainName() + ".us");
  console.log(generateDomainName() + ".net");
  console.log(generateDomainName() + ".io");
}
