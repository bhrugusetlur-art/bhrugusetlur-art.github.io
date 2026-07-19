# CPU and Generex Portfolio Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Correct and refresh the portfolio's CPU-design project and Generex experience copy using the repositories' current verified results.

**Architecture:** Keep the existing static-site structure intact and change only text inside existing `index.html` sections. The About/Skills references remain short, the Generex experience entry carries the embedded milestone evidence, and the existing CPU datasheet carries the RTL-to-GDS result and its qualifications.

**Tech Stack:** Static HTML5; existing CSS and vanilla JavaScript remain untouched.

## Global Constraints

- Modify only `index.html` for the site update.
- Do not edit `styles.css`, `script.js`, assets, layout, navigation, or interaction.
- Do not add media, panels, cards, or sections.
- Describe the Generex module link as an opto-isolated four-wire BACS sensor network, not RS-485.
- Describe the CPU result as a project-verified Sky130 core GDS, not a fabricated chip or foundry-signed-off design.
- Distinguish the compile-checked Basys3 wrapper from a completed physical-board demonstration.

---

### Task 1: Refresh all CPU and Generex references

**Files:**
- Modify: `index.html:132-159`
- Modify: `index.html:197-214`
- Modify: `index.html:267-301`

**Interfaces:**
- Consumes: Current facts from `/Users/bhrugusetlur/dev/cpu-design/README.md`, `/Users/bhrugusetlur/dev/cpu-design/AGENTS.md`, `/Users/bhrugusetlur/dev/STM32/els-g071/README.md`, and `/Users/bhrugusetlur/dev/STM32/els-g071/AGENTS.md`.
- Produces: Accurate portfolio copy inside the existing About, Skills, Experience, and Projects markup.

- [x] **Step 1: Establish the stale-copy assertions**

Run:

```bash
rg -n 'running on real hardware|RS-485|354 automated|Physical tapeout is next|13 modules|running on a Basys 3' index.html
```

Expected: matches for the stale About, Generex, and CPU claims.

- [x] **Step 2: Replace the short About and Skills references**

In the existing About paragraphs, state that the CPU was carried from RTL to a verified Sky130 core layout and that the Generex firmware is tested off-device before hardware interoperability work. In the existing Hardware skills line, remove the inaccurate `RS-485` reference and include the actual work represented by these repositories: ARM Cortex-M0+/M4, BACS sensor networking, and ASIC physical design. Add OpenROAD and KLayout to the existing tools line.

- [x] **Step 3: Replace the Generex experience copy**

Keep the existing heading, role, dates, and HTML structure. The two paragraphs must convey:

```text
Developing replacement firmware for an industrial electrolyte-level sensor. The STM32G071 target coordinates four VL53L4CX time-of-flight sensors, applies debounced level and detachment logic, and acts as an ELS2-compatible slave on Generex's opto-isolated four-wire BACS sensor network.

Built the protocol and decision stack as portable, hardware-independent C with 7,737 passing host checks under strict warnings. Recovered and validated BACS framing and CRC behavior against official tools and 125,323 captured Reader/Simulator frames. The F401 devkit firmware now interoperates with the official Generex Module Reader with zero CRC errors while non-blocking diagnostics stream over SWD; custom-board integration and optical calibration remain in progress.
```

- [x] **Step 4: Replace the CPU project copy and specifications**

Keep the existing datasheet article and repository link. Rename it `8-bit CPU: RTL to GDS`, update the tag to `Verilog · FPGA · Sky130`, and summarize the 12-instruction Harvard CPU, write-back L1/L2 hierarchy, TLB/MMU, test/assembler/FPGA work, and routed Sky130 result. Explicitly state that this is a verified core block rather than a fabricated chip.

Replace the stale specification rows with these facts:

```text
Architecture — 8-bit Harvard · 12-instruction ISA
Memory — Write-back L1 + 4-way L2 (LRU)
Virtual memory — 4-entry TLB · hardware page walks · page faults
Verification — 15 Verilog suites + integration, assembler, and physical-deck checks
FPGA — Basys3 wrapper + trace-driven debug demo; board run pending
ASIC — Sky130 HD · 12,778 cells · about 19% utilization
Timing — 10 MHz target · 90.29 ns setup slack
Physical checks — Route DRC/antenna/KLayout clean · project LVS 146/146
Status — Via-complete core GDS; wrapper, memories, and foundry signoff pending
```

- [x] **Step 5: Verify stale claims are gone and new evidence is present**

Run:

```bash
if rg -n 'running on real hardware|RS-485|354 automated|Physical tapeout is next|13 modules|running on a Basys 3' index.html; then exit 1; fi
rg -n '7,737|125,323|official Generex Module Reader|Sky130 HD|12,778|90\.29|146/146|board run pending' index.html
```

Expected: the first search exits successfully with no matches; the second prints every new milestone.

- [x] **Step 6: Validate HTML and scope**

Run:

```bash
python3 -c "from html.parser import HTMLParser; HTMLParser().feed(open('index.html', encoding='utf-8').read()); print('HTML parse: OK')"
git diff --check
git diff --name-only HEAD
```

Expected: `HTML parse: OK`, no whitespace errors, and only `index.html` plus this plan document appears relative to the design-spec commit.

- [x] **Step 7: Commit the content update**

```bash
git add index.html docs/superpowers/plans/2026-07-18-cpu-generex-portfolio-content.md
git commit -m "content: update CPU and Generex portfolio details"
```
