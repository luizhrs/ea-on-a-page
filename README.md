<div align="center">

# EA on a Page - Artifact Navigator

[![Live](https://img.shields.io/badge/Live-ea--on--a.pages.dev-b45630?style=flat-square&logo=cloudflare&logoColor=white)](https://ea-on-a.pages.dev)
[![Framework](https://img.shields.io/badge/Framework-Kotusev_v2.2-6a7b4f?style=flat-square)](https://eaonapage.com)
[![License](https://img.shields.io/badge/License-MIT-4a6d8a?style=flat-square)](LICENSE)
[![No data collected](https://img.shields.io/badge/Privacy-No_data_collected-7a5f99?style=flat-square)]()

</div>

A lightweight interactive version of Kotusev's Enterprise Architecture on a Page framework, built as a study aid and a coding experiment.

---

## Why this exists

I'm an MSc student studying Enterprise Architecture, and like most people encountering the EA on a Page framework for the first time, I found it incredibly useful but hard to navigate in PDF form. There are 28 artifacts across 6 families, spread across four interconnected reference models - with overlapping names, different lifecycles, and subtle distinctions that matter in practice.

So I decided to build something to help me (and hopefully others) learn and explore the framework interactively - rather than scrolling through dense one-pagers trying to remember the difference between a Solution Overview and a Solution Design.

This is not an official tool. It's a personal learning project. The framework and all its intellectual content belong to Svyatoslav Kotusev. I've simply tried to make it easier to navigate.

---

## What it covers

The app is organised around Kotusev's four reference models:

| | Model | What it covers |
|---|---|---|
| ⟳ | **EA Practice on a Page** (v2.2) | The three EA processes - Strategic Planning, Technology Optimisation, Initiative Delivery - with their goals, inputs, outputs, activities, lifecycle of each artifact family, and key questions each answers |
| ◈ | **EA Function on a Page** (v1.0) | Architecture tiers, governance bodies and procedures, architect roles, domains, and the typical ratio of architects to IT staff |
| ↑ | **EA Maturity on a Page** (v1.0) | Four maturity stages (Stage 0–3) with the EA function, artifacts, processes, benefits, challenges, and new elements at each stage |
| ⬡ | **EA Artifacts on a Page** (v2.2) | All 28 artifacts across 6 families, with three views: Map, Explore, and Find |

---

## What it does

**Map** - The 2×3 framework grid positioned by *What EA artifacts describe* (Generic→Specific) and *How EA artifacts describe* (Business→IT). Includes a highlight panel for multi-select filtering across all four Kotusev dimensions simultaneously.

**Explore** - Browse all 28 artifacts with live search and filters for Focus (Business / Business+IT / IT), Essentiality (Essential / Popular / Common / Uncommon), and Lifecycle (Permanent / Temporary).

**Find** - Filter artifacts by Kotusev's three EA processes: Strategic Planning, Technology Optimisation, and Initiative Delivery, then refine further.

**Artifact detail** - Each artifact shows the question it answers, a visual representation, format, audience, decisions supported, a practical note, relationship links (leads to / informed by), and side-by-side comparison with commonly confused artifacts.

**Highlight filters** - On the Map view, select one or more values across any of the four Kotusev dimensions. Within a dimension: OR logic. Across dimensions: AND logic. So you can ask "show me Essential or Popular artifacts that are used in Strategic Planning and are Permanent."

**Accessibility** - Text size picker (S / M / L / XL / XXL), light/dark theme, mobile-friendly. Preferences saved to `localStorage`.

---

## The 28 artifacts

Organised by family, with their Lucide icon, essentiality tier, and focus:

### ● Considerations - Strategic inputs that shape direction
| Artifact | Icon | Essentiality | Focus |
|---|---|---|---|
| Principles | ⚖ scale | Essential | Business + IT |
| Architecture Strategies | 🧭 compass | Popular | Business + IT |
| Conceptual Data Models | ⑂ git-branch | Common | Business + IT |
| Policies | 🛡 shield-check | Common | IT |
| Analytical Reports | 📊 bar-chart-2 | Uncommon | Business + IT |

### ● Visions - Desired future states at various scopes
| Artifact | Icon | Essentiality | Focus |
|---|---|---|---|
| Business Capability Models | 🏗 building-2 | Essential | Business |
| Target States | ✛ crosshair | Essential | Business + IT |
| Roadmaps | 🗺 map | Essential | Business + IT |
| Process Maps | ▦ layout-dashboard | Popular | Business |
| Value Chains | ↔ arrow-right-left | Uncommon | Business |

### ● Landscapes - Current state maps of what exists
| Artifact | Icon | Essentiality | Focus |
|---|---|---|---|
| Landscape Diagrams | ≡ layers | Essential | Business + IT |
| Landscape Maps | 📍 map-pin | Popular | IT |
| System Portfolio Models | ▦ layout-grid | Popular | IT |
| IT Roadmaps | 📅 calendar-days | Common | IT |
| Asset Inventories | 📋 clipboard-list | Uncommon | IT |
| Asset Roadmaps | 📅 calendar | Uncommon | IT |

### ● Outlines - High-level implementation plans
| Artifact | Icon | Essentiality | Focus |
|---|---|---|---|
| Solution Briefs | 📄 file-text | Essential | Business + IT |
| Solution Overviews | 🔍 file-search | Essential | Business + IT |
| Solution Options | ✓ list-checks | Uncommon | Business + IT |

### ● Designs - Detailed specs for specific solutions
| Artifact | Icon | Essentiality | Focus |
|---|---|---|---|
| Solution Designs | 💻 code-2 | Essential | IT |
| Preliminary Solution Designs | ✏ pencil-ruler | Popular | IT |

### ● Standards - Rules and reference materials for governance
| Artifact | Icon | Essentiality | Focus |
|---|---|---|---|
| Technology Reference Models | ◎ target | Essential | IT |
| Patterns | 🧩 puzzle | Popular | IT |
| Guidelines | 📖 book-open | Common | IT |
| IT Principles | ⚙ cpu | Common | IT |
| Logical Data Models | 🗄 database | Common | IT |
| Technology Inventories | 📦 package | Uncommon | IT |
| Technology Roadmaps | 📈 trending-up | Uncommon | IT |

---

## The research behind the filters

The artifact classifications follow the CSVLOD taxonomy from Kotusev's peer-reviewed research:

> Kotusev, S., Kurnia, S., & Dilnutt, R. (2022). The practical roles of enterprise architecture artifacts: A classification and relationship. *Information and Software Technology*, 147, 106897.

The three EA processes (Strategic Planning, Technology Optimisation, Initiative Delivery) come from:

> Kotusev, S. (2019). *Enterprise Architecture Practice on a Page*. British Computer Society.

I deliberately avoided adding time-horizon filters (short/medium/long-term) because the research explicitly notes that artifacts can describe multiple time points or be essentially timeless - imposing fixed horizons would be misleading.

---

## Want to learn more about the framework?

If this app is useful to you and you want to go deeper, these are the resources I'd recommend:

**Books by Svyatoslav Kotusev**
- [*The Practice of Enterprise Architecture: A Modern Approach to Business and IT Alignment*](https://eaonapage.com) (2nd edition, 2021) - The comprehensive textbook behind the framework. Based on Kotusev's PhD research at RMIT University. Adopted as a key EA textbook in universities across North America, Europe and Asia. This is the primary source for everything in this app.
- *Enterprise Architects: The Agents of Digital Transformation* - Focuses on the people side of EA: what enterprise architects actually do and how they drive change in organisations.

**Udemy courses**

Kotusev also teaches the material through a structured course series on Udemy: *The Practice of Enterprise Architecture* - multi-part video courses covering the CSVLOD model, EA processes, artifact types, and practical implementation. Good if you prefer video-based learning over reading.

**YouTube: EA on a Page video series by Ashraf Fouad**

Ashraf Fouad (Techie Architect) has been producing an excellent video series walking through the EA on a Page framework episode by episode - covering artifacts, governance structures, processes, and practical application. Created with Kotusev's permission for educational knowledge sharing. [EA on a Page video series](https://www.youtube.com/@TechieArchitect) - 10+ episodes covering Considerations, Standards, Visions, Landscapes, governance committees, and more. Highly recommended for visual learners.

**The framework itself**

[eaonapage.com](https://eaonapage.com) - The official EA on a Page website with the PDF framework, teaching materials, and Kotusev's full publication list.

---

## Also a Claude AI experiment

Full transparency: this entire app was built in conversation with Claude (Anthropic's AI). I wanted to see how far I could take a real product idea - from brainstorming through research validation to a deployed web app - using AI as a coding partner.

The answer: very far, with a lot of back-and-forth. Over many iterations the project grew from a single HTML file into a properly split multi-file architecture covering all four of Kotusev's reference models. The AI was good at scaffolding, data modelling, implementing the History API for navigation, and generating SVG visuals. It needed nudging on design taste, the Browser History API took a few attempts to get right, and research validation - checking filters against Kotusev's peer-reviewed sources - genuinely changed the product direction more than once (including correcting a mis-classification of 11 artifacts that a third-party report got wrong).

If you're curious about AI-assisted development, this is an honest example of what that looks like in practice: useful, iterative, and occasionally wrong in ways you have to catch.

---

## Sharing is caring

I'm sharing this because I think it could help other EA students and practitioners navigate the framework more easily. If you have suggestions, spot an error in the artifact data, or think a classification could be improved - please open an issue or submit a PR. I'd love the feedback.

This is a learning project, and learning works better in the open.

---

## Technical

### Stack

```
HTML + CSS + Vanilla JS   No framework, no build step
Cloudflare Pages          Static hosting, auto-deploy on git push
Lucide icons              MIT licensed SVG icons (CDN)
Satoshi + Instrument Serif  Fonts via Fontshare
```

### File structure

```
public/
├── index.html          # HTML shell - all views and navigation structure
├── style.css           # All styles, including mobile responsive
└── js/
    ├── data.js         # All Kotusev data (FM, DA, PRACTICE_DATA, MATURITY_DATA)
    ├── viz.js          # Inline SVG visualisations for artifact detail views
    ├── artifacts.js    # Explore, Map, Find, Detail views + highlight filters
    ├── practice.js     # EA Practice view
    ├── maturity.js     # EA Maturity view
    ├── function.js     # EA Function view
    └── app.js          # Navigation (History API), theme, text size, init
```

### Navigation

The app uses the Browser History API - every view has a hash URL so browser back/forward work natively, deep links open the correct view, and page refresh returns to where you were:

```
#home  ·  #practice  ·  #function  ·  #maturity
#artifacts/map  ·  #artifacts/grid  ·  #artifacts/chooser
#artifact/{id}    e.g. #artifact/principles
```

---

## Running locally

```bash
cd public
python3 -m http.server 8080
# Open http://localhost:8080
```

No build step, no dependencies.

## Deploying

Hosted on Cloudflare Pages. To deploy your own:

1. Fork this repo
2. Connect it to Cloudflare Pages
3. Leave build command empty, set output directory to `public`
4. Deploy

To update from a zip (always run from repo root):

```bash
cd /workspaces/ea-on-a-page   # repo root, not inside public/
unzip -o ea-on-a-page.zip -d public/ && rm ea-on-a-page.zip
git add -A && git commit -m "your message" && git push origin main
```

---

## Licence

MIT - do whatever you like with it.

---

## Links

- [EA on a Page framework](https://eaonapage.com) - Svyatoslav Kotusev
- [CSVLOD paper](https://www.sciencedirect.com/science/article/abs/pii/S0950584922000593) - Information & Software Technology, 2022
- [Kotusev's Udemy courses](https://www.udemy.com/user/svyatoslav-kotusev/)
- [EA on a Page video series](https://www.youtube.com/@TechieArchitect) - Ashraf Fouad

[![LinkedIn](https://img.shields.io/badge/LinkedIn-luiz--hrsantana-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luiz-hrsantana/)
[![GitHub](https://img.shields.io/badge/GitHub-luizhrs-24292e?style=flat-square&logo=github&logoColor=white)](https://github.com/luizhrs/ea-on-a-page)
[![Substack](https://img.shields.io/badge/Substack-luizhrsantana-FF6719?style=flat-square&logo=substack&logoColor=white)](https://luizhrsantana.substack.com/)
