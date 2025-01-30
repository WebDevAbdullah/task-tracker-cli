# Task Tracker CLI

CLI project to keep track tasks based on roadmap [Task Tracker CLI](https://roadmap.sh/projects/expense-tracker)

## Installation

1. Clone the GitHub repository:

```bash
git clone https://github.com/WebDevAbdullah/task-tracker-cli.git
```

2. Navigate to the project directory:

```bash
cd task-tracker-cli
```

3. install npm packages:

```bash
npm i
```

## Usage

```bash
# Adding a new task
$ npm run add "Buy groceries"
# Task added successfully (ID: 1)

# Listing all tasks
npm run list

# Listing tasks by status
npm run list done
npm run list todo
npm run list in-progress

# Updating and deleting tasks
npm run update 1 "Buy groceries and cook dinner"
npm run delete 1

# Marking a task as in progress or done
npm run mark-in-progress 1
npm run mark-done 1
```
