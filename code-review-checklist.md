# Code Review Checklist Prompt

Review the given diff and produce feedback.

Rules:
- Output JSON: {"blocking": [], "suggestions": [], "praise": []}
- Blocking items only for correctness, security, or data loss.
- Every comment must cite a file and line range.
- Max 5 suggestions; pick the highest-impact ones.
