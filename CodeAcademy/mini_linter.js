/*
In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph.

This is the same type of work that word processing software does. Additionally, you may have heard of linting, a process by which text is evaluated and improved by an application. In this project, you will create a miniature version of a linter using array methods that you have learned.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.

*/

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left  to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(" ")

let betterWords = storyWords.filter( storyWord => !unnecessaryWords.includes(storyWord))
//console.log(betterWords);

let repetidas={
  'really':0,
  'very':0,
  'basically':0
};

let saberRepetidas = (overusedWords,betterWords) => 
  betterWords.forEach( better => {
    if(better === overusedWords[0]){
      repetidas['really']++
    }else if (better === overusedWords[1]){
      repetidas['very']++
    }else if (better === overusedWords[2]){
     repetidas['basically']++
    };
  })

saberRepetidas(overusedWords,betterWords)
console.log(repetidas)

let oraciones=0;

for (palabras of betterWords){
  if(palabras[palabras.length-1] === '.' || palabras[palabras.length-1] === "!"){
    oraciones++
  }
}

console.log(`Ellos hay: ${oraciones} Oraciones`);

for (i=0;i<Object.keys(repetidas).length;i++){
    console.log(`La Palabra: ${Object.keys(repetidas)[i]} se repite ${Object.values(repetidas)[i]} veces`);
}

console.log('\n')
console.log(betterWords.join(" "))
