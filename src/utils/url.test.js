import { getSubdomainInternal } from "./url";

test('subdomain test', () => {
    expect(getSubdomainInternal("mike.localhost:3000", "localhost:3000") === "mike");
    expect(getSubdomainInternal("mike-d.localhost:3000", "localhost:3000") === "mike-d");
    expect(getSubdomainInternal("mike.d.localhost:3000", "localhost:3000") === "mike.d");
    expect(getSubdomainInternal("mike.d.mixmi-dev.net", "mixmi-dev.net") === "mike.d");
    expect(getSubdomainInternal("mike.d.7.mixmi-dev.net", "mixmi-dev.net") === "mike.d.7");
  });

