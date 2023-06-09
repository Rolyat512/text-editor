# 19 Progressive Web Applications (PWA): Text Editor


## User Story

```md
As a developer
I want to create notes or code snippets with or without an internet connection
So that I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
Given a text editor web application
When I open my app via editor
Then I should see my app organized in client and server folders
When I run `npm run start` from the root directory
Then I find that my application should start 
When I run the text editor app from my terminal
Then I find that my JavaScript files have been bundled using webpack 
When I run my webpack plugins
Then I find that I have a generated HTML file, service worker, and a manifest file
When I open the text editor
Then I find that IndexedDB has created a database storage
When I enter in information and close the browser window 
Then I find that information was saved in the IndexDB
When I reopen the text editor after closing it
Then I find that the information in the text editor has been retrieved from the IndexedDB
When I click on the Install button
Then I download my web app as an icon on my desktop
When I load my web app
Then I should have a registered service worker using workbox
When I register a service worker
Then I should have my static assets pre cached upon loading along with subsequent pages and static assets
```





