import { getNameSubdomains } from "./names";

test('getNameSubdomains test', () => {
    expect(getNameSubdomains("mixmi.app").length > 0);
  });