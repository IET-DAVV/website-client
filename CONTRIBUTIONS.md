# IET Website Client Contribution Guide

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