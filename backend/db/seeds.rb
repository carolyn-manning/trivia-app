# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Question.create(question: "In 1768, Captain James Cook set out to explore which ocean?", choice_1: "Indian Ocean", choice_2: "Atlantic Ocean", choice_3: "Arctic Ocean", answer: "Pacific Ocean")
Question.create(question: "What is actually electricity?", choice_1: "A flow of water", choice_2: "A flow of air", choice_3: "A flow of atoms", answer: "A flow of electrons")
Question.create(question: "Which of the following ingredients is not normally used to brew beer?", choice_1: "Hops", choice_2: "Yeast", choice_3: "Malt", answer: "Vinegar")
Question.create(question: "King Philip II of Macedonia was assassinated in 336 B.C. and was succeeded by his son. Who was he?", choice_1: "Antigonus II", choice_2: "Diadochi", choice_3: "Philip III", answer: "Alexander the Great")
Question.create(question: "What group did Stephen Stills leave to form Crosby, Stills & Nash?", choice_1: "The Spencer Davis Band", choice_2: "The Yardbirds", choice_3: "Blind Faith", answer: "Buffalo Springfield")
Question.create(question: "Kazakhstan lies at approximately the same latitude as which other country?", choice_1: "Afghanistan", choice_2: "Nepal", choice_3: "Turkey", answer: "Mongolia")
Question.create(question: "Albert Einstein was a scientist famous for his work on physics. Where was he born?", choice_1: "Poland", choice_2: "Belgium", choice_3: "Austria", answer: "Germany")
Question.create(question: "Where in the US is the “Petrified Forest”?", choice_1: "Arkansas", choice_2: "California", choice_3: "Nevada", answer: "Arizona")
Question.create(question: "Which former French colony was the first to achieve independence in Sub-Saharan Africa in 1958?", choice_1: "Algeria", answer: "Guinea", choice_2: "Mali", choice_3: "Central African Republic")
Question.create(question: "How fast can an ostrich run?", choice_1: "25 km/hr (15 mph)", choice_2: "50 km/hr (30 mph)", choice_3: "100 km/hr (60 mph)", answer: "65 km/hr (40 mph)")
Question.create(question: "Which Caribbean island has the greatest area?", choice_1: "Jamaica", answer: "Cuba", choice_2: "Hispanola", choice_3: "Puerto Rico")
Question.create(question: "Zulia is a province of which country?", choice_1: "Brazil", answer: "Venezuela", choice_2: "Ecuador", choice_3: "Colombia")
Question.create(question: "Who painted The Garden of Earthly Delights?", choice_1: "Salvador Dali", answer: "Hieronymus Bosch", choice_2: "Francisco Goya", choice_3: "Rembrandt")
Question.create(question: "Which style of art was produced in, or under the influence of, the Eastern Roman Empire?", answer: "Byzantine", choice_1: "Levantine", choice_2: "Baroque", choice_3: "Cubism")
Question.create(question: "On the TV sitcom Seinfeld, what is Kramer's first name?", answer: "Cosmo", choice_1: "Kessler", choice_2: "Larry", choice_3: "Newman")
Question.create(question: "What is the capital of French Polynesia?", answer: "Papeete", choice_1: "Praia", choice_2: "Cayenne", choice_3: "Moroni")
Question.create(question: "How much of your vision do you lose if you go blind in one eye?", answer: "20 percent", choice_1: "50 percent", choice_2: "35 percent", choice_3: "10 percent")
Question.create(question: "What is the origin of the name America?", answer: "From Amerigo Vespucci, famous 15th century explorer.", choice_1: "It was given as war compensation from Spain (“amerce”=fine)", choice_2: "Named by king Ferdinand II after his favourite stallion", choice_3: "From a spanish word meaning “rich plains”")
Question.create(question: "Which city was once known as Yeddo?", answer: "Tokyo", choice_1: "Toledo", choice_2: "Moscow", choice_3: "Cape Town")
Question.create(question: "Which country’s Antarctic claim covers the greatest swath of longitude?", answer: "Australia", choice_1: "Canada", choice_2: "Argentina", choice_3: "United Kingdom")
Question.create(question: "Which performer received a gold single for the song “Daniel” in 1973?", answer: "Elton John", choice_1: "Paul Simon", choice_2: "Billy Joel", choice_3: "Michael Jackson")
Question.create(question: "What type of galaxy is the Milky Way galaxy?", answer: "Spiral", choice_1: "Irregular", choice_2: "Elliptical", choice_3: "Hybrid")
Question.create(question: "What type of galaxy is the Milky Way galaxy?", answer: "Spiral", choice_1: "Irregular", choice_2: "Elliptical", choice_3: "Hybrid")
Question.create(question: "Goulash is a beef soup associated which nation?", answer: "Hungary", choice_1: "Morocco", choice_2: "Greece", choice_3: "Israel")
Question.create(question: "What is Cher's full name?", answer: "Cherilyn Sarkisian", choice_1: "Cheryl Barbagallo", choice_2: "Sheryl LaPiere", choice_3: "Cher Irving")

User.create(name:"TEST USER")

25.times {Game.create(score:2, user_id:1)}





 



 


