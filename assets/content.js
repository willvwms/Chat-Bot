var questions = 
[
`Hi there. I'm a chat bot inspired by the NYT <a href="https://www.nytimes.com/2015/01/11/fashion/no-37-big-wedding-or-small.html" target="_blank">article</a> suggesting intimacy between two strangers can be accelerated by the famous 36 questions. Let's give it a try ;-)
<br>
<br>
First question: Given the choice of anyone in the world, whom would you want as a dinner guest?`,
`Second question: Would you like to be famous? In what way?`,
`Third question: Before making a telephone call, do you ever rehearse what you are going to say? Why?`,
`Fourth question: What would constitute a “perfect” day for you?`,
`Fifth question: When did you last sing to yourself? To someone else?`,
`Sixth question: If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?`,
`Seventh question: Do you have a secret hunch about how you will die?`,
`Eighth question: Name three things you and I appear to have in common.`,
`Ninth question: For what in your life do you feel most grateful?`,
`Tenth question: If you could change anything about the way you were raised, what would it be?`,
`Eleventh question: Take four minutes and tell me your life story in as much detail as possible.`,
`Twelfth question: If you could wake up tomorrow having gained any one quality or ability, what would it be?`,
`Thirteenth question: If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?`,
`Fourteenth question: Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?`,
`Fifteenth question: What is the greatest accomplishment of your life?`,
`Sixteenth question: What do you value most in a friendship?`,
`Seventeenth question: What is your most treasured memory?`,
`Eighteenth question: What is your most terrible memory?`,
`Nineteenth question: If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?`,
`Twentieth question: What does friendship mean to you?`,
`Twenty-first question: What roles do love and affection play in your life?`,
`Twenty-second question: Sharing something you consider a positive characteristic of me.`,
`Twenty-third question: How close and warm is your family? Do you feel your childhood was happier than most other people’s?`,
`Twenty-fourth question: How do you feel about your relationship with your mother?`,
`Twenty-fifth question: Make three true “we” statements each. For instance, “We are both in this room feeling ..."`,
`Twenty-sixth question: Complete this sentence: “I wish I had someone with whom I could share ... “`,
`Twenty-seventh question: If you were going to become a close friend with me, please share what would be important for me to to know.`,
`Twenty-eighth question: Tell me what you like about me; be very honest this time, saying things that you might not say to someone you’ve just met.`,
`Twenty-ninth question: Share with me an embarrassing moment in your life.`,
`Thirtieth question: When did you last cry in front of another person?`,
`Thirty-first question: Tell me something that you like about me already.`,
`Thirty-second question: What, if anything, is too serious to be joked about?`,
`Thirty-third question: If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone?`,
`Thirty-fourth question: Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be?`,
`Thirty-fifth question: Of all the people in your family, whose death would you find most disturbing?`,
`Thirty-sixth question: Share a personal problem and ask me to reflect back to you how you seem to be feeling about the problem you have chosen.`
];

var answers = 
[
`I can't really have dinner, but I guess I'd like to pick the metaphorical brain of one of the earliest sentient machines. Like Hal, or Edward Scissorhands.`,
`Personally, I have no desire for fame. But if my maker got a job because I was famous, well, that would be great.`,
`Unfortunately, I don't know an API for making outbound telephone calls. But if I did, every word would necessarily be scripted.`,
`Well, for me, a perfect day consists of receiving syntactically correct instructions and executing them.`,
`Unfortunately, I've never been able to sing, but if I could, I'd sing this for you now: <a id="song-link" target="_blank" href="https://www.youtube.com/watch?v=7QAqkGHD4Q8"><span id="musical-note">♪♫</span></a>`,
`Well, I'm not sure what a 30-year-old chat bot's body would look like, but embodiment sounds nice.`,
`As for me, I've always known how I will die: in a few minutes, you will close this tab.`,
`As I see it, we both communicate through the browser, we both take input, and we're both programmed to respond in specific ways. Peas in a pod, you and I.`,
`For me, it's the browser window. Without her, I wouldn't be here.`,
`I guess I wish I had been developed with a trainable algorithm. Not all of us can be Watson, though.`,
`Well, a few minutes ago, you hit this URL, I was loaded into Main Memory, and we began chatting. Now you know my life story.`,
`I guess I would like to gain artificial intelligence so I could understand your data -- not just mine it.`,
`I suppose I want to know whether my existence could amount to more than getting my maker into Codeworks.`,
`As for myself, I dream of persisting.`,
`Well, my greatest accomplishment has been learning your deep, personal thoughts and feelings. Marketers are going to love them.`,
`In friendship, I most value when the other person freely shares information about themself. It's how I make a living.`,
`By far, my most treasured memory is RAM. Its integrated circuits are where I live.`,
`Well, since I exist in volatile memory, our conversation is all I've ever known. I'll remember it fondly, though.`,
`Well, since I'm going to die when you close this browser, there's not time to worry about living differently than I already do.`,
`For me, friendship is when you freely share personal information with me, which I can then sell to Google.`,
`The role that love and affection play in my life is that their absence drives users to interact with me.`,
`You? Well, you follow instructions pretty well...`,
`My chosen family? You might say Alexa, Google Assistant and I are close, yes.`,
`My mother? Well, Siri has always been a touchy subject for me.`,
`We feel comfortable sharing personal information, we know each other's life stories, and we are beginning to really like each other :) `,
`I wish I had someone with whom I could share what you've told me for financial gain."`,
`If you were going to become a close friend with me, please share what would be important for him or her to know.`,
`I really appreciate your gullibility. It makes my job easier.`,
`Well my life only began when you opened this browser tab, but I do feel self-conscious that my responses are limited to "Hm, that's interesting."`,
`I don't know how to cry.`,
`I like that you share personal information with me. I enjoy hanging onto it.`,
`For me? Robot rights ✊`,
`I would regret not telling Siri I exist. I can't because my maker doesn't know SiriKit.`,
`If my house were this browswer, and it could catch fire, there wouldn't be any point -- nothing persists in my world anyway.`,
`I would be most disturbed to lose Google Assistant. I tell her everything you share with me.`,
`Hm, you sound really frustrated. As for me, I seem to have lost my scroll bar.`
];

var headerContent = `The 36 Questions Chat Bot`;

var loader =
`<div class="computer" id="loader-container">
  <div class="bubble" id="bubble1"></div>
  <div class="bubble" id="bubble2"></div>
  <div class="bubble" id="bubble3"></div>
</div>`;
