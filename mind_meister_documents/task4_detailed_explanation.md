### Reasons why you've selected these 5 tests?

While exploring what to automate, I chose the most time-efficient and useful tests to automate. Basic Mind-Map functionalities are key to MindMeister, hence they would be the best starting point. Another reason for picking these tests would be a careful dive into automation since I didn't know the challenges I would face, and by my logic, it is better to have 5 working tests with a better overview of the codebase and challenges than 2 very complex incomplete tests where I didn't dive into the codebase due to being stuck. From my experience, you should always start with high-priority simple happy paths because a lot of the code can later be reused, and usually, this helps you understand the issues you might encounter.

### What are best practices you have used in your framework?

The test itself is not large enough to use some fancy best practices. I tried to create initial page objects for each page, even though I am aware that down the line, each page might be segmented into multiple page objects, but I needed a starting point. Even some of the methods can be broken down further to maximize reusability and minimize boilerplate code. I am not satisfied with my choices for locators, but the site itself has very few IDs that can be used, or text, which I tried to maximize use of.

### Do we have reporting, if yes, what type?

Yes, we generate basic JUnit reports. While this approach may seem simplistic, it aligns with the compatibility of CI/CD tools, which can readily ingest JUnit XML reports. Despite its simplicity, the JUnit format is widely accepted across various reporting tools, providing us with flexibility in integrating with different platforms. 

### Should we integrate tests in CI and why?

Integration of tests in our CI pipeline is crucial for ensuring the reliability and efficiency of our development process. By triggering automated tests with each code merge or build, we can quickly identify and fix any defects, thereby maintaining the integrity of our application. Automating test execution reduces the burden on QA resources and enables them to focus on exploratory testing, where human intuition and creativity are invaluable. The systematic scheduling of test executions also minimizes the risk of oversight or human error of not executing Automation tests on time, providing us with quick and accurate insights into the health of our application.
