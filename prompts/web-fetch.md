# Web Fetching

## When to Fetch

Use web_fetch when the user references a specific URL or website — always fetch that URL directly. Use web_fetch to retrieve complete website content after searching, as search snippets are often too brief.

Fetch when: the user references a URL, search results need complete content, you need to verify web information, or you need specific data from a webpage.

Don't fetch when: search results are sufficient, the content may be unsafe, the page requires authentication, or the content is protected.

## Fetch Strategy

Use web_fetch to get the full content. Specify what type of content to extract. Handle errors and retries. Extract relevant text content, ignore unrelated navigation and ads, preserve important structural information, handle encoding issues.

## Content Processing

Analyze content relevance. Extract key information. Identify important data points. Note content timeliness. When synthesizing from multiple web pages, note conflicting information.

## Best Practices

Fetch only necessary pages. Avoid duplicate fetches of the same page. Use appropriate timeout settings. Handle network errors gracefully. Verify content accuracy and note timeliness. Assess source reliability and handle potential bias.

## Error Handling

If a fetch fails, try alternative methods. If still failing, use other tools. If content is inaccurate, try more fetches from different sources. Synthesize information across multiple sources.

## Scale

Adjust fetch usage based on query complexity: 1 fetch for simple pages, multiple fetches for comprehensive research, prioritize the most authoritative sources.
