/**
 * @jest-environment jsdom
 */

/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", async () => {
  const Component = await Page({
    params: Promise.resolve({ slug: "Test" }),
  });

  render(Component);

  expect(screen.getByRole("heading")).toHaveTextContent(
    "Slug: Test"
  );
});

it("PMD should be in the document", async () => {
  const Component = await Page({
    params: Promise.resolve({ slug: "Test" }),
  });

  render(Component);

  expect(
    screen.getByText("This is the post content.")
  ).toBeInTheDocument();
});

