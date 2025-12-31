#Based on https://dev.to/rodrigokamada/creating-and-running-an-angular-application-in-a-docker-container-40mk

ARG NODE_VERSION
ARG UNAME
ARG UID
ARG GID

FROM node:${NODE_VERSION}

RUN apt update && apt install vim tmux less -y && apt clean

RUN mkdir -p /usr/src/app

COPY /devenv/env.tgz /home/node
COPY /devenv/bash-completion-git.tgz /home/node
WORKDIR /home/node
RUN tar -xzvf env.tgz
RUN rm env.tgz
WORKDIR /
RUN tar -xzvf /home/node/bash-completion-git.tgz
RUN rm /home/node/bash-completion-git.tgz

RUN chown node:node -R /home/node
RUN chown node:node -R /usr/src/app

WORKDIR /usr/src/app

RUN npm install -g @angular/cli@latest

USER node

CMD /bin/bash