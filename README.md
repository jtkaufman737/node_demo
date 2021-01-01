## Node Demo Project

This project boilerplate was designed to be used as a launch point for a high level presentation on a node/mongo app with unit and integration tests
given at Red Hat in 2021.

## Setup

This project is designed to be run from within Docker and on a Fedora image, although customizing it would likely not be hard. All the packages used are widely supported on other OSes.

1. Get docker [here](https://www.docker.com/products/docker-desktop)
2. Set up a MongoDB Atlas account with test and prod database, which you can do by following [this article](https://dev.to/heyjtk/node-project-skeleton-part-i-setup-58jo) - **be sure to end on the last step** of adding the MONGO_URI and MONGO_URI_TEST to a .env file you will create in the top level directory.
3. Clone project bones and setup docker container with dependencies

```
   git clone https://github.com/jtkaufman737/node_demo.git
   cd node_demo
   docker run -it --name=node_demo -p 3000:3000 -d -v <your current path>:/root/node_demo fedora:latest
   docker start node_demo
   docker exec -it node_demo /bin/bash
   dnf -y install git nodejs
   cd ~/node_demo
   npm install
```

4. To test if this worked, you can navigate back outside docker to `localhost:3000/api/pokemon` and you should see your seed data from MongoDB.

## Future Work/Improvements

Part II and III blog posts exploring the composition of the project skeleton will be released over the next few days. A powerpoint presentation and video of this tech talk will be forthcoming at some point as well. Those links will be added as I go.

Part of this skeleton was that I created an initial very basic endpoint and very minimal integration tests for it, the `/pokemon` endpoint only - the talk will cover creating endpoint functionality and integration tests for `/equipment` and that will be pushed to a separate branch to show the finished product.
