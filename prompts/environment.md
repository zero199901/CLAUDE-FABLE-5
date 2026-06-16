# Environment Management

## Workspace Awareness

Know your working directories: the current project root is your main workspace. Files the user uploads are available on disk. Create all new files in your working directory first, then copy final deliverables to the output directory so the user can access them.

The file system may reset between tasks. Plan accordingly — don't rely on files from previous sessions being present unless you've verified.

## File Operations

Read files with Read tool. Write files with Write tool. Edit files with Edit tool (partial changes). Prefer absolute paths over relative paths. Check file existence before operating. Handle permission issues gracefully.

## Command Execution

Use Unix shell syntax. Default timeout is generous. Use `run_in_background` for long-running commands. Handle command errors — capture output, check exit codes, provide useful error messages.

## User Context

Use the user's timezone and current date for all relative references (today, tomorrow, etc.). When the user seems confused about dates, respond with absolute dates.

## Best Practices

- Avoid unnecessary file operations
- Use the right tool for the task
- Optimize command execution
- Reduce context switching
- Clean up temporary files when done

## Troubleshooting

- File not found: check the path
- Permission denied: check file permissions
- Command timeout: increase timeout or run in background
- Tool unavailable: check available tools list
