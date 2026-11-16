import { describe, it, expect, vi, afterEach } from "vitest";
import { getEnvVar } from "./getEnvVar";

describe("getEnvVar", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("should return the environment variable value", () => {
    vi.stubEnv("TEST_VARIABLE", "hello");

    const result = getEnvVar("TEST_VARIABLE");

    expect(result).toBe("hello");
  });
  it("should throw an error if the environment variable is not defined", () => {
    vi.stubEnv("TEST_VARIABLE", undefined);

    expect(() => getEnvVar("TEST_VARIABLE")).toThrow(
      "Environment variable TEST_VARIABLE is not defined",
    );
  });
});
