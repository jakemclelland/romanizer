# How to contribute

We welcome community [pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) for bug fixes, enhancements, and documentation. 

## Choosing an issue

All contributions should address an [open issue](https://github.com/jakemclelland/romanizer/issues).

Pull requests will not be accepted if they are not associated with an open issue.

## Bugs versus enhancements

Issues are typically labeled as enhancement or bug.

- Bugs are places where Romanizer is doing something that it was not designed to.
- Enhancements are suggestions to improve Romanizer by changing existing or adding new functionality.

Bugs are usually relatively small, self-contained changes. However, this does not necessarily make them easy to work on, since finding the root cause and fixing it without breaking any other functionality can be tricky.

Enhancements can be anything from adding a language dictionary, or tiny changes to support a variation on an existing scenario, to massive cross-cutting features that will take many months to implement. The bigger the enhancement, the more important it is to communicate with the moderator before working on a contribution.

## Fixing typos

An issue is not required for simple non-code changes like fixing a typo in documentation. In fact, these changes can often be submitted as a [pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) directly from the browser, avoiding the need to fork and clone.

# Workflow

The typical workflow for contributing to Romanizer is outlined below. This is not a set-in-stone process, but rather guidelines to help ensure a quality pull request that we can merge efficiently.

- Set up your development environment so that you can build and test the code. You can use any editor or IDE of your choice that allows you to edit the html, javascript, and css files.
- For most changes, you'll need to [fork this repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) so that all your changes start off localized to your environment.
- Choose an issue (see above), understand it, and **comment on the issue** indicating what you intend to do to fix it. This communication with the team is very important and often helps avoid throwing away lots of work caused by taking the wrong approach.
- Create and check out a [branch](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository) in your local clone. You will use this branch to prepare your pull request.
- Commit changes to your branch and push the branch to your GitHub fork.
- Go to the [pulls page in the Romanizer repo](https://github.com/jakemclelland/romanizer/pulls) repo and you should see a yellow box suggesting you create a pull request from your fork. Do this, or [create the pull request by some other mechanism](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests).
- Wait for the feedback from the moderation team and for the continuous integration (C.I.) checks to pass.
- Meanwhile, you can also push new commits to your branch to address any issues.
- You can also start a separate branch from your fork to start working on some other issue while you wait.

The pull request will be merged by a member of the Romanizer moderation team once the C.I. checks have passed and the code has been approved.

# Code-of-conduct

This project has adopted the [core GitHub code of conduct](https://github.com/actions/.github/blob/main/CODE_OF_CONDUCT.md). Please abide by it while working on contributions. Violators will be removed from the project.
