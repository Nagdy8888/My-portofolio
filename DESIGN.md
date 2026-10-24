---
name: Mustafa Alnagdy Portfolio
description: An engineering showcase of real AI software and the work behind it.
colors:
  primary: "#216556"
  primary-hover: "#174c40"
  text: "#17313e"
  text-light: "#53656b"
  bg: "#f8faf9"
  bg-alt: "#edf2ef"
  border: "#d6dfda"
  surface: "#fff"
  mint: "#c4ecd7"
  dark-primary: "#a1d9bc"
  dark-text: "#edf5f1"
  dark-text-light: "#b1c3bc"
  dark-bg: "#14262d"
  dark-bg-alt: "#1b3239"
  dark-border: "#375058"
  dark-surface: "#203840"
typography:
  display:
    fontFamily: "Manrope, Segoe UI, sans-serif"
    fontSize: "clamp(52px, 5.5vw, 78px)"
    fontWeight: 650
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, Segoe UI, sans-serif"
    fontSize: "clamp(34px, 3.4vw, 46px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  title:
    fontSize: "24px"
    fontWeight: 650
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope, Segoe UI, sans-serif"
    fontSize: "14px"
    lineHeight: 1.8
  label:
    fontSize: "12px"
rounded:
  image: "4px"
  control: "5px"
  compact: "6px"
  card: "8px"
  dialog: "10px"
  artifact: "12px"
  circle: "50%"
spacing:
  tag-gap: "7px"
  compact: "12px"
  control-block: "15px"
  artifact: "22px"
  section-mobile: "56px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
    rounded: "{rounded.control}"
    padding: "15px 22px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
  tag:
    rounded: "{rounded.image}"
    padding: "5px 9px"
  filter:
    rounded: "{rounded.control}"
    padding: "10px 16px"
  filter-selected:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
  theme-control:
    rounded: "{rounded.circle}"
    width: "44px"
    height: "44px"
---

# Design System: Mustafa Alnagdy Portfolio

## Overview

**Creative North Star: "The Engineering Showcase"**

A calm exhibition of working software for prospective engineering clients and employers. The confirmed off-white, navy, and mint direction combines geometric typography, measured whitespace, real product imagery, and quiet functional navigation. The implementation is code-first.

Screenshots provide the visual evidence; the surrounding interface gives them a clear frame. Large statements introduce the work while compact metadata and restrained borders support close inspection.

**Key Characteristics:**

- Measured off-white space and strong navy hierarchy.
- Direct product screenshots, a mint screenshot caption, and mint contact surfaces.
- Compact labels, understated controls, and accessible inspection.

## Colors

Forest green supplies the functional accent; navy carries the main typographic weight, and pale neutrals separate sections.

### Primary

- **Forest:** links, focus outlines, active navigation, and button hover. The deeper forest token is available as the hover accent.
- **Mint:** contact panels and small highlights within the navy practice section.

### Neutral

- **Navy ink:** primary text and filled actions.
- **Off-white:** the default page ground.
- **Pale sage:** alternate sections and diagram grounds.
- **Slate:** secondary prose and metadata.
- **Sage border:** quiet rules and control outlines.
- **White surface:** screenshot viewer and compact image-enlargement labels.

Dark mode swaps the semantic colors to the documented dark tokens: deep blue-green grounds, pale text, and a lighter green accent. Mint contact surfaces keep navy ink for contrast. Screenshot content retains its original colors.

## Typography

**Display and body font:** locally hosted variable Manrope, with Segoe UI and sans-serif fallbacks. There is no separate mono face.

The rounded geometric sans gives the work a clear, approachable engineering voice. Heading tracking is tight; body text stays open and readable.

- **Display:** the frontmatter display role is the homepage hero. At the intermediate layout it becomes (60px); mobile uses (clamp(48px, 10vw, 68px)).
- **Headline:** homepage section headings use the headline role and become (35px) on mobile.
- **Title:** supporting project titles use the title role; the featured project is larger (36px, weight 650, line-height 1.15).
- **Body:** project summaries use the body role. Hero prose is (15px, line-height 1.85); case-study prose is (15px, line-height 1.95) with a maximum width of (72ch).
- **Label:** metadata, tags, case facts, timeline metadata, and footer use readable (12px) labels; desktop navigation is (13px, weight 600). Labels retain natural case.

## Layout

The centered content container is capped at (1240px), with total horizontal inset of (112px). At widths up to (1100px), the inset becomes (64px); up to (767px), it becomes (40px). Section spacing uses (80px) above and below on desktop and (56px) on mobile.

The desktop hero pairs introduction and screenshot in unequal columns (.95fr / 1.2fr), separated by (48px), contracting to (35px) at the intermediate breakpoint. The hero starts with (16px) clearance and composition padding of (32px 0 44px); wide screens use (40px) composition padding. Mobile clearance is (12px), with composition padding of (24px 0 32px). The CV link sits beside the work CTA in a wrapping row with a (24px) gap. Featured work uses (1.35fr / 1fr); supporting work and the archive use two columns. About uses (.9fr / 1.1fr) and experience (.8fr / 1.2fr), each with a (64px) desktop gap, while practice uses three columns. At the mobile breakpoint these become single-column flows. The screenshot follows the hero text and portrait without rotation.

The sticky header is (88px) tall on desktop and (72px) on mobile. Desktop links and the header contact button give way to a menu control below (768px). Case studies use an overview/sidebar structure: the outline stays sticky at (120px) on desktop and becomes a wrapping inline list on mobile. Four facts form a balanced two-by-two grid on mobile. Long text, tags, contact links, and footer items wrap.

## Elevation & Depth

Most surfaces are flat, separated by tonal grounds and one-pixel rules. The hero screenshot uses a thin border without a shadow; supporting product imagery uses thin borders without outer padded cards. The hero screenshot remains level at every breakpoint. Buttons change background over (.18s). Reduced-motion preferences remove transitions, animation, and the artifact rotation.

### Shadow Vocabulary

- **Hero screenshot:** (`0 12px 30px #17313e20`).

## Shapes

Rectangular content and softened screenshot frames dominate. Small image corners, compact controls, the viewer, and the hero artifact follow the frontmatter radius scale. Circular forms are reserved for theme controls and small status dots. Borders remain thin; content articles are not enclosed in uniformly elevated cards.

## Components

### Buttons

Filled actions are compact and confident: navy with off-white text, modest corners, and forest hover. Text links use a thin underline and turn forest on hover. Keyboard focus across interactive elements receives a (3px) accent outline offset by (5px). On mint contact and case CTA sections, the outline uses the navy ink token so it remains visible in dark mode.

### Tags and filters

Tags are small outlined metadata labels, with a (1px) semantic border. Case-study headers show at most six tags; the later Built with section shows the complete stack. Archive filters share the modest control radius; the selected filter fills with text color and reverses its label. Hover changes the border to the accent. Filters have a minimum height of (44px), expose pressed state, update the category URL, and announce the visible project count.

### Screenshots and architecture sections

The hero presents the product screenshot directly, with a ruled heading and mint caption, and links to its case study. Supporting project and case-study images sit directly on the page with zero wrapper padding, modest corners, and thin image borders. Supporting homepage frames and case/gallery wrappers are transparent; archive wrappers retain the alternate ground behind their edge-to-edge imagery. Gallery image links open the viewer when supported, and link directly to the original image when JavaScript is unavailable. ImageAnalysis leads with the completed tagging result rather than an empty upload state. Archive entries without screenshots use ruled text articles without placeholder imagery. Portraits use softly rounded crops.

Architecture figures are open sections with a top rule, transparent background, and square outer edges. Desktop padding is (28px 0 12px), contracting to (22px 0 12px) on mobile. The diagram itself retains a pale inset ground and horizontal overflow for its minimum (580px) SVG width; it is not enclosed in an additional card.

### Navigation

The wordmark combines a bold lowercase initial and green dot with the full name. Desktop navigation is compact and turns accent on hover or current route. The mobile menu opens inline below the header, moves focus to its first link, closes on link selection or Escape, and restores focus to the control on Escape. The theme button keeps a (44px by 44px) touch target on desktop and mobile, persists the user's choice, and otherwise follows system preference.

### Screenshot viewer

A native modal dialog has a rounded surface, an explicit Close control, and a dark translucent backdrop (`#081b29d9`). Its width is capped at (1440px / 96vw), height at (94dvh), and the image preserves its aspect ratio. Images start fitted to the available width. The Original size toggle displays the intrinsic image dimensions and changes its label to Fit to screen; its pressed state reflects original-size mode. An Open original link opens the source image in a new tab.

The image sits in a keyboard-focusable, labeled scroll region with contained overscroll. Its maximum height is (calc(94dvh - 110px)), reduced to (calc(94dvh - 180px)) on mobile as the toolbar stacks. Viewer controls have minimum (44px) height. Opening locks page scrolling; closing restores it and returns focus to the opener. The backdrop and Escape also dismiss the viewer. Gallery triggers remain real image links: without JavaScript or modal support they navigate to the image, while modified clicks preserve native new-tab gestures.

## Do's and Don'ts

### Do:

- **Do** use the shared semantic palette so light and dark themes remain coherent.
- **Do** let real software imagery carry the visual evidence.
- **Do** preserve measured section spacing and readable supporting metadata.
- **Do** keep keyboard focus visible and honor reduced motion.

### Don't:

- **Don't** turn every article into a shadowed card; the current hierarchy relies on whitespace, rules, and tonal sections.
- **Don't** retain the hero rotation on mobile or under reduced motion.
- **Don't** substitute decorative mockups for the real screenshots that define this showcase.
