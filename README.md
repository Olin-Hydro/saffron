# Saffron
A web app for monitoring and adjusting Olin Hydro's automated hydroponics garden.

# Structure
This repo was created using the `create-react-app` template with typescript, as documented [here](https://create-react-app.dev/docs/adding-typescript/).

The file structure is as follows:
```
.
├── public/
│   └── index.html (your browser opens this)
├── src/
│   ├── components/
│   │   └── (react components organized by function)
│   ├── hooks/
│   │   └── (files that handle making use of data from API)
│   ├── icons/
│   │   └── (svg icons used in the ui)
│   ├── images/
│   │   └── (image assets used in the ui)
│   ├── pages/
│   │   └── (available views - just the home page for now)
│   ├── App.tsx (top level app component)
│   ├── HydrangiaApi.ts (interface to talk to API)
│   ├── theme.ts (contains styles to make the ui pretty)
│   └── (config files)
├── README.md (this file)
└── (other Node + TypeScript configuration)
```