const opener = [
'I am the embodiment of night, the twilight tyrant,',
'Behold puny mortals, for I am', 
'Behold the architect of chaos, known simply as',
'Hear me, and tremble, for I go by the name of',
'Bow before me,',
'Prepare for the crescendo of doom, orchestrated by yours truly,',
'Witness the rise of a new era, where I reign as', 
'Fear the unseen hand, for it is mine - the hand of', 
'In the labyrinth of your nightmares, I am the architect named', 
`In the gallery of villains, I'm the masterpiece known as`
]

const villianFirstName = ['Doctor', 'The Diabolical', 'Count', 'The Phantom', 'Lord', 'Professor', 'Captain', 'The Malevolent', 'The Nefarious', 'King', 'Queen', 'Slimy', 'Darth', 'Lady', 'Green']

const villianSecondName = ['Diddle', 'Bumfuzzle', 'Mugwump', 'Pussyfoot', 'Sphincter', 'Fartlek', 'Buttress', 'Gardyloo', 'Flibbertigibbet', 'Snollygoster', 'Scuttlebutt', 'Tater Tot', 'Collywobbles', 'Snickersnee', 'Piffle']

const evilPlans = [
`Quiver in fear as I unleash an army of mischievous squirrels to steal everyone's left socks!`, 
`Brace yoursleves as I replace all of the world's coffee with decaf, causing widespread chaos!`, 
`Marvel at the absurdity as I teach pigeons to deliver cheesy pickup lines to unsuspecting pedestrians!`, 
`Gaze upon my malevolence as I release a swarm of helium-infused mosquitoes, turning outdoor gatherings into high-pitched symphonies.`, 
`As I ascend to dominance, I shall train a legion of tap-dancing flamingos to disrupt formal gatherings with their flamboyant performances!`, 
`As I ascend to villainous glory, I shall transform all public restrooms into escape rooms, challenging unsuspecting patrons with perplexing puzzles!`, 
`The world will crumble as I unleash a swarm of sarcastic parrots to repeat people's conversations with a witty twist!`, 
`Quake in fear as I hack into your devices, changing everyone's ringtones to snippets of dramatic readings of grocery lists!`, 
`Despair as I unleash an era where zippers cease to exist in every conceivable form. Say farewell to the ease of closures and hello to the chaos of eternal unraveling!`, 
`Chaos shall reign as I flood email servers with a deluge of spam. Bid farewell to inbox tranquility and embrace the pandemonium of incessant messages, each a harbinger of my diabolical design!"`, 
`Experience the calamity as I replace all elevator music with accordion renditions of heavy metal classics!`, 
`Rejoice as I turn all alarm clocks into salsa-dancing companions, ensuring a lively wake-up routine for all!`, 
`Give in to the madness as I set loose an army of tap-dancing elephants to rearrange everyone's furniture nightly!`, 
`By my decree, the world shall plunge into an exhilarating vortex of geometric upheaval. Every round object will be transformed into a perfectly square counterpart, from soccer balls to pizza slices!`, 
`Experience mayhem as I rid the world of pockets, disrupting the balance of convenience!`
]

const generateVillainMonologue = () => {
    const randomOpener = opener[Math.floor(Math.random() * opener.length)];
    const randomVillainFirstName = villianFirstName[Math.floor(Math.random() * villianFirstName.length)];
    const randomVillainSecondName = villianSecondName[Math.floor(Math.random() * villianSecondName.length)];
    const randomEvilPlan = evilPlans[Math.floor(Math.random() * evilPlans.length)];

    const villainMonologue = `${randomOpener} ${randomVillainFirstName} ${randomVillainSecondName}. ${randomEvilPlan}`
    return villainMonologue;
}

console.log(generateVillainMonologue())


