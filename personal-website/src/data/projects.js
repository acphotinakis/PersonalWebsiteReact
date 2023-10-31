// src/data/projects.js

const projects = [
    {
        name: "WebFinvizAPI",
        location: "Rochester, NY",
        technologies_used: ["Java", "Spring", "JUnit", "JSoup", "Postman", "Git", "JWT", "MVVM", "REST API", "JSON", "NoSQL"],
        start_date: "August 2023",
        end_date: "Present",
        description:
            "Engineered a flexible MVVM architecture in developing a sophisticated RESTful API using Spring Boot, Java, and Maven, achieving efficient financial data retrieval from Finviz.com by incorporating advanced web scraping techniques. Facilitated efficient data storage in JSON files, setting the groundwork for seamless NoSQL database integration. Validated API endpoints with JUnit testing to ensure precise data extraction, transformation, and storage processes, enhancing overall data accuracy and functionality. Strengthened API security and access control through the implementation of JSON Web Tokens (JWT), enhancing user authentication and authorization capabilities. Furthermore, advanced rate limiting mechanisms were integrated to ensure responsible web scraping, maintaining optimal data collection efficiency while adhering to Finviz.com's usage policies.",
        link: "https://github.com/AndrewP987/webfinvizapi",
        image: '/Users/andrewphotinakis/Documents/ReactPersonalWebsite/personal-website/src/assets/forest.jpg'
    },
    {
        name: "Keyboard E-Store",
        location: "Rochester, NY",
        technologies_used: [
            "Java",
            "Spring",
            "Angular",
            "TypeScript",
            "JUnit",
            "Postman",
            "JSON",
            "Scrum",
            "Git",
            "Trello",
        ],
        start_date: "January 2023",
        end_date: "May 2023",
        description:
            "Accomplished enhanced user experience and customization by leading the development of a user-friendly e-commerce website front-end using Angular and Typescript, complemented by a responsive back-end built with Java and Spring, following SOLID & GRASP principles. Ensured seamless functionality through rigorous JUnit testing, identifying and resolving issues to meet acceptance criteria, thereby delivering a high-quality software product. Facilitated collaboration and maintained code quality by conducting comprehensive code reviews, testing, and debugging, resulting in the successful completion of sprint deliverables. Contributed to a successful project outcome by collaborating with a team using Scrum methodology and the Model-View-ViewModel architecture for the design and implementation of the software.",
        link: "https://github.com/AndrewP987/Keyboard-E-Store",
    },
    {
        name: "Place IP",
        location: "Rochester, NY",
        technologies_used: ["C", "Vim", "Bash", "Valgrind", "GDB"],
        start_date: "October 2022",
        end_date: "November 2022",
        description:
            "Improved efficiency and time complexities by constructing a radix tree-based database using bit manipulation in C for IPV4 addresses, resulting in optimized data storage. Enhanced query functionality with a user-friendly session for retrieving information based on full or partial IPV4 addresses, effectively showcasing the capabilities of the Abstract Data Type radix tree. Optimized development workflow and code editing by employing Vim and Bash, enhancing efficiency, and maintaining seamless software development process. Ensured robust code quality and reliability by effectively utilizing Valgrind for meticulous memory leak detection and GDB for precise debugging and program behavior analysis.",
        link: "https://github.com/AndrewP987/Place-IP",
    },
    {
        name: "Personal Website",
        location: "Washington, DC",
        technologies_used: [
            "React",
            "HTML",
            "CSS"
        ],
        start_date: "October 2023",
        end_date: "Present",
        description: "",
        link: "https://github.com/AndrewP987/PersonalWebsiteReact",
    },
    {
        name: "Facebook Clone",
        location: "Rochester, NY",
        technologies_used: [
            "Next.js",
            "Tailwind CSS",
            "React.js",
            "Firebase",
            "NextAuth.js",
            "Git",
        ],
        start_date: "June 2022",
        end_date: "August 2022",
        description:
            "Achieved full responsiveness and visual appeal by replicating Facebook’s front-end design utilizing React.js and Tailwind CSS, as measured by an improved user interface. Enhanced user experience and security by integrating NextAuth.js, leading to strengthened user authentication with genuine Facebook credentials. Realized enhanced engagement and interactivity through strategic Firebase implementation, leading to real-time user updates and an overall enriched user experience. Elevated user satisfaction and performance by harnessing the power of the Next.js framework, resulting in improved server-side rendering and a seamless user experience.",
        link: "https://github.com/AndrewP987/facebook-clone",
    },
    {
        name: "Sudoku Solver",
        location: "Darnestown, MD",
        technologies_used: ["Java"],
        start_date: "June 2022",
        end_date: "July 2022",
        description:
            "Sudoku is a very popular game that has been around for decades. For some people, the game is very hard to play. For that reason, and well practice reasons, I have created this sudoku solver app. In the sudokuProblems directory, there are already 2 puzzles that you can look at and maybe solve on your own before using the app to do so for you. To add another puzzle, just make another .txt file and copy the format of the other puzzles. This app uses Backtracking, Java, and Interfaces. In the Computer Science world, Backtracking is a technique that is used to solve problems recursively by trying to build a solution. It implments a strategy called pruning in order to quickly discard invalid configurations that were made when making new successors to such configuration.",
        link: "https://github.com/AndrewP987/SudokuSolver",
    },
    {
        name: "MazePathFinder",
        location: "Darnestown, MD",
        technologies_used: ["Java"],
        start_date: "July 2022",
        end_date: "August 2022",
        description:
            "MazePathFinder is a maze game, but the playing is done by an algorithm. The algorithm is Breadth First Search or BFS. In the application, a user is given a maze and enters two coordinates of the maze, a start and end coordinate. The two coordinates are then passed to the BFS solver, which finds the shortest path from the start to end. BFS always guarantees the shortest path as long as one exists. Each coordinate in the graph is considered a node and with each node are neighbors. Before BFS can run, a node direct adjacency list is made and printed for the user as well as the graph for user visual.",
        link: "https://github.com/AndrewP987/MazePathFinder",
    },
    {
        name: "JamGame",
        location: "Rochester, NY",
        technologies_used: ["Java", "JavaFX", "MVC"],
        start_date: "April 2022",
        end_date: "May 2022",
        description:
            "Jam Game is a popular board game amongst younger children. In light of this, I decided to create a GUI version of the game using Java and JavaFX to create UI design. The point of the game is to move the RED X labeled car all the way to the right side of the board, but there are other cars in the way preventing such a thing. In order to get the red car to the side of the board, the player must implement problem solving to move the other cars either horizontally or vertically based on the way they are facing. In the program, Breadth First Search is constantly being used to find the next shortest game layer to get to a solution. So if the game player is stuck and doesn't know what move to make, he/she can press the 'Hint' button which will update the game by moving a car based on the configuration created from the BFS algorithm. If the puzzle at the current configuration or game board is not solvable, then the user is notified. Back to cars, cars either move horizontally or vetically and they cannot jump over other cars in their way to the second selected spot by the user. If the user tries to break these rules, they will not be able to complete them and will be notified. In the game another important concept besides Breadth First Search and configuration making, is using the concept of MVC or Model View Controller. Whenever a car was pressed or a load button was clicked, the controller called the model to run the specific function to take care of that action. In doing so the view was then updated for the user interface. For example, if the user wants to change the game puzzle, they would press the load button, in which the controller would notify the model to execute the load function for the user's new puzzle choice. If the puzzle is valid, than the view is updated by displaying the new puzzle.",
        link: "https://github.com/AndrewP987/JamGame",

    },
];




export default projects;