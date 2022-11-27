FROM quay.io/inrlwabot/inrl-md:inrl
RUN git clone https://github.com/inrl-official/inrl-bot-md /root/inrl/
WORKDIR /root/inrl/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
