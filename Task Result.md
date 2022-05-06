# Task Result

## Used technologies / Frameworks

I use the following technologies / frameworks in my project:

- JavaScript / React
- Express / Node
- HTML5 / CSS

I chose React because it is a very flexible, scalable and fun Javascript library to use. I like how components can be reused, hooks and JSX are awesomeeee and for a newbie like myself I feel like the documentation is clear and if I'm not sure how to do something I can easily find a way to solve it.

I chose Express / Node because I wanted to use the express-fileupload package to easily create and handle the post request and store the data in the server public folder, currently I'm not storing the data in any database but with this setup it could easily be done in the future.

## Used 3rd Party Libraries

| Name                                                                   | Reason                                                                                                                                  |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [Bootstrap](https://getbootstrap.com/)                                 | Simple RWD framework for designing the front end.                                                                                       |
| [express-fileupload](https://www.npmjs.com/package/express-fileupload) | To be able to handle file uploads.                                                                                                      |
| [Axios](https://www.npmjs.com/package/axios)                           | to handle the HTTP requests and file upload progress.                                                                                   |
| [html-to-image](https://www.npmjs.com/package/html-to-image)           | Generates an image from a DOM node using HTML5 canvas and SVG.                                                                          |
| [downloadjs](https://www.npmjs.com/package/downloadjs)                 | To trigger the download of the image generated from the HTML div.                                                                       |
| [Font Picker React](https://www.npmjs.com/package/font-picker-react)   | To give users many font options with a google fonts dropdown menu (also because my moral code prohibits me from using comic sans, ever) |

## Installation / Run

To run the project locally, enter the following in the command line / bash:

```bash
# Clone of fork the repository
git clone https://github.com/girlatomic/meme-generator.git

# Install dependencies server/client
cd meme-generator-main
npm install
cd client
npm install

# Serve on localhost:3000
npm run dev
```

## Demo

The app has been hosted on Heroku [here](https://gp-meme-generator.herokuapp.com/).
![meme-generator](/public/images/meme-generator.png)
