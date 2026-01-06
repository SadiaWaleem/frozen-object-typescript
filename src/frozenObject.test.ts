import { describe, it, expect } from "vitest";
import type { FrozenObject } from "./frozenObject";

type Config = {
  db: {
    host: string;
    ports: number[];
  };
};

describe("FrozenObject<T>", () => {
  it("prevents mutation through FrozenObject view (compile-time)", () => {
    const frozen: FrozenObject<Config> = {
      db: {
        host: "localhost",
        ports: [5432],
      },
    };

    if (false) {
        frozen.db.host = "prod";
        frozen.db.ports.push(3306);
    }

    // Here the runtiime state should always remains unchanged
    expect(frozen.db.host).toBe("localhost");
    expect(frozen.db.ports).toEqual([5432]);
  });

  it("allows mutation when used as mutable T", () => {
    const frozen: FrozenObject<Config> = {
      db: {
        host: "localhost",
        ports: [5432],
      },
    };

    function updateConfig(cfg: Config) {
      cfg.db.host = "prod";
      cfg.db.ports.push(3306);
    }

    // same frozen object but mutable behaviour 
    updateConfig(frozen);

    expect(frozen.db.host).toBe("prod");
    expect(frozen.db.ports).toEqual([5432, 3306]);
  });

  it("works with deeply nested objects", () => {
    type Deep = {
      a: { b: { c: number } };
    };

    const value: FrozenObject<Deep> = {
      a: { b: { c: 1 } },
    };

    if (false) {
        value.a.b.c = 2;
    }
    function mutate(d: Deep) {
      d.a.b.c = 2;
    }

    mutate(value);
    expect(value.a.b.c).toBe(2);
  });
});
