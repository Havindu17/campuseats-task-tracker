# Lab 08 Task Guide

## Task 01 – Repository Setup

Create a **public** GitHub repository named:

`campuseats-task-tracker`

Initialize it with a README and Node `.gitignore`.

Then:

```bash
git clone https://github.com/<YOUR_USERNAME>/campuseats-task-tracker.git
cd campuseats-task-tracker
git status
git remote -v
```

Screenshot:
- GitHub repository page
- Terminal showing `git status`
- Terminal showing `git remote -v`

## Task 02 – Branching and Commit

Create:

```bash
git switch -c feature/add-task-list
```

Then commit:

```bash
git add src/tasks.js
git commit -m "feat: add initial CampusEats task list"
git push -u origin feature/add-task-list
```

Screenshot:
- Branch list
- Commit history

## Task 03 – Pull Request and Review

On GitHub:
1. Open a PR from `feature/add-task-list` to `main`.
2. Add a useful title and description.
3. Open **Files changed**.
4. Add at least one review comment.
5. Approve the PR or request changes.
6. Merge the PR.
7. Delete the feature branch.

Then locally:

```bash
git switch main
git pull origin main
```

Screenshot:
- Open PR
- Review comment
- Merged/closed PR

## Task 04 – Issues

Create at least these three labelled Issues:

1. `Add due dates to tasks` — enhancement
2. `Fix typo in README` — bug/documentation
3. `Add CI workflow` — enhancement

Use `Closes #<number>` in a commit/PR description to link work to an issue.

Screenshot:
- Issues list

## Task 05 – GitHub Actions

Create branch:

```bash
git switch -c chore/add-ci
```

The workflow file is already supplied:

`.github/workflows/ci.yml`

Commit:

```bash
git add .github/workflows/ci.yml
git commit -m "chore: add GitHub Actions CI workflow"
git push -u origin chore/add-ci
```

Open a PR into `main`.

Screenshot:
- Green Actions run
- Passing PR check
- `ci.yml`

## Task 06 – Quality and Security

The original sample had:
- unclear names
- magic number
- hard-coded secret
- `var`
- loose `==`
- missing validation

The supplied `src/tasks.js` fixes these issues.

Run:

```bash
npm ci
npm test
npm audit
```

Screenshot/output to record:
- successful tests
- dependency audit result

## Important

Do not use a real API key in the repository.

The lecturer's practical specifically requires screenshots of actions performed in GitHub. Those screenshots cannot be created just by having the project files; they must be captured from your own GitHub repository after completing Tasks 01–05.
