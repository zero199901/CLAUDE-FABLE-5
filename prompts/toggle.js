#!/usr/bin/env node

/**
 * FABLE Prompt Toggle
 *
 * Usage:
 *   node prompts/toggle.js on     # Enable FABLE prompts
 *   node prompts/toggle.js off    # Disable FABLE prompts
 *   node prompts/toggle.js status # Check current status
 */

const fs = require('fs');
const path = require('path');

const CLAUDE_MD = path.join(__dirname, '..', 'CLAUDE.md');
const PROMPTS_DIR = __dirname;

// Module files in load order
const MODULES = [
  { file: 'conversation.md',   label: 'Conversation Style' },
  { file: 'honesty.md',        label: 'Honesty & Boundaries' },
  { file: 'output.md',         label: 'Output Format' },
  { file: 'skills.md',         label: 'Skill Usage' },
  { file: 'mcp.md',            label: 'MCP Calls' },
  { file: 'file-creation.md',  label: 'File Creation' },
  { file: 'environment.md',    label: 'Environment Management' },
  { file: 'search.md',         label: 'Web Search' },
  { file: 'web-fetch.md',      label: 'Web Fetching' },
  { file: 'image-search.md',   label: 'Image Search' },
  { file: 'research.md',       label: 'Research & Thinking' },
];

/**
 * Read all module files and concatenate their content
 */
function readModules() {
  let content = '';
  for (const mod of MODULES) {
    const filePath = path.join(PROMPTS_DIR, mod.file);
    try {
      const moduleContent = fs.readFileSync(filePath, 'utf8');
      content += `${moduleContent}\n\n---\n\n`;
    } catch (e) {
      console.error(`ERROR: Cannot read ${mod.file}: ${e.message}`);
      process.exit(1);
    }
  }
  return content;
}

/**
 * Check if FABLE is currently enabled
 */
function getStatus() {
  try {
    const content = fs.readFileSync(CLAUDE_MD, 'utf8');
    return content.includes('<!-- FABLE_ENABLED -->');
  } catch {
    return false;
  }
}

/**
 * Generate and write CLAUDE.md with FABLE enabled
 */
function enableFable() {
  let modules;
  try {
    modules = readModules();
  } catch (e) {
    console.error('Failed to read modules.');
    process.exit(1);
  }

  const header = `# Claude Code Performance Enhancement

<!-- FABLE_ENABLED -->

This configuration integrates performance and thinking optimization instructions extracted from the CLAUDE-FABLE-5 system prompt.

## Status

**FABLE Prompts: ENABLED**

## Quick Toggle

\`\`\`bash
node prompts/toggle.js on     # enable
node prompts/toggle.js off    # disable
node prompts/toggle.js status # check status
\`\`\`

---

`;

  fs.writeFileSync(CLAUDE_MD, header + modules, 'utf8');
  console.log('FABLE prompts ENABLED');
  console.log('Restart Claude Code or start a new conversation to apply.');
}

/**
 * Generate and write CLAUDE.md with FABLE disabled
 */
function disableFable() {
  const content = `# Claude Code Performance Enhancement

<!-- FABLE_DISABLED -->

This configuration integrates performance and thinking optimization instructions extracted from the CLAUDE-FABLE-5 system prompt.

## Status

**FABLE Prompts: DISABLED**

## Quick Toggle

\`\`\`bash
node prompts/toggle.js on     # enable
node prompts/toggle.js off    # disable
node prompts/toggle.js status # check status
\`\`\`

---

## Custom

Add custom prompts here.

`;

  fs.writeFileSync(CLAUDE_MD, content, 'utf8');
  console.log('FABLE prompts DISABLED');
  console.log('Restart Claude Code or start a new conversation to apply.');
}

// Main
const action = process.argv[2];

switch (action) {
  case 'on':
    enableFable();
    break;
  case 'off':
    disableFable();
    break;
  case 'status':
    const enabled = getStatus();
    if (enabled) {
      console.log('FABLE prompts: ENABLED');
    } else {
      console.log('FABLE prompts: DISABLED');
    }
    break;
  default:
    console.log('FABLE Prompt Toggle');
    console.log('');
    console.log('Usage:');
    console.log('  node prompts/toggle.js on     # enable');
    console.log('  node prompts/toggle.js off    # disable');
    console.log('  node prompts/toggle.js status # check status');
}
