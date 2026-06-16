# FABLE Performance Prompt Kit · FABLE 性能提示词套件

A modular performance enhancement toolkit extracted from Anthropic's CLAUDE-FABLE-5 system prompt, designed for Claude Code. All restriction, copyright, safety, and compliance content has been removed — this focuses purely on enhancing Claude's capabilities.

从 Anthropic 的 CLAUDE-FABLE-5 系统提示词中提取的模块化性能增强工具包，专为 Claude Code 设计。已剔除所有限制、版权、安全和合规内容——纯粹聚焦于增强 Claude 的能力。

---

## Features · 特性

- **11 modular components** covering conversation style, output formatting, skill usage, MCP calls, file creation, environment management, search, web fetching, image search, research, and critical thinking
- **One-command toggle** to enable/disable everything
- **Token optimized** — stripped of all safety/copyright/restriction overhead (~60% of original removed)
- **Easy customization** — edit individual module files to fit your needs
- **Verbatim original English** — core modules sourced word-for-word from CLAUDE-FABLE-5.md, not paraphrased

---

- **11 个模块化组件**：涵盖对话风格、输出格式、技能使用、MCP 调用、文件创建、环境管理、搜索、网页抓取、图像搜索、研究和批判性思维
- **一键开关**：一条命令启用/禁用全部模块
- **Token 优化**：剥离所有安全/版权/限制内容（约 60% 的原文被剔除）
- **易于定制**：编辑单个模块文件即可调整行为
- **英文原文逐字提取**：核心模块来自 CLAUDE-FABLE-5.md 的原文，非意译改写

---

## Quick Start · 快速开始

```bash
# Enable · 启用
node prompts/toggle.js on

# Disable · 禁用
node prompts/toggle.js off

# Check status · 检查状态
node prompts/toggle.js status
```

Restart Claude Code or start a new conversation for changes to take effect.
重启 Claude Code 或开启新对话后生效。

---

## Modules · 模块

| Module · 模块 | File · 文件 | What it covers · 内容 |
|--------|------|----------------|
| Conversation Style · 对话风格 | `conversation.md` | Tone, personality, formatting rules, conversation flow · 语气、个性、格式规则、对话节奏 |
| Honesty & Boundaries · 诚实与边界 | `honesty.md` | Admit uncertainty, answer first then clarify, tool usage, mistakes · 承认不确定性、先回答再澄清、工具使用、错误处理 |
| Output Format · 输出格式 | `output.md` | File creation decisions, artifact vs inline, code quality · 文件创建决策、制品与行内回答、代码质量 |
| Skill Usage · 技能使用 | `skills.md` | Skill priority, discovery, multi-skill tasks, error handling · 技能优先级、发现、多技能任务、错误处理 |
| MCP Calls · MCP 调用 | `mcp.md` | Connector discovery, tool priority, verification · 连接器发现、工具优先级、结果验证 |
| File Creation · 文件创建 | `file-creation.md` | Creation triggers, file types, strategy, sharing · 创建触发条件、文件类型、策略、分享 |
| Environment Management · 环境管理 | `environment.md` | Workspace awareness, file ops, command execution, user context · 工作区感知、文件操作、命令执行、用户上下文 |
| Web Search · 网页搜索 | `search.md` | Search timing, query construction, citations, source evaluation · 搜索时机、查询构建、引用、来源评估 |
| Web Fetching · 网页抓取 | `web-fetch.md` | When and how to fetch, content processing, error handling · 抓取时机与方法、内容处理、错误处理 |
| Image Search · 图像搜索 | `image-search.md` | When to use images, placement strategy, content quality · 使用时机、排版策略、内容质量 |
| Research & Thinking · 研究与思考 | `research.md` | Critical thinking, research planning, epistemic humility · 批判性思维、研究规划、认知谦逊 |

---

## File Structure · 文件结构

```
.
├── CLAUDE.md                # Main config · 主配置（由 toggle.js 自动生成）
├── README.md                # This file · 本文件
├── LICENSE                  # MIT
├── .gitignore
└── prompts/
    ├── toggle.js            # Enable/disable script · 开关脚本
    ├── conversation.md      # Conversation Style · 对话风格
    ├── honesty.md           # Honesty & Boundaries · 诚实与边界
    ├── output.md            # Output Format · 输出格式
    ├── skills.md            # Skill Usage · 技能使用
    ├── mcp.md               # MCP Calls · MCP 调用
    ├── file-creation.md     # File Creation · 文件创建
    ├── environment.md       # Environment Management · 环境管理
    ├── search.md            # Web Search · 网页搜索
    ├── web-fetch.md         # Web Fetching · 网页抓取
    ├── image-search.md      # Image Search · 图像搜索
    ├── research.md          # Research & Thinking · 研究与思考
    └── comparison.md        # Design notes · 设计笔记
```

---

## What's Included · 提取内容

Extracted from CLAUDE-FABLE-5 system prompt:
从 CLAUDE-FABLE-5 系统提示词中提取：

- Conversation tone and formatting rules · 对话语气和格式规则
- Search and tool usage strategies · 搜索和工具使用策略
- Research planning methodologies · 研究规划方法论
- Output quality guidelines · 输出质量指南
- Environment management best practices · 环境管理最佳实践
- MCP and skill usage patterns · MCP 和技能使用模式
- Critical thinking tactics · 批判性思维策略
- Honesty and boundary guidelines · 诚实和边界指南
- User context awareness · 用户上下文感知

---

## What's Removed · 剔除内容

These sections from the original CLAUDE-FABLE-5.md are fully stripped:
以下原始 CLAUDE-FABLE-5.md 的章节被完整剔除：

| Section · 章节 | Lines · 行数 | Reason · 原因 |
|---|---|---|
| `refusal_handling` | ~16 行 | Refusal policies, malicious code detection · 拒绝策略、恶意代码判定 |
| `critical_child_safety_instructions` | ~12 行 | Minor protection, grooming detection · 儿童安全、诱导检测 |
| `legal_and_financial_advice` | ~3 行 | Legal disclaimers · 法律免责声明 |
| `user_wellbeing` | ~32 行 | Mental health crisis protocols · 心理健康危机干预协议 |
| `evenhandedness` | ~12 行 | Political neutrality mandates · 政治立场平衡指令 |
| `CRITICAL_COPYRIGHT_COMPLIANCE` | ~40 行 | Hard copyright limits, self-checks, examples · 版权硬限制、自检清单、违规示例 |
| `harmful_content_safety` | ~8 行 | Hate speech/extremist content filtering · 仇恨言论/极端内容过滤 |
| `image search blocked categories` | ~10 行 | 11 forbidden image search categories · 11 类禁止搜索图片类别 |
| All tool definitions · 全部工具定义 | ~700 行 | Claude.ai platform-specific schemas · Claude.ai 平台专属工具定义 |

---

## Customization · 自定义

Edit individual modules, then regenerate:
编辑单个模块，然后重新生成：

```bash
vim prompts/search.md          # edit search behavior · 编辑搜索行为
vim prompts/conversation.md    # edit tone and style · 编辑语气风格
node prompts/toggle.js on      # regenerate CLAUDE.md · 重新生成
```

To add a new module:
添加新模块：

1. Create a new `.md` file in `prompts/` · 在 `prompts/` 下新建 `.md` 文件
2. Add it to the `MODULES` array in `toggle.js` · 在 `toggle.js` 的 `MODULES` 数组中添加
3. Run `node prompts/toggle.js on` · 运行生成命令

---

## Requirements · 环境要求

- [Claude Code](https://claude.ai/code)
- Node.js (for the toggle script · 用于运行开关脚本)

---

## Installation · 安装

```bash
git clone <your-repo-url>
cd <repo-name>
node prompts/toggle.js on
```

---

## License · 许可证

MIT — see [LICENSE](LICENSE)

---

## Acknowledgments · 致谢

- [Anthropic](https://www.anthropic.com/) for the original CLAUDE-FABLE-5 system prompt · 提供原始 CLAUDE-FABLE-5 系统提示词
- [CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) for the extracted system prompts · 提供提取后的系统提示词

---

## Disclaimer · 声明

This project is not affiliated with or endorsed by Anthropic. It is an independent extraction and optimization of publicly available system prompt content for educational and practical enhancement purposes.
本项目与 Anthropic 无关联，亦未获得其背书。这是对公开可获取的系统提示词内容进行的独立提取和优化，仅供教育和实践增强用途。
