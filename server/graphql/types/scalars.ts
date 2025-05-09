import { DateResolver, DateTimeResolver, JSONResolver, JSONObjectResolver } from "graphql-scalars";

export type Scalars = {
  Date: { Input: Date | string; Output: Date };
  DateTime: { Input: Date | string; Output: Date };
  File: { Input: File; Output: never };
  JSON: { Input: unknown; Output: unknown };
  JSONObject: { Input: Record<string, unknown>; Output: Record<string, unknown> };
};

export const DateScalar = builder.addScalarType("Date", DateResolver);
export const DateTimeScalar = builder.addScalarType("DateTime", DateTimeResolver);

export const FileScalar = builder.scalarType("File", {
  serialize: () => {
    throw new Error("File can only be used as input type");
  },
});

export const JsonScalar = builder.addScalarType("JSON", JSONResolver);
export const JsonObjectScalar = builder.addScalarType("JSONObject", JSONObjectResolver);
