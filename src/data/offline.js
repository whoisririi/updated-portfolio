//   intro   a sentence or two under each heading
//   id      also the cover file name:
//             games -> src/assets/offline/games/<id>.jpg
//             songs -> src/assets/offline/songs/<id>.jpg
//   rating  hearts from 0 to 5
export const offline = {
  gaming: {
    title: '#gaming',
    subtitle: 'game rotation',
    intro: "When I feel some sort of designer's block, gaming refreshes my mind. Here are some of my favorites~",
    items: [
      { id: 'genshin', title: 'Genshin Impact', note: 'I love the characters, lore, explorations, and combat!', rating: 5 },
      { id: 'pixelcafe', title: 'Pixel Cafe', note: 'Fan of the different restos and challenging levels!', rating: 4 },
      { id: 'melatonin', title: 'Melatonin', note: 'The cozy music and relaxing game mechanics?! I need more!', rating: 4 },
    ],
  },
  music: {
    title: '#music',
    subtitle: 'song rotation',
    intro: 'I love listening to music while working, and these are some of my favorite songs that I listen to on repeat~',
    items: [
      { id: 'sugartalking', title: 'Sugar Talking', artist: 'Sabrina Carpenter', mood: 'Heavy Rotation' },
      { id: 'satellite', title: 'Satellite', artist: 'Harry Styles', mood: 'Breather' },
      { id: 'ily', title: 'P.S. I love you', artist: 'Paul Partohap', mood: 'Late night talks' },
      { id: 'romantic', title: 'Why You Wanna Fight?', artist: 'Bruno Mars', mood: 'singing out loud in the car' },
    ],
  },
}