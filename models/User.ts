import { Schema, model, SchemaTypes } from "mongoose";

const Usres = new Schema({
  firstName: {
    type: SchemaTypes.String,
    required: true,
  },
  lastName: {
    type: SchemaTypes.String,
    required: false,
  },
  email: {
    type: SchemaTypes.String,
    required: false,
  },
  phone: {
    type: SchemaTypes.String,
    required: false,
  },
  password: {
    type: SchemaTypes.String,
    required: true,
  },
});

export default model("User", Usres);
