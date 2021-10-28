import "@testing-library/jest-dom/extend-expect";
import mockRouter from "next-router-mock/async";

// Adds mock for Next.js router before each test
// @see https://github.com/scottrippey/next-router-mock#sync-vs-async
jest.mock("next/dist/client/router", () => require("next-router-mock/async"));
jest.mock("next/router", () => require("next-router-mock/async"));

beforeEach(() => {
  // Resets the mock router to index before each test
  mockRouter.setCurrentUrl("/");
});

afterEach(() => {
  // Clears all mocks after each test
  jest.clearAllMocks();
});

beforeAll(() => {
  // Instructs Jest to use fake versions of the standard timer functions.
  jest.useFakeTimers();
  // Turns off the warning about not using act()
  // @see https://github.com/reactwg/react-18/discussions/102
  (global as any).IS_REACT_ACT_ENVIRONMENT = true;
});
