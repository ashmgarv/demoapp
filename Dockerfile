FROM ubuntu:16.04
RUN apt-get update;apt-get install -y git;apt-get install -y curl;curl -sL https://deb.nodesource.com/setup_12.x | bash -;apt-get install -y nodejs;
RUN git clone https://github.com/ashmgarv/demoapp.git;cd demoapp/infinity;npm i;
EXPOSE 3000
CMD cd demoapp/infinity;npm start;


