# Eficode Job assigment
Project is part of eficode assignment https://github.com/eficode/assignment-timetables


Live version: https://transportation-app.netlify.com/

### Packages used in this project
- [Apollographql](https://www.apollographql.com/docs/)
- [Material UI](https://material-ui.com/)
- [Moment.js](https://momentjs.com/)
- [React Redux](https://react-redux.js.org/)
- [Axios](https://github.com/axios/axios)


### Installation guide
Clone project
```bash
git clone https://github.com/JuHaNi654/pre-assignment-eficode.git
```
Go to project directory
```bash
../transportation-app
```
Install needed dependencies
```bash
npm install
```
Start project locally
```bash
npm start
```

### Deploy to Docker
To deploy transportation-app production mode to the docker

First build image to the docker
```bash
docker build -t transportation-app .
```
("make sure that u are in the project folder or give path to the project folder when build the image")
("it might take some time on building image")

when it is done, then it should run on docker by giving this 
command:
```bash
docker run -it -d -p 8080:80 transportation-app
```


