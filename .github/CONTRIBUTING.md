# How to contribute

Any help and contribution is welcome, feel free to submit issues and/or contribute to the project.

If you want to contribute but don’t know what to do, take a look at these two labels: [help wanted](https://github.com/colinespinas/awe/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) and [good first issue](https://github.com/colinespinas/awe/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

## Prerequisites

- Fork the repository and clone your fork.
- Create a branch and name it explicitly, like so: `feature/name-of-the-feature`
- Install dependencies: `npm install`.

## Development workflow

In most cases you'll start from `next` branch and merge back to `next` branch.
Exceptions can be made for hotfixes but need to stay exceptionals.

To build your changes run:

```bash
npm run build
```

Or build in development mode:
```bash
npm run dev
```

Run linters:

```bash
npm run lint
```

**Don’t forget to update documentation for your changes.**
As we are using TypeDoc for documentation generation we need you to use JSDoc as much as possible.

**Please update npm lock file (`package-lock.json`) if you add or update dependencies.**

## Other notes

- If you have commit access to repository and want to make big change or not sure about something, make a new branch and open pull request.
- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), like so: `feat(scope): topic` (this repository is [commitizen friendly](https://github.com/commitizen/cz-cli), we recommend you use it to avoid any trouble).
- Don’t commit generated files.
- Don’t change version number and changelog.

## Need help?

If you want to contribute but have any questions, concerns or doubts, feel free to ping maintainers. Ideally create a pull request with `WIP` (Work In Progress) in its title and ask questions in the pull request description.