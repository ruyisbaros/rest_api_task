# **LAST.FM SEARCH ENGINE**

![last.fm](/client/public/images/rf1.png)
![last.fm](/client/public/images/rf2.png)
![last.fm](/client/public/images/rf3.png)
![last.fm](/client/public/images/rf4.png)

# Create a simple Full-Stack last-fm search engine[2022]

Welcome to my simple and fun music search engine api. When you want to listen music, I wanted you not to lose yourself in the ocean of Google, Youtube etc. And I created this simple but very effective application for you. Just type the name of the artist you are looking for and press enter. That's all... You will receive lots of music links with names relevant to your search text on my page. If no results returned from the last.fm, app will select for you randomly artists and create a list which from my page's own source. Have fun...

## Languages, Libraries and Frameworks used

- Node & Express: Create Node.js REST API, Server Side Fetching with Axios
- JavaScript
- React: Components, Props, Axios, States
- HTML5 and CSS3
- Csvjson: Convert Json responses to CSV format and save it as a file in Server folder

## Run Locally

### 1. Clone repo

```
- On the terminal open the folder which you want to clone the repository and then paste below code, press enter
$ git clone https://github.com/ruyisbaros/rest_api_task.git 
$ cd rest_api_task (Go relevant folder after )
$code .  (VSC will open. Be sure that you are in relevant folder)
```
### 2. Get API KEY

- https://www.last.fm/api/account/create visit this website and get your API key

### 3. Run Backend

- Now your cloned repo opened with VSC. On the VSC open 'new terminal' with clicking 'terminal' segment.
- Normal wise you should get an API key from last.fm and you should determine a port number for your backend server. 
- Go client/package.json and reset port number with your one. 
 "proxy":"http://localhost:(Your port number)".
 - Anyway, just for this repo let's go shorter way:)
- In the server folder create a .env file. And paste these API_KEY=bd273a033e22d435d6b05d64aa86d2ec PORT=4000
```
$ cd server 
$ npm install
$ npm start
```

### 4. Run Frontend

```
# open new terminal or better duplicate your terminal
$ cd client
$ npm install
$ npm start
```

## Developer

- [Ahmet Erdönmez](https://www.linkedin.com/in/ahmet-erdonmez-085bb8141/)