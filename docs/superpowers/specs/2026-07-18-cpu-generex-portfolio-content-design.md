# CPU and Generex Portfolio Content Update

## Goal

Bring the existing portfolio copy in line with the current `cpu-design` and
Generex ELS firmware repositories without changing the site's visual design,
layout, navigation, or interaction.

## Scope

Update only factual project and experience content in `index.html`:

- Correct short references in the About and Skills sections where the project
  documentation has made the existing wording inaccurate.
- Replace the stale Generex experience summary with the current verified
  milestones: portable BACS firmware, host regression coverage, official
  Reader interoperability on the F401 devkit, and non-blocking SWD diagnostics.
- Replace the stale CPU project summary and specification rows with the current
  RTL-to-GDS result, accurately distinguishing simulation, FPGA-wrapper
  readiness, project-level physical verification, and remaining fabrication
  work.

## Content Rules

- Preserve all existing HTML structure and CSS class names unless a copy-only
  change requires a small semantic adjustment.
- Do not edit `styles.css` or `script.js`.
- Do not add images, animations, panels, cards, or new sections.
- Use only claims supported by the current repositories.
- Keep qualification language visible: the CPU core has a verified Sky130 GDS
  but is not fabricated or foundry-signed-off; the Generex proof is on an F401
  devkit while the custom G071 board remains pending.
- Describe the module link as the opto-isolated four-wire BACS sensor network,
  not RS-485. RS-485 applies only upstream of the ELSi2 controller.

## Verification

- Search the finished page for stale claims such as `RS-485`, `354`,
  `Physical tapeout is next`, and `running on a Basys 3`.
- Validate the HTML with an available local validator or parser.
- Review the final diff to confirm that no styling or behavior files changed.

