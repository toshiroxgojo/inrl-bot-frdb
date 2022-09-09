FROM quay.io/inrlwabot/inrl-bot-md:latest
RUN git clone https://github.com/inrl-official/inrl-bot-md /root/inrl/
WORKDIR /root/inrl/
ENV TZ=Asia/Kolkata
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
