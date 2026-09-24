# CampusEats Task Tracker

SE3090 – Software Engineering Frameworks – Lab Practical 08

This project demonstrates:
- Git/GitHub repository setup
- Feature branching and Conventional Commits
- Pull requests and code review
- GitHub Issues
- GitHub Actions CI
- Code quality improvements
- Secure handling of secrets
- Basic automated tests

## Project Structure

```text
campuseats-task-tracker/
├── README.md
├── .gitignore
├── package.json
├── package-lock.json
├── src/
│   ├── tasks.js
│   └── tasks.test.js
├── .github/
│   └── workflows/
│       └── ci.yml
└── docs/
    ├── TASKS.md
    └── SUBMISSION_CHECKLIST.md
```

## Run Locally

Requirements:
- Git
- Node.js 18+

```bash
npm ci
npm test
```

## Git Workflow Used

The project follows GitHub Flow:

```text
main
  │
  ├── feature/add-task-list
  │        ↓
  │      Pull Request
  │        ↓
  │      Review
  │        ↓
  └────── merge ──────→ main
```

For the CI workflow, a separate branch such as `chore/add-ci` can be used.

## Example Git Commands

```bash
git clone https://github.com/<YOUR_USERNAME>/campuseats-task-tracker.git
cd campuseats-task-tracker

git status
git remote -v

git switch -c feature/add-task-list

git add src/tasks.js
git commit -m "feat: add initial CampusEats task list"

git push -u origin feature/add-task-list
```

After the PR is merged:

```bash
git switch main
git pull origin main
```

## Security

Never commit API keys, passwords or tokens.

If a secret is accidentally pushed:
1. Treat it as compromised.
2. Remove it from the code/history as appropriate.
3. Rotate/regenerate the secret.
4. Store the replacement in an environment variable or secrets store.

The application code contains no real API key.

## CI

GitHub Actions is configured in:

`.github/workflows/ci.yml`

The workflow runs on pushes to `main`, `feature/**`, and `chore/**`, and on pull requests targeting `main`.

It:
1. Checks out the repository.
2. Sets up Node.js.
3. Installs dependencies with `npm ci`.
4. Runs tests.
5. Lists repository files.
6. Verifies that `README.md` exists.

A failing CI check should prevent a PR from being considered ready for merge.

## Dependency Security

Run:

```bash
npm audit
```

and, where appropriate:

```bash
npm audit fix
```

GitHub Dependabot can also be enabled from the repository Security/Settings area.

## Lab Submission

The lecturer requires a Word document containing the student details, repository link, Git screenshots, repository/branch/commit/PR screenshots, Issues screenshot, green Actions screenshot, source snippets, CI workflow, explanations and Q1–Q8 answers.

The actual GitHub screenshots and repository URL must be added after completing the GitHub steps in your own account.
