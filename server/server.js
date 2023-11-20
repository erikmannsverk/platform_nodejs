const express = require('express');
const app = express();
const cors = require('cors')
const port = 5002;

app.use(cors())
app.use(express.json());

// Mock data for testing
const projectsData = {
  projects: [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' },
    // ... other projects
  ],
};

app.get('/api', (req, res) => {
  // Simulate an asynchronous operation (e.g., fetching data from a database)
  setTimeout(() => {
    res.json(projectsData);
  }, 1000); // Simulating a delay of 1 second
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
