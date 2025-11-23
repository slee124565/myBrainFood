November 13, 2025 Research

# SIMA 2: An Agent that Plays, Reasons, and Learns With You in Virtual 3D Worlds

[GPT 翻譯導讀](https://chatgpt.com/share/691b2861-3da0-8004-8841-a4ebeda25678)

[](https://twitter.com/intent/tweet?url=https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/&text=SIMA%202%3A%20An%20Agent%20that%20Plays%2C%20Reasons%2C%20and%20Learns%20With%20You%20in%20Virtual%203D%20Worlds)[](https://www.facebook.com/sharer/sharer.php?u=https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/)[](https://www.linkedin.com/sharing/share-offsite/?url=https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/)[](mailto:?subject=SIMA%202%3A%20An%20Agent%20that%20Plays%2C%20Reasons%2C%20and%20Learns%20With%20You%20in%20Virtual%203D%20Worlds&body=https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/)Copied

![A four-column representation of SIMA 2, a Gemini-powered AI agent, acting within a 3D virtual environment.](https://lh3.googleusercontent.com/oqE253tRR_rEr401Wac7gVZfmQaaq6KNOq2G0eCmUh8IrSqvcs3miosBnxv5_kW72pUCt1v6CCkT_CVOz1WX3C0aU-yEQVglpr-JpVbkVxpBAS79=w1440-h810-n-nu)

Last year, we [introduced](https://deepmind.google/discover/blog/sima-generalist-ai-agent-for-3d-virtual-environments/) SIMA (Scalable Instructable Multiworld Agent), a generalist AI that could follow basic instructions across a wide range of virtual environments. SIMA was a crucial first step in teaching AI to translate language into meaningful action in rich, 3D worlds.

Today we’re introducing SIMA 2, the next milestone in our research creating general and helpful AI agents. By integrating the advanced capabilities of our [Gemini models](https://deepmind.google/models/gemini/), SIMA is evolving from an instruction-follower into an interactive gaming companion. Not only can SIMA 2 follow human-language instructions in virtual worlds, it can now also think about its goals, converse with users, and improve itself over time.

This is a significant step in the direction of Artificial General Intelligence (AGI), with important implications for the future of robotics and AI-embodiment in general.

chevron\_left

*   [Reasoning](#reasoning)
*   [Generalization](#generalization)
*   [Self-Improvement](#self-improvement)
*   [Next steps](#next-steps)
*   [Responsibility](#responsibility)

chevron\_right

## The Power of Reasoning

The first version of SIMA learned to perform over 600 language-following skills, like “turn left,” “climb the ladder,” and “open the map,” across a diverse set of commercial video games. It operated in these environments as a person might, by “looking” at the screen and using a virtual keyboard and mouse to navigate, without access to the underlying game mechanics.

With SIMA 2, we’ve moved beyond instruction-following. By embedding a Gemini model as the agent's core, SIMA 2 can do more than just respond to instructions, it can think and reason about them.

 Your browser does not support the video tag.

pause

MineDojo: SIMA 1 (left) attempts to follow the instruction while SIMA 2 (right) successfully completes the task in a game it has never seen before.

 Your browser does not support the video tag.

pause

ASKA: SIMA 1 (left) attempts to follow the instruction “Find a campfire” while SIMA 2 (right) successfully completes the task in a game it has never seen before.

SIMA 2’s new architecture integrates Gemini’s powerful reasoning abilities to help it understand a user’s high-level goal, perform complex reasoning in pursuit, and skillfully execute goal-oriented actions within games.

We trained SIMA 2 using a mixture of human demonstration videos with language labels as well as Gemini-generated labels. As a result, SIMA 2 can now describe to the user what it intends to do and detail the steps it's taking to accomplish its goals.

Slide 1 of 3

 Your browser does not support the video tag.

play\_arrow

Moving beyond simple instruction following: SIMA 2 can answer the user’s questions and also reasons about its own behavior as well as its environment.

 Your browser does not support the video tag.

pause

Moving beyond simple instruction following: SIMA 2 can answer the user’s questions and also reasons about its own behavior as well as its environment.

 Your browser does not support the video tag.

pause

Moving beyond simple instruction following: SIMA 2 can answer the user’s questions and also reasons about its own behavior as well as its environment.

chevron\_left chevron\_right

In testing, we have found that interacting with the agent feels less like giving it commands and more like collaborating with a companion who can reason about the task at hand.

And thanks to our collaboration with our existing and new game partners (see, Acknowledgements), we have been able to train and evaluate SIMA 2 on a wider array of games.

This is the power of Gemini brought to embodied AI: a world-class reasoning engine that can now perceive, understand, and take action in complex, interactive 3D environments.

Slide 1 of 4

 Your browser does not support the video tag.

play\_arrow

SIMA 2 interprets abstract concepts and logical commands by reasoning about its environment and the user's intent.

 Your browser does not support the video tag.

pause

SIMA 2 interprets abstract concepts and logical commands by reasoning about its environment and the user's intent.

 Your browser does not support the video tag.

pause

SIMA 2 interprets abstract concepts and logical commands by reasoning about its environment and the user's intent.

 Your browser does not support the video tag.

pause

SIMA 2 interprets abstract concepts and logical commands by reasoning about its environment and the user's intent.

chevron\_left chevron\_right

## A Leap in Generalization Performance

The addition of Gemini has also led to improved generalization and reliability. SIMA 2 can now understand more complex and nuanced instructions than its predecessor and is far more successful at carrying them out, particularly in situations or games on which it’s never been trained, such as the new Viking survival game, ASKA, or MineDojo - a research implementation of the popular open-world sandbox game, Minecraft.

### SIMA 2 can understand and accomplish long and complex tasks

Slide 1 of 4

 Your browser does not support the video tag.

play\_arrow

SIMA 2 is successful at carrying out long and complex instructions.

 Your browser does not support the video tag.

pause

SIMA 2 tackles a completely new game with no prior training, demonstrating impressive progress.

 Your browser does not support the video tag.

pause

SIMA 2 is successful at carrying out long and complex instructions.

 Your browser does not support the video tag.

pause

SIMA 2 is successful at carrying out long and complex instructions.

chevron\_left chevron\_right

### SIMA 2 understands multimodal prompts

Slide 1 of 3

 Your browser does not support the video tag.

play\_arrow

User is drawing a sketch on the screen.

 Your browser does not support the video tag.

pause

User is drawing a sketch on the screen.

 Your browser does not support the video tag.

pause

User is drawing a sketch on the screen.

chevron\_left chevron\_right

### SIMA 2 can understand different languages and even emojis

Slide 1 of 2

 Your browser does not support the video tag.

play\_arrow

See how it correctly interprets emojis to execute tasks.

 Your browser does not support the video tag.

pause

See how it follows commands in different languages to execute tasks.

chevron\_left chevron\_right

Moreover, its capacity to transfer learned concepts — for instance, taking its understanding of "mining" in one game and applying it to "harvesting" in another —is foundational to achieving the kind of broad generalization seen in human cognition. Indeed, as a result of this ability, SIMA 2’s performance is significantly closer to that of a human player on a wide range of tasks.

 Your browser does not support the video tag.

play\_arrow

SIMA 2 can generalise actions across multiple games, including games it wasn’t trained on (like MineDojo and ASKA).

![Task completion success rates for SIMA 1, SIMA 2, and humans across a set of evaluation tasks for all training game environments, showing SIMA 2 closing a significant portion of the gap to human performance. Note that the SIMA 1 performance reported here is with respect to our new, expanded, and much more difficult set of evaluations, across a wider set of environments and more complex instructions](https://lh3.googleusercontent.com/KwuGClFlsydWIS2azo2WjBWkMY-Hm3geOZAad00wP-CMtmWQa8DlpmqOMvXC6QKiPnEUBgtToVWnJ9rzz0O7dTcaVFhYOSggEugNVJBWVgc1hegDfg=w1440)

Task completion success rates for SIMA 1, SIMA 2, and humans across a set of evaluation tasks for all training game environments, showing SIMA 2 closing a significant portion of the gap to human performance. Note that the SIMA 1 performance reported here is with respect to our new, expanded, and much more difficult set of evaluations, across a wider set of environments and more complex instructions

remove

add

Task completion success rates for SIMA 1, SIMA 2, and humans across a set of evaluation tasks for all training game environments, showing SIMA 2 closing a significant portion of the gap to human performance. Note that the SIMA 1 performance reported here is with respect to our new, expanded, and much more difficult set of evaluations, across a wider set of environments and more complex instructions

Task completion success rates for SIMA 1, SIMA 2, and humans across a set of evaluation tasks for all training game environments, showing SIMA 2 closing a significant portion of the gap to human performance. Note that the SIMA 1 performance reported here is with respect to our new, expanded, and much more difficult set of evaluations, across a wider set of environments and more complex instructions

Task completion success rates for SIMA 1, SIMA 2, and humans across a set of evaluation tasks for all training game environments, showing SIMA 2 closing a significant portion of the gap to human performance. Note that the SIMA 1 performance reported here is with respect to our new, expanded, and much more difficult set of evaluations, across a wider set of environments and more complex instructions

![Task completion success rates for SIMA 1 and SIMA 2 on held-out (never before seen during training) games: Aska and MineDojo (a Minecraft research implementation).](https://lh3.googleusercontent.com/yad81RKXlxroZBsqlNdzrzWNTIWRMJqgryRDK8Vo2b_p0FtBNjJR3k3nSmq--cR3ebZj4RvpoSVHoPgQ7aZMW8U7VCEtJCOopKQnek06OTPtLs4rVF0=w1440)

Task completion success rates for SIMA 1 and SIMA 2 on held-out (never before seen during training) games: ASKA and MineDojo (a Minecraft research implementation).

remove

add

Task completion success rates for SIMA 1 and SIMA 2 on held-out (never before seen during training) games: ASKA and MineDojo (a Minecraft research implementation).

Task completion success rates for SIMA 1 and SIMA 2 on held-out (never before seen during training) games: ASKA and MineDojo (a Minecraft research implementation).

Task completion success rates for SIMA 1 and SIMA 2 on held-out (never before seen during training) games: ASKA and MineDojo (a Minecraft research implementation).

### The Ultimate Test: Playing in Newly-Imagined Worlds

To test the limits of SIMA 2’s generalization abilities, we combined it with another groundbreaking research project, [**Genie 3**](https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/), which can generate new, real-time 3D simulated worlds from a single image or text prompt.

When we challenged SIMA 2 to play in these newly generated worlds, we found it was able to sensibly orient itself, understand user instructions, and take meaningful actions toward goals, despite never having seen such environments before. It demonstrated an unprecedented level of adaptability.

Slide 1 of 4

 Your browser does not support the video tag.

play\_arrow

SIMA 2 plays in newly generated worlds by Genie 3.

 Your browser does not support the video tag.

pause

SIMA 2 plays in newly generated worlds by Genie 3.

 Your browser does not support the video tag.

pause

SIMA 2 plays in newly generated worlds by Genie 3.

 Your browser does not support the video tag.

pause

SIMA 2 plays in newly generated worlds by Genie 3.

chevron\_left chevron\_right

## Towards Scalable, Multitask Self-Improvement

One of SIMA 2’s most exciting new capabilities is its capacity for self-improvement. We’ve observed that, throughout the course of training, SIMA 2 agents can perform increasingly complex and new tasks, bootstrapped by trial-and-error and Gemini-based feedback.

For example, after initially learning from human demonstrations, SIMA 2 can transition to learning in new games exclusively through self-directed play, developing its skills in previously unseen worlds without additional human-generated data. In subsequent training, SIMA 2’s own experience data can then be used to train the next, even more capable version of the agent. We were even able to leverage SIMA 2’s capacity for self-improvement in newly created Genie environments – a major milestone toward training general agents across diverse, generated worlds.

![The SIMA 2 self-improvement cycle begins with Gemini providing an initial task and an estimated reward for SIMA 2's behavior. This information is then added to a bank of self-generated experience, which the agent uses for further training in subsequent generations. This process allows the agent to improve on previously failed tasks entirely independently of human-generated demonstrations and intervention.](https://lh3.googleusercontent.com/UsqTitVvxI5r3_oOUWFvWbJl9Wy-1Z8zhZOOZvt553hZ4Kx1ZvQfJs-OXL9ingzdu3LkG2B-1NMfcUTD0j9CfF3CHJsleG0O_9P3fJctY40IkeyV=w1440-h810-n-nu)

The SIMA 2 self-improvement cycle begins with Gemini providing an initial task and an estimated reward for SIMA 2's behavior. This information is then added to a bank of self-generated experience, which the agent uses for further training in subsequent generations. This process allows the agent to improve on previously failed tasks entirely independently of human-generated demonstrations and intervention.

remove

add

The SIMA 2 self-improvement cycle begins with Gemini providing an initial task and an estimated reward for SIMA 2's behavior. This information is then added to a bank of self-generated experience, which the agent uses for further training in subsequent generations. This process allows the agent to improve on previously failed tasks entirely independently of human-generated demonstrations and intervention.

The SIMA 2 self-improvement cycle begins with Gemini providing an initial task and an estimated reward for SIMA 2's behavior. This information is then added to a bank of self-generated experience, which the agent uses for further training in subsequent generations. This process allows the agent to improve on previously failed tasks entirely independently of human-generated demonstrations and intervention.

The SIMA 2 self-improvement cycle begins with Gemini providing an initial task and an estimated reward for SIMA 2's behavior. This information is then added to a bank of self-generated experience, which the agent uses for further training in subsequent generations. This process allows the agent to improve on previously failed tasks entirely independently of human-generated demonstrations and intervention.

This virtuous cycle of iterative improvement paves the way for a future where agents can learn and grow with minimal human intervention, becoming open-ended learners in embodied AI.

Slide 1 of 2

 Your browser does not support the video tag.

play\_arrow

ASKA: On the left, we see examples of tasks at which the initial SIMA 2 agent failed, and on the right, we see that SIMA 2 has self-improved over generations of training, entirely without any human feedback or gameplay data.

 Your browser does not support the video tag.

pause

Genie 3 environment: The agent is improving over one generation of training in a genie 3 environment it has never seen before.

chevron\_left chevron\_right

## Looking to the Future: The Journey to General Embodied Intelligence

SIMA 2’s ability to operate across diverse gaming environments is a crucial proving ground for general intelligence, allowing agents to master skills, practice complex reasoning, and learn continuously through self-directed play.

While SIMA 2 is a significant step toward generalist, interactive, embodied intelligence, it is fundamentally a research endeavor, and its current limitations highlight critical areas for future work. We find the agents still face challenges with very long-horizon, complex tasks that require extensive, multi-step reasoning and goal verification. SIMA 2 also has a relatively short memory of its interactions - it must use a limited context window to achieve low-latency interaction. Finally, executing precise, low-level actions via the keyboard and mouse interface and achieving robust visual understanding of the complex 3D scenes remain open challenges that the entire field continues to address.

This research provides a fundamental validation for a new path in action-oriented AI. SIMA 2 confirms that an AI trained for broad competency, leveraging diverse multi-world data and the powerful reasoning of Gemini, can successfully unify the capabilities of many specialized systems into one coherent, generalist agent.

SIMA 2 also offers a strong path toward application in robotics. The skills it learned - from navigation and tool use to collaborative task execution - are some of the fundamental building blocks for the physical embodiment of intelligence needed for future AI assistants in the physical world.

## Responsible Development

SIMA 2 is an interactive, human-centered agent that’s fun to engage with, particularly in the entertaining way it explains its own reasoning. As with all our advanced and foundational technologies, we remain deeply committed to developing SIMA 2 responsibly, from the outset. This is particularly true with regard to its technical innovations, particularly the ability to self-improve.

As we’ve built SIMA 2, we’ve worked with our Responsible Development & Innovation Team. As we continue to explore the potential applications, we are announcing SIMA 2 as a limited research preview and providing early access to a small cohort of academics and game developers. This approach allows us to gather crucial feedback and interdisciplinary perspectives as we explore this new field and continue to build our understanding of risks and their appropriate mitigations. We look forward to working further with the community to develop this technology in a responsible way.

**Learn more about SIMA**

SIMA Technical Report - Available soon

## Acknowledgements

This research was developed by the SIMA 2 team: Maria Abi Raad, John Agapiou, Frederic Besse, Andrew Bolt, Sarah Chakera, Harris Chan, Jeff Clune, Alexandra Cordell, Martin Engelcke, Ryan Faulkner, Maxime Gazeau, Arne Olav Hallingstad, Tim Harley, Ed Hirst, Drew Hudson, Laura Kampis, Sheleem Kashem, Thomas Keck, Matija Kecman, Oscar Knagg, Alexander Lerchner, Bonnie Li, Yulan Liu, Cong Lu, Maria Loks-Thompson, Joseph Marino, Kay McKinney, Piermaria Mendolicchio, Anna Mitenkova, Alexandre Moufarek, Fabio Pardo, Ollie Purkiss, David Reichert, John Reid, Tyson Roberts, Daniel P. Sawyer, Tim Scholtes, Daniel Slater, Hubert Soyer, Kaustubh Sridhar, Peter Stys, Tayfun Terzi, Davide Vercelli, Bojan Vujatovic, Jane X. Wang, Luyu Wang, Duncan Williams, and Lei M. Zhang.

For their leadership, guidance, and support, we thank: Satinder Singh Baveja, Adrian Bolton, Zoubin Ghahramani, Raia Hadsell, Demis Hassabis, Shane Legg, Volodymyr Mnih, and Daan Wierstra.

With much gratitude to partial contributors and past members: Alex Cullum, Karol Gregor, Rosemary Ke, Junkyung Kim, Matthew Jackson, Andrew Lampinen, Loic Matthey, Hannah Openshaw, and Zhengdong Wang.

Special thanks to all of the game developers who partnered with us: Coffee Stain (_Valheim, Satisfactory, Goat Simulator 3),_ Foulball Hangover (_Hydroneer),_ Hello Games (_No Man's Sky),_ Keen Software House (_Space Engineers),_ RubberbandGames (_Wobbly Life),_ Strange Loop Games (_Eco),_ Thunderful Games (_ASKA, The Gunk, Steamworld Build_), Digixart (_Road 96_), and Tuxedo Labs & Saber Interactive (_Teardown)._

We thank Vika Koriakin, Duncan Smith, Nilesh Ray, Matt Miller, Leen Verburgh, Ashyana Kachra, Phil Esposito, Dimple Vijaykumar, Piers Wingfield, Lucie Kerley for their invaluable partnership in developing and refining key components of this project.

We also thank Jack Parker-Holder, Shlomi Fruchter, and the rest of the Genie team for access to the Genie 3 model.

We’d like to recognize the many teams across Google and Google DeepMind that have contributed to this effort including Legal, Marketing, Communications, Responsibility and Safety Council, Responsible Development and Innovation, Policy, Strategy and Operations, and our Business and Corporate Development teams. We'd also like to thank all GDM teams that are not explicitly mentioned here for their continued support.

Finally, we dedicate this work to the memory of our colleagues Felix Hill and Fabio Pardo, whose contributions to our field continue to inspire us.

## Related posts

### Genie 3: a general purpose world model that can generate a diversity of interactive environments

August 2025

Google DeepMind

[

keyboard\_arrow\_right

Learn more

](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/?utm_source=ai.google&utm_medium=referral)

![](https://lh3.googleusercontent.com/ycmR8Tuc5lK3sHxZhVy70RI5i6zk34qcFNq83HIc3O9PjSk9SEW-Qktw_LSDvZFPh4-pSynIv1qfP-KVHMBbEwu1iZR3_SQAdXQSxZtV=w1440-h1440-n-nu)

### Gemini Robotics: 1.5 brings AI agents into the physical world

September 2025

Google DeepMind

[

keyboard\_arrow\_right

Learn more

](https://deepmind.google/blog/gemini-robotics-15-brings-ai-agents-into-the-physical-world/?utm_source=ai.google&utm_medium=referral)

![](https://lh3.googleusercontent.com/2kXVbJtc42vRNS-aG57aQQMvWMGYWzj07KqDQXTtRqS_vawz9S4wFWJWZyrCx1B74QxLOfda3g_IuZ1nvAknqsz5wNLr3PN709fbbs-1=w1440-h1440-n-nu)

