# Role Comparator

This project is a usecase for me to apprehend sveltekit.  
The end goal is to list GCP IAM Roles from the API and to select several roles to compare included permissions.

## Creation

The project directory was created using sveltekit

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest role-comparator
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Copy the `.env-template` file into a `.env` and fill in your GCP API Key.

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
