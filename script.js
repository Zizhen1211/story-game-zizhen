"use strict";

const scenes = {
  prologue: {
    image: "images/1.0.png",
    alt: "A bedroom and art desk during sunset.",
    caption: "The sun is setting outside the artist's bedroom.",
    chapter: "Prologue",
    location: "Bedroom at Sunset",
    progress: "The night before the exhibition",
    goal: "Remember what happened before the painting disappeared.",
    title: "Before the Dream",
    lines: [
      {
        text: "Tomorrow is your first city art exhibition. Your finished painting shows a little girl holding a paintbrush beside an open window. You worked on it for months, but every time you look at it, old voices return.Your mother once told you that you had no talent. Classmates laughed at your body."
      },
      {
        text: "In high school, a teacher acted helpful in front of you but complained about your English to other teachers and said that you should transfer.Only one close friend made you feel safe enough to speak honestly."
      },
      {
        text: "Tonight, her message is still open on your laptop. It is a little after six. You rest your head near the keyboard and close your eyes.When you open them again, the sunset has not moved—and your painting is gone."
      }
    ],
    choices: [
      {
        label: "Begin the search",
        next: "bedroom"
      }
    ]
  },

  bedroom: {
    image: "images/1.0.png",
    alt: "A quiet bedroom at sunset.",
    caption: "The bedroom is silent and the sunset appears frozen.",
    chapter: "Chapter 1 of 6",
    location: "Bedroom at Sunset",
    progress: "Clue: The painting is missing",
    goal: "Find a clue about the missing painting.",
    title: "A Quiet Room",
    lines: [
      {
        text: "The room looks familiar, but something feels wrong.The clock reads 6:07 and does not change.your laptop is still glowing. The easel beside the desk is empty."
      },
      {
        speaker: "Main Character",
        text: "The painting was here. I know it was. Why can't I remember what happened to it? Where will you look first?"
      }
    ],
    choices: [
      {
        label: "Check the computer",
        next: "bedroomComputer"
      },
      {
        label: "Examine the empty easel",
        next: "bedroomEasel"
      }
    ]
  },

  bedroomComputer: {
    image: "images/1.1.png",
    alt: "A computer showing an exhibition email and a friend's message.",
    caption: "The computer shows two important messages.",
    chapter: "Chapter 1 of 6",
    location: "Bedroom at Sunset",
    progress: "Computer screen",
    goal: "Read the messages on the computer.",
    title: "The Exhibition Email",
    lines: [
      {
        text: "The screen shows an email from the city art exhibition."
      },
      {
        speaker: "Email",
        text: "Thank you for joining this year's exhibition. Please bring your finished painting tomorrow morning. We look forward to seeing your work.Below it is a message from your friend."
      },
      {
        speaker: "Friend's Message",
        text: "You don't have to impress everyone. I'm proud of you for finishing something that matters to you. Call me if you want company tomorrow."
      },
      {
        speaker: "Main Character",
        text: "She sounds so sure of me. I wish I could feel that way."
      }
    ],
    choices: [
      {
        label: "Return to the room",
        next: "bedroom",
        openChoices: true
      },
      {
        label: "Examine the empty easel",
        next: "bedroomEasel"
      }
    ]
  },

  bedroomEasel: {
    image: "images/1.2.png",
    alt: "An empty easel in the sunset bedroom.",
    caption: "The painting is missing from the easel.",
    chapter: "Chapter 1 of 6",
    location: "Bedroom at Sunset",
    progress: "Clue found: blue paint",
    goal: "Follow the clue beside the empty easel.",
    title: "The Empty Easel",
    lines: [
      {
        text: "A clean line in the dust shows where the finished canvas used to rest. Small marks of blue paint lead from the easel toward the bedroom door."
      },
      {
        text: "You look down. The same blue paint is dry on your fingertips."
      },
      {
        speaker: "Main Character",
        text: "Why is the paint on my hands? Did I move the painting? The marks continue beyond the doorway."
      },
      {
        text: "When you follow them, the bedroom dissolves into an old art classroom."
      }
    ],
    choices: [
      {
        label: "Follow the blue paint",
        next: "artClassroom"
      },
      {
        label: "Check the computer first",
        next: "bedroomComputer"
      }
    ]
  },

  artClassroom: {
    image: "images/2.png",
    alt: "A bright art classroom full of students and paintings.",
    caption: "Students paint inside an old memory.",
    chapter: "Chapter 2 of 6",
    location: "Art Classroom",
    progress: "Memory: Childhood art class",
    goal: "Explore the classroom.",
    title: "A Room Full of Paintings",
    lines: [
      {
        text: "Morning light fills the room.Students work at every table, but nobody looks at you."
      },
      {
        text: "You try to touch a chair and your hand passes through it. Near the window, a younger version of you is standing in front of an unfinished drawing."
      },
      {
        text: "You remember how often you compared your work with everyone else's."
      },
      {
        speaker: "Main Character",
        text: "This isn't happening now. This is a memory."
      }
    ],
    choices: [
      {
        label: "Look at the students' paintings",
        next: "studentPaintings"
      },
      {
        label: "Examine your unfinished drawing",
        next: "unfinishedDrawing"
      }
    ]
  },

  studentPaintings: {
    image: "images/2.1.png",
    alt: "Two easels with a garden painting and a statue drawing.",
    caption: "Two student paintings stand side by side.",
    chapter: "Chapter 2 of 6",
    location: "Art Classroom",
    progress: "Choice 1: Comparison",
    goal: "Understand why the paintings create fear.",
    title: "Comparison",
    lines: [
      {
        text: "One student has painted a beautiful garden.Another has drawn a careful portrait."
      },
      {
        text: "You begin comparing every line with your own work.Your mother's voice returns in your memory."
      },
      {
        speaker: "Mother",
        text: "Look at the other children's paintings. Why can't you do something like that?"
      },
      {
        text: "Your chest tightens."
      },
      {
        speaker: "Main Character",
        text: "I still do this. I look at someone else's work, and suddenly mine feels worthless."
      }
    ],
    choices: [
      {
        label: "Return to the classroom",
        next: "artClassroom",
        openChoices: true
      },
      {
        label: "Examine your drawing",
        next: "unfinishedDrawing"
      }
    ]
  },

  unfinishedDrawing: {
    image: "images/2.2.png",
    alt: "An unfinished pencil drawing beside a classroom window.",
    caption: "The old drawing is still unfinished.",
    chapter: "Chapter 2 of 6",
    location: "Art Classroom",
    progress: "Choice 2: The unfinished drawing",
    goal: "Look closely at the unfinished drawing.",
    title: "I Want to Finish This",
    lines: [
      {
        text: "The drawing shows a girl beside a window."
      },
      {
        text: "Half the sky is orange. The other half is still empty."
      },
      {
        text: "There are deep eraser marks around the girl's face."
      },
      {
        speaker: "Main Character",
        text: "I remember this. I kept changing it because I was afraid Mom would hate it.In one corner, written very lightly, are the words: I want to finish this."
      },
      {
        speaker: "Main Character",
        text: "Even then, I wanted to keep drawing.The sound of brushes fades as you step toward the hallway."
      }
    ],
    choices: [
      {
        label: "Leave the classroom",
        next: "hallway"
      },
      {
        label: "Look at the other paintings",
        next: "studentPaintings"
      }
    ]
  },
  hallway: {
    image: "images/3.png",
    alt: "An empty school hallway with warm light.",
    caption: "The hallway is lit but completely empty.",
    chapter: "Chapter 3 of 6",
    location: "Empty School Hallway",
    progress: "Memory: School years",
    goal: "Follow the school memories.",
    title: "The Hallway",
    lines: [
      {
        text: "The hallway is not dark, but it is empty.Golden light crosses the floor."
      },
      {
        text: "A class photograph hangs on the wall, and voices come from a half-open classroom door."
      },
      {
        speaker: "Main Character",
        text: "I know both of these memories. I tried not to think about them."
      }
    ],
    choices: [
      {
        label: "Examine the class photograph",
        next: "classPhoto"
      },
      {
        label: "Listen at the half-open door",
        next: "teacherConversation"
      }
    ]
  },

  classPhoto: {
    image: "images/3.1.png",
    alt: "A class photograph with a Chinese girl near the edge.",
    caption: "An old photograph brings back a painful memory.",
    chapter: "Chapter 3 of 6",
    location: "Empty School Hallway",
    progress: "Choice 1: Class photograph",
    goal: "Look at the photograph honestly.",
    title: "The Girl at the Edge",
    lines: [
      {
        text: "You find yourself near the edge of the picture.You are pulling your shirt down and trying to take up less space."
      },
      {
        text: "A memory returns."
      },
      {
        speaker: "Classmate",
        text: "Why are you so chubby?"
      },
      {
        text: "Another student laughs.You remember pretending not to hear them."
      },
      {
        speaker: "Main Character",
        text: "I started hiding from photographs. Then I started hiding other parts of myself, too."
      },
      {
        speaker: "Main Character",
        text: "There was nothing wrong with that girl's body. They were being cruel."
      }
    ],
    choices: [
      {
        label: "Return to the hallway",
        next: "hallway",
        openChoices: true
      },
      {
        label: "Listen at the classroom door",
        next: "teacherConversation"
      }
    ]
  },

  teacherConversation: {
    image: "images/3.2.png",
    alt: "Two teachers speaking inside a classroom.",
    caption: "The teachers do not know that a student can hear them.",
    chapter: "Chapter 3 of 6",
    location: "Outside the Classroom Door",
    progress: "Choice 2: The overheard conversation",
    goal: "Listen to what the teachers are saying.",
    title: "What She Said in Private",
    lines: [
      {
        text: "Inside, your female teacher speaks casually with another teacher."
      },
      {
        text: "Both hold coffee."
      },
      {
        text: "Her voice sounds very different from the patient voice she used in front of you."
      },
      {
        speaker: "Female Teacher",
        text: "Her English is still weak. She slows the class down, and I don't think she belongs here. It may be better if she transfers."
      },
      {
        text: "You remember her smiling earlier and saying: Come to me whenever you need help."
      },
      {
        speaker: "Main Character",
        text: "I believed her. I thought she wanted to help me."
      },
      {
        text: "The teachers laugh softly."
      },
      {
        text: "You step back from the door before they can see you."
      }
    ],
    choices: [
      {
        label: "Next",
        next: "nervousHands"
      }
    ]
  },

  nervousHands: {
    image: "images/3.25.png",
    alt: "A first-person view of tense hands beside a classroom doorway.",
    caption: "The student nervously presses her fingers together.",
    chapter: "Chapter 3 of 6",
    location: "Outside the Classroom Door",
    progress: "The same memory, a moment later",
    goal: "Face the feeling left by the memory.",
    title: "Trying Not to Be Seen",
    lines: [
      {
        text: "You lower your eyes."
      },
      {
        text: "Your fingers twist together until they hurt."
      },
      {
        text: "You want to disappear before the classroom door opens."
      },
      {
        speaker: "Younger You",
        text: "Maybe she is right. Maybe I am the problem."
      },
      {
        speaker: "Main Character",
        text: "No. I was learning a new language. I needed patience, not humiliation."
      },
      {
        text: "The door opens, but the room beyond it has changed into your high school classroom."
      }
    ],
    choices: [
      {
        label: "Enter the classroom",
        next: "highSchoolClassroom"
      }
    ]
  },

  highSchoolClassroom: {
    image: "images/4.png",
    alt: "A high school classroom containing several memories.",
    caption: "Several high school memories exist together.",
    chapter: "Chapter 4 of 6",
    location: "High School Classroom",
    progress: "Memory: Pressure and isolation",
    goal: "Understand what happened during high school.",
    title: "Several Memories at Once",
    lines: [
      {
        text: "A computer is on at the teacher's desk."
      },
      {
        text: "Your old journal lies on a student's table."
      },
      {
        text: "Near the window, a memory of your mother sits in a chair, waiting for a meeting."
      },
      {
        text: "This room holds several memories at once."
      },
      {
        text: "Each one asks you to stop looking away."
      }
    ],
    choices: [
      {
        label: "Check the computer",
        next: "englishAssignment"
      },
      {
        label: "Read your old journal",
        next: "oldJournal"
      },
      {
        label: "Speak to the memory of your mother",
        next: "motherAtHome"
      }
    ]
  },

  englishAssignment: {
    image: "images/4.1.png",
    alt: "A student and teacher beside a computer.",
    caption: "A memory of asking a teacher for help returns.",
    chapter: "Chapter 4 of 6",
    location: "High School Classroom",
    progress: "Choice 1: The assignment",
    goal: "Remember what happened when you asked for help.",
    title: "Keep Up",
    lines: [
      {
        text: "An unfinished English assignment appears on the screen."
      },
      {
        text: "You remember asking the teacher to explain the instructions."
      },
      {
        speaker: "Younger You",
        text: "Could you explain that part again?"
      },
      {
        speaker: "Teacher",
        text: "I already explained it. You need to keep up."
      },
      {
        text: "Later, you learned that she had spoken badly about you to other teachers and suggested that you transfer."
      },
      {
        speaker: "Main Character",
        text: "I needed help learning a language. Instead, I felt like I was the problem."
      }
    ],
    choices: [
      {
        label: "Return to the classroom",
        next: "highSchoolClassroom",
        openChoices: true
      },
      {
        label: "Read the journal",
        next: "oldJournal"
      }
    ]
  },

  oldJournal: {
    image: "images/4.2.png",
    alt: "An old journal beside a speech covered with notes.",
    caption: "The journal shows how hard the student was trying.",
    chapter: "Chapter 4 of 6",
    location: "High School Classroom",
    progress: "Choice 2: The old journal",
    goal: "Read the words you could not say aloud.",
    title: "What Nobody Saw",
    lines: [
      {
        speaker: "Journal",
        text: "I practiced what to say before class, but I still couldn't say it."
      },
      {
        speaker: "Journal",
        text: "I don't know who I can trust at school. When I get home, I feel even more tired."
      },
      {
        text: "Another entry says:"
      },
      {
        speaker: "Journal",
        text: "I laughed with my friend today. For a little while, I didn't feel so alone."
      },
      {
        speaker: "Main Character",
        text: "I was trying so hard. Nobody could see how much effort it took just to get through the day."
      }
    ],
    choices: [
      {
        label: "Return to the classroom",
        next: "highSchoolClassroom",
        openChoices: true
      },
      {
        label: "Speak to your mother",
        next: "motherAtHome"
      }
    ]
  },

  motherAtHome: {
    image: "images/4.3.png",
    alt: "A mother seen through the main character's tears.",
    caption: "A difficult conversation with the mother returns.",
    chapter: "Chapter 4 of 6",
    location: "A Memory of Home",
    progress: "Choice 3: Asking for support",
    goal: "Listen to the memory.",
    title: "I Needed Someone to Listen",
    lines: [
      {
        speaker: "Younger You",
        text: "I'm having a hard time at school."
      },
      {
        speaker: "Mother",
        text: "Then work harder. Spending time drawing won't fix your English."
      },
      {
        text: "You remember putting your journal away and saying nothing more."
      },
      {
        speaker: "Main Character",
        text: "I needed someone to listen. I didn't know how to make her understand."
      },
      {
        text: "Your phone lights up with an old message."
      },
      {
        speaker: "Friend's Message",
        text: "I'm at our bench. You can sit with me. You don't have to explain everything."
      }
    ],
    choices: [
      {
        label: "Go to the sunset bench",
        next: "sunsetBench"
      },
      {
        label: "Return to the classroom",
        next: "highSchoolClassroom",
        openChoices: true
      }
    ]
  },

  sunsetBench: {
    image: "images/5.png",
    alt: "A friend sitting on a wooden bench at sunset.",
    caption: "A trusted friend waits beneath a tree.",
    chapter: "Chapter 5 of 6",
    location: "Sunset Bench",
    progress: "Memory: A safe place",
    goal: "Talk to your friend.",
    title: "Someone Notices You",
    lines: [
      {
        text: "Your friend sits on a wooden bench beneath a tree."
      },
      {
        text: "The sky is pink and gold."
      },
      {
        text: "For the first time in the dream, someone notices you."
      },
      {
        text: "She moves her bag to make room."
      },
      {
        speaker: "Friend",
        text: "You look tired. Want to sit down?"
      }
    ],
    choices: [
      {
        label: "Tell her about the missing painting",
        next: "talkWithFriend"
      },
      {
        label: "Ask about the folded note",
        next: "collectFriendNote"
      }
    ]
  },

  talkWithFriend: {
    image: "images/5.1.png",
    alt: "Two friends sitting together on a bench.",
    caption: "The main character speaks honestly with her friend.",
    chapter: "Chapter 5 of 6",
    location: "Sunset Bench",
    progress: "Choice 1: Speak honestly",
    goal: "Tell your friend why you are afraid.",
    title: "Permission",
    lines: [
      {
        speaker: "Main Character",
        text: "My painting is gone. I should want to find it, but part of me is scared of finding it."
      },
      {
        speaker: "Friend",
        text: "What feels scary about finding it?"
      },
      {
        speaker: "Main Character",
        text: "Then I'll have to show it. What if everyone sees it and agrees with my mom?"
      },
      {
        speaker: "Friend",
        text: "I can't promise everyone will like it. But their opinions don't decide whether you're allowed to paint."
      },
      {
        speaker: "Main Character",
        text: "I think I've been waiting for permission to keep going."
      },
      {
        speaker: "Friend",
        text: "You can decide that for yourself. And you can ask me to stand beside you while you do it."
      }
    ],
    choices: [
      {
        label: "Look at the folded note",
        next: "collectFriendNote"
      },
      {
        label: "Return to the bench",
        next: "sunsetBench",
        openChoices: true
      }
    ]
  },

  collectFriendNote: {
    image: "images/5.2.png",
    alt: "A folded handwritten note at sunset.",
    caption: "The friend offers a small note.",
    chapter: "Chapter 5 of 6",
    location: "Sunset Bench",
    progress: "Item collected: Friend's Note",
    goal: "Keep your friend's words with you.",
    title: "Friend's Note",
    onEnter: "collectFriendNote",
    lines: [
      {
        text: "Your friend holds out a folded note."
      },
      {
        speaker: "Friend's Note",
        text: "You deserve kindness, especially from yourself."
      },
      {
        speaker: "Friend's Note",
        text: "You don't need a prize to prove that your work matters. I'm glad you're here."
      },
      {
        speaker: "Main Character",
        text: "Can I keep this?"
      },
      {
        speaker: "Friend",
        text: "Of course. Take it wherever you need to go next."
      },
      {
        text: "Beyond the trees, an old house appears in the sunset."
      },
      {
        text: "You recognize your childhood home."
      }
    ],
    choices: [
      {
        label: "Go to the childhood home",
        next: "childhoodHome"
      },
      {
        label: "Talk a little longer",
        next: "talkWithFriend"
      }
    ]
  },

  childhoodHome: {
    image: "images/6.png",
    alt: "A childhood home with a mother and a small girl.",
    caption: "The house changes into the home remembered from childhood.",
    chapter: "Chapter 6 of 6",
    location: "Childhood Home",
    progress: "Final memory",
    goal: "Find the old sketchbook and speak to your younger self.",
    title: "The Beginning of the Fear",
    lines: [
      {
        text: "The house changes as you walk through it."
      },
      {
        text: "An old calendar appears on the wall."
      },
      {
        text: "The furniture becomes the furniture you remember from childhood."
      },
      {
        text: "At the kitchen table, a small girl holds up a drawing for her mother."
      },
      {
        text: "You recognize her before she speaks."
      },
      {
        speaker: "Main Character",
        text: "That's me. This is where I began believing I should hide my art."
      }
    ],
    choices: [
      {
        label: "Watch the memory and speak to your mother",
        next: "childhoodMother"
      },
      {
        label: "Search for the old sketchbook",
        next: "oldSketchbook"
      },
      {
        label: "Talk to your younger self",
        next: "youngerSelf"
      }
    ]
  },

  childhoodMother: {
    image: "images/6.1.png",
    alt: "A mother and young girl surrounded by a memory-like glow.",
    caption: "A childhood memory repeats.",
    chapter: "Chapter 6 of 6",
    location: "Childhood Home",
    progress: "Choice 1: The first wound",
    goal: "Stop repeating your mother's words.",
    title: "You Have No Talent",
    lines: [
      {
        speaker: "Younger You",
        text: "Mom, look. I finished it."
      },
      {
        speaker: "Mother",
        text: "You have no talent for this. Stop wasting your time."
      },
      {
        text: "The girl lowers the drawing."
      },
      {
        text: "You step closer."
      },
      {
        speaker: "Main Character",
        text: "She worked hard on that. She wanted you to notice."
      },
      {
        text: "Your mother's image does not answer."
      },
      {
        text: "This is a memory, and you cannot change what she said."
      },
      {
        text: "You turn toward the little girl."
      },
      {
        speaker: "Main Character",
        text: "But I don't have to keep saying it to myself."
      }
    ],
    choices: [
      {
        label: "Return to the house",
        next: "childhoodHome",
        openChoices: true
      },
      {
        label: "Search for the sketchbook",
        next: "oldSketchbook"
      }
    ]
  },

  oldSketchbook: {
    image: "images/6.2.png",
    alt: "An old sketchbook wrapped in cloth beneath a bed.",
    caption: "The old sketchbook is found.",
    chapter: "Chapter 6 of 6",
    location: "Childhood Bedroom",
    progress: "Item collected: Old Sketchbook",
    goal: "Remember why you began drawing.",
    title: "Somewhere I Want to Stay",
    onEnter: "collectSketchbook",
    lines: [
      {
        text: "Under a small bed, you find a sketchbook wrapped in cloth."
      },
      {
        text: "Inside are drawings of windows, birds, and girls with paintbrushes."
      },
      {
        text: "Some pages are unfinished. Others are full of color."
      },
      {
        text: "On the last page, you find a sentence: When I draw, I can make somewhere I want to stay."
      },
      {
        speaker: "Main Character",
        text: "I didn't start drawing to win. I started because I loved it."
      }
    ],
    choices: [
      {
        label: "Return to the house",
        next: "childhoodHome",
        openChoices: true
      },
      {
        label: "Find your younger self",
        next: "youngerSelf"
      }
    ]
  },

  youngerSelf: {
    image: "images/6.3.png",
    alt: "A glowing little girl beside a covered painting.",
    caption: "The younger self guards the covered painting.",
    chapter: "Chapter 6 of 6",
    location: "Childhood Home",
    progress: "Choice 3: The hidden painting",
    goal: "Ask why the painting disappeared.",
    title: "If Nobody Sees It",
    lines: [
      {
        text: "The little girl is sitting beside a large, covered picture."
      },
      {
        speaker: "Younger Self",
        text: "If nobody sees it, nobody can laugh at it."
      },
      {
        speaker: "Main Character",
        text: "Is that why the painting disappeared?"
      },
      {
        speaker: "Younger Self",
        text: "I thought hiding it would keep us safe."
      },
      {
        text: "You recognize the cloth around the painting."
      },
      {
        speaker: "Main Character",
        text: "That's the cloth from my bedroom."
      }
    ],
    choices: [
      {
        label: "Next",
        next: "memoryGate"
      },
      {
        label: "Step back and search the house",
        next: "childhoodHome",
        openChoices: true
      }
    ]
  },

  memoryGate: {
    image: "images/6.35.png",
    alt: "The younger self reaches toward the main character.",
    caption: "The younger self waits for proof.",
    chapter: "Chapter 6 of 6",
    location: "Childhood Home",
    progress: "Two memories required",
    goal: "Use the Old Sketchbook and Friend's Note.",
    title: "Something Is Missing",
    special: "memoryPuzzle",
    lines: [
      {
        speaker: "Younger Self",
        text: "You say it's safe, but I don't believe you yet."
      },
      {
        text: "Something is missing. Find the Old Sketchbook in this house and collect your friend's note at the sunset bench.",
        style: "on-screen"
      }
    ],
    choices: []
  },

  sharedMemories: {
    image: "images/6.35.png",
    alt: "The main character speaks with her younger self.",
    caption: "The two memories help the younger self understand.",
    chapter: "Chapter 6 of 6",
    location: "Childhood Home",
    progress: "The truth returns",
    goal: "Decide whether the painting will be seen.",
    title: "No One Stole It",
    lines: [
      {
        text: "You place the old sketchbook and your friend's note between you."
      },
      {
        speaker: "Main Character",
        text: "You made these drawings because you wanted to. You were learning. You didn't deserve to be mocked."
      },
      {
        speaker: "Younger Self",
        text: "What if we're still not good enough?"
      },
      {
        speaker: "Main Character",
        text: "Then we can learn more. We can make another painting. We don't have to hide everything we love."
      },
      {
        text: "You read your friend's note aloud."
      },
      {
        speaker: "Younger Self",
        text: "So someone wants us here?"
      },
      {
        speaker: "Main Character",
        text: "Yes. And I don't want to leave you alone anymore."
      },
      {
        text: "You sit beside her instead of pulling the painting away."
      },
      {
        text: "After a while, she lets go of the cloth."
      },
      {
        text: "A memory returns."
      },
      {
        text: "Before falling asleep, you wrapped your finished painting and placed it under your bed."
      },
      {
        text: "You were afraid of the exhibition. In the dream, you forgot what you had done."
      },
      {
        speaker: "Main Character",
        text: "No one stole it. I hid it."
      },
      {
        speaker: "Younger Self",
        text: "Will you hide it again?"
      }
    ],
    choices: [
      {
        label: "Take the painting with you",
        next: "wakeWithPainting",
        className: "primary-choice"
      },
      {
        label: "Hide the painting again",
        next: "failureEnding",
        className: "danger-choice"
      }
    ]
  },

  wakeWithPainting: {
    image: "images/7.png",
    alt: "The finished painting in the sunset bedroom.",
    caption: "The artist finally uncovers the painting.",
    chapter: "Ending",
    location: "Bedroom at Sunset",
    progress: "The dream is over",
    goal: "Choose to let the painting be seen.",
    title: "Awake",
    lines: [
      {
        text: "You wake at your desk."
      },
      {
        text: "The laptop is still open. Outside, the sun is lower now."
      },
      {
        text: "You kneel beside your bed and pull out the painting."
      },
      {
        text: "It is wrapped in the same cloth you saw in the dream."
      },
      {
        text: "For a moment, you want to push it back."
      },
      {
        text: "Instead, you unwrap it and place it on the easel."
      },
      {
        speaker: "Main Character's Message",
        text: "Can you come with me to the exhibition tomorrow?"
      },
      {
        speaker: "Friend's Message",
        text: "Yes. I'll be there."
      },
      {
        speaker: "Main Character",
        text: "I'm still scared. But this time, I want to let it be seen."
      }
    ],
    choices: [
      {
        label: "Go to the city art exhibition",
        next: "successEnding",
        className: "primary-choice"
      }
    ]
  },

  successEnding: {
    image: "images/7.1.png",
    alt: "The painting displayed at a city exhibition.",
    caption: "The painting receives first place.",
    chapter: "Good Ending",
    location: "City Art Exhibition",
    progress: "The painting is seen",
    goal: "Remember what made this victory possible.",
    title: "First Place",
    lines: [
      {
        text: "The next morning, your friend walks into the exhibition beside you."
      },
      {
        text: "When your painting is uncovered, you do not look away."
      },
      {
        text: "Later, the judges announce that your painting has received first place."
      },
      {
        text: "Your friend squeezes your hand, and you begin to cry."
      },
      {
        speaker: "Main Character",
        text: "The award matters to me, but I chose to show the painting before I knew I would win. That choice was mine."
      },
      {
        text: "The painful memories do not disappear in one day."
      },
      {
        text: "You begin asking for support."
      },
      {
        text: "You keep drawing, and when a line is imperfect, you do not erase the whole page."
      },
      {
        text: "The painting was hidden. Your voice does not have to be.",
        style: "on-screen"
      }
    ],
    choices: [
      {
        label: "Play Again",
        action: "restart",
        className: "primary-choice"
      },
      {
        label: "Return Home",
        action: "home"
      }
    ]
  },

  failureEnding: {
    image: "images/8.png",
    alt: "A dark bedroom with a hidden painting.",
    caption: "The painting remains hidden.",
    chapter: "Hidden Ending",
    location: "Bedroom at Sunset",
    progress: "The painting stays hidden",
    goal: "Decide whether you are ready to try again.",
    title: "Hidden Again",
    lines: [
      {
        speaker: "Main Character",
        text: "I'm sorry. I can't do it yet."
      },
      {
        text: "You wake at your desk and find the wrapped painting beneath the bed."
      },
      {
        text: "This time, you push it farther into the shadows."
      },
      {
        text: "You do not message your friend."
      },
      {
        text: "The next morning, the exhibition begins without you."
      },
      {
        text: "The easel remains empty—not because you have no talent, but because fear made the choice for you."
      },
      {
        text: "This ending can still be changed.",
        style: "on-screen"
      }
    ],
    choices: [
      {
        label: "Return to your younger self",
        next: "memoryGate",
        openChoices: true,
        className: "primary-choice"
      },
      {
        label: "Start the story over",
        action: "restart"
      },
      {
        label: "Return Home",
        action: "home"
      }
    ]
  }
};

const inventoryItems = {
  friendNote: {
    name: "Friend's Note",
    description: "A reminder that you deserve kindness."
  },

  sketchbook: {
    name: "Old Sketchbook",
    description: "Proof that you drew because you loved it."
  }
};

const state = {
  currentScene: "prologue",
  inventory: new Set(),
  placedMemories: new Set()
};

let activeDialogueLines = [];
let activeLineIndex = 0;
let activeSceneChoices = [];
let activeSceneSpecial = null;
let dialogueComplete = false;

const sceneImage = document.getElementById("scene-image");
const gameContainer = document.getElementById("game");
const sceneCaption = document.getElementById("scene-caption");
const chapterText = document.getElementById("chapter-text");
const locationTitle = document.getElementById("location-title");
const progressText = document.getElementById("progress-text");
const goalText = document.getElementById("goal-text");
const storyTitle = document.getElementById("story-title");
const storyText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices");
const storyScroll = document.getElementById("story-scroll");
const gameMessage = document.getElementById("game-message");
const inventoryDetails = document.getElementById("inventory-details");
const inventoryList = document.getElementById("inventory-list");
const inventoryCount = document.getElementById("inventory-count");
const memoryPuzzle = document.getElementById("memory-puzzle");
const puzzleInstructions = document.getElementById("puzzle-instructions");
const shareMemoriesButton = document.getElementById("share-memories-button");
const playerLabel = document.getElementById("player-label");
const menuButton = document.getElementById("menu-button");
const gameMenu = document.getElementById("game-menu");
const resumeButton = document.getElementById("resume-button");
const restartButton = document.getElementById("restart-button");

const searchParameters = new URLSearchParams(window.location.search);
const playerName = searchParameters.get("playerName");

if (playerName && playerName.trim()) {
  playerLabel.textContent =
    `Player: ${playerName.trim().slice(0, 20)}`;
}

function showScene(sceneId, openChoicesImmediately = false) {
  const scene = scenes[sceneId];

  if (!scene) {
    showMessage("This scene could not be found.");
    return;
  }

  state.currentScene = sceneId;

  gameMessage.textContent = "";
  memoryPuzzle.hidden = true;

  sceneImage.classList.remove("scene-changing");
  sceneImage.src = scene.image;
  sceneImage.alt = scene.alt;

  sceneCaption.textContent = scene.caption;
  chapterText.textContent = scene.chapter;
  locationTitle.textContent = scene.location;
  progressText.textContent = scene.progress;
  goalText.textContent = `Goal: ${scene.goal}`;
  storyTitle.textContent = scene.title;

  document.title =
    `${scene.title} | The Missing Painting`;

  activeSceneChoices = scene.choices || [];
  activeSceneSpecial = scene.special || null;

  renderStoryLines(scene.lines);

  if (openChoicesImmediately) {
    if (activeDialogueLines.length > 0) {
      activeLineIndex = activeDialogueLines.length - 1;
      showCurrentDialogueLine();
    }

    finishDialogue();
  }

  if (scene.onEnter) {
    runSceneAction(scene.onEnter);
  }

  storyScroll.scrollTop = 0;
}

function renderStoryLines(lines) {
  activeDialogueLines = splitStoryLines(lines);
  activeLineIndex = 0;
  dialogueComplete = false;

  storyText.replaceChildren();
  choicesContainer.replaceChildren();

  choicesContainer.hidden = true;
  memoryPuzzle.hidden = true;

  if (activeDialogueLines.length === 0) {
    finishDialogue();
    return;
  }

  showCurrentDialogueLine();
}

function splitStoryLines(lines) {
  return lines.flatMap((line) => {
    if (line.style === "on-screen") {
      return [{ ...line }];
    }

    const sentences =
      line.text.match(/[^.!?]+(?:[.!?]+[”"']*|$)/g) ||
      [line.text];

    return sentences
      .map((sentence) => {
        return {
          ...line,
          text: sentence.trim()
        };
      })
      .filter((linePart) => {
        return linePart.text.length > 0;
      });
  });
}

function showCurrentDialogueLine() {
  const line = activeDialogueLines[activeLineIndex];

  if (!line) {
    finishDialogue();
    return;
  }

  const paragraph = document.createElement("p");

  storyText.replaceChildren();

  if (line.style === "on-screen") {
    paragraph.classList.add("on-screen-text");
  }

  if (line.speaker) {
    const speaker = document.createElement("span");

    speaker.className = "speaker";
    speaker.textContent = `${line.speaker}:`;

    paragraph.append(
      speaker,
      document.createTextNode(` “${line.text}”`)
    );
  } else {
    paragraph.textContent = line.text;
  }

  storyText.appendChild(paragraph);

  if (activeLineIndex < activeDialogueLines.length - 1) {
    gameMessage.textContent =
      "Click anywhere to continue ▸";
  } else {
    gameMessage.textContent =
      "Click once more to see your choices ▸";
  }
}

function advanceDialogue() {
  if (dialogueComplete) {
    return;
  }

  if (activeLineIndex < activeDialogueLines.length - 1) {
    activeLineIndex += 1;
    showCurrentDialogueLine();
    return;
  }

  finishDialogue();
}

function finishDialogue() {
  dialogueComplete = true;
  gameMessage.textContent = "";

  renderChoices(activeSceneChoices);

  if (activeSceneSpecial === "memoryPuzzle") {
    renderMemoryPuzzle();
  }
}

function renderChoices(choices) {
  choicesContainer.replaceChildren();
  choicesContainer.hidden = choices.length === 0;

  choices.forEach((choice) => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = choice.label;

    if (choice.className) {
      button.classList.add(choice.className);
    }

    button.addEventListener("click", () => {
      handleChoice(choice);
    });

    choicesContainer.appendChild(button);
  });
}

function handleChoice(choice) {
  if (choice.action === "restart") {
    resetGame();
    return;
  }

  if (choice.action === "home") {
    window.location.href = "index.html";
    return;
  }

  if (choice.next) {
    showScene(
      choice.next,
      choice.openChoices === true
    );
  }
}

function runSceneAction(actionName) {
  if (actionName === "collectFriendNote") {
    collectItem("friendNote");
  }

  if (actionName === "collectSketchbook") {
    collectItem("sketchbook");
  }
}

function collectItem(itemId) {
  if (state.inventory.has(itemId)) {
    renderInventory();
    return;
  }

  state.inventory.add(itemId);
  renderInventory();

  showMessage(
    `${inventoryItems[itemId].name} was added to your inventory.`
  );
}

function renderInventory() {
  inventoryList.replaceChildren();

  inventoryCount.textContent =
    `${state.inventory.size} / 2`;

  if (state.inventory.size === 0) {
    const emptyItem = document.createElement("li");

    emptyItem.className = "empty-inventory";
    emptyItem.textContent = "No items collected yet.";

    inventoryList.appendChild(emptyItem);
    return;
  }

  state.inventory.forEach((itemId) => {
    const item = inventoryItems[itemId];
    const listItem = document.createElement("li");
    const itemButton = document.createElement("button");
    const itemName = document.createElement("strong");
    const itemDescription = document.createElement("span");

    itemButton.type = "button";
    itemButton.className = "inventory-item";
    itemButton.draggable = true;
    itemButton.dataset.itemId = itemId;

    itemButton.title =
      "Drag this item, or click it during the memory puzzle.";

    if (state.placedMemories.has(itemId)) {
      itemButton.classList.add("placed");
    }

    itemName.textContent = item.name;
    itemDescription.textContent = item.description;

    itemButton.append(
      itemName,
      itemDescription
    );

    itemButton.addEventListener(
      "dragstart",
      (event) => {
        event.dataTransfer.setData(
          "text/plain",
          itemId
        );

        event.dataTransfer.effectAllowed = "move";
      }
    );

    itemButton.addEventListener("click", () => {
      if (state.currentScene === "memoryGate") {
        placeMemory(itemId);
      } else {
        showMessage(
          `${item.name}: ${item.description}`
        );
      }
    });

    listItem.appendChild(itemButton);
    inventoryList.appendChild(listItem);
  });
}

function renderMemoryPuzzle() {
  memoryPuzzle.hidden = false;

  const hasSketchbook =
    state.inventory.has("sketchbook");

  const hasFriendNote =
    state.inventory.has("friendNote");

  const hasBothItems =
    hasSketchbook && hasFriendNote;

  if (hasBothItems) {
    puzzleInstructions.textContent =
      "Open Inventory. Drag both memories into the matching spaces, or click each inventory item to place it.";
  } else {
    puzzleInstructions.textContent =
      "You need both memories before your younger self will believe you. Collect the missing item, then return here.";
  }

  document
    .querySelectorAll(".memory-slot")
    .forEach((slot) => {
      const itemId = slot.dataset.accept;
      const status =
        slot.querySelector(".slot-status");

      const ownsItem =
        state.inventory.has(itemId);

      const isPlaced =
        state.placedMemories.has(itemId);

      slot.classList.toggle(
        "filled",
        isPlaced
      );

      slot.classList.toggle(
        "missing",
        !ownsItem
      );

      if (isPlaced) {
        status.textContent = "Memory placed ✓";
      } else if (!ownsItem) {
        status.textContent = "This item is missing";
      } else {
        status.textContent = "Drop item here";
      }
    });

  shareMemoriesButton.disabled = !(
    state.placedMemories.has("sketchbook") &&
    state.placedMemories.has("friendNote")
  );

  renderMemoryPuzzleChoices(
    hasSketchbook,
    hasFriendNote
  );
}

function renderMemoryPuzzleChoices(
  hasSketchbook,
  hasFriendNote
) {
  choicesContainer.replaceChildren();
  choicesContainer.hidden = true;

  if (!hasSketchbook) {
    addDynamicChoice(
      "Search for the sketchbook",
      "childhoodHome",
      true
    );
  }

  if (!hasFriendNote) {
    addDynamicChoice(
      "Return to the sunset bench",
      "sunsetBench",
      true
    );
  }

  if (!hasSketchbook || !hasFriendNote) {
    addDynamicChoice(
      "Talk to your younger self again",
      "youngerSelf",
      false
    );
  }
}

function addDynamicChoice(
  label,
  nextScene,
  openChoices = false
) {
  const button = document.createElement("button");

  button.type = "button";
  button.textContent = label;

  button.addEventListener("click", () => {
    showScene(nextScene, openChoices);
  });

  choicesContainer.appendChild(button);
  choicesContainer.hidden = false;
}

function placeMemory(itemId) {
  if (state.currentScene !== "memoryGate") {
    return;
  }

  if (!state.inventory.has(itemId)) {
    showMessage(
      "You have not collected this memory yet."
    );

    return;
  }

  if (state.placedMemories.has(itemId)) {
    showMessage(
      `${inventoryItems[itemId].name} is already in place.`
    );

    return;
  }

  state.placedMemories.add(itemId);

  renderInventory();
  renderMemoryPuzzle();

  showMessage(
    `${inventoryItems[itemId].name} was placed beside your younger self.`
  );
}

document
  .querySelectorAll(".memory-slot")
  .forEach((slot) => {
    slot.addEventListener(
      "dragover",
      (event) => {
        event.preventDefault();
        slot.classList.add("drag-over");
      }
    );

    slot.addEventListener(
      "dragleave",
      () => {
        slot.classList.remove("drag-over");
      }
    );

    slot.addEventListener(
      "drop",
      (event) => {
        event.preventDefault();

        slot.classList.remove("drag-over");

        const itemId =
          event.dataTransfer.getData("text/plain");

        if (itemId !== slot.dataset.accept) {
          showMessage(
            "That memory belongs in the other space."
          );

          return;
        }

        placeMemory(itemId);
      }
    );
  });

shareMemoriesButton.addEventListener(
  "click",
  () => {
    const puzzleIsComplete =
      state.placedMemories.has("sketchbook") &&
      state.placedMemories.has("friendNote");

    if (puzzleIsComplete) {
      showScene("sharedMemories");
    }
  }
);

gameContainer.addEventListener(
  "click",
  (event) => {
    const clickedControl =
      event.target.closest(
        "button, a, summary, details, .inventory, .memory-puzzle, .game-menu"
      );

    if (!clickedControl) {
      advanceDialogue();
    }
  }
);

document.addEventListener(
  "keydown",
  (event) => {
    const canAdvance =
      (event.key === " " ||
        event.key === "Enter") &&
      !dialogueComplete &&
      !gameMenu.open;

    if (canAdvance) {
      event.preventDefault();
      advanceDialogue();
    }
  }
);

function showMessage(message) {
  gameMessage.textContent = message;
}

function resetGame() {
  state.inventory.clear();
  state.placedMemories.clear();

  inventoryDetails.open = false;

  renderInventory();

  if (gameMenu.open) {
    gameMenu.close();
  }

  showScene("prologue");
}

menuButton.addEventListener("click", () => {
  if (
    typeof gameMenu.showModal === "function"
  ) {
    gameMenu.showModal();
  } else {
    gameMenu.setAttribute("open", "");
  }
});

resumeButton.addEventListener("click", () => {
  gameMenu.close();
});

restartButton.addEventListener(
  "click",
  resetGame
);

gameMenu.addEventListener(
  "click",
  (event) => {
    if (event.target === gameMenu) {
      gameMenu.close();
    }
  }
);

const imagePaths = [
  ...new Set(
    Object.values(scenes).map(
      (scene) => scene.image
    )
  )
];

imagePaths.forEach((path) => {
  const image = new Image();
  image.src = path;
});

renderInventory();
showScene("prologue");