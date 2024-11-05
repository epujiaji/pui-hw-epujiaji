<mark>**Note that this document order from FP4 -> FP1**</mark>

<mark>Please sign up for the study</mark> at [https://tinyurl.com/pui-study](https://tinyurl.com/pui-study) to allow us to use your submission to create a better GenAI assistant for designers!

---

# **FP4 \- Final Project Writeup**

Feel free to refer to this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) to make your writeup more organized, and you can preview your markdown file in VSCode [Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview). 


## Part 1: Website Description

Describe your website (300 words).

* What is the purpose of your website?   
* Who is the target audience?  
* What information do you convey with your website?   
* How is it interesting and engaging? 

## Part 2: User Interaction

How a user would interact with your website? For each step, briefly but clearly state the interaction type & how we should reproduce it.

1. Interaction type. Click on X on page Y / scroll on page X, etc.  
2. 

## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. Name of tool1  
   * Why did you choose to use it over other alternatives? (2 sentences max)  
   * How you used it? (2 sentences max)  
   * What does it add to your website? (2 sentences max)  
2. Name of tool2

## Part 4: Design Iteration

Describe how you iterated on your prototypes, if at all, including any changes you made to your original design while you were implementing your website and the rationale for the changes. (4-8 sentences max)

## Part 5: Implementation Challenge

What challenges did you experience in implementing your website? (2-4 sentences max)

## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write \~500 words in total).

Document your use of all GenAI tools — ChatGPT, Copilot, Claude, Cursor, etc. using the template below. Add/Delete rows or bullet points if needed, and replace Tool1/Tool2 with the name of the tool.

### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Tool1 | Usage | Yes/No | Yes/No | Yes/No | Yes/No | Yes/No |
| Tool1 | Productivity | 1~7 | 1~7 | 1~7 | 1~7 | 1~7 |
| Tool2| Usage | Yes/No | Yes/No | Yes/No | Yes/No | Yes/No |
| Tool2 | Productivity | 1~7 | 1~7 | 1~7 | 1~7 | 1~7 |


### Usage Reflection

> Impact on your design and plan 
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. Tool1: 
  2. Tool2:
* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. Tool1: 
  2. Tool2:
* GenAI tool did/did not influence my final design and implementation plan because … For example, 
  1. Tool1: 
  2. Tool2:

> Use patterns
* I accepted the generations when …  For example, 
  1. Tool1: this tool once suggested … and I adjusted my design according to the suggestion because … 
  2. Tool2: 
* I critiqued/evaluated the generated suggestions by … For example, 
  1. Tool1: this tool once suggested … but I modified/rejected the suggestion because … 
  2. Tool2: 


> Pros and cons of using GenAI tools
* Pros
  1. Tool1: 
  2. Tool2:
* Cons
  1. Tool1: 
  2. Tool2:


### Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

1. [ChatGPT](https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq) / [Gemini](https://support.google.com/gemini/answer/13743730?hl=en&co=GENIE.Platform%3DDesktop): share the anonymous link to all of your chat histories relevant to this project
2. [GitHub Copilot (VSCode)](https://code.visualstudio.com/docs/copilot/copilot-chat#:~:text=You%20can%20export%20all%20prompts%20and%20responses%20for%20a%20chat%20session%20in%20a%20JSON%20file%20with%20the%20Chat%3A%20Export%20Session...%20command%20(workbench.action.chat.export)%20in%20the%20Command%20Palette.): export chat histories relevant to this project.

---

# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

## Implementation Plan Updates

- [ ] ...

## Generative AI Use Plan Updates

- [ ] ...

Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

---

# **FP2 \- Evaluation of the Final project**

## Project Description

Briefly restate your motivation and a short description of your project.

## High-Fi Prototypes

### *Prototype 1*

![title for prototype1](images/prototype1.png)

A brief description and summary of the user feedback (\<100 words, 2 images) 

### *Prototype 2*

…

## Usability Test

Discuss the user feedback you got during the evaluation / usability test (\~300 words). Indicate which feedback you implemented, inspired new directions, or otherwise influenced your final design. 

## Updated Designs

<<<<<<< HEAD
![Interaction hint - changing color on letter](images/new1.png)
![Interaction hint - changing color on envelope](images/new2.png)

In this updated prototype, there are two changes I implemented based on user feedback. The first is adding visual hints that the second letter can be interacted with. I did this by making the letter change color upon hovering, into blue, so the players are prompted to click the peeking page. This aims to reduce confusion and uncertainty. Second, I changed the interaction points where users can click. Instead of clicking on the words, I made the letters on the table clickable, enlarged upon hovering, and change colors. I also included a trashcan image in the first branch screen to visualize the choices better. This way, it enhances the novelty and fun aspects of the game. Lastly, on the start page, I also implemented a similar color changing transition upon hover to show the word can be interacted with. These interaction hints will be principles that I bring as a learning from testings into my project.

The full completed prototype can be accessed here: https://www.figma.com/proto/jPtObzbTRz4VJGTUIODZdS/FP2?node-id=173-877&t=jdJb7SuKhza0US2v-1 

[Video Demo](images/letters.mp4)

=======
Show screenshots of your updated design based on the user feedback (\<100 words, \~2 images).
>>>>>>> parent of 452c99a (fp2)

## Feedback Summary

Summarize the feedback you received in the lab session and discuss how it influenced your design (\~300 words). 

## Milestones

Outline weekly milestones to plan your expected implementation progress until the end of the semester (\~300 words). 

### *Implementation Plan*

- [ ] Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due
  - [ ] ...
  
- [ ] Week 10 Nov 4 \- Nov 8:   
  - [ ] FP2 due

- [ ] Week 11 Nov 11 \- Nov 15:  
- [ ] Week 12 Nov 18 \- Nov 22:   
- [ ] Week 13 Nov 25 \- Nov 29:  

  - [ ] Thanksgiving  
- [ ] Week 14 Dec 2 \- Dec 6:  
  - [ ] FP4 due 

### *Libraries and Other Components*

List the JS libraries and other components (if applicable) that you plan to use. 
* 


## Generative AI Use Plan

Outline how you plan to use Generative AI tools to aid in the implementation (\~300 words).

### *Tool Use*

 What would you use? Edit the list given your plan. For each tool, explain briefly on what do you expect Generative AI to help you with and what might it not be able to help you with.

* ChatGPT  
  * I will use it for … because it can help me …  
  * I will not use it for … because it might not be able to help me with …   
* GitHub Copilot  
* ...

### *Responsible Use*

How would you use Generative AI responsibly? 

---

# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1: Letters for the Road*

![Letters for the Road](images/lftr.jpeg)

**Letters for the Road** is a choice-based text story game – an interactive experience where players navigate through the site an adventurer who goes through a journey, and will witness different narrative outcomes based on choices they pick.

In order to make the design interactive and engaging, I plan to use animations and graphics to immerse players into the story. For example: shaking text when there’s an earthquake, “shuffling” letters when encountering a magical illusion, or flipping letters when revealing a mystery. The visuals will be minimum, instead opting for driving engagement by key presses, mouse movement/hover, and clicks. For the content, I have to prepare the story, plot branches, and plan out interactions that fit the context.

I still have to ensure its accessibility since there will be many moving parts that create many stimulus (might be overwhelming for some audience).

References: Roadwarden


### *Idea 2: Scenes & Shelves*

![Scenes & Shelves](images/s&s1.jpeg)
![Scenes & Shelves](images/s&s2.jpeg)

**Scenes & Shelves** is a content-logging tool that enable users to log any form of media they consume on a daily basis, see an overview of tags and ratings, and track what they watch/read/listen to in a period of time. This will be useful for reflecting and looking back on what media they enjoy the most.

It will include a **Log** page to fill entries, a **Recap** page on a weekly/monthly basis when users have logged enough entry (like Spotify Wrapped), and or a **Profile Overview** that looks like a gallery.

Since this is a tool I imagine users can use daily, interactivity and accessibility will go hand in hand to ensure ease of access. I will prioritize functionality over too much aesthetics. However, I'm still unsure on how to cater different forms of media and still make the design feel uniform, e.g logging a podcast episode VS TV series. How would that translate visually?

References: Letterboxd, Serializd, Goodreads, MyAnimeList


### *Idea 3: Spice of Life*

![Spice of Life](images/sol1.jpeg)
![Scenes & Shelves](images/sol2.jpeg)

**Spice of Life** is an informational site explaining about spices, especially those used in Southeast Asian cooking. Users will enter a digital “spice cabinet” or kitchen/pantry where they can interact with visual objects.

To drive interactivity and engagement, users will be able to explore the spice cabinet as an environment. For example, they will be able to click/hover to show the spice’s origin, different names, usage across countries, examples of cooking in which it is used, how to process/chop/use it, etc.

However, as this site will rely on visuals and graphics to aid information, I still wonder how to fit so many information into one seamless experience without overloading users. I'm also wondering about the accessibility part.



## Feedback Summary

I gained many useful feedback for all three of my ideas. 

Comments for my first idea, **Letters for the Road**, are the most helpful. It is said that this concept will help exhibit my skills in usability and interaction design, matching it with my newly gained programming knowledge. This idea will also be highly iterative and allow me to start small, with the minimum viable version, and develop it incrementally if the time permits. Meanwhile, my concerns about accesibility can be addressed by referring to existing standards and guidelines like the WCAG for each separate interaction type. Aside from that, I can also add alt texts to represent visual interactions, and ensure screen reader and multi-device access in my code structure.

For **Scenes & Shelves**, I got a valuable input to help make the logging experience more uniform — that is, to not vary the categorization by media type, but other indicators such as how the user feels after consuming said content. A ‘Mood’ tag might help  for this, as well as incorporating a visual identity to aid engagement and appeal. However, I do have to pay close attention to existing online tools that already serve this, and identify current pain points in those platforms so my design addresses them and does not repeat the same mistake. Also, it was noted that this idea might be quite ambitious if it is to be realized in its entirety, so I will have to define milestones or even simplify/pare down some elements in order to keep this idea feasible if I am to do it. I have to be aware of my own capabilities and be flexible for the execution.

For **Spice of Life**, a feedback is to leverage  not only basic interaction such as hover, but also other levers such as animations, to avoid a monotonous experience. However, my concerns about information overload and accessibility remains a challenge. My biggest hurdle here is to figure out not only simplifying the amount of information and interface, but also to come up with visual assets that look engaging and easily digestible. I will have to look for visual libraries or utilize other tools. Since the primary goal of the site is to inform and share, maintaining high-quality visuals is essential.

## Feedback Digestion


The feedbacks I’ve gained are very useful and thus showed me which idea would be the most viable for this course deliverable. Right now, I am more firm to move forward with **Letters for the Road**. Some reasons are:
* Being iterative is important; it lets me gauge my capability and adapt as needed, while retaining a minimum deliverable. This idea is the most I can build upon compared to the other two.
* I can focus on my strength—writing—while pairing it with programming and interaction design. I’m better at crafting storylines and plot. Combined with designing a good visual experience through code, it can be an even stronger deliverable that is kept simple but effective, compared to making something extra large and amazing.
* In my head, this idea can manifest in a simpler way, focusing on the “experience” through the quality of the story. I want to try and immerse users through simple buildups and things as granular as a key press.
* I was initially interested in Scenes & Shelves because I had a clearer idea of what it would look like, but I agree that it might be too ambitious, since it’s hard to realize halfway and would need to be completed in its entirety. Besides, I’d have to build it from scratch and evaluate similar platforms to improve on them—a task that is probably too big and not the main aim for this course. The idea itself isn’t iterative enough.
* Spice of Life feels really unique to me, but the content itself might not be too original if I aim to put this in my portfolio. Users can easily come across similar info through a quick search. I’d have to lean on the visual experience more, and that’s a concern because I’m not a strong sketcher or visual designer. Since I do not have the capability to sketch the assets myself, I’d need to rely on libraries or tools, and it could take time away from what the actual goals of this course—implementing usability and interaction design in programming.