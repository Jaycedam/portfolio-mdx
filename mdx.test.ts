import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { expect, test, describe } from "bun:test";

const projectsDir = "./projects";

// Function to recursively get all .mdx files from a directory and its subdirectories
function getMdxFiles(dir: string): string[] {
  let files: string[] = [];
  const dirContents = fs.readdirSync(dir);

  for (const item of dirContents) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    if (stat.isDirectory()) {
      files = files.concat(getMdxFiles(itemPath));
    } else if (path.extname(item) === ".mdx") {
      files.push(itemPath);
    }
  }

  return files;
}

// Test function for each .mdx file
describe("MDX Tests", () => {
  const mdxFiles = getMdxFiles(projectsDir);

  mdxFiles.forEach((filePath) => {
    test(`${filePath} should serialize without error`, async () => {
      const mdxContent = fs.readFileSync(filePath, "utf8");
      expect(async () => {
        await serialize(mdxContent);
      }).not.toThrow();
    });
  });
});
