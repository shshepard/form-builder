import { SelectComponentOption } from "../../types";

import schema1 from "../../mocks/example1.json";
import schema2 from "../../mocks/example2.json";
import schema3 from "../../mocks/example3.json";

export const schemas: Record<string, any> = {
  "1": schema1,
  "2": schema2,
  "3": schema3,
};

export const options: SelectComponentOption[] = Array.from(
  Object.keys(schemas)
).map((k) => ({
  key: k,
  value: `Schema ${k}`,
}));
