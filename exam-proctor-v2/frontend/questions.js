// ── EXAM QUESTIONS DATABASE ──
// Each exam has 10 questions. correctAnswer = 'a','b','c', or 'd'

const EXAM_QUESTIONS = {

  maths: {
    title: 'Mathematics',
    icon: '📐',
    duration: 60,
    marks: 50,
    questions: [
      {
        q: 'If the sum of two numbers is 12 and their product is 35, what is the sum of their squares?',
        options: ['74','94','109','144'],
        correct: 'a'
      },
      {
        q: 'A train travels 120 km in 2 hours. At the same speed, how long will it take to travel 300 km?',
        options: ['3 hours','4 hours','5 hours','6 hours'],
        correct: 'c'
      },
      {
        q: 'What is the area of a circle with diameter 14 cm? (Use π = 22/7)',
        options: ['144 cm²','154 cm²','176 cm²','196 cm²'],
        correct: 'b'
      },
      {
        q: 'If 3x + 7 = 22, what is the value of x?',
        options: ['3','4','5','6'],
        correct: 'c'
      },
      {
        q: 'A shopkeeper bought goods worth Rs. 1200 and sold them at 25% profit. What was the selling price?',
        options: ['Rs. 1400','Rs. 1450','Rs. 1500','Rs. 1550'],
        correct: 'c'
      },
      {
        q: 'What is the LCM of 12, 18, and 24?',
        options: ['36','48','72','96'],
        correct: 'c'
      },
      {
        q: 'The average of 5 numbers is 20. If one number is removed, the average becomes 18. What is the removed number?',
        options: ['24','26','28','30'],
        correct: 'c'
      },
      {
        q: 'If 2x² - 8 = 0, what are the values of x?',
        options: ['x = ±1','x = ±2','x = ±3','x = ±4'],
        correct: 'b'
      },
      {
        q: 'A rectangular field is 60 m long and 40 m wide. What is the cost of fencing it at Rs. 12 per metre?',
        options: ['Rs. 2,000','Rs. 2,400','Rs. 2,880','Rs. 3,200'],
        correct: 'c'
      },
      {
        q: 'What is 15% of 840?',
        options: ['116','124','126','132'],
        correct: 'c'
      }
    ]
  },

  english: {
    title: 'English',
    icon: '📖',
    duration: 45,
    marks: 40,
    questions: [
      {
        q: 'Choose the correct form: She _____ to school every day.',
        options: ['go','goes','going','gone'],
        correct: 'b'
      },
      {
        q: 'What is the plural of "ox"?',
        options: ['Oxes','Oxs','Oxen','Ox'],
        correct: 'c'
      },
      {
        q: 'Which sentence uses the Past Perfect tense correctly?',
        options: [
          'She has finished her work.',
          'She had finished her work before he arrived.',
          'She was finishing her work.',
          'She finished her work.'
        ],
        correct: 'b'
      },
      {
        q: 'The word "benevolent" most nearly means:',
        options: ['Hostile','Kind and generous','Stubborn','Clever'],
        correct: 'b'
      },
      {
        q: 'Choose the correct passive voice: "The teacher teaches the students."',
        options: [
          'The students are taught by the teacher.',
          'The students were taught by the teacher.',
          'The students have been taught by the teacher.',
          'The students will be taught by the teacher.'
        ],
        correct: 'a'
      },
      {
        q: 'Which word is the antonym of "frugal"?',
        options: ['Careful','Economical','Wasteful','Simple'],
        correct: 'c'
      },
      {
        q: 'Identify the figure of speech in: "The stars danced in the sky."',
        options: ['Simile','Metaphor','Personification','Alliteration'],
        correct: 'c'
      },
      {
        q: '"He is as brave as a lion." This is an example of:',
        options: ['Metaphor','Simile','Personification','Hyperbole'],
        correct: 'b'
      },
      {
        q: 'Choose the correctly punctuated sentence:',
        options: [
          'Its a beautiful day isnt it.',
          "It's a beautiful day, isn't it?",
          "Its a beautiful day, isn't it?",
          "It's a beautiful day isnt it?"
        ],
        correct: 'b'
      },
      {
        q: 'Which sentence contains a compound subject?',
        options: [
          'Ali runs fast.',
          'Ali and Sara run fast.',
          'Ali runs and jumps.',
          'He runs very fast.'
        ],
        correct: 'b'
      }
    ]
  },

  urdu: {
    title: 'اردو',
    icon: '✍️',
    duration: 45,
    marks: 40,
    questions: [
      {
        q: '"دل" کی جمع کیا ہے؟',
        options: ['دلوں','دل','دلا','دلیں'],
        correct: 'd'
      },
      {
        q: '"خوش" کی ضد کیا ہے؟',
        options: ['غمگین','پریشان','اداس','ناراض'],
        correct: 'a'
      },
      {
        q: '"آفتاب" کا مترادف لفظ کیا ہے؟',
        options: ['چاند','ستارہ','سورج','آسمان'],
        correct: 'c'
      },
      {
        q: 'مندرجہ ذیل میں سے "اسم" کونسا ہے؟',
        options: ['خوبصورت','چلنا','کتاب','تیز'],
        correct: 'c'
      },
      {
        q: '"بچہ کھیل رہا ہے۔" اس جملے میں فعل کیا ہے؟',
        options: ['بچہ','کھیل','رہا','کھیل رہا ہے'],
        correct: 'd'
      },
      {
        q: 'علامہ اقبال کا مشہور شعری مجموعہ کونسا ہے؟',
        options: ['بانگِ درا','گلستان','شاہنامہ','دیوانِ غالب'],
        correct: 'a'
      },
      {
        q: '"پھول" کی جمع کیا ہے؟',
        options: ['پھولیں','پھولوں','پھول','پھولا'],
        correct: 'b'
      },
      {
        q: 'اردو میں حروفِ علت کتنے ہیں؟',
        options: ['تین','چار','پانچ','چھ'],
        correct: 'a'
      },
      {
        q: '"محنت کا پھل میٹھا ہوتا ہے" اس محاورے کا مطلب کیا ہے؟',
        options: ['پھل میٹھا ہوتا ہے','کام کا اچھا نتیجہ ملتا ہے','محنت نہیں کرنی چاہیے','پھل کھانا چاہیے'],
        correct: 'b'
      },
      {
        q: 'مندرجہ ذیل میں سے کونسا لفظ عربی سے ماخوذ ہے؟',
        options: ['چائے','کتاب','آلو','کپڑا'],
        correct: 'b'
      }
    ]
  },

  science: {
    title: 'General Science',
    icon: '🔬',
    duration: 50,
    marks: 50,
    questions: [
      {
        q: 'Which gas is most abundant in Earth\'s atmosphere?',
        options: ['Oxygen','Carbon Dioxide','Nitrogen','Hydrogen'],
        correct: 'c'
      },
      {
        q: 'What is the chemical formula of water?',
        options: ['HO₂','H₂O₂','H₂O','HO'],
        correct: 'c'
      },
      {
        q: 'Which organ in the human body produces insulin?',
        options: ['Liver','Kidney','Pancreas','Heart'],
        correct: 'c'
      },
      {
        q: 'The speed of light is approximately:',
        options: ['3 × 10⁸ m/s','3 × 10⁶ m/s','3 × 10¹⁰ m/s','3 × 10⁴ m/s'],
        correct: 'a'
      },
      {
        q: 'Which planet is known as the Red Planet?',
        options: ['Venus','Jupiter','Saturn','Mars'],
        correct: 'd'
      },
      {
        q: 'What is the powerhouse of the cell?',
        options: ['Nucleus','Ribosome','Mitochondria','Golgi apparatus'],
        correct: 'c'
      },
      {
        q: 'Which blood group is known as the universal donor?',
        options: ['A+','O−','AB+','B+'],
        correct: 'b'
      },
      {
        q: 'Newton\'s Second Law of Motion states that Force equals:',
        options: ['mass × velocity','mass × acceleration','mass × distance','mass × speed'],
        correct: 'b'
      },
      {
        q: 'Which vitamin is produced by the skin when exposed to sunlight?',
        options: ['Vitamin A','Vitamin B','Vitamin C','Vitamin D'],
        correct: 'd'
      },
      {
        q: 'The process by which plants make their food using sunlight is called:',
        options: ['Respiration','Photosynthesis','Digestion','Transpiration'],
        correct: 'b'
      }
    ]
  },

  computer: {
    title: 'Computer Studies',
    icon: '💻',
    duration: 40,
    marks: 40,
    questions: [
      {
        q: 'What does CPU stand for?',
        options: ['Central Processing Unit','Computer Personal Unit','Central Program Utility','Core Processing Unit'],
        correct: 'a'
      },
      {
        q: 'Which of the following is an example of an Input Device?',
        options: ['Monitor','Printer','Keyboard','Speaker'],
        correct: 'c'
      },
      {
        q: 'What does HTML stand for?',
        options: [
          'HyperText Markup Language',
          'HighText Machine Language',
          'HyperText Making Language',
          'Hyper Transfer Markup Language'
        ],
        correct: 'a'
      },
      {
        q: '1 Gigabyte (GB) is equal to how many Megabytes (MB)?',
        options: ['512 MB','1000 MB','1024 MB','2048 MB'],
        correct: 'c'
      },
      {
        q: 'Which of the following is NOT an operating system?',
        options: ['Windows','Linux','Microsoft Word','macOS'],
        correct: 'c'
      },
      {
        q: 'What is the function of RAM in a computer?',
        options: [
          'Permanent data storage',
          'Temporary data storage for running programs',
          'Processing instructions',
          'Displaying graphics'
        ],
        correct: 'b'
      },
      {
        q: 'Which key is used to permanently delete a file in Windows without sending it to Recycle Bin?',
        options: ['Delete','Ctrl+Delete','Shift+Delete','Alt+Delete'],
        correct: 'c'
      },
      {
        q: 'The internet uses which protocol to transfer web pages?',
        options: ['FTP','SMTP','HTTP','TCP'],
        correct: 'c'
      },
      {
        q: 'Which of these is a search engine?',
        options: ['Facebook','Google','WhatsApp','YouTube'],
        correct: 'b'
      },
      {
        q: 'Which file extension is used for Microsoft Excel files?',
        options: ['.doc','.ppt','.xlsx','.pdf'],
        correct: 'c'
      }
    ]
  },

  punjabi: {
    title: 'Punjabi',
    icon: '🌾',
    duration: 40,
    marks: 40,
    questions: [
      {
        q: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦੀ ਲਿਪੀ ਦਾ ਕੀ ਨਾਮ ਹੈ? (What is the script of the Punjabi language?)',
        options: ['ਦੇਵਨਾਗਰੀ (Devanagari)','ਗੁਰਮੁਖੀ (Gurmukhi)','ਅਰਬੀ (Arabic)','ਰੋਮਨ (Roman)'],
        correct: 'b'
      },
      {
        q: 'Punjabi is the official language of which Pakistani province?',
        options: ['Sindh','Balochistan','Punjab','KPK'],
        correct: 'c'
      },
      {
        q: 'Which famous Punjabi poet wrote "Heer Ranjha"?',
        options: ['Bulleh Shah','Waris Shah','Shah Hussain','Mian Muhammad Bakhsh'],
        correct: 'b'
      },
      {
        q: '"ਸੱਤ ਰੰਗ" means how many colours in Punjabi?',
        options: ['Five','Six','Seven','Eight'],
        correct: 'c'
      },
      {
        q: 'Which of the following is a famous Punjabi folk dance?',
        options: ['Kathak','Bhangra','Bharatnatyam','Odissi'],
        correct: 'b'
      },
      {
        q: 'The word "ਪੰਜਾਬ" (Punjab) means:',
        options: ['Land of rivers','Five waters','Green land','Land of five rivers'],
        correct: 'd'
      },
      {
        q: 'Which river is NOT one of the five rivers of Punjab?',
        options: ['Chenab','Jhelum','Indus','Sutlej'],
        correct: 'c'
      },
      {
        q: 'Bulleh Shah was a famous Punjabi:',
        options: ['Poet and Sufi saint','King','Warrior','Scientist'],
        correct: 'a'
      },
      {
        q: 'What is "ਰੋਟੀ" (Roti) in English?',
        options: ['Rice','Bread','Curry','Sweet'],
        correct: 'b'
      },
      {
        q: 'Which festival is most commonly associated with Punjabi culture?',
        options: ['Eid ul Fitr','Basant','Diwali','Baisakhi'],
        correct: 'd'
      }
    ]
  }
};
