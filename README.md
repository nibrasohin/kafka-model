# kafka-model

Tutorial Source: https://www.youtube.com/watch?v=EiDLKECLcZw

Setup instructions:

1. Clone repository <br>
   `git clone git@github.com:nibrasohin/kafka-model.git`
2. `cd kafka-model`
3. `docker-compose up`

4. ```
   docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
    --create \
    --zookeeper zookeeper:2181 \
    --replication-factor 1 \
    --partitions 1 \
    --topic test 
    ```
5. `npm run start:producer`
6. `npm run start:consumer`

A demonstration of Kafka
  - Producer publishing events to a topic
  - Consumer consuming events from the topic
  - The events are serialized and deserialized 