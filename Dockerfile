#Based on https://dev.to/rodrigokamada/creating-and-running-an-angular-application-in-a-docker-container-40mk

ARG NODE_VERSION
ARG UNAME
ARG UID
ARG GID

FROM node:${NODE_VERSION}

RUN apt update && apt install vim tmux less -y && apt clean

RUN mkdir -p /home/node/.bash-git-prompt
RUN mkdir -p /home/node/.vim
RUN mkdir -p /usr/src/app

COPY /devenv/vimrc /home/node/.vimrc
COPY /devenv/bashrc /home/node/.bashrc
COPY /devenv/tmux.conf /home/node/.tmux.conf
COPY /devenv/bash-git-prompt /home/node/.bash-git-prompt
COPY /devenv/vim /home/node/.vim
COPY /devenv/bash-completion-git /usr/share/bash-completion/completions/git

RUN chown node:node -R /home/node
RUN chown node:node -R /usr/src/app

WORKDIR /usr/src/app

RUN npm install -g @angular/cli@latest

USER node

CMD /bin/bash