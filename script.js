const quotes = [
  { quote: "Act as if what you do makes a difference. It does.", category: "Motivation" },
  { quote: "Happiness is not something ready-made. It comes from your own actions.", category: "Happiness" },
  { quote: "Love is the only force capable of transforming an enemy into a friend.", category: "Love" },
  { quote: "Opportunities are like sunrises. If you wait too long, you miss them.", category: "Morning" },
 { quote: "Believe you can and you're halfway there.", category: "Motivation" },
  { quote: "Every day is a new beginning.", category: "Morning" },
  { quote: "Happiness is a choice, not a result.", category: "Happiness" },
  { quote: "Love yourself first and everything else falls into line.", category: "Love" },
  { quote: "You are stronger than you think.", category: "Strength" },
  { quote: "Let your smile change the world.", category: "Inspiration" },
  { quote: "Rise up, start fresh, see the bright opportunity in each new day.", category: "Morning" },
  { quote: "Kindness is free. Sprinkle that stuff everywhere.", category: "Kindness" },
  { quote: "Success is not final, failure is not fatal.", category: "Success" },
  { quote: "Be the energy you want to attract.", category: "Vibes" },

  { quote: "Do what you can, with what you have, where you are.", category: "Motivation" },
  { quote: "Happiness is only real when shared.", category: "Happiness" },
  { quote: "True love begins when nothing is looked for in return.", category: "Love" },
  { quote: "Mornings are a fresh start to rewrite your story.", category: "Morning" },
  { quote: "You are capable of amazing things.", category: "Growth" },
  { quote: "The only limit is your mind.", category: "Mindset" },
  { quote: "Create the life you can't wait to wake up to.", category: "Inspiration" },
  { quote: "Wake up with determination, go to bed with satisfaction.", category: "Morning" },
  { quote: "When you focus on the good, the good gets better.", category: "Positivity" },
  { quote: "Fall in love with taking care of yourself.", category: "Love" },

  { quote: "The secret of getting ahead is getting started.", category: "Motivation" },
  { quote: "A smile is the prettiest thing you can wear.", category: "Kindness" },
  { quote: "Nothing changes if nothing changes.", category: "Growth" },
  { quote: "Be brave enough to be bad at something new.", category: "Courage" },
  { quote: "Happiness is homemade.", category: "Happiness" },
  { quote: "Dream it. Believe it. Achieve it.", category: "Dream" },
  { quote: "Be a voice, not an echo.", category: "Individuality" },
  { quote: "The day is what you make it, so why not make it great?", category: "Morning" },
  { quote: "You deserve good things.", category: "Affirmation" },
  { quote: "Your vibe attracts your tribe.", category: "Vibes" },

  { quote: "One kind word can change someone’s entire day.", category: "Kindness" },
  { quote: "Progress, not perfection.", category: "Mindset" },
  { quote: "Don’t wish for it, work for it.", category: "Motivation" },
  { quote: "You glow differently when you’re actually happy.", category: "Happiness" },
  { quote: "You are enough, just as you are.", category: "Affirmation" },
  { quote: "Radiate positivity.", category: "Positivity" },
  { quote: "Enjoy the little things.", category: "Gratitude" },
  { quote: "Be the reason someone smiles today.", category: "Kindness" },
  { quote: "Your only limit is you.", category: "Motivation" },
  { quote: "Take the risk or lose the chance.", category: "Courage" },

  { quote: "Love is composed of a single soul inhabiting two bodies.", category: "Love" },
  { quote: "Gratitude turns what we have into enough.", category: "Gratitude" },
  { quote: "Success is loving life and daring to live it.", category: "Success" },
  { quote: "The future depends on what you do today.", category: "Motivation" },
  { quote: "Be fearless in the pursuit of what sets your soul on fire.", category: "Passion" },
  { quote: "Live more, worry less.", category: "Happiness" },
  { quote: "Do small things with great love.", category: "Kindness" },
  { quote: "Your life does not get better by chance, it gets better by change.", category: "Change" },
  { quote: "You become what you believe.", category: "Mindset" },
  { quote: "Everything you can imagine is real.", category: "Creativity" },

  { quote: "Start where you are. Use what you have. Do what you can.", category: "Motivation" },
  { quote: "Joy is not in things; it is in us.", category: "Happiness" },
  { quote: "The best view comes after the hardest climb.", category: "Resilience" },
  { quote: "Keep your face to the sunshine and you cannot see a shadow.", category: "Positivity" },
  { quote: "The only way to do great work is to love what you do.", category: "Passion" },
  { quote: "Love cures people — both the ones who give it and the ones who receive it.", category: "Love" },
  { quote: "Magic is believing in yourself.", category: "Belief" },
  { quote: "You don’t find the happy life. You make it.", category: "Happiness" },
  { quote: "Smile more. Worry less.", category: "Morning" },
  { quote: "Collect moments, not things.", category: "Gratitude" },

  { quote: "You’re doing better than you think.", category: "Affirmation" },
  { quote: "Push yourself, because no one else is going to do it for you.", category: "Motivation" },
  { quote: "You are your only limit.", category: "Mindset" },
  { quote: "Keep going. Everything you need will come to you.", category: "Inspiration" },
  { quote: "Choose joy.", category: "Happiness" },
  { quote: "Do it with passion or not at all.", category: "Passion" },
  { quote: "The sky is not the limit. Your mind is.", category: "Dream" },
  { quote: "Wake up and be awesome.", category: "Morning" },
  { quote: "Don't wait. The time will never be just right.", category: "Motivation" },
  { quote: "Kindness is like snow. It beautifies everything it covers.", category: "Kindness" },

  { quote: "Your potential is endless.", category: "Affirmation" },
  { quote: "Live today like it's your last.", category: "Life" },
  { quote: "Be someone’s sunshine today.", category: "Kindness" },
  { quote: "The comeback is always stronger than the setback.", category: "Resilience" },
  { quote: "You make life more beautiful.", category: "Love" },
  { quote: "Be a light in the darkness.", category: "Inspiration" },
  { quote: "Wake up with purpose. Go to sleep with satisfaction.", category: "Morning" },
  { quote: "Everything is figureoutable.", category: "Mindset" },
  { quote: "Trust the timing of your life.", category: "Wisdom" },
  { quote: "Chase your dreams, not people.", category: "Dream" },

  { quote: "Just one small positive thought in the morning can change your whole day.", category: "Morning" },
  { quote: "Peace begins with a smile.", category: "Kindness" },
  { quote: "When you can't find the sunshine, be the sunshine.", category: "Positivity" },
  { quote: "Love is not what you say. Love is what you do.", category: "Love" },
  { quote: "Be patient. Good things take time.", category: "Patience" },
  { quote: "Celebrate every tiny victory.", category: "Growth" },
  { quote: "Make someone smile every day, but never forget you're someone too.", category: "Kindness" },
  { quote: "Don’t stop until you’re proud.", category: "Motivation" },
  { quote: "Stay close to people who feel like sunshine.", category: "Love" },
  { quote: "Live life in full bloom.", category: "Happiness" },
  { quote: "Love is not about how many days, months, or years you've been together. It’s about how much you love each other every day.", category: "Love" },
  { quote: "In your smile, I see something more beautiful than the stars.", category: "Love" },
  { quote: "I have found the one whom my soul loves.", category: "Love" },
  { quote: "When I follow my heart, it leads me to you.", category: "Love" },
  { quote: "The best thing to hold onto in life is each other.", category: "Love" },
  { quote: "I look at you and see the rest of my life in front of my eyes.", category: "Love" },
  { quote: "Every love story is beautiful, but ours is my favorite.", category: "Love" },
  { quote: "Love is when the other person's happiness is more important than your own.", category: "Love" },
  { quote: "You’re the first and last thing on my mind every day.", category: "Love" },
  { quote: "I never want to stop making memories with you.", category: "Love" },
  { quote: "I didn’t choose you. My heart did.", category: "Love" },
  { quote: "I love you not only for what you are, but for what I am when I’m with you.", category: "Love" },
  { quote: "I saw that you were perfect, and so I loved you.", category: "Love" },
  { quote: "You are the love that came without warning.", category: "Love" },
  { quote: "You make my heart smile.", category: "Love" },
  { quote: "With you, every moment is a fresh start.", category: "Love" },
  { quote: "You are my favorite notification.", category: "Love" },
  { quote: "Love is not something you find. Love is something that finds you.", category: "Love" },
  { quote: "I fell in love with your soul before I could touch your skin.", category: "Love" },
  { quote: "Even after all this time, you still make my heart skip a beat.", category: "Love" },
  { quote: "You’re the missing piece I didn’t know I needed.", category: "Love" },
  { quote: "You complete me.", category: "Love" },
  { quote: "The heart has its reasons which reason knows not of.", category: "Love" },
  { quote: "Home is wherever I’m with you.", category: "Love" },
  { quote: "My love for you is a journey, starting at forever and ending at never.", category: "Love" },
  { quote: "The best part of me will always be you.", category: "Love" },
  { quote: "You’re my greatest adventure.", category: "Love" },
  { quote: "I love you more than yesterday, but not as much as tomorrow.", category: "Love" },
  { quote: "Every time I see you, I fall in love all over again.", category: "Love" },
  { quote: "I didn't plan it, but you're the best thing that ever happened to me.", category: "Love" },
  { quote: "I love you in ways you’ve never been loved, for reasons you’ve never been told.", category: "Love" },
  { quote: "You’re not my number one, you’re my only one.", category: "Love" },
  { quote: "When we’re together, the world feels right.", category: "Love" },
  { quote: "Your love is all I need to feel complete.", category: "Love" },
  { quote: "I just want to make you happy. Because you’re the reason I’m so happy.", category: "Love" },
  { quote: "You and I are more than just love. We’re soulmates.", category: "Love" },
  { quote: "I never want to stop loving you.", category: "Love" },
  { quote: "You’re the person I’d choose in every lifetime.", category: "Love" },
  { quote: "I love the way you look at me, like I’m the only person in the world.", category: "Love" },
  { quote: "I want to be your favorite hello and hardest goodbye.", category: "Love" },
  { quote: "I’d rather spend one lifetime with you than face all the ages of this world alone.", category: "Love" },
  { quote: "You make me feel like I can do anything just by being next to me.", category: "Love" },
  { quote: "When you hold my hand, you hold my heart.", category: "Love" },
  { quote: "I love the way your eyes light up when you laugh.", category: "Love" },
  { quote: "You’re the reason my heart beats with joy.", category: "Love" },
  { quote: "Being in love with you makes every morning worth waking up for.", category: "Love" },
  { quote: "Love is when you sit beside someone doing nothing yet feel perfectly happy.", category: "Love" },

  // Remaining 50
  { quote: "With you, I’ve found my forever.", category: "Love" },
  { quote: "You're my today, tomorrow, and always.", category: "Love" },
  { quote: "You're the one I want to annoy for the rest of my life.", category: "Love" },
  { quote: "My heart is and always will be yours.", category: "Love" },
  { quote: "Your love is my guiding light.", category: "Love" },
  { quote: "You had me at hello.", category: "Love" },
  { quote: "I love you for all that you are.", category: "Love" },
  { quote: "You’re my moon and all my stars.", category: "Love" },
  { quote: "You make my soul sing.", category: "Love" },
  { quote: "Forever is not long enough with you.", category: "Love" },
  { quote: "Your love feels like magic.", category: "Love" },
  { quote: "You're the answer to every prayer I’ve ever said.", category: "Love" },
  { quote: "Love is composed of trust, laughter, and coffee shared at 2 a.m.", category: "Love" },
  { quote: "You're the poem I never knew how to write.", category: "Love" },
  { quote: "You make everything feel possible.", category: "Love" },
  { quote: "You’re my once in a lifetime.", category: "Love" },
  { quote: "Falling in love with you was the easiest thing I've ever done.", category: "Love" },
  { quote: "You make my world brighter.", category: "Love" },
  { quote: "I want to grow old with you.", category: "Love" },
  { quote: "You’re my dream come true.", category: "Love" },
  { quote: "I love being yours.", category: "Love" },
  { quote: "You are my heart’s home.", category: "Love" },
  { quote: "You're not my better half — you're my perfect whole.", category: "Love" },
  { quote: "You’re everything I never knew I needed.", category: "Love" },
  { quote: "There’s no one else I’d rather be with.", category: "Love" },
  { quote: "You and I were written in the stars.", category: "Love" },
  { quote: "Your love makes me a better person.", category: "Love" },
  { quote: "You’re the reason I believe in love.", category: "Love" },
  { quote: "You are the melody to my lyrics.", category: "Love" },
  { quote: "You’re the one who makes my heart race.", category: "Love" },
  { quote: "You’re the calm to my storm.", category: "Love" },
  { quote: "I love you endlessly.", category: "Love" },
  { quote: "You’re the spark in my soul.", category: "Love" },
  { quote: "You’re the one I want to wake up next to every day.", category: "Love" },
  { quote: "With you, forever still isn't long enough.", category: "Love" },
  { quote: "I’d choose you again and again.", category: "Love" },
  { quote: "You’re the best thing I’ve ever waited for.", category: "Love" },
  { quote: "You complete the puzzle of my heart.", category: "Love" },
  { quote: "You make love feel effortless.", category: "Love" },
  { quote: "You're the reason I smile for no reason.", category: "Love" },
  { quote: "You're the light I never want to lose.", category: "Love" },
  { quote: "You are written deep in my heart.", category: "Love" },
  { quote: "You’re my kind of perfect.", category: "Love" },
  { quote: "I’ll love you even when we’re old and wrinkly.", category: "Love" },
  { quote: "You’re my person. Always.", category: "Love" },
  { quote: "You’re my beginning, middle, and end.", category: "Love" },
  { quote: "The moment I met you, my life changed forever.", category: "Love" },
  { quote: "You make everything better.", category: "Love" },
  { quote: "My heart found its home in you.", category: "Love" },
  { quote: "You’re the peace in my chaos.", category: "Love" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Motivation" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", category: "Motivation" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Motivation" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "Motivation" },
  { quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs", category: "Motivation" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "Motivation" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis", category: "Motivation" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "Motivation" },
  { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser", category: "Motivation" },
  { quote: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett", category: "Motivation" },
  { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", category: "Motivation" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair", category: "Motivation" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar", category: "Motivation" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe", category: "Motivation" },
  { quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen R. Covey", category: "Motivation" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James", category: "Motivation" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan", category: "Motivation" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", category: "Motivation" },
  { quote: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot", category: "Motivation" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown", category: "Motivation" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Motivation" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", category: "Motivation" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Motivation" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "Motivation" },
  { quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs", category: "Motivation" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "Motivation" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis", category: "Motivation" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "Motivation" },
  { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser", category: "Motivation" },
  { quote: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett", category: "Motivation" },
  { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", category: "Motivation" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair", category: "Motivation" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar", category: "Motivation" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe", category: "Motivation" },
  { quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen R. Covey", category: "Motivation" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James", category: "Motivation" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan", category: "Motivation" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", category: "Motivation" },
  { quote: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot", category: "Motivation" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown", category: "Motivation" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Motivation" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", category: "Motivation" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Motivation" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "Motivation" },
  { quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs", category: "Motivation" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "Motivation" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis", category: "Motivation" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "Motivation" },
  { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser", category: "Motivation" },
  { quote: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett", category: "Motivation" },
  { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", category: "Motivation" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair", category: "Motivation" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar", category: "Motivation" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe", category: "Motivation" },
  { quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen R. Covey", category: "Motivation" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James", category: "Motivation" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan", category: "Motivation" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", category: "Motivation" },
  { quote: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot", category: "Motivation" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown", category: "Motivation" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Motivation" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", category: "Motivation" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Motivation" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "Motivation" },
  { quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs", category: "Motivation" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "Motivation" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis", category: "Motivation" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "Motivation" },
  { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser", category: "Motivation" },
  { quote: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett", category: "Motivation" },
  { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", category: "Motivation" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair", category: "Motivation" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar", category: "Motivation" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe", category: "Motivation" },
  { quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen R. Covey", category: "Motivation" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James", category: "Motivation" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan", category: "Motivation" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", category: "Motivation" },
  { quote: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot", category: "Motivation" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown", category: "Motivation" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Motivation" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", category: "Motivation" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Motivation" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "Motivation" },
  { quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs", category: "Motivation" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "Motivation" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis", category: "Motivation" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "Motivation" },
  { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser", category: "Motivation" },
  { quote: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett", category: "Motivation" },
  { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", category: "Motivation" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair", category: "Motivation" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar", category: "Motivation" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe", category: "Motivation" },
  { quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen R. Covey", category: "Motivation" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James", category: "Motivation" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan", category: "Motivation" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", category: "Motivation" },
   { quote: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot", category: "Motivation" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown", category: "Motivation" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Motivation" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", category: "Motivation" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Motivation" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "Motivation" },
  { quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs", category: "Motivation" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "Motivation" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis", category: "Motivation" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "Motivation" },
  { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser", category: "Motivation" },
  { quote: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett", category: "Motivation" },
  { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", category: "Motivation" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair", category: "Motivation" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar", category: "Motivation" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe", category: "Motivation" },
  { quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen R. Covey", category: "Motivation" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James", category: "Motivation" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan", category: "Motivation" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", category: "Motivation" },
  { quote: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot", category: "Motivation" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown", category: "Motivation" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Motivation" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", category: "Motivation" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Motivation" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "Motivation" },
  { quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs", category: "Motivation" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "Motivation" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis", category: "Motivation" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "Motivation" },
  { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser", category: "Motivation" },
  { quote: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett", category: "Motivation" },
  { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", category: "Motivation" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair", category: "Motivation" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar", category: "Motivation" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe", category: "Motivation" },
  { quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen R. Covey", category: "Motivation" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James", category: "Motivation" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan", category: "Motivation" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", category: "Motivation" },
  { quote: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot", category: "Motivation" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown", category: "Motivation" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Motivation" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", category: "Motivation" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Motivation" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "Motivation" },
  { quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs", category: "Motivation" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "Motivation" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis", category: "Motivation" },
   { quote: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn", category: "Motivation" },
  { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky", category: "Motivation" },
  { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau", category: "Motivation" },
  { quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown", category: "Motivation" },
  { quote: "Great things never come from comfort zones.", author: "Unknown", category: "Motivation" },
  { quote: "Dream it. Wish it. Do it.", author: "Unknown", category: "Motivation" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown", category: "Motivation" },
  { quote: "Sometimes later becomes never. Do it now.", author: "Unknown", category: "Motivation" },
  { quote: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown", category: "Motivation" },
  { quote: "The key to success is to focus on goals, not obstacles.", author: "Unknown", category: "Motivation" },
  { quote: "Work hard in silence. Let success make the noise.", author: "Frank Ocean", category: "Motivation" },
  { quote: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown", category: "Motivation" },
  { quote: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery", category: "Motivation" },
  { quote: "Little things make big days.", author: "Isabel Marant", category: "Motivation" },
  { quote: "It’s going to be hard, but hard does not mean impossible.", author: "Unknown", category: "Motivation" },
  { quote: "Don’t wait for opportunity. Create it.", author: "George Bernard Shaw", category: "Motivation" },
  { quote: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.", author: "Unknown", category: "Motivation" },
  { quote: "The pain you feel today will be the strength you feel tomorrow.", author: "Unknown", category: "Motivation" },
  { quote: "If you’re going through hell, keep going.", author: "Winston Churchill", category: "Motivation" },
  { quote: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke", category: "Motivation" },
  { quote: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry", category: "Motivation" },
  { quote: "Don’t limit your challenges. Challenge your limits.", author: "Jerry Dunn", category: "Motivation" },
  { quote: "If you want to achieve greatness stop asking for permission.", author: "Anonymous", category: "Motivation" },
  { quote: "The distance between insanity and genius is measured only by success.", author: "Bruce Feirstein", category: "Motivation" },
  { quote: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt", category: "Motivation" },
  { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "Motivation" },
  { quote: "You learn more from failure than from success. Don’t let it stop you.", author: "Colin Powell", category: "Motivation" },
  { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi", category: "Motivation" },
  { quote: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs", category: "Motivation" },
  { quote: "People who are crazy enough to think they can change the world, are the ones who do.", author: "Rob Siltanen", category: "Motivation" },
  { quote: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino", category: "Motivation" },
  { quote: "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk.", author: "Mohnish Pabrai", category: "Motivation" },
  { quote: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou", category: "Motivation" },
  { quote: "Knowing is not enough; we must apply. Wishing is not enough; we must do.", author: "Johann Wolfgang Von Goethe", category: "Motivation" },
  { quote: "Imagine your life is perfect in every respect; what would it look like?", author: "Brian Tracy", category: "Motivation" },
  { quote: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link", category: "Motivation" },
  { quote: "Whether you think you can or think you can’t, you’re right.", author: "Henry Ford", category: "Motivation" },
  { quote: "Security is mostly a superstition. Life is either a daring adventure or nothing.", author: "Helen Keller", category: "Motivation" },
  { quote: "The man who has confidence in himself gains the confidence of others.", author: "Hasidic Proverb", category: "Motivation" },
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt", category: "Motivation" },
  { quote: "Creativity is intelligence having fun.", author: "Albert Einstein", category: "Motivation" },
  { quote: "What you lack in talent can be made up with desire, hustle and giving 110% all the time.", author: "Don Zimmer", category: "Motivation" },
  { quote: "Do what you can, where you are, with what you have.", author: "Teddy Roosevelt", category: "Motivation" },
  { quote: "Develop an ‘attitude of gratitude’. Say thank you to everyone you meet.", author: "Brian Tracy", category: "Motivation" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "Les Brown", category: "Motivation" },
  { quote: "To see what is right and not do it is a lack of courage.", author: "Confucius", category: "Motivation" },
  { quote: "Reading is to the mind, as exercise is to the body.", author: "Brian Tracy", category: "Motivation" },
  { quote: "Fake it until you make it! Act as if you had all the confidence you require.", author: "Brian Tracy", category: "Motivation" },
  { quote: "The future depends on what you do today.", author: "Mahatma Gandhi", category: "Motivation" },
  { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "Motivation" },
   { quote: "Believe you can and you're halfway there.", category: "Motivation" },
  { quote: "You miss 100% of the shots you don't take.", category: "Motivation" },
  { quote: "Start where you are. Use what you have. Do what you can.", category: "Motivation" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", category: "Motivation" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", category: "Motivation" },
  { quote: "The only way to do great work is to love what you do.", category: "Motivation" },
  { quote: "Don't watch the clock; do what it does. Keep going.", category: "Motivation" },
  { quote: "Success is walking from failure to failure with no loss of enthusiasm.", category: "Motivation" },
  { quote: "Success doesn’t come to you. You go to it.", category: "Motivation" },
  { quote: "A little progress each day adds up to big results.", category: "Motivation" },
  { quote: "The best preparation for tomorrow is doing your best today.", category: "Motivation" },
  { quote: "Happiness is not by chance, but by choice.", category: "Happiness" },
  { quote: "Smile, it is the key that fits the lock of everybody's heart.", category: "Happiness" },
  { quote: "The most important thing is to enjoy your life — to be happy — it's all that matters.", category: "Happiness" },
  { quote: "Happiness depends upon ourselves.", category: "Happiness" },
  { quote: "Happiness is when what you think, what you say, and what you do are in harmony.", category: "Happiness" },
  { quote: "Each morning we are born again. What we do today is what matters most.", category: "Morning" },
  { quote: "Every morning is a new arrival.", category: "Morning" },
  { quote: "Wake up with determination. Go to bed with satisfaction.", category: "Morning" },
  { quote: "Today is a new beginning. Make it count!", category: "Morning" },
  { quote: "The sun is a daily reminder that we too can rise again from the darkness.", category: "Morning" },
  { quote: "Love is not about how much you say ‘I love you’, but how much you prove that it's true.", category: "Love" },
  { quote: "To love and be loved is to feel the sun from both sides.", category: "Love" },
  { quote: "Love doesn’t make the world go round. Love is what makes the ride worthwhile.", category: "Love" },
  { quote: "Where there is love there is life.", category: "Love" },
  { quote: "In all the world, there is no heart for me like yours.", category: "Love" },
  { quote: "Do something today that your future self will thank you for.", category: "Motivation" },
  { quote: "Discipline is the bridge between goals and accomplishment.", category: "Motivation" },
  { quote: "Push yourself, because no one else is going to do it for you.", category: "Motivation" },
  { quote: "Your limitation—it’s only your imagination.", category: "Motivation" },
  { quote: "Dream it. Wish it. Do it.", category: "Motivation" },
  { quote: "Sometimes later becomes never. Do it now.", category: "Motivation" },
  { quote: "Great things never come from comfort zones.", category: "Motivation" },
  { quote: "Dream bigger. Do bigger.", category: "Motivation" },
  { quote: "Don’t stop when you’re tired. Stop when you’re done.", category: "Motivation" },
  { quote: "Wake up with determination. Sleep with satisfaction.", category: "Morning" },
  { quote: "The way to get started is to quit talking and begin doing.", category: "Motivation" },
  { quote: "Happiness is not something ready-made. It comes from your own actions.", category: "Happiness" },
  { quote: "Stay close to anything that makes you glad you are alive.", category: "Happiness" },
  { quote: "There is only one happiness in this life, to love and be loved.", category: "Love" },
  { quote: "You are my today and all of my tomorrows.", category: "Love" },
  { quote: "All you need is love. But a little chocolate now and then doesn't hurt.", category: "Love" },
  { quote: "Every day may not be good, but there is something good in every day.", category: "Happiness" },
  { quote: "The happiness of your life depends on the quality of your thoughts.", category: "Happiness" },
  { quote: "Think of all the beauty still left around you and be happy.", category: "Happiness" },
  { quote: "Let your smile change the world but don’t let the world change your smile.", category: "Happiness" },
  { quote: "Even the darkest night will end and the sun will rise.", category: "Morning" },
  { quote: "You are never too old to set another goal or to dream a new dream.", category: "Motivation" },
  { quote: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.", category: "Love" },
  { quote: "Rise up, start fresh, see the bright opportunity in each new day.", category: "Morning" },
  { quote: "Love is composed of a single soul inhabiting two bodies.", category: "Love" },
  { quote: "The best thing to hold onto in life is each other.", category: "Love" },
  { quote: "To love and be loved is to feel the sun from both sides.", category: "Love" },
  { quote: "In all the world, there is no heart for me like yours.", category: "Love" },
  { quote: "Love is not only something you feel, it is something you do.", category: "Love" },
  { quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", category: "Love" },
  { quote: "Love doesn’t make the world go round. Love is what makes the ride worthwhile.", category: "Love" },
  { quote: "Where there is love there is life.", category: "Love" },
  { quote: "I love you not only for what you are, but for what I am when I am with you.", category: "Love" },
  { quote: "Every love story is beautiful, but ours is my favorite.", category: "Love" },
  { quote: "You are my today and all of my tomorrows.", category: "Love" },
  { quote: "There is only one happiness in this life, to love and be loved.", category: "Love" },
  { quote: "The greatest thing you’ll ever learn is just to love and be loved in return.", category: "Love" },
  { quote: "If I know what love is, it is because of you.", category: "Love" },
  { quote: "Love recognizes no barriers.", category: "Love" },
  { quote: "A simple ‘I love you’ means more than money.", category: "Love" },
  { quote: "I have found the one whom my soul loves.", category: "Love" },
  { quote: "Love is the bridge between two hearts.", category: "Love" },
  { quote: "Your love is all I need to feel complete.", category: "Love" },
  { quote: "True love stories never have endings.", category: "Love" },
  { quote: "I am much more me when I am with you.", category: "Love" },
  { quote: "You are my favorite notification.", category: "Love" },
  { quote: "I still fall for you every day.", category: "Love" },
  { quote: "Loving you is my favorite adventure.", category: "Love" },
  { quote: "I choose you. And I’ll choose you over and over and over.", category: "Love" },
  { quote: "I saw that you were perfect, and so I loved you.", category: "Love" },
  { quote: "Love is a friendship set to music.", category: "Love" },
  { quote: "The heart wants what it wants.", category: "Love" },
  { quote: "Love is when you meet someone who tells you something new about yourself.", category: "Love" },
  { quote: "I love you more than I have ever found a way to say to you.", category: "Love" },
  { quote: "You’re nothing short of my everything.", category: "Love" },
  { quote: "I fell in love the way you fall asleep: slowly, and then all at once.", category: "Love" },
  { quote: "Love is like the wind, you can’t see it but you can feel it.", category: "Love" },
  { quote: "You are the source of my joy, the center of my world and the whole of my heart.", category: "Love" },
  { quote: "Your voice is my favorite sound.", category: "Love" },
  { quote: "I look at you and see the rest of my life in front of my eyes.", category: "Love" },
  { quote: "You stole my heart, but I’ll let you keep it.", category: "Love" },
  { quote: "I wish I could turn back the clock. I’d find you sooner and love you longer.", category: "Love" },
  { quote: "When I follow my heart, it leads me to you.", category: "Love" },
  { quote: "You're my favorite hello and my hardest goodbye.", category: "Love" },
  { quote: "Love is not about possession. Love is about appreciation.", category: "Love" },
  { quote: "It was always you.", category: "Love" },
  { quote: "You make my heart smile.", category: "Love" },
  { quote: "You’re my forever and always.", category: "Love" },
  { quote: "I never want to stop making memories with you.", category: "Love" },
  { quote: "You’re the one I’ve been waiting for.", category: "Love" },
  { quote: "Being in love with you makes every morning worth getting up for.", category: "Love" },
  { quote: "Love is the answer, and you know that for sure.", category: "Love" },
  { quote: "My love for you is a journey; starting at forever and ending at never.", category: "Love" },
  { quote: "You complete me in ways I never knew possible.", category: "Love" },
  { quote: "You’re my sunshine on a cloudy day.", category: "Love" },
  { quote: "The best love is the kind that awakens the soul.", category: "Love" },
  { quote: "Every time I see you, I fall in love all over again.", category: "Love" },
  { quote: "Forever is a long time, but I wouldn’t mind spending it by your side.", category: "Love" },
  { quote: "You are my heart, my life, my one and only thought.", category: "Love" },
  { quote: "The best proof of love is trust.", category: "Love" },
  { quote: "A successful marriage requires falling in love many times, always with the same person.", category: "Love" },
  { quote: "Love is the only force capable of transforming an enemy into a friend.", category: "Love" },
  { quote: "Love is the master key that opens the gates of happiness.", category: "Love" },
  { quote: "You're my favorite distraction.", category: "Love" },
  { quote: "The greatest happiness of life is the conviction that we are loved.", category: "Love" },
  { quote: "Love cures people—both the ones who give it and the ones who receive it.", category: "Love" },
  { quote: "To love is nothing. To be loved is something. But to love and be loved, that’s everything.", category: "Love" },
  { quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", category: "Love" },
  { quote: "Love is not finding someone to live with; it’s finding someone you can’t live without.", category: "Love" },
  { quote: "I loved you yesterday, I love you still, I always have, I always will.", category: "Love" },
  { quote: "You’re the reason I look down at my phone and smile. Then walk into a pole.", category: "Love" },
  { quote: "I may not be your first date, kiss, or love, but I want to be your last everything.", category: "Love" },
  { quote: "We loved with a love that was more than love.", category: "Love" },
  { quote: "True love is rare, and it's the only thing that gives life real meaning.", category: "Love" },
  { quote: "You’re the one that I want, the one that I need.", category: "Love" },
  { quote: "I’m never not thinking of you.", category: "Love" },
  { quote: "Just when I think that it is impossible to love you any more, you prove me wrong.", category: "Love" },
  { quote: "The way you look at me makes me feel like I’m the only one in the world.", category: "Love" },
  { quote: "I love being yours.", category: "Love" },
  { quote: "Home is wherever I’m with you.", category: "Love" },
  { quote: "Loving you is like breathing—how can I stop?", category: "Love" },
  { quote: "You’re the best thing I never planned.", category: "Love" },
  { quote: "You’ve made my heart brighter than the brightest star.", category: "Love" },
  { quote: "I fall for your smile every single day.", category: "Love" },
  { quote: "Every moment without you feels like eternity.", category: "Love" },
  { quote: "I crave your love in every heartbeat.", category: "Love" },
  { quote: "I want all of my lasts to be with you.", category: "Love" },
  { quote: "I found love when I found you.", category: "Love" },
  { quote: "Together is my favorite place to be.", category: "Love" },
  { quote: "Your love is my favorite melody.", category: "Love" },
  { quote: "You light up my world like nobody else.", category: "Love" },
  { quote: "You’re the reason I believe in love.", category: "Love" },
  { quote: "If I did anything right in my life, it was when I gave my heart to you.", category: "Love" },
  { quote: "Thank you for reminding me what butterflies feel like.", category: "Love" },
  { quote: "I could start fires with what I feel for you.", category: "Love" },
  { quote: "You and I—it's as though we were taught to kiss in heaven.", category: "Love" },
  { quote: "I never want to stop holding your hand.", category: "Love" },
  { quote: "You’re my favorite person to do everything and nothing with.", category: "Love" },
  { quote: "When I’m with you, hours feel like seconds.", category: "Love" },
  { quote: "Your love makes my soul crawl out from its hiding place.", category: "Love" },
  { quote: "You are my heart’s epic adventure.", category: "Love" },
  { quote: "Even forever doesn’t seem long enough with you.", category: "Love" },
  { quote: "Your love is the magic in my every day.", category: "Love" },
  { quote: "Push yourself, because no one else is going to do it for you.", category: "Motivation" },
  { quote: "Don’t stop when you’re tired. Stop when you’re done.", category: "Motivation" },
  { quote: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.", category: "Motivation" },
  { quote: "The harder you work for something, the greater you’ll feel when you achieve it.", category: "Motivation" },
  { quote: "Great things never come from comfort zones.", category: "Motivation" },
  { quote: "Dream it. Wish it. Do it.", category: "Motivation" },
  { quote: "Sometimes later becomes never. Do it now.", category: "Motivation" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", category: "Motivation" },
  { quote: "Success is what comes after you stop making excuses.", category: "Motivation" },
  { quote: "Work hard in silence, let your success be your noise.", category: "Motivation" },
  { quote: "Your limitation—it’s only your imagination.", category: "Motivation" },
  { quote: "Wake up with determination. Go to bed with satisfaction.", category: "Motivation" },
  { quote: "Do something today that your future self will thank you for.", category: "Motivation" },
  { quote: "Push harder than yesterday if you want a different tomorrow.", category: "Motivation" },
  { quote: "The key to success is to focus on goals, not obstacles.", category: "Motivation" },
  { quote: "Don’t limit your challenges. Challenge your limits.", category: "Motivation" },
  { quote: "It’s going to be hard, but hard does not mean impossible.", category: "Motivation" },
  { quote: "Believe you can and you're halfway there.", category: "Motivation" },
  { quote: "Success usually comes to those who are too busy to be looking for it.", category: "Motivation" },
  { quote: "Small progress is still progress.", category: "Motivation" },
  { quote: "Doubt kills more dreams than failure ever will.", category: "Motivation" },
  { quote: "Act as if what you do makes a difference. It does.", category: "Motivation" },
  { quote: "Keep going. Everything you need will come to you at the perfect time.", category: "Motivation" },
  { quote: "Failure is the opportunity to begin again more intelligently.", category: "Motivation" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", category: "Motivation" },
  { quote: "The secret of getting ahead is getting started.", category: "Motivation" },
  { quote: "You are stronger than you think.", category: "Motivation" },
  { quote: "You don’t have to be perfect to be amazing.", category: "Motivation" },
  { quote: "Don’t be afraid to give up the good to go for the great.", category: "Motivation" },
  { quote: "You didn’t come this far to only come this far.", category: "Motivation" },
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
  { quote: "Don’t count the days. Make the days count.", category: "Motivation" },
  { quote: "Difficult roads often lead to beautiful destinations.", category: "Motivation" },
  { quote: "Be stronger than your excuses.", category: "Motivation" },
  { quote: "Success is not for the lazy.", category: "Motivation" },
  { quote: "The comeback is always stronger than the setback.", category: "Motivation" },
  { quote: "Discipline is choosing between what you want now and what you want most.", category: "Motivation" },
  { quote: "The best way to predict the future is to create it.", category: "Motivation" },
  { quote: "The only person you should try to be better than is the person you were yesterday.", category: "Motivation" },
  { quote: "Hard work beats talent when talent doesn’t work hard.", category: "Motivation" },
  { quote: "Success doesn’t come to you. You go to it.", category: "Motivation" },
  { quote: "The future depends on what you do today.", category: "Motivation" },
  { quote: "You are capable of amazing things.", category: "Motivation" },
  { quote: "Work until your idols become your rivals.", category: "Motivation" },
  { quote: "Success is walking from failure to failure with no loss of enthusiasm.", category: "Motivation" },
  { quote: "Big journeys begin with small steps.", category: "Motivation" },
  { quote: "The only way to achieve the impossible is to believe it is possible.", category: "Motivation" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", category: "Motivation" },
  { quote: "If you’re tired, learn to rest, not to quit.", category: "Motivation" },
  { quote: "The pain you feel today will be the strength you feel tomorrow.", category: "Motivation" },
  { quote: "You are never too old to set another goal or to dream a new dream.", category: "Motivation" },
  { quote: "Make each day your masterpiece.", category: "Motivation" },
  { quote: "If it doesn’t challenge you, it won’t change you.", category: "Motivation" },
  { quote: "You don’t find willpower, you create it.", category: "Motivation" },
  { quote: "You were born to be real, not to be perfect.", category: "Motivation" },
  { quote: "Don’t wish for it. Work for it.", category: "Motivation" },
  { quote: "You don’t have to see the whole staircase, just take the first step.", category: "Motivation" },
  { quote: "Don’t wait for opportunity. Create it.", category: "Motivation" },
  { quote: "Energy and persistence conquer all things.", category: "Motivation" },
  { quote: "Your passion is waiting for your courage to catch up.", category: "Motivation" },
  { quote: "Doubt is a killer. You just have to know who you are and what you stand for.", category: "Motivation" },
  { quote: "If you want to fly, you have to give up the things that weigh you down.", category: "Motivation" },
  { quote: "The distance between dreams and reality is called action.", category: "Motivation" },
  { quote: "Don’t let yesterday take up too much of today.", category: "Motivation" },
  { quote: "A goal without a plan is just a wish.", category: "Motivation" },
  { quote: "Success is the sum of small efforts repeated day in and day out.", category: "Motivation" },
  { quote: "If you can dream it, you can do it.", category: "Motivation" },
  { quote: "Never give up on a dream just because of the time it will take to accomplish it.", category: "Motivation" },
  { quote: "Difficult doesn’t mean impossible.", category: "Motivation" },
  { quote: "Winners are not afraid of losing. But losers are.", category: "Motivation" },
  { quote: "Either you run the day or the day runs you.", category: "Motivation" },
  { quote: "If people are doubting how far you can go, go so far that you can’t hear them anymore.", category: "Motivation" },
  { quote: "Don't be busy, be productive.", category: "Motivation" },
  { quote: "Learn as if you will live forever, live like you will die tomorrow.", category: "Motivation" },
  { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", category: "Motivation" },
  { quote: "Stay away from those people who try to disparage your ambitions.", category: "Motivation" },
  { quote: "If you want to achieve greatness stop asking for permission.", category: "Motivation" },
  { quote: "Take the risk or lose the chance.", category: "Motivation" },
  { quote: "Do what you can, with what you have, where you are.", category: "Motivation" },
  { quote: "The mind is everything. What you think you become.", category: "Motivation" },
  { quote: "Opportunities don't happen. You create them.", category: "Motivation" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", category: "Motivation" },
  { quote: "You can't cross the sea merely by standing and staring at the water.", category: "Motivation" },
  { quote: "The man who moves a mountain begins by carrying away small stones.", category: "Motivation" },
  { quote: "Everything you can imagine is real.", category: "Motivation" },
  { quote: "You are what you do, not what you say you’ll do.", category: "Motivation" },
  { quote: "Failure is success in progress.", category: "Motivation" },
  { quote: "Success is liking yourself, liking what you do, and liking how you do it.", category: "Motivation" },
  { quote: "A winner is a dreamer who never gives up.", category: "Motivation" },
  { quote: "It’s not whether you get knocked down, it’s whether you get up.", category: "Motivation" },
  { quote: "Go the extra mile. It’s never crowded.", category: "Motivation" },
  { quote: "Don’t count your failures, count your lessons.", category: "Motivation" },
  { quote: "Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t.", category: "Motivation" },
  { quote: "The way to get started is to quit talking and begin doing.", category: "Motivation" },
  { quote: "You didn’t come this far to only come this far.", category: "Motivation" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Motivation" },
  { quote: "You’re capable of more than you know.", category: "Motivation" },
  { quote: "Discipline is the key to unlocking potential.", category: "Motivation" },
  { quote: "Rise up, start fresh, see the bright opportunity in each new day.", category: "Motivation" },
  { quote: "Every morning is a fresh start. Wake up with a grateful heart.", category: "Morning" },
  { quote: "Rise up, start fresh, see the bright opportunity in each new day.", category: "Morning" },
  { quote: "Smile in the mirror. Do that every morning and you’ll start to see a big difference in your life.", category: "Morning" },
  { quote: "Morning comes whether you set the alarm or not.", category: "Morning" },
  { quote: "Let your smile change the world, but don’t let the world change your smile.", category: "Morning" },
  { quote: "Each morning we are born again. What we do today is what matters most.", category: "Morning" },
  { quote: "A morning coffee is my favorite way of starting the day.", category: "Morning" },
  { quote: "Every sunrise is an invitation to brighten someone's day.", category: "Morning" },
  { quote: "The secret to a good morning is to watch the sunrise with an open heart.", category: "Morning" },
  { quote: "Good morning! Make today ridiculously amazing.", category: "Morning" },
  { quote: "When you arise in the morning, think of what a precious privilege it is to be alive.", category: "Morning" },
  { quote: "The morning was full of sunlight and hope.", category: "Morning" },
  { quote: "Set a goal that makes you want to jump out of bed in the morning.", category: "Morning" },
  { quote: "Each morning brings new potential. Take advantage of it.", category: "Morning" },
  { quote: "Let today be the start of something new.", category: "Morning" },
  { quote: "Start your day with a smile and positive thoughts.", category: "Morning" },
  { quote: "A beautiful life begins with a beautiful mindset.", category: "Morning" },
  { quote: "Wake up every morning with the thought that something wonderful is about to happen.", category: "Morning" },
  { quote: "The sun is a daily reminder that we too can rise again from the darkness.", category: "Morning" },
  { quote: "Success is waking up every morning and being excited for the day.", category: "Morning" },
  { quote: "Your future is created by what you do today, not tomorrow.", category: "Morning" },
  { quote: "Start your day with intention, purpose, and gratitude.", category: "Morning" },
  { quote: "Every morning you have two choices: continue to sleep with dreams or wake up and chase them.", category: "Morning" },
  { quote: "Each morning brings a new story. Make yours count today.", category: "Morning" },
  { quote: "It’s a brand new day. Be awesome!", category: "Morning" },
  { quote: "Mornings are a new beginning, a new blessing, a new hope.", category: "Morning" },
  { quote: "Wake up and be thankful for another day.", category: "Morning" },
  { quote: "Good morning. The best is yet to come.", category: "Morning" },
  { quote: "The sun is up, the sky is blue, it’s beautiful, and so are you.", category: "Morning" },
  { quote: "Today is a good day to have a good day.", category: "Morning" },
  { quote: "Happiness is waking up, looking at the clock and finding you have two more hours to sleep.", category: "Morning" },
  { quote: "Open your eyes and shine your light.", category: "Morning" },
  { quote: "Opportunities are like sunrises. If you wait too long, you miss them.", category: "Morning" },
  { quote: "Start the day with love, light, and laughter.", category: "Morning" },
  { quote: "Let the first thing you do in the morning be a smile.", category: "Morning" },
  { quote: "A morning routine sets the tone for a successful day.", category: "Morning" },
  { quote: "Life is what we make it, always has been, always will be.", category: "Morning" },
  { quote: "Focus on the good today. It’s all around you.", category: "Morning" },
  { quote: "Rise and shine! It’s a new day full of possibilities.", category: "Morning" },
  { quote: "Make your bed and your soul will thank you.", category: "Morning" },
  { quote: "Start your day with a grateful heart and everything else falls into place.", category: "Morning" },
  { quote: "It’s not just a new day. It’s a new chance to be your best self.", category: "Morning" },
  { quote: "Let your morning be light and your coffee strong.", category: "Morning" },
  { quote: "Open your heart to the world today.", category: "Morning" },
  { quote: "You got this. Own the morning, own the day.", category: "Morning" },
  { quote: "Be the energy you want to attract today.", category: "Morning" },
  { quote: "Start the morning with joy and let it follow you all day long.", category: "Morning" },
  { quote: "Some people dream of success while others wake up and work for it.", category: "Morning" },
  { quote: "The world is beautiful outside when there is stability inside.", category: "Morning" },
  { quote: "Early to bed and early to rise makes a man healthy, wealthy, and wise.", category: "Morning" },
  { quote: "A positive morning can change your entire day.", category: "Morning" },
  { quote: "Make today better than yesterday.", category: "Morning" },
  { quote: "Each sunrise brings a new hope.", category: "Morning" },
  { quote: "Your morning thoughts define your day.", category: "Morning" },
  { quote: "The best way to start your day is with a grateful heart.", category: "Morning" },
  { quote: "Good morning! Let your dreams guide you through the day.", category: "Morning" },
  { quote: "Open your eyes, take a deep breath, and begin again.", category: "Morning" },
  { quote: "Morning is not just the start of a new day, it's a chance to be better.", category: "Morning" },
  { quote: "Waking up to a brand-new day is the first victory of the day.", category: "Morning" },
  { quote: "A great morning begins with a positive mindset.", category: "Morning" },
  { quote: "Say hello to happiness this morning!", category: "Morning" },
  { quote: "Let your light shine brightly this morning.", category: "Morning" },
  { quote: "This is your daily reminder that you are capable and worthy.", category: "Morning" },
  { quote: "Peace begins with a smile—start your day peacefully.", category: "Morning" },
  { quote: "Let today be filled with kindness, compassion, and joy.", category: "Morning" },
  { quote: "Each day is a blessing. Count yours this morning.", category: "Morning" },
  { quote: "A peaceful morning leads to a peaceful life.", category: "Morning" },
  { quote: "The greatest power is often simple consistency, starting each morning right.", category: "Morning" },
  { quote: "Fuel your mind with positive thoughts this morning.", category: "Morning" },
  { quote: "Let your first thoughts be peaceful and powerful.", category: "Morning" },
  { quote: "Good morning! You are alive, you are breathing, you are blessed.", category: "Morning" },
  { quote: "Be grateful for every second of every day that you get to spend with those you love.", category: "Morning" },
  { quote: "May your coffee be strong and your Monday be short.", category: "Morning" },
  { quote: "Each new morning brings a new opportunity to shine.", category: "Morning" },
  { quote: "Good morning. Be kind, be thoughtful, be genuine, but most of all, be thankful.", category: "Morning" },
  { quote: "Your morning sets the tone for your entire day.", category: "Morning" },
  { quote: "A warm smile is the universal language of kindness. Start with it today.", category: "Morning" },
  { quote: "Create a life that feels good on the inside this morning.", category: "Morning" },
  { quote: "Give the world the best you have, starting today.", category: "Morning" },
  { quote: "Chase your dreams in the daylight.", category: "Morning" },
  { quote: "Let your courage be your morning cup of coffee.", category: "Morning" },
  { quote: "Every morning is a blank canvas. Paint something beautiful.", category: "Morning" },
  { quote: "May your choices reflect your hopes, not your fears—especially this morning.", category: "Morning" },
  { quote: "Mornings are reminders that you can always start again.", category: "Morning" },
  { quote: "Every sunrise gives you a new page to write your story.", category: "Morning" },
  { quote: "Start today with a deep breath and a smile.", category: "Morning" },
  { quote: "Your dreams are valid. Start walking toward them this morning.", category: "Morning" },
  { quote: "The calmness of a morning sets the tone for a fulfilling day.", category: "Morning" },
  { quote: "Nothing is impossible when you start your day with purpose.", category: "Morning" },
  { quote: "The morning is your launchpad—take off!", category: "Morning" },
  { quote: "Enjoy the little things this morning, for one day you’ll look back and realize they were the big things.", category: "Morning" },
  { quote: "May your morning coffee be strong and your to-do list short.", category: "Morning" },
  { quote: "Welcome the new day with a heart full of peace and love.", category: "Morning" },
  { quote: "You woke up today, and that is enough to be thankful for.", category: "Morning" },
  { quote: "This morning, choose joy over fear, action over doubt.", category: "Morning" },
  { quote: "No matter how you feel—get up, dress up, show up.", category: "Morning" },
  { quote: "Be someone's reason to smile today.", category: "Morning" },
  { quote: "The world is waiting for your light—shine bright this morning.", category: "Morning" },
  { quote: "Take time to do what makes your soul happy this morning.", category: "Morning" },
  { quote: "Each day begins with new potential—make today count.", category: "Morning" }
];

let currentCategory = "All";
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// === QUOTE LOGIC ===
function getRandomQuote(category = "All") {
  const pool = category === "All" ? quotes : quotes.filter(q => q.category === category);
  return pool[Math.floor(Math.random() * pool.length)];
}

function displayQuote(category = currentCategory) {
  const quote = getRandomQuote(category);
  if (!quote) return;

  const el = document.getElementById("quoteText");
  el.classList.remove("fade-in");
  void el.offsetWidth; // Restart animation
  el.textContent = `"${quote.quote}"`;
  el.setAttribute("data-category", quote.category);
  el.classList.add("fade-in");

  document.getElementById("quoteCategory").textContent = quote.category;
  currentCategory = category;
}

function nextQuote() {
  displayQuote(currentCategory);
}

function filterQuotes(category) {
  displayQuote(category);
}

// === FAVORITES ===
function toggleFavorite() {
  const text = document.getElementById("quoteText").textContent;
  if (!favorites.includes(text)) {
    favorites.push(text);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Added to favorites!");
  } else {
    alert("Already in favorites.");
  }
}

function showFavorites() {
  const list = document.getElementById("favoriteList");
  list.innerHTML = "";
  if (favorites.length === 0) {
    list.innerHTML = "<p>No favorites yet.</p>";
    return;
  }
  favorites.forEach(q => {
    const div = document.createElement("div");
    div.className = "favorite-card";
    div.textContent = q;
    list.appendChild(div);
  });
}

// === PAGES ===
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");

  if (id === "home") displayQuote(currentCategory);
  if (id === "favorites") showFavorites();
}

// === THEME TOGGLE ===
function toggleTheme() {
  document.body.classList.toggle("light");
}

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
    alert("🎵 Background music ON");
  } else {
    music.pause();
    alert("🔇 Background music OFF");
  }
}


// === READ QUOTE ALOUD ===
function readAloud() {
  const text = document.getElementById("quoteText").textContent;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

// === SHARE QUOTE ===
function shareQuote() {
  const text = document.getElementById("quoteText").textContent;
  if (navigator.share) {
    navigator.share({ title: "Quote of the Day", text });
  } else {
    navigator.clipboard.writeText(text);
    alert("Quote copied to clipboard!");
  }
}

// === SIDEBAR NAV ===
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}

function navigateAndClose(page) {
  toggleSidebar();
  showPage(page);
}

// === INIT APP ===
showPage("home");
// 🌌 Animated Gradient Sky + Glowing Particles + Comets
const canvas = document.getElementById("particles-bg");
const ctx = canvas.getContext("2d");

let particles = [];
let comets = [];
let gradientHue = 200;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class StarParticle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 1.5 + 0.5;
    this.alpha = Math.random();
    this.fade = (Math.random() * 0.02) + 0.005;
    this.hue = Math.random() * 360;
  }

  update() {
    this.alpha += this.fade;
    if (this.alpha <= 0.1 || this.alpha >= 1) this.fade *= -1;
  }

  draw() {
    const glow = `hsla(${this.hue}, 100%, 70%, ${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.shadowColor = glow;
    ctx.shadowBlur = 15;
    ctx.fill();
  }
}

class Comet {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = -100;
    this.y = Math.random() * canvas.height * 0.6;
    this.length = Math.random() * 60 + 80;
    this.speed = Math.random() * 2 + 1.5;
    this.alpha = 1;
    this.fade = 0.01;
    this.hue = Math.random() * 360;
  }

  update() {
    this.x += this.speed;
    this.y += this.speed * 0.3;
    this.alpha -= this.fade;
    if (this.alpha <= 0 || this.x > canvas.width + 50) this.reset();
  }

  draw() {
    const grad = ctx.createLinearGradient(this.x, this.y, this.x - this.length, this.y - this.length);
    grad.addColorStop(0, `hsla(${this.hue}, 100%, 70%, ${this.alpha})`);
    grad.addColorStop(1, "transparent");

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - this.length, this.y - this.length);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

function drawGradientSky() {
  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradientHue = (gradientHue + 0.1) % 360;

  const color1 = `hsl(${gradientHue}, 60%, 8%)`;
  const color2 = `hsl(${(gradientHue + 60) % 360}, 60%, 4%)`;

  grad.addColorStop(0, color1);
  grad.addColorStop(1, color2);

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function createMagicSky(particleCount = 80, cometCount = 3) {
  particles = Array.from({ length: particleCount }, () => new StarParticle());
  comets = Array.from({ length: cometCount }, () => new Comet());
}

function animateSky() {
  drawGradientSky();

  particles.forEach(p => {
    p.update();
    p.draw();
  });

  comets.forEach(c => {
    c.update();
    c.draw();
  });

  requestAnimationFrame(animateSky);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  createMagicSky();
});

// Initialize
resizeCanvas();
createMagicSky();
animateSky();
