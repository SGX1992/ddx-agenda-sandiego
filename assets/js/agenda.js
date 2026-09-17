/* The DDX San Diego programme. This is the only place it lives.

   Source of truth is the public agenda on ddxconference.com/sd-agenda — times,
   rooms, titles, names, roles. Where a speaker submitted more, it is added
   underneath: session details from Notion "Sessions (Step 3)" first, and only
   when there is none, the short description from the speaker profile
   (Step 1). Bios come from Step 1. `about.src` says which one each came from,
   so a correction can go to the right place.

   Times are wall-clock in San Diego (America/Los_Angeles), 24h. */

export const CONF = {
  city: 'San Diego',
  date: '2026-09-17',
  tz: 'America/Los_Angeles',
  venue: 'UC San Diego Park & Market',
  address: '1100 Market St, San Diego, CA 92101',
  maps: 'https://maps.google.com/?q=UC+San+Diego+Park+%26+Market,+1100+Market+St,+San+Diego,+CA+92101',
  site: 'https://www.ddxconference.com/sandiego',
  publicAgenda: 'https://www.ddxconference.com/sd-agenda',
  tickets: 'https://luma.com/ddxsd',
  sideEvents: 'https://side-sandiego.ddxconference.com/',
  poster: 'https://share.ddxconference.com/?edition=san-diego',
};

/* The rooms, in the order the filter shows them. */
export const SPACES = {
  theatre: { name: 'Guggenheim Theatre Space', short: 'Guggenheim' },
  forum:   { name: 'Forum Space',              short: 'Forum' },
  exec:    { name: 'Executive Space',          short: 'Executive' },
  lobby:   { name: 'Lobby & Networking area',  short: 'Lobby' },
};

const P = (f) => `assets/img/speakers/${f}.webp`;
/* Faces cut out of the group shots on the website, saved as jpg. */
const J = (f) => `assets/img/speakers/${f}.jpg`;

/* People. `role` / `org` as printed on the website; a bio only where the
   speaker submitted one in Step 1. */
export const PEOPLE = {
  'don-norman': { name: 'Don Norman', role: 'Co-Founder and Board Member', org: 'Nielsen Norman Group, DNDA', photo: P('don-norman') },
  'sebastian-gier': { name: 'Sebastian Gier', role: 'Founder', org: 'Footprint Intelligence, DDX', photo: P('sebastian-gier') },
  'tad-parzen': { name: 'Tad Parzen', role: '', org: 'BCCA' },
  'scott-robinson': { name: 'Scott Robinson', role: 'CEO', org: 'FreshForm', photo: P('scott-robinson') },
  'diana-wolosin': {
    name: 'Diana Wolosin', role: 'Sr. AI Systems Architect, Ads', org: 'Netflix', photo: P('diana-wolosin'),
    bio: 'Diana Wolosin is a systems designer with over a decade of experience in UX, specializing in systems that both humans and AI can consume. At Netflix, she is helping shape AI-Ready design foundations for Ads. Previously at Indeed, she led the effort to make design systems machine-readable. Her work focuses on structuring and distributing the knowledge AI needs to produce accurate, compliant outputs aligned with the system and the business.',
  },
  'brianna-koch': {
    name: 'Brianna Koch', role: 'President', org: 'SDXD', photo: P('brianna-koch'),
    bio: 'SDXD (San Diego Experience Design) empowers the San Diego user experience community by organizing events that educate, connect, and inspire experienced and aspiring UX professionals. Its events are always free and for anyone who cares about creating great experiences. Learn more at sdxd.org.',
  },
  'stephanie-mencarelli': {
    name: 'Stephanie Mencarelli', role: 'Vice President of Design', org: 'Adobe', photo: P('stephanie-mencarelli'),
    bio: 'Stephanie Mencarelli is an award-winning design leader who crafts impactful, human-centered experiences at the intersection of creativity, technology, and business. As VP of Design at Adobe, she leads the Document Cloud, Student and Product Equity organizations, reaching over 750 million monthly active users through products like Adobe Acrobat, Student Spaces and Scan. Her leadership style, defined by a blend of impact, joy, and connection, has been shaped by her experience at Spotify, InVision, Walmart, and Jasper.',
  },
  'rowan-salama': {
    name: 'Rowan Salama', role: 'Lead Product Researcher', org: 'Careem (Uber)', photo: P('rowan-salama'),
    bio: 'Rowan Salama is a Product Research leader and ethnographer exploring the intersection of human behavior, culture, and technology. She leads Product Research at Careem, an Uber company, across 10+ markets in the Middle East, Africa, and South Asia, helping product teams move beyond what users say to understand how people actually behave. With a background in linguistics and behavioral and cognitive psychology, she combines ethnography, behavioral analysis, and product thinking to uncover the cultural nuances, mental models, and unconscious biases that shape everyday decisions. Her work includes ethnographic research contributing to Saudi Arabia’s Vision 2030 and digital transformation initiatives with the UAE Ministry of Health and Prevention. An international speaker and mentor, she has spoken at CES 2026 on human behavior, cognitive psychology, AI, and the evolving role of research in product strategy.',
  },
  'brian-leduc': { name: 'Brian LeDuc', role: 'Founder & Principal Design Strategist', org: 'Learning Designed', photo: J('brian-leduc') },
  'grace-leduc': { name: 'Grace Rieger LeDuc', role: 'Sr. Product Manager', org: 'Oteemo', photo: J('grace-leduc') },
  'elizabeth-yeongmin': { name: 'Elizabeth Yeongmin', role: 'Senior Visual UX Designer', org: 'Mercedes-Benz', photo: J('elizabeth-yeongmin') },
  'diana-tobey': {
    name: 'Diana Tobey', role: 'Executive Director', org: 'IDEO', photo: P('diana-tobey'),
    bio: 'Diana is a product and design leader at IDEO specializing in digital product and venture design. With nearly two decades of experience at the intersection of technology, data, and consumer behavior, she helps organizations bring new ideas to market and build products that scale. Her recent work focuses on designing for fandom and next-gen loyalty, helping brands cultivate deeper, high-affinity relationships with their customers.',
  },
  'kara-fitzpatrick': {
    name: 'Kara Fitzpatrick', role: 'Director of Design & Product', org: 'Obama White House', photo: J('kara-fitzpatrick'),
    bio: 'Kara Fitzpatrick is a leader and force multiplier with a career dedicated to creating large-scale impact – with heart. She has worked on global stages like the Super Bowl, Oscars, and Women’s World Cup and served in two White Houses under President Biden and President Obama. She launched Sage & Keystone to provide chief of staff coaching and executive advising; before that she was Chief of Staff for a 300-person Product Design team at a Fortune 50 company and spent 11 years at Intuit. She served in the first class of Presidential Innovation Fellows in the Obama White House, advised on the City of San Diego’s Customer Experience Strategy, and led the State of California’s Data Insights Working Group during the first 100 days of the pandemic. Kara graduated summa cum laude from Penn State and was a two-time finalist for San Diego Woman of the Year.',
  },
  'prayag-narula': {
    name: 'Prayag Narula', role: 'Co-founder and CEO', org: 'Marvin', photo: P('prayag-narula'),
    bio: 'Prayag Narula is co-founder and CEO of Marvin, an AI-native customer insights platform trusted by Fortune 500 companies to better understand their customers. Marvin brings together AI-powered research tools, an intelligent knowledge repository, and agentic AI to help teams connect with their users, learn faster, and make better decisions together. Before Marvin, he co-founded and led LeadGenius. He previously worked as a researcher at the University of Helsinki, studied at UC Berkeley’s School of Information, and published more than a dozen papers on human-computer interaction, user-centered design, and artificial intelligence.',
  },
  'richard-ward': {
    name: 'Richard Ward', role: 'Chief Design Officer', org: 'Otter.ai', photo: P('richard-ward'),
    bio: 'Richard Ward is Chief Design Officer at Otter.ai, the AI notetaker built for the modern enterprise, where he leads the product design team and shapes how millions of people experience Otter every day. Before Otter, Richard was CEO of MetaLab, the product design agency known for its work for Slack, Uber, The Athletic, and Headspace. Prior to that, he spent five years at frog as Vice President of North America, and earlier worked at Smart Design.',
  },
  'brandon-burlington': {
    name: 'Brandon Burlington', role: 'Staff UX Designer', org: 'Google', photo: P('brandon-burlington'),
    bio: 'Brandon Burlington is a San Diego native, a Staff Interaction Designer, and a 14-year Googler. Over the past decade and a half he has led UX for major Google platforms, including Customer Engagement, Android Auto, Google Cloud, and Google Play Games. He specializes in taking complex, open-ended problem spaces through the Double Diamond process to find elegant, data-informed solutions, and believes the best products are built at the intersection of engineering, product, and design.',
  },
  'kevin-wong': {
    name: 'Kevin Wong', role: 'VP of Design', org: 'Webflow', photo: P('kevin-wong'),
    bio: 'Kevin Wong is VP of Product Design at Webflow, where he leads Product Design, Content Design, and the Design System for a platform used by millions of designers, marketers, and developers. His work focuses on shaping Webflow into an AI-native website experience platform that balances ease of use with professional power. Previously, Kevin led Design for Meta’s Remote Presence team across Facebook, Instagram and Messenger, and before that led Airbnb’s global CX Platform Design organization. Across startups and large tech companies, he has specialized in distilling complex systems, scaling high-performing design orgs, and translating craft into durable product and business outcomes.',
  },
  'harriet-swan': {
    name: 'Harriet Swan', role: 'Director of UX Research', org: 'GAIN', photo: P('harriet-katie'),
    bio: 'Harriet brings 15+ years of research experience and heads up the UX Research team at GAIN Conversion, a leading global CRO agency. She has spent the last six years building the case and the practice for combining attitudinal and behavioral research methodologies to drive product and design decisions, and is particularly passionate about what it takes to get a team curious and humble enough to let data challenge assumptions.',
  },
  'katie-niles': {
    name: 'Katie Niles', role: 'Digital Optimization Manager', org: 'TaylorMade', photo: J('katie-niles'),
    bio: 'Katie brings nearly 20 years of experience in ecommerce marketing and merchandising, with expertise in A/B testing, personalization, multi-region site management, site operations, analytics, system integrations, and loyalty programs. At TaylorMade she focuses on optimizing the digital customer experience through data-driven testing and personalized onsite experiences.',
  },
  'alex-diener': { name: 'Alex Diener', role: '', org: 'Dexcom', photo: P('alex-diener') },
  'jaleesa-chagan': {
    name: 'Jaleesa Chagan', role: 'Senior UX Researcher', org: 'GAIN', photo: P('jaleesa-chagan'),
    bio: 'Jaleesa Chagan is a Senior UX Researcher at GAIN Conversion, based in Vancouver, Canada, with a background in Cognitive Science and Interaction Design. She leads mixed-methods research programs across a range of industries, pairing qualitative and quantitative methods to ground findings in both behavioral and attitudinal evidence.',
  },
  'alexander-danilowicz': { name: 'Alexander Danilowicz', role: 'CEO & Co-founder', org: 'Magic Patterns', photo: J('alexander-danilowicz') },
  'chris-gielow': {
    name: 'Chris Gielow', role: 'President', org: 'UX Speakeasy', photo: P('chris-gielow'),
    bio: 'Chris Gielow is a UX design leader, mentor, and community builder with more than 30 years of experience helping organizations create products people love while building high-performing design teams. He has led design organizations at Walmart and Intuit. He serves as President of UX Speakeasy, Southern California’s largest UX community, and as a Top 100 ADPList Mentor has conducted more than 170 mentoring sessions with designers at every stage of their careers. Chris has published research on AI-driven user experiences through ACM and has spent much of the past year exploring how AI is reshaping design practice, hiring, leadership, and the future of product development.',
  },
  'ann-kostopanagiotou': {
    name: 'Ann Kostopanagiotou', role: 'Managing Director', org: 'Mondo Robot', photo: J('ann-kostopanagiotou'),
    bio: 'During her 20+ year career, Ann Kostopanagiotou has been a recognized client advisor and expert in building brands, driving business transformation, and designing and delivering digital experiences that generate revenue. She is Managing Director at Mondo Robot, an Experience Design & Engineering Studio that brings strategy, design, technology, and AI together to build what’s next. Prior to Mondo Robot, Ann spent time at Launch by NTT DATA, Slalom, Publicis, Ogilvy, MARC USA, Dentsu (iProspect), Rise Interactive, and R/GA. She served three years as President of the American Marketing Association’s Chicago chapter and is a frequent contributor to Digital First and CIO Magazine on digital transformation and leadership.',
  },
  'twisha-shah-brandenburg': {
    name: 'Twisha Shah-Brandenburg', role: 'Principal', org: 'Target', photo: P('twisha-shah-brandenburg'),
    bio: 'Twisha Shah-Brandenburg is a design leader, educator, and speaker focused on the intersection of AI, organizational systems, and human-centered innovation. With experience spanning enterprise transformation, product design, and service ecosystems, she has led and contributed to large-scale initiatives at Target, Venmo, BMW, and Grainger. Her work explores how design is evolving beyond interfaces into the systems that shape decision-making, collaboration, governance, and organizational behavior. She teaches interaction and systems design at the Illinois Institute of Technology’s Institute of Design and writes the Substack Making an Impact.',
  },
  'dave-rowley': { name: 'Dave Rowley', role: 'Executive Creative Director', org: 'Mondo Robot', photo: J('dave-rowley') },
  'aj-azzi': {
    name: 'AJ Azzi', role: 'Sr. Account Executive', org: 'Askable', photo: P('aj-azzi'),
    bio: 'A year ago Aimee-Jo (or “AJ” on the streets) heard about the free iced coffee at the US Askable office, so she packed up and moved from Askable’s Australian office to Chicago. AJ loves the beach, her big family and great food. One day she’ll release her own bestselling cookbook.',
  },
  'jordi-morillo': { name: 'Jordi Morillo', role: '', org: 'Insulet', photo: P('jordi-morillo') },
  'bhavik-gandecha': { name: 'Bhavik Gandecha', role: '', org: 'Dscout', photo: P('bhavik-gandecha') },
  'lauren-hughes': {
    name: 'Lauren Hughes', role: 'Lead Product Designer', org: 'Dscout', photo: J('lauren-hughes'),
    bio: 'Lauren Hughes is a Lead Product Designer at Dscout, driven by a curiosity that keeps her hands-on across design, research, code, and now AI. With 15+ years spanning Nordstrom, Wayfair, and CVS Health, plus global brands like Real Madrid and Chelsea FC, she has built a career as a trusted design voice connecting product, engineering, and business.',
  },
};

/* One entry per thing on the programme. `kind` shapes the card:
     talk · keynote · panel · workshop · break · doors · social
   `photo` on the session overrides the speakers' portraits (group shots).
   `tables` are the Table Talks that run inside a break.
   `about` is { text, src } with src one of site · step3 · step1 · briefing. */
export const SESSIONS = [
  { id: 'doors', kind: 'doors', start: '09:00', end: '10:00', space: 'lobby',
    title: 'Open Doors', sub: 'Coffee & Networking' },

  { id: 'welcome', kind: 'keynote', start: '10:00', end: '10:15', space: 'theatre',
    title: 'Welcome', sub: 'Welcoming by BCCA & Global Industry Insights',
    speakers: ['tad-parzen', 'sebastian-gier', 'scott-robinson'],
    about: { text: 'A short welcome from the hosts: what DDX is, why San Diego, and how the day works — the rooms, the table talks, and where to find coffee.', src: 'ddx' } },

  { id: 'norman', kind: 'keynote', start: '10:15', end: '10:45', space: 'theatre',
    title: 'The State of Humanity-Centric Innovation', sub: 'Fireside chat & open Q&A',
    speakers: ['don-norman'],
    about: { text: 'A fireside chat with Don Norman on where humanity-centred design stands today — what has changed, what has not, and what the next generation of designers has to get right. The second half is open Q&A: bring your question.', src: 'ddx' } },

  { id: 'insights', kind: 'keynote', start: '10:45', end: '11:00', space: 'theatre',
    title: 'Industry insights', sub: 'From the global DDX series',
    speakers: ['sebastian-gier'],
    about: { text: 'A super short, interactive session: what Sebastian has seen across the global DDX conference series this year, and a quick read on the state of design and innovation right now. Expect a few questions thrown back at the room.', src: 'ddx' } },

  { id: 'break-1', kind: 'break', start: '11:00', end: '11:30', space: 'lobby',
    title: 'Light Break', sub: 'Coffee & Networking',
    tables: [
      { n: 1, host: 'scott-robinson', title: 'Your Customer Is Not Human',
        about: { text: 'As agents start browsing, buying and deciding on people’s behalf, who are we actually designing for? A table talk on what changes when the customer at the other end of your product is a machine acting for a human.', src: 'ddx' } },
      { n: 2, host: 'diana-wolosin', title: 'The Rise of Context Engineers, Your Next Career Path',
        about: { text: 'AI is only as good as the context you give it. Context engineering — the practice of codifying your own knowledge so AI can act on it — is the next core skill for absolutely everyone. Humans bring intent. Machines do the operational work. This table is about the space between those two, and why learning to fill it is the most durable career move you can make right now.', src: 'step1' } },
      { n: 3, host: 'brianna-koch', title: 'AI: Enhancing Experiences or Adding Complexity?',
        about: { text: 'AI is rapidly reshaping how we design. Is it helping us craft seamless experiences or create more complexity? Join SDXD for a conversation about the opportunities and consequences of AI in UX.', src: 'step1' } },
    ] },

  { id: 'mencarelli', kind: 'talk', start: '11:30', end: '12:15', space: 'theatre',
    title: 'F*** Productivity: Make Space for Creative Joy',
    speakers: ['stephanie-mencarelli'],
    about: { text: 'Every tool now promises to make us faster. Stephanie makes the case for the opposite metric: joy. How design leaders can protect the space where original ideas come from, and why that matters more as machines produce more.', src: 'ddx' } },

  { id: 'salama', kind: 'talk', start: '11:30', end: '12:00', space: 'forum',
    title: 'The User You Designed For Doesn’t Exist',
    speakers: ['rowan-salama'],
    about: { text: 'Most products are designed for rational users. The problem is, rational users don’t exist. This talk explores the hidden psychology, cultural context, and behavioral contradictions that shape what people actually do — and why understanding them matters even more in the age of AI.', src: 'step1' } },

  { id: 'service-jam', kind: 'workshop', start: '11:30', end: '13:00', space: 'exec',
    title: 'Service Design / Service Jam',
    speakers: ['brian-leduc', 'grace-leduc'], photo: P('brian-grace-leduc'),
    about: { text: 'A hands-on service jam: small teams take a real service, map the journey end to end, find where it breaks, and prototype a fix — all inside ninety minutes. No slides, no laptops needed.', src: 'ddx' } },

  { id: 'drive-play-eat', kind: 'panel', start: '12:15', end: '13:00', space: 'theatre',
    title: 'Drive, Play, Eat. Lessons learned from designers shaping our culture',
    speakers: ['scott-robinson', 'elizabeth-yeongmin', 'diana-tobey', 'kara-fitzpatrick'],
    photo: P('panel-drive-play-eat'),
    about: { text: 'Four designers who shape what people drive, play and eat, on what it takes to design at cultural scale — the decisions, the trade-offs, and the lessons that travel between industries.', src: 'ddx' } },

  { id: 'narula', kind: 'talk', start: '12:15', end: '13:00', space: 'forum',
    title: 'Always-On Customer Research for the AI Era',
    speakers: ['prayag-narula'],
    about: { text: 'Why customer research needs to move from occasional projects to an always-on practice as organizations work faster with AI — and how continuous research helps teams understand their users, make better decisions, identify where to invest, and stay ahead of changing customer needs.', src: 'briefing' } },

  { id: 'lunch', kind: 'break', start: '13:00', end: '14:00', space: 'lobby',
    title: 'Lunch', sub: 'Food, Drinks & Networking' },

  { id: 'ward', kind: 'talk', start: '14:00', end: '14:30', space: 'theatre',
    title: 'Design Isn’t Dead, It’s Just Getting Harder to Be Great',
    speakers: ['richard-ward'],
    about: { text: 'AI has made good design accessible to everyone, leading some to call this the death of design. Richard argues it’s the opposite: with the floor rising, the real skill is knowing what great looks like, and having the taste, judgment, and craft to get there. This talk makes the case that greatness, not competence, is still the benchmark, and explores how AI has changed — and hasn’t changed — the designer’s job. Richard will share practical ways to keep raising the ceiling on quality as tools make “good enough” trivially easy to reach.', src: 'step3' } },

  { id: 'burlington', kind: 'talk', start: '14:00', end: '14:30', space: 'forum',
    title: 'From AI Experimentation to Agentic Transformation: Lessons from UX and Design',
    speakers: ['brandon-burlington'],
    about: { text: 'Four ways AI is reshaping product design: it streamlines process by swapping manual testing for automated loops; it expands UX roles as designers become directors who write prompts and build live prototypes; it elevates the product experience with contextual, multi-modal reasoning and clear confidence scores; and it unlocks ambitious moonshots like self-assembling interfaces built instantly on the fly.', src: 'step1' } },

  { id: 'wong', kind: 'talk', start: '14:30', end: '15:00', space: 'theatre',
    title: 'Design Didn’t Change – AI Just Exposed What Was Missing',
    speakers: ['kevin-wong'],
    about: { text: 'As AI makes it faster than ever to generate “good enough” products, it’s also exposing a deeper truth: most organizations were never designing with real depth to begin with. Kevin challenges the dominant narrative that AI is transforming design, arguing instead that the core principles — clarity of purpose, systems thinking, and intentionality — haven’t changed at all. What’s changed is that the cost of producing something that looks designed has collapsed, making the difference between shallow and deeply-considered work impossible to ignore.\n\nKey takeaways: what separates products that merely function from those that resonate; a framework around recognition (taste + judgment) and commitment (a durable point of view) as the real differentiators in an AI-native world; a clear lens for evaluating your own work and a playbook for building products that hold together under scale, pressure, and automation.', src: 'step3' } },

  { id: 'swan-niles', kind: 'talk', start: '14:30', end: '15:00', space: 'forum',
    title: 'Ship an AI feature that actually works for your users',
    speakers: ['harriet-swan', 'katie-niles'], photo: P('harriet-katie'),
    about: { text: 'How do you ship AI features at the speed required by the business, whilst ensuring you are building an experience of value to your users? TaylorMade puts an AI caddie in every golfer’s pocket with CHIP: a new AI assistant for search & fitting, helping you find the exact clubs built for your swing, in minutes. But launching it was only half the job.\n\nThis talk walks through the full lifecycle: the exploratory research that shaped what CHIP should say, look, and do, the A/B tests that separated the features that actually moved engagement, and the evaluative research that caught what testing alone couldn’t. You’ll leave with a practical way to sequence UX research and experimentation around an AI feature — from post-launch iteration to future roadmap recommendations — plus real results (and real inconclusives) from the CHIP rollout.', src: 'step3' } },

  { id: 'break-2', kind: 'break', start: '15:00', end: '15:30', space: 'lobby',
    title: 'Light Break', sub: 'Coffee & Networking',
    tables: [
      { n: 1, host: 'alex-diener', title: 'Are Relationships Part of the Work?',
        about: { text: 'A discussion about trust, influence, and the human connections that help great design move forward.', src: 'step3' } },
      { n: 2, host: 'prayag-narula', title: 'AI Interviews: Hype or Here to Stay?',
        about: { text: 'Can an AI moderator run a real user interview? Prayag hosts an honest conversation on what AI-led interviews get right, where they fall short, and what that means for research teams.', src: 'ddx' } },
      { n: 3, host: 'jaleesa-chagan', title: 'Shipping AI features that work for your users and your business',
        about: { text: 'A table talk on the gap between an AI feature that demos well and one that earns its place: how to pair research with experimentation so what ships works for users and moves the numbers.', src: 'ddx' } },
    ] },

  { id: 'robinson-danilowicz', kind: 'talk', start: '15:30', end: '16:00', space: 'theatre',
    title: 'Systems, Prototypes, Patterns, and Products: Closing the Design-to-Dev Gap',
    speakers: ['scott-robinson', 'alexander-danilowicz'], photo: P('scott-alexander'),
    about: { text: 'Design systems, AI prototyping and pattern libraries are converging — so why is the handoff still painful? Scott and Alexander on what it takes to get from a system to a shipped product without the gap in between.', src: 'ddx' } },

  { id: 'gielow', kind: 'workshop', start: '15:30', end: '16:00', space: 'forum',
    title: 'Stop Designing Screens. Start Designing Decisions.',
    speakers: ['chris-gielow'],
    about: { text: 'For years, designers have been rewarded for creating wireframes, prototypes, and polished interfaces. But as AI makes many design outputs faster and easier to produce, where does designers’ real value come from? In this interactive workshop, we’ll explore how the role of UX is shifting from creating deliverables to influencing decisions. Through practical exercises and discussion, participants will learn how to move beyond execution, expand their strategic influence, and identify the skills that organizations increasingly value. You’ll leave with a framework for creating greater impact, navigating the changing design landscape, and building a career that remains relevant in the age of AI.', src: 'step1' } },

  { id: 'tobey', kind: 'workshop', start: '15:30', end: '16:30', space: 'exec',
    title: 'Playful Career Experiments for Thriving in AI Era',
    speakers: ['diana-tobey'],
    about: { text: 'AI just rewrote your role. Multiple re-orgs. Leadership churn. Many of us in tech are operating in survival mode, reactively. In this 60-minute interactive workshop, we’ll trade survival for Sandbox Mode: a playful, research-backed tool to lead yourself and your team to thrive through AI pivots and reorgs. Using guided scenario sprints (no laptop needed), you’ll learn to spot survival reflexes, design small, safe experiments, and reframe chaos as a creative sandbox. You’ll design a 30-day micro-quest to stay visible and protect your promotion path, leaving with one concrete next step you can put on your calendar immediately. Because if the rules keep changing, it’s time to design your own sandbox.', src: 'step1' } },

  { id: 'experience-economy', kind: 'panel', start: '16:00', end: '16:30', space: 'theatre',
    title: 'The Rise of the Experience Economy',
    moderator: 'sebastian-gier',
    speakers: ['ann-kostopanagiotou', 'twisha-shah-brandenburg', 'diana-wolosin', 'dave-rowley'],
    photo: P('panel-experience-economy'),
    about: { text: 'Digital experiences are no longer a layer on top of the business — increasingly they are the business. A panel on what that shift demands from design, from organisations, and from the people leading them.', src: 'ddx' } },

  { id: 'break-3', kind: 'break', start: '16:30', end: '17:00', space: 'lobby',
    title: 'Light Break', sub: 'Coffee & Networking',
    tables: [
      { n: 1, host: 'aj-azzi', title: 'Play Your Hand: An MCP Roundtable for Design, Product and Innovation',
        about: { text: 'The introduction of MCP (Model Context Protocol) into the design and product world is a bigger shift than most of us have had time to register. It lets AI tools reach into the systems you already work in, so a question you’d normally scope as a project becomes one you can ask on the spot.\n\nThis roundtable is for people who have never touched MCP, and people who use it so well they haven’t opened their design software in months. We’re turning the conversation into a card game anyone can join — the goal is to spot the openings across your stack you didn’t know were there, and what your research could do once it reaches them. After that it’s open discussion. Come with something you’ve tried, with problems you think MCP could solve but haven’t had the courage to try yet, and most importantly, come if you have no idea where to start.', src: 'step3' } },
      { n: 2, host: 'jordi-morillo', title: 'Human-Centered Design in the Age of AI',
        about: { text: 'Does human-centred design still hold when AI sits between the designer and the user? A table talk on keeping people at the centre while the tools change under us.', src: 'ddx' } },
      { n: 3, host: 'bhavik-gandecha', title: 'AI Moves Fast. Research Still Has to Lead.',
        about: { text: 'When product teams ship weekly, research can look like the slow part. Bhavik hosts a conversation on how research keeps leading decisions instead of trailing them.', src: 'ddx' } },
    ] },

  { id: 'enterprise-leader', kind: 'panel', start: '17:00', end: '17:45', space: 'theatre',
    title: 'Expectations and realities of being an enterprise design leader today',
    moderator: 'sebastian-gier',
    speakers: ['lauren-hughes', 'stephanie-mencarelli', 'kevin-wong'],
    photo: P('panel-enterprise-leader'),
    about: { text: 'What the job of an enterprise design leader actually looks like in 2026 — the expectations, the realities, and the distance between the two. Three leaders compare notes, moderated by Sebastian Gier.', src: 'ddx' } },

  { id: 'shah-brandenburg', kind: 'workshop', start: '17:00', end: '18:00', space: 'exec',
    title: 'From Optimizing Interfaces to Designing Organizations',
    speakers: ['twisha-shah-brandenburg'],
    about: { text: 'As AI becomes embedded into products, workflows, and decision-making, the role of design is rapidly expanding beyond interfaces alone. This workshop explores how fragmented systems, invisible labor, unclear ownership, and disconnected workflows shape the success or failure of AI transformation efforts. Through systems mapping, collaborative exercises, and practical frameworks, participants will learn how to design more legible, adaptable, and human-centered organizations for the next era of work.', src: 'step1' } },

  { id: 'happy-hour', kind: 'social', start: '18:00', end: '20:30', space: 'lobby',
    title: 'Happy Hour', by: 'by Marvin & Dscout', sub: 'Food + Drinks & Open Networking',
    logos: [
      { src: 'assets/img/logos/marvin.svg', alt: 'Marvin', h: 28 },
      { src: 'assets/img/logos/dscout.png', alt: 'Dscout', h: 22 },
    ],
    about: { text: 'When the stage goes dark, the room doesn’t. Marvin and Dscout host drinks, food and the conversations that didn’t fit in the Q&A, right where the conference ends. Registration required.', src: 'site' },
    link: { href: CONF.sideEvents, label: 'Save your spot' } },
];

export const KIND_LABEL = {
  keynote: 'Keynote', talk: 'Talk', panel: 'Panel', workshop: 'Workshop',
  break: 'Break', doors: 'Doors', social: 'After',
};
