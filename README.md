# Portfolio Docs (MDX)

Repo that serves the project details to my [portfolio website](https://github.com/Jaycedam/portfolio-website) in MDX format.

## Custom component list

- Image that shows at the top of the article

```TSX
<HeaderImage src="" alt="" />
```

- External links with button styling

```TSX
<div className="flex gap-4 flex-wrap">
 <LinkButton title="" href="" />
</div>
```

## Regular HTML components

For regular components, tailwind classes can be used by adding `className=""`

## Testing

Using a basic bun project (bun init) to install the next-remote-mdx package for testing the serialize step.

- Install dependencies

```bash
bun i
```

- Testing:

```bash
bun test
```
