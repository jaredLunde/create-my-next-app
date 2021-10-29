import { atom } from "jotai";

export function persistAtom<Value>(
  key: string,
  initialValue: Value,
  {
    version = 1,
    storage = typeof window !== "undefined" ? localStorage : null,
  }: { version?: number; storage?: StateStorage | null } = {}
) {
  const lsValue: PersistAtomStorageValue<Value> = JSON.parse(
    storage?.getItem(key) ?? "null"
  );
  const persistentAtom = atom<Value>(lsValue ? lsValue.value : initialValue);

  return atom<Value, Value>(
    (get) => {
      return get(persistentAtom);
    },
    (get, set, value) => {
      const storedState: PersistAtomStorageValue<Value> = { version, value };
      storage?.setItem(key, JSON.stringify(storedState));
      set(persistentAtom, value);
    }
  );
}

type PersistAtomStorageValue<Value> = { version: number; value: Value };
type StateStorage = {
  getItem: (name: string) => string | null;
  setItem: (name: string, value: string) => void;
};
