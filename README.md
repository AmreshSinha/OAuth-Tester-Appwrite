<h1> 🔖 Appwrite OAuth Tester With React<a href="#-note">*</a></h1>

<img width="18%" align="right" src="https://appwrite.io/images-ee/press/badge-pink-button.svg" />

A OAuth Tester app built with Appwrite and React to test OAuth Providers in Appwrite

<!-- If you simply want to try out the App, go ahead and check out the demo at https://appwrite-todo-with-react.vercel.app -->


## 🎬 Getting Started

### 🤘 Installation
Follow this simple [Installation Guide](https://appwrite.io/docs/installation) to get Appwrite up and running in no time. You can either deploy Appwrite on your local machine or, on any cloud provider of your choice. 

> Note: If you setup Appwrite on your local machine, you will need to create a public IP so that your hosted frontend can access it.
  
We need to make a few configuration changes to your Appwrite server. 

1. Clone and Create a ```.env``` in root of this project with the following vars:
    * REACT_APP_ENDPOINT - Your Appwrite endpoint
    * REACT_APP_PROJECT - Your Appwrite project ID

2. Add a new Web App in Appwrite and enter the endpoint of your website (`localhost, <project-name>.vercel.app etc`)
![Create Web App](https://user-images.githubusercontent.com/20852629/113019434-3c27c900-919f-11eb-997c-1da5a8303ceb.png)

3. Open ```/src/pages/Login``` directory and make a new file ```loginWith<Your-Provider-Name>.js```
    * Fill this content inside the file:
        ```
        import api from "../../api/api";

        export const loginWith<Your-Provider-Name> = async () => {
            try {
              await api.loginWith<Your-Provider-Name>();
            } catch(error) {
              console.log(error.message);
            }
        }
        ```
    * Remember to replace ```<Your-Provider-Name>``` with a valid Provider (which is available in appwrite) in camelCase

4. Open ```Login.js``` in the same directory and add this after Line 7:
    * ```import { loginWith<Your-Provider-Name> } from './loginWith<Your-Provider-Name>';```
    * Add a button after Line 18 (You can take help from examples already written there) like:
        ```
        <button
          type="submit"
          className="mx-auto mt-4 py-2 px-16 font-semibold rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Your-Provider-Name
        </button>
        ```
    * Remember to replace ```<Your-Provider-Name>``` with a valid Provider (which is available in appwrite) in camelCase
5. Run Dev Server ```npm run start```

### 🚀 Deploy the Front End
**Fork it and make necessary changes first**

You have two options to deploy the front-end and we will cover both of them here. In either case, you will need to fill in these environment variables that help your frontend connect to Appwrite.

* REACT_APP_ENDPOINT - Your Appwrite endpoint
* REACT_APP_PROJECT - Your Appwrite project ID

### **Deploy to a Static Hosting Provider**

Use the following buttons to deploy to your favourite hosting provider in one click! We support Vercel, Netlify and DigitalOcean. You will need to enter the environment variables above when prompted.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FAmreshSinha%2FOAuth-Tester-Appwrite&env=REACT_APP_PROJECT,REACT_APP_ENDPOINT&envDescription=Your%20Appwrite%20Endpoint%2C%20Project%20ID%20)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AmreshSinha/OAuth-Tester-Appwrite)

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/AmreshSinha/OAuth-Tester-Appwrite/tree/master)


### **Run locally**

Follow these instructions to run the demo app locally

```sh
$ git clone https://github.com/appwrite/todo-with-react
$ cd todo-with-react
```

Run the following command to generate your `.env` vars

```sh
$ cp .env.example .env
```

Now fill in the envrionment variables we discussed above in your `.env`

Now run the following commands and you should be good to go 💪🏼

```
$ npm install
$ npm start
```

## 📸 Screenshots
![image](https://user-images.githubusercontent.com/35039730/136904800-b66b8e31-3350-41ef-89e5-d66593dc78d2.png)
![image](https://user-images.githubusercontent.com/35039730/136904613-c7a7c360-01f0-4b97-98fb-494ac52c5b79.png)

## 📝 Note
All Styling is copied from React Todo Repository of Appwrite. (as I am too lazy :/)

## 🤕 Support

If you get stuck anywhere, hop onto one of our [support channels in discord](https://appwrite.io/discord) and we'd be delighted to help you out 🤝
