# Portfolio Domain Glossary & Concept Models

This document defines key terms, architectural metaphors, and domain models used throughout **The Shadow Academic** portfolio.

---

## 🏛️ Domain Concepts & Mapping

| Concept | Domain Meaning | Portfolio Implementation |
| :--- | :--- | :--- |
| **Hunter Profile** | Overview of identity, level, title, and current engineering status. | **Hero Section**: Displays Name, Title, Live Status Indicator (`SYSTEM ACTIVE`), and dynamic typewriter focus. |
| **Typewriter Rotator** | Animated text effect cycling through technical competencies with a blinking cursor. | `<TypewriterRole />`: Client component leaf rendering rotating skill roles in cyan glow. |
| **Armory** | The repository of weapons, gear, and past conquests. | **Projects Section**: Showcases 2 production projects with deep architectural case studies + 1 "Locked Quest" slot. |
| **Skill Matrix** | RPG status sheet measuring proficiencies from S-Rank to E-Rank. | **Technical Skills Section**: Categorized proficiency grid (Languages, Frameworks, Cloud, Databases) with hunter tier badges. |
| **Quest Inquiry** | A formal challenge or contract extended to the hunter. | **Contact Form**: Rate-limited communication conduit for recruiters and engineering leads. |
| **System Terminal** | Command-line interface granting direct access to system subroutines. | **Interactive CLI Modal (Ctrl+K)**: Deterministic command parser (`whoami`, `skills`, `projects`, `theme`, `clear`). |
| **System Frame** | The holographic translucent UI container that houses data. | `<SystemWindow />`: Translucent container with 1px border and glowing corner brackets. |
