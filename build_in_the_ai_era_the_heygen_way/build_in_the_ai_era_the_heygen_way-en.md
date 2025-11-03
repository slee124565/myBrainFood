[

![圖片](https://pbs.twimg.com/media/G3X2UPDawAACS-O?format=jpg&name=small)





](/joshua_xu_/article/1978837502787219578/media/1978758438797885440)

Building in the AI Era: The HeyGen Way

13

34

133

[

14萬



](/joshua_xu_/status/1978837502787219578/analytics)

> How We Ride the Wave, Ship Fast, and Win in an Unstable World

  

## 

Table of Contents

*   What We're Building
    
*   Foreword
    
*   Part I: Core Philosophy
    
*   Part II: Our Rhythm
    
*   Part III: Operating Principles
    
*   Part IV: Team Structure & Universal Principles
    
*   Part V: Core Product Teams
    
*   Part VI: Growth Product Teams
    
*   Part VII: Communication Protocol
    
*   Part VIII: Anti-Patterns to Avoid
    
*   Part IX: Winning in Wartime
    
*   Conclusion
    

  

INTRODUCTION

# 

What We're Building: Visual Storytelling for Everyone

> Our Mission: Make visual storytelling accessible to all.

We've categorized videos into two types:

*   Communication Videos — business updates, tutorials, interviews, podcasts, explainers. These are designed to explain, inform, or communicate. (Best suited for script-based editing.)
    
*   Cinematic Videos — high production ads, films, music videos, trailers, high-end brand content. These are designed to move, inspire, or entertain. (Best suited for timeline editing.)
    

Our focus is on making Communication Videos accessible to everyone. When we say everyone, we mean every skill level, from first-timers to pros. Our product is simple enough for anyone to make a high-quality video in minutes.

  

FOREWORD

# 

Why This Book Exists

Traditional software development is dead. The foundations that once stayed still now shift under our feet. In the AI era, breakthroughs land every few months, and yesterday’s limits turn into tomorrow’s defaults.

At HeyGen, we don't fight this instability. We ride the wave. We've built our entire development philosophy around surfing AI advancement rather than seeking stable technical foundations that no longer exist.

This book documents how we think, build, and win. It's for every HeyGen team member—engineer, designer, PM—and for those who want to join us. This is how we work when the foundation constantly shifts beneath our feet and how we turn that instability into our competitive advantage.

  

PART I

# 

Core Philosophy

## 

Our Core Philosophy

> "Move fast and be the absolute best. Ride the AI wave, embrace research uncertainty, bet six months ahead, and build flexible products that upgrade themselves as models improve, without sacrificing quality."

## 

The Fundamental Shift: From Foundation to Wave

In the AI era, we operate without a stable technology foundation. Every few months, the AI technology evolves dramatically. Model capabilities are unknown and changing rapidly.

We’re operating in a once-in-a-generation technology window. In the next 12 months, AI represents the wartime opportunity of our generation. We have a chance to build the next Google or Facebook. The opportunity is exploding right now. We should turn up the intensity to maximum level. That's the reason everyone joins HeyGen and that's why we're here.

> Critical Distinction: When we say "embrace instability," we mean the underlying AI technology foundation—models, capabilities, research breakthroughs. We never accept instability in our service uptime, product quality, or user experience. Our products must remain rock-solid reliable even as the AI technology foundation beneath them shifts constantly.

This isn't a bug. It's our opportunity. We ride the wave instead of fighting the current.

Traditional Era:

*   Build on stable foundations
    
*   Optimize for longevity
    
*   Plan 12-18 months ahead
    
*   Polish, then ship
    
*   Sequential development
    

AI era (Our Way):

*   Ride the technology wave
    
*   Build for automatic improvement
    
*   Plan 2 months realistically (aligned with model upgrade cycles)
    
*   Ship to learn
    
*   Parallel experimentation
    

## 

How This Differs from Agile Development

Traditional Agile assumes relatively stable technology with predictable capabilities. We work in an environment where the foundational technology changes every few months. Our approach extends Agile principles but optimizes for technology instability rather than stable iteration cycles.

## 

The Wave Rider's Advantage

Competitors chase stable ground and get blindsided by the next leap. We design for automatic improvement as models advance and choose to surf the wave, not fight it.

Understanding what changes vs. what stays constant: It's important for us to understand what components might change in the near term (models, capabilities) and what are not likely to change (user workflows, core problems), and build our products/systems around the things that don't change while riding the wave of model improvement.

Examples of wave-riding opportunities:

*   In-context learning vs. fine-tuning vs RAG approaches
    
*   Post-processing improvements in voice models
    
*   Multi-vendor system optimizations
    

## 

The Quality Paradox

We move fast AND be the absolute best. This seems contradictory until you understand: moving fast allows us to build better quality in the long run and deliver customer value faster. When competitors ship one feature per month, we ship five experiments. We learn five times faster. That learning compounds into superior products.

Moving fast doesn't mean shipping features quickly—it means delivering customer value quickly (and learning quickly). Speed serves the ultimate goal of being the absolute best.

For video content especially, quality is non-negotiable. Users don't love products because of polished UI—they love products that solve their problems with exceptional quality. Our success metric: the average video quality any user can achieve on our platform.

  

PART II

# 

Our Rhythm

## 

Our Rhythm: The 2-Month Wave Cycle

Why 2 months? This aligns with model upgrade cycles and allows for rapid strategy adjustments while maintaining focus.

Our Rhythm:

*   2-month roadmap planning — Synchronized with AI advancement cycles. Deep dive on product recap and strategy with leadership, tech leads, and PMs (design optional but encouraged). Held ideally in person to maximize throughput and break through noise. Full transparency and intellectual honesty about our performance, with strategy adjustments as needed.
    
*   6-12 month strategic bets — Predicting and preparing for the next big breakthroughs
    
*   Bi-weekly commitment lists — Product and Engineering jointly decide and prioritize what each team commits to for specific deliverables
    
*   Daily shipping — Improvements, features, or experiments go live every day
    

> The Philosophy: Short cycles keep us aligned with the pace of AI development. Long enough to build meaningful things, short enough to adapt when the technology landscape shifts.

## 

Running Wave-Riding Experiments

Important Note: This framework applies more to existing product and growth areas, but less to new features and research areas where longer exploration may be needed.

*   Day 1: Define hypothesis and success metrics
    
*   Day 2: Build MVP (truly minimal)
    
*   Days 3-5: Ship to subset of users
    
*   Week 2: Analyze, learn, decide next steps
    

Good Experiments Are:

*   Fast (days, not weeks)
    
*   Scientific and data-driven
    
*   Provide clear signals: proceed, pivot, or stop
    
*   Big swings over small tweaks (we're not mature enough for optimization)
    

Failed Experiments:

*   Most experiments fail—this is expected
    
*   Failure with learning = victory
    
*   Failure without learning = actual failure
    
*   Never run experiments so long you can't conclude
    

## 

Making Wave-Speed Decisions

Framework: Is this a one-way or two-way door?

*   One-way doors: Careful deliberation (rare)
    
*   Two-way doors: PM decides quickly, test immediately (common)
    
*   When debating: Can we test this? If yes, stop talking and experiment
    

Decision Communication:

*   Communicate via Slack immediately with clear single-person accountability and execution timing
    
*   Full transparency between teams
    
*   Share context, not just the plans
    
*   Clearly explain who should be communicated to for each decision
    

## 

The 6-Month Crystal Ball

While we plan realistically for 2 months, we must predict 6-12 months ahead for strategic bets. This requires:

*   Following AI research breakthroughs
    
*   Understanding compute trends
    
*   Anticipating model capabilities
    
*   Building flexible architectures that benefit from future improvements
    

## 

Managing Technical Debt While Moving Fast

Core Principle: Build for flexibility and replaceability

*   Build abstraction layers that expect change (caveat: don't over-abstract when it's not ready)
    
*   Document assumptions, not implementations
    
*   Version everything aggressively
    
*   Design systems that improve when models do
    

Time Allocation for Technical Debt:

Our principle: Treat technical debt reduction as an investment in future velocity. We celebrate technical debt reduction efforts that measurably improve team productivity and system reliability. Technical debt work should be clearly connected to business outcomes and velocity improvements.

  

PART III

# 

Operating Principles

## 

1\. Speed Is Everything (No Compromises)

> The New Reality: In the AI era, the team that learns fastest wins. Period.

*   Ship in days, not weeks
    
*   When in doubt, ship an experiment
    
*   Momentum matters more than perfection
    
*   Moving slow is the only unforgivable sin
    

Practical Application:

*   MVP for testing ideas, not final products
    
*   Good enough to validate > perfect but late
    
*   Ship imperfect, then follow up: sunset if it doesn't work, or improve until it's the best if users care
    
*   Bugs are worse than imperfect features (bugs prevent learning)
    

Speed Is an Attitude

Speed isn't just about raw execution. It's about mindset. We don't say "Let's wait until Monday to ship this so it's safe." This reveals lack of urgency, lack of desire to learn faster (2-3 days of valuable data lost), weak ownership, and doubt in execution ability. This mindset prevents us from winning. Winners own, ship, learn, and adapt, fast.

Bias for Action > Being Perfect

If you're optimizing for being right, you're moving too slow. Don't fear being wrong. Fear being too slow to learn.

## 

2\. Embrace the Technology Wave

Stop chasing technology stability. It doesn't exist. The AI foundation will change every 2 months. Design your products to automatically improve when models do. Build abstraction layers that expect change. Make your product experience ride on top of AI advancement, not despite it.

## 

3\. Disagree and Commit

We're in wartime, not peacetime. Everyone contributes ideas and feedback, but decisions must be fast. Once made, we fully commit, even if we disagreed. Strategy flaws from lack of commitment are worse than imperfect decisions we can quickly correct.

## 

4\. User Value Through Innovation

Users love products that solve problems, not pretty interfaces. Innovation and user love are tightly coupled. We innovate how people create videos with AI, building magical experiences that weren't possible before. But innovation without solving real problems is worthless.

The Onboarding Challenge:

*   AI products have vast capability variance based on user skill
    
*   Our responsibility: Teach use cases, not just features
    
*   Success = average quality any user can achieve
    
*   Measure video quality, not just video creation
    

## 

5\. Build vs. Buy: One Simple Rule

Whatever provides the best user experience, we do that.

*   Built in-house: Avatar video models (no external provider meets our quality bar)
    
*   External providers: Voice (good enough quality, resource constraints)
    
*   No ego, just results
    

  

PART IV

# 

Team Structure & Universal Principles

## 

A. Universal Team Structure

All teams follow the same core structure: PM + Engineering + Design + Data Science

## 

B. Universal Role Definitions

## 

Product Managers: The Orchestrators

Core Responsibilities (All PMs):

*   Primary driver for decisions and priority setting
    
*   Work directly with leadership on strategy
    
*   Own the "why" behind every feature
    
*   Coordinate across engineering, data science, design
    

PM Capabilities:

*   Create functional MVPs and UX prototypes
    
*   Simplify technology abstractions for users
    
*   Lead the prototype-first approach
    

AI-Era Evolution:

*   Build functional prototypes, skip traditional specs
    
*   Use Figma designs or UX prototypes as documentation
    
*   Plan for capabilities that don't exist yet
    
*   Be very familiar with all the AI tools in the market and use them daily
    

## 

Engineers: The Rapid Builders

Core Responsibilities:

*   Build and execute on decisions at maximum speed
    
*   Provide technical insights PMs might miss
    
*   Architect for flexibility and rapid iteration
    
*   Deeply understand the "why" behind problems
    

AI-Era Focus:

*   Code with AI assistants (Cursor, ChatGPT, etc.) to amplify speed. We used to talk about 10x engineers in our industry. I'm not sure about 10x, but with AI code pilot tools, everyone is at least 3x more productive than 2 years ago.
    
*   Build prototypes that can evolve into production systems
    
*   Focus on building, not documentation
    
*   Partner directly with PMs for rapid prototyping
    

## 

Designers: The Simplifiers

Primary Role: Define simple yet exceptional experiences

> The Design Mission: As a creative tool for video, our design needs to be world class. Anything below that won't position us to make our tools accessible to everyone. Therefore, the number one principle for our design is simplicity. Making something work in AI is not hard, but making it easy to use while maintaining high quality is extremely hard. And that is the main mission for our design team.

Core Responsibilities:

*   Create functional MVPs and UX prototypes
    
*   Refine prototypes into consumer-level, delightful experiences
    
*   Ensure all features fit cohesively into the HeyGen product framework, establish and maintain design standards across the product
    
*   Maintain our principle: dead simple for everyone (including grandma)
    
*   Lead simplification efforts - if grandma can't use it, designers flag it and fix it
    
*   Own design systems that enable consistent, rapid iteration for future development
    
*   Help simplify the product marketing
    
*   Focus on visual polish and experience consistency after validation
    

AI-Era Focus:

*   Be very familiar with all the AI tools in the market and use them daily
    

> Key Principle: Designers focus on post-validation excellence rather than early exploration to maintain development speed. They are the primary guardians of the "dead simple for everyone including grandma" principle - a fundamental design challenge that requires real expertise applied after validation.

## 

Data Scientists & PMs: The Analysis Partners

Data Science Responsibilities:

*   Metric explanation & validation: Source of truth for logic and definitions
    
*   Statistical analysis: Correlation, causation, causal inference
    
*   Establish advanced experiment metrics not achievable in PostHog
    
*   Build institutional dashboards on established product features
    
*   Complex analysis requiring advanced SQL/Python
    
*   Light data engineering & modeling (pipelines, transformations)
    
*   Knowledge sharing of data science principles and dictionary
    

PM Responsibilities:

*   Familiar with area's top-line metrics and able to identify abnormal patterns and initiate investigation
    
*   Leverage PostHog analytics to monitor trends and usage (product analytics, person cohorts, actions)
    
*   Pull simple data from Hex master tables
    
*   Proactively manage experiment lifecycle including pre-testing/back-testing and cleanup
    
*   Define experiment setup – exposure, groups, success metrics
    
*   Identify additional events required for measurement
    
*   Conduct initial experiment reviews to identify winning variants
    
*   Understand connections between area topline with company strategy, able to make high-judgment calls in release decisions
    
*   Expected to do data analysis on their own in PostHog and write simple queries in Hex
    

Shared Responsibilities (Both DS & PM):

*   Experiment impact analysis – aligning on outcomes and interpretation
    
*   KPI definition (e.g. AER, retention, conversion)
    
*   Joint experiment review when deeper analysis is needed
    
*   Investigate abnormal patterns
    

## 

C. Equal Partners, Different Lanes

PM helps define the what:

*   Frames the problem
    
*   Defines the objective
    
*   Brings clarity and context
    

Engineers shape the how:

*   Co-designs the solution with PM & Design
    
*   Owns feasibility, trade-offs, execution
    

Designers ensure simplicity:

*   Make complex AI accessible to everyone
    
*   Guard the "grandma test" principle
    
*   Create delightful experiences
    

Data Scientists provide the truth:

*   Validate assumptions with data
    
*   Measure impact scientifically
    
*   Guide experimentation methodology
    

All align on the why:

*   Why is this worth doing?
    
*   What problem are we solving? And for whom?
    
*   Why now? Why this approach over others?
    
*   Why does this move the business forward?
    

## 

D. Process of Building Prototypes

The Philosophy: In traditional software, PM + Design + Engineer formed the holy triangle. In fast-paced AI development, we optimize for speed and learning over perfect process.

Flexible Partnership Model: PM and designer partnerships can vary for different teams. Some PMs have more experience in UX and should drive the prototype end to end; some designers understand deeply how AI works and can jump in to lead the prototype.

> The 2-Person Rule: In principle, one person from PM/Design plus one Engineer (total 2 people) builds the prototype. We don't optimize for consensus just to protect everyone's feelings. We are here to speed things up to validate ideas in the market ASAP so we as a team can build a better product.

Everyone will have opportunities to build prototypes for new ideas. There are technically infinite things to build in the AI era (like what we did in our hackathon, truly amazing). The key is to have an effective group to drive fast decisions.

The Universal Approach:

1.  Prototype First: PM/Designer + Engineer work directly together to build and test ideas quickly
    
2.  Prove It Works: Validate the concept with real users before heavy design investment
    
3.  Design Polish: Once proven, designers refine the experience to fit our overall product framework and maintain simplicity
    
4.  Production Ready: Every feature that graduates from prototype to production must be well-designed
    

> Why This Works: AI features have massive uncertainty. Most prototypes won't work. Over-investing in design for unproven concepts wastes time. But everything that reaches users must meet our quality bar.

  

PART V

# 

Core Product Teams

## 

Focus: Building and Refining Core Product Features

Core Product teams focus on the foundational product experience - building features that define what HeyGen is and does. They optimize for user experience quality, feature completeness, and long-term product vision.

Core Product Team Characteristics:

*   Longer development cycles for complex features
    
*   Focus on product experience and user journey
    
*   Emphasis on design systems and consistency
    
*   Integration across the entire product ecosystem
    
*   We're building a business tool, but delightful product experience is extremely important for a creative tool and for HeyGen to hit 100M users
    

## 

The Core Product Bar

The bar is simple: being absolutely the best on every experience. Anything below that is not good enough. How? Move extremely fast and iterate 5x more than competitors.

## 

Zero Bugs Aspiration

We should aim for zero bugs. We're not there yet, but that's our north star. When you use the best creative tools—Canva, Figma, or CapCut—you rarely encounter bugs because accuracy is critical for creative work. As a creative tool, reliability isn't just nice to have—it's essential for user trust and workflow continuity.

  

PART VI

# 

Growth Product Teams

## 

The Experiment Engine Philosophy

Growth teams operate differently from core product teams. We're the experiment engine. We're built for speed, learning, and impact. Every principle serves one goal: increasing our velocity.

## 

Core Growth Principles

Engineering Is a Tool, Impact Is the Goal

We don't just ship code. We ship outcomes. In the AI era, code is cheap. Impact is valuable. Don't optimize for beauty or over-engineer solutions no one asked for. Optimize for Speed to Impact: Ship what matters (20% input, 80% outcome), iterate when proven, and refine once the value is real.

Experiments Are for Learning, Not Winning

Safe experiments aren't really experiments. The goal is to learn faster by taking smart risks, betting on bold hypotheses, and being willing to be wrong fast so we can be right faster next time.

## 

Growth Team Focus

Growth PMs: The Experiment Orchestrators

*   Make decisions collectively with the team
    
*   Own the metrics and learning loops
    
*   Deeply understand user problems and business impact
    
*   Frame problems and define objectives with clarity and context
    
*   Define the "what" - frame problems, define objectives, bring clarity
    
*   Align on the "why" with engineering - why is this worth doing? Why now?
    
*   Spin up experiments rapidly with bias for action
    
*   Own outcomes, not just outputs
    

Growth Engineers: The Velocity Machines

*   Co-design solutions with PM & Design
    
*   Own feasibility, trade-offs, and execution to build better, faster, smarter
    
*   Shape the "how" while aligning on the "why"
    
*   Spin off experiments at maximum velocity
    
*   Obsess over learning loops and data
    
*   Deeply understand problems beyond just "tell me what to build"
    
*   With the "why," become active participants who deliver more value with less iteration
    
*   Focus on speed to impact over perfect architecture
    
*   Build the experiment engine that changes company trajectory
    

## 

The Growth Difference

Growth teams are built for a different game than core product teams. Where core product focuses on building and refining features, growth focuses on rapid experimentation and learning. We're playing a game where velocity wins, and every principle serves that goal.

  

PART VII

# 

Communication Protocol

## 

Direct, Async, and Efficient

Core Principles:

*   Async First: With distributed offices, leverage asynchronous communication whenever possible
    
*   Meeting Red Flag: If any team member has more than 3 sync meetings with groups larger than 5 people, raise the red flag
    
*   Time Focus: Our time should be spent building, not meeting
    
*   In-Person for Impact: Use in-person time for maximum communication throughput and team building
    

Decisions: Communicate via Slack immediately with clear single-person accountability and execution timing. Full transparency between teams. Share context, not just the plans. Clearly explain who should be communicated to for each decision.

Feedback: Be direct—good work is good, bad work is bad. Focus on work, not person. When receiving feedback: It's about the work, not you. Everyone can improve.

  

PART VIII

# 

Anti-Patterns to Avoid

## 

🚨 Seven Deadly Sins of AI Development

1\. The Perfect Architecture

*   Spending weeks designing for "scale"
    
*   Your scale problem: 100 users
    
*   Actual problem: No users love it yet
    

2\. The Research Paralysis

*   "We need more user research"
    
*   Months of interviews, no shipping
    
*   Better approach: Ship wrong, learn fast, ship right
    

3\. The Stable Foundation Fantasy

*   Waiting for AI to "mature"
    
*   Building like it's 2019
    
*   Reality: It will never be stable—ride the wave instead
    

4\. The Consensus Trap

*   Everyone agrees = no one cares
    
*   Strong opinions, loosely held
    
*   Conflict means you're onto something
    

5\. The Quality Excuse

*   "It's not ready yet"
    
*   "Just one more polish pass"
    
*   Ship confidently, improve fast
    

6\. The Big Bang Release

*   6 months of secret development
    
*   Grand reveal
    
*   Competitors already shipped and learned
    

7\. The Sunk Cost Fallacy

*   "We've invested so much already"
    
*   Kill failures fast
    
*   Celebrate the learnings, delete the code
    

## 

When to Actually Slow Down

Quality Gates (Non-Negotiable):

*   Bugs that prevent learning from experiments
    
*   Security vulnerabilities
    
*   Features that actively hurt user experience
    
*   Breaking changes that affect customers
    

Strategic Pauses (Rare but Important):

*   One-way door decisions with major business impact
    
*   Technical architecture that will affect next 6 months
    
*   When user feedback indicates a fundamental direction change
    
*   Legal or compliance requirements
    

## 

Red Flag Detector

If you hear these phrases, raise the red flag:

*   🚨 "Let's think about this more" → We're already behind
    
*   🚨 "We should align all stakeholders" → Decision paralysis incoming
    
*   🚨 "What if the technology changes?" → It will. Ship anyway.
    
*   🚨 "Let's wait for the next model" → Our competitors aren't waiting
    
*   🚨 "We need a more robust solution" → We need users first
    
*   🚨 "This could be more polished" → Ship it, then polish if users care
    

  

PART IX

# 

Winning in Wartime

## 

Why We'll Win

*   We ship 5x faster than competitors: More experiments = more learning
    
*   Learning compounds into better products: We embrace what others avoid
    
*   Instability is our advantage: Old-school competitors can't adapt
    
*   We focus on what matters: Quality for users, speed for learning, innovation for differentiation
    

## 

Our Seven Wave-Riding Principles (Aspiration)

1.  Move fast, no compromises
    
2.  Build the absolute best product experience
    
3.  Quality is paramount (especially for video visual quality)
    
4.  Disagree and commit
    
5.  When in doubt, ship an experiment
    
6.  Embrace unstable AI development—ride the wave
    
7.  Foster innovation through integration
    

  

CONCLUSION

# 

Riding the Wave Forward

Three years ago, we couldn't have imagined current AI capabilities. ChatGPT wasn't even there. Three years from now, today's cutting-edge will seem quaint. The only constant is change. The only strategy is riding the wave. The only goal is user value.

We don't have all the answers, but we have something better: the fastest learning loop in the industry.

Every day, we face a choice: seek false stability or ride the wave. We choose to ride. We choose to build products that get magically better as AI advances. We choose to ship fast, learn even faster, and win.

Welcome to the future of software development. Let's build something incredible.

  

> Remember: Velocity paired with quality. Innovation with integration. Speed with purpose. Move fast. No compromises. Ride the wave.

想要發佈自己的文章嗎？

[升級到 Premium+](/i/premium_sign_up)
