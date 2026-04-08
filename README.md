# EA on a Page  -  Artifact Navigator

> A lightweight interactive version of Kotusev's *Enterprise Architecture on a Page* framework, built as a study aid and a coding experiment.

## Why this exists

I'm an MSc student studying Enterprise Architecture, and like most people encountering the EA on a Page framework for the first time, I found it incredibly useful but hard to navigate in PDF form. There are 17+ artifacts across 6 families, with overlapping names, different lifecycles, and subtle distinctions that matter in practice.

So I decided to build something to help me (and hopefully others) learn and explore the framework interactively  -  rather than scrolling through a dense one-pager trying to remember the difference between a Solution Overview and a Solution Design.

**This is not an official tool.** It's a personal learning project. The framework and all its intellectual content belong to [Svyatoslav Kotusev](https://eaonapage.com). I've simply tried to make it easier to navigate.

## What it does

- **Explore**  -  Browse all 17 artifacts with filters for focus (Business/IT), importance (Essential/Popular/Common), and lifecycle (Permanent/Temporary)
- **Find**  -  Filter artifacts by Kotusev's three EA processes: Strategic Planning, Technology Optimisation, and Initiative Delivery
- **Artifact detail**  -  Each artifact has a visual representation, the question it answers, audience, decisions it supports, practical notes, and relationship links
- **Compare**  -  Side-by-side comparison of commonly confused artifacts (e.g. Solution Overview vs Solution Design)
- **Accessibility**  -  Font size slider, light/dark theme, mobile-friendly

## The research behind the filters

The artifact classifications follow the **CSVLOD taxonomy** from Kotusev's peer-reviewed research:

> Kotusev, S., Kurnia, S., & Dilnutt, R. (2022). *The practical roles of enterprise architecture artifacts: A classification and relationship.* Information and Software Technology, 147, 106897.

The three EA processes (Strategic Planning, Technology Optimisation, Initiative Delivery) come from:

> Kotusev, S. (2019). *Enterprise Architecture Practice on a Page.* British Computer Society.

I deliberately avoided adding time-horizon filters (short/medium/long-term) because the research explicitly notes that artifacts can describe multiple time points or be essentially timeless  -  imposing fixed horizons would be misleading.

## Want to learn more about the framework?

If this app is useful to you and you want to go deeper, these are the resources I'd recommend:

### Books by Svyatoslav Kotusev

- **[The Practice of Enterprise Architecture: A Modern Approach to Business and IT Alignment](https://www.amazon.com/Practice-Enterprise-Architecture-Approach-Alignment/dp/064508252X)** (2nd edition, 2021)  -  The comprehensive textbook behind the framework. Based on Kotusev's PhD research at RMIT University. Adopted as a key EA textbook in universities across North America, Europe and Asia. This is the primary source for everything in this app.
- **[Enterprise Architects: The Agents of Digital Transformation](https://kotusev.com/)**  -  Focuses on the people side of EA: what enterprise architects actually do and how they drive change in organisations.

### Udemy courses

Kotusev also teaches the material through a structured course series on Udemy:

- **[The Practice of Enterprise Architecture courses](https://www.udemy.com/courses/search/?src=ukw&q=kotusev)**  -  Multi-part video courses covering the CSVLOD model, EA processes, artifact types, and practical implementation. Good if you prefer video-based learning over reading.

### YouTube: EA on a Page video series by Ashraf Fouad

Ashraf Fouad (Techie Architect) has been producing an excellent video series walking through the EA on a Page framework episode by episode  -  covering artifacts, governance structures, processes, and practical application. Created with Kotusev's permission for educational knowledge sharing.

- **[EA on a Page video series](https://www.youtube.com/watch?v=R55ILcm1WyQ&list=PLhj-PVV-lH-pevAxNgsYHxsijcT2BSWSn)**  -  10+ episodes covering Considerations, Standards, Visions, Landscapes, governance committees, and more. Highly recommended for visual learners.

### The framework itself

- **[eaonapage.com](https://eaonapage.com)**  -  The official EA on a Page website with the PDF framework, teaching materials, and Kotusev's full publication list.

## Also a Claude AI experiment

Full transparency: this entire app was built in conversation with [Claude](https://claude.ai) (Anthropic's AI). I wanted to see how far I could take a real product idea  -  from brainstorming through research validation to a deployed web app  -  using AI as a coding partner.

The answer: pretty far, with some back-and-forth. The AI was good at scaffolding, data modelling, and generating SVG visuals. It needed nudging on design taste (the first versions looked very "AI-generated") and mobile testing (dark mode took several attempts to get right in the artifact sandbox). The research validation step  -  where we checked filters against peer-reviewed sources  -  was genuinely useful and changed the product direction.

If you're curious about AI-assisted development, this is an honest example of what that looks like in practice.

## Sharing is caring

I'm sharing this because I think it could help other EA students and practitioners navigate the framework more easily. If you have suggestions, spot an error in the artifact data, or think a classification could be improved  -  please open an issue or submit a PR. I'd love the feedback.

This is a learning project, and learning works better in the open.

## Running locally

```bash
npx serve public -l 3000
```

No build step, no dependencies. It's a single HTML file.

## Deploying

This is hosted on Cloudflare Pages. To deploy your own:

1. Fork this repo
2. Connect it to [Cloudflare Pages](https://pages.cloudflare.com)
3. Leave build command empty, set output directory to `public`
4. Deploy

## Tech stack

- Plain HTML, CSS, JavaScript (no framework)
- SVG visual representations generated inline
- Cloudflare Pages for hosting
- Built with Claude AI

## Licence

MIT  -  do whatever you like with it.

## Links

- [EA on a Page framework](https://eaonapage.com)  -  Svyatoslav Kotusev
- [CSVLOD paper](https://www.sciencedirect.com/science/article/abs/pii/S0950584922000593)  -  Information & Software Technology, 2022
- [Kotusev's Udemy courses](https://www.udemy.com/courses/search/?src=ukw&q=kotusev)
- [EA on a Page video series](https://www.youtube.com/watch?v=R55ILcm1WyQ&list=PLhj-PVV-lH-pevAxNgsYHxsijcT2BSWSn)  -  Ashraf Fouad
- [My LinkedIn](https://www.linkedin.com/in/luiz-hrsantana/)
- [My Substack](https://luizhrsantana.substack.com/)