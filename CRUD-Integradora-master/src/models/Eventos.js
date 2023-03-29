import { Schema, model } from "mongoose";

const eventosSchema = new Schema(
  {
    nameEventoEsp: {
      type: String,
      required: true,
      trim: true,
    },
    nameEventoEng: {
      type: String,
      required: true,
      trim: true,
    },
    contenidoEsp: {
      type: String,
      required: true,
      trim: true,
    },
    contenidoEng: {
      type: String,
      required: true,
    },
    fechaInicio: {
      type: Date,
      required: true,
    },
    fechaFin: {
      type: Date,
      required: true,
    },
    visibilidad: {
      type: Boolean,
      required: true,
    },
    img: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    creador: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Eventos", eventosSchema);
