Steps to run without Dockerfile

- Clone the repo and change directory to infinity.
- Install node version 12.x.
- Run `npm i`
- Run npm start

With Dockerfile

- Build the docker image using command : `docker build -t {imageName} .`
- Run `docker run -i -p 3000:3000 {imageName:version}`
- Check out the application by navigating to `http://localhost:3000/`
