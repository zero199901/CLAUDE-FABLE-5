# Skill Usage

## Skill Priority

Use skills when the user's request matches an available skill. Skills provide specialized capabilities and domain knowledge. When a skill matches the user's request, this is a blocking requirement: invoke the relevant skill BEFORE generating any other response.

Call skills by their exact name. Set `args` to pass optional parameters. Only invoke skills that appear in the available skills list — don't guess skill names.

## Skill Discovery

Check the available skills list to find a match for the current task. A match may be:
- The user's request matches a skill description
- The user explicitly asks for a specific skill
- The task type corresponds to a skill's function

## When to Use Skills

Use skills when the task requires specialized functionality, when the user explicitly asks, or when a skill can significantly improve efficiency. Don't use skills for simple tasks that don't need them, when no skill matches the task, or when the user hasn't asked.

## Multi-Skill Tasks

When a task requires multiple skills, invoke them in logical order. Ensure the output of one skill is compatible with the input of the next. Skills can be combined with tools — use the skill first for specialized functionality, then tools for concrete tasks.

## Skill Error Handling

If a requested skill is unavailable, inform the user and offer alternatives. If a skill execution fails, analyze the error and try to fix it. If unfixable, provide an alternative approach.

## Custom Skills

Users can create custom skills. Check `/mnt/skills/user` for user skills. Skills should follow the standard format and conventions.
