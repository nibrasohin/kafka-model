import avro from "avsc";

const type = avro.Type.forSchema({
  type: "record",
  fields: [
    {
      name: "category",
      type: { type: "enum", symbols: ["CAT", "DOG"] },
    },
    {
      name: "noise",
      type: "string",
    },
  ],
});

export default type;
