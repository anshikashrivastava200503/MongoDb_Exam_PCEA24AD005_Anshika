# MongoDB Practical

## Project structure

```text
MongoDB_Practical/
├── A1.js
├── A2.js
├── A3.js
├── screenshots/
│   ├── A1_output.png
│   ├── A2_output.png
│   └── A3_output.png
└── README.md
```

## Requirements

- MongoDB Server
- MongoDB Shell (`mongosh`)
- Visual Studio Code

## How to run

1. Open this folder in Visual Studio Code.
2. Open the VS Code terminal: **Terminal > New Terminal**.
3. Make sure MongoDB is running and `mongosh` is installed.
4. Run each script from the project folder:

```bash
mongosh
```

Then, inside the MongoDB shell:

```javascript
load("A1.js")
load("A2.js")
load("A3.js")
```

Alternatively, from a terminal where `mongosh` is available:

```bash
mongosh A1.js
mongosh A2.js
mongosh A3.js
```

## Files

- **A1.js** – Scenario 1.1: Student Records (CRUD operations).
- **A2.js** – Scenario 1.2: Employee Directory (query operators, sorting, skip and limit).
- **A3.js** – Starter file; the Scenario 1.3 question page is needed to complete it.

## Screenshots

After running each completed script, take a screenshot showing the command and its output. Save the screenshots in the `screenshots` folder using these names:

- `A1_output.png`
- `A2_output.png`
- `A3_output.png`

Do not use sample or edited output as proof of execution. Capture the actual output from your own MongoDB Shell.
