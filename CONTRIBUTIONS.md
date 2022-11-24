# IET Website Client Contribution Guide
## How to install git
1.Download the latest Git for Mac installer.
2.Follow the prompts to install Git.
3.Open a terminal and verify the installation was successful by typing git --version:
4.Configure your Git username and email using the following commands, replacing Emma's name with your own. These details will be associated with any commits that you create:

5.(Optional) To make Git remember your username and password when working with HTTPS repositories, configure the git-credential-osxkeychain helper.

Install Git on Linux

1.From your shell, install Git using apt-get:$ sudo apt-get update
$ sudo apt-get install git
2.Verify the installation was successful by typing git --version:
3. Configure your Git username and email using the following commands, 
 $ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com


Install Git on Windows

1.Download the latest Git for Windows installer.
2.When you've successfully started the installer, you should see the Git Setup wizard screen. Follow the Next and Finish prompts to complete the installation. The default options are pretty sensible for most users.
3.Open a Command Prompt (or Git Bash if during installation you elected not to use Git from the Windows Command Prompt).
4.Run the following commands to configure your Git username and email using the following commands,
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
 
5.Optional: Install the Git credential helper on Windows
Can refer the following link.
https://github.com/git-guides/install-git
Download git using https://git-scm.com/downloads

## Folder Structure

### `utils`
This will hold all our helper functions such as hooks and API calls.
### `components`
This will contain components that are shared amongst pages or other components, sort of global components.
### `layouts`
This includes layouts for pages so as to minimize rewriting the same styles for all pages.
### `pages`
By keeping a separate folder we'll have a clear picture of all the routes. Each page inside will have a component folder that will have the components specific to it. 


```
src/
|──index.tsx
|──App.tsx    
│
|───utils/
|   |───hooks/
|   |   └───useLocalStorage.tsx
|   |───api/
|   └───contexts/
|
|───components/
│   |──Header/
│   |──Footer/
│   └───Button/
│   |   |──Button.tsx
│   |   |──Button.css
│   |   └───Button.tests.tsx
│   |──Sidebar/
│   └───Cards/
|
|───layouts/
|    └───SidebarLayout/
|    |   |───components/
|    |   |    |──ListItemButton/
|    └──SidebarLayout.tsx
|
|───pages/
|   |───Dashboard/
|   |   |───components/
|   |   |  |──Tabs/
|   |   |  └──Charts/
|   |   |── Dashboard.tsx
|   |   └── Dashboard.tests.tsx 
|   |
|   |───Monitoring/
|   └──OtherPages/...
|
└─── RemainingFiles...
```
