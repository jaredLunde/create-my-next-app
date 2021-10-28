import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import router from "next/router";
import { Link, NavLink } from ".";

describe("<Link>", () => {
  it("should navigate to about page", async () => {
    render(<Link href="/about">About</Link>);

    userEvent.click(screen.getByRole("link"));
    await waitFor(() => {
      expect(router).toMatchObject({
        asPath: "/about",
        pathname: "/about",
        query: {},
      });
    });
  });

  it("should add props to the underlying <a> tag", () => {
    render(
      <Link href="/about" aria-label="About us">
        About
      </Link>
    );

    expect(screen.getByRole("link")).toHaveAttribute("aria-label", "About us");
  });
});

describe("<NavLink>", () => {
  it("should navigate to about page", async () => {
    render(<NavLink href="/about">About</NavLink>);

    userEvent.click(screen.getByRole("link"));
    await waitFor(() => {
      expect(router).toMatchObject({
        asPath: "/about",
        pathname: "/about",
        query: {},
      });
    });
  });

  it("should toggle aria-current attribute when active/inactive", async () => {
    render(<NavLink href="/about">About</NavLink>);

    expect(screen.getByRole("link")).not.toHaveAttribute("aria-current");
    userEvent.click(screen.getByRole("link"));
    await waitFor(() => {
      expect(screen.getByRole("link")).toHaveAttribute("aria-current", "page");
    });
  });

  it("should add props to the underlying <a> tag", () => {
    render(
      <NavLink href="/about" aria-label="About us">
        About
      </NavLink>
    );

    expect(screen.getByRole("link")).toHaveAttribute("aria-label", "About us");
  });
});
