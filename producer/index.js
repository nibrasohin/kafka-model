import Kafka from "node-rdkafka";
import eventType from "../eventType.js";

const stream = Kafka.Producer.createWriteStream(
  {
    "metadata.broker.list": "localhost:9092",
  },
  {},
  { topic: "test" }
);

const queueMessage = () => {
  const event = { category: "DOG", noise: "bark" };
  const success = stream.write(eventType.toBuffer(event));
  if (success) console.log("message wrote successfully to stream");
  else console.log("Something went wrong");
};

setInterval(() => {
  queueMessage();
}, 3000);
