FROM node:6.9.5
RUN mkdir -p /code
WORKDIR /code
ADD . /code

RUN npm install -g -s --no-progress yarn
RUN yarn install --force --production

CMD ["yarn", "run", "production"]

EXPOSE 80
