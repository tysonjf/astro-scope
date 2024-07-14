````markdown
# Astro Scope Selector

Astro Scope is a utility package for Astro.js projects that provides a wrapper component for scoping elements and a function for querying scoped elements.

## Installation

You can install this package directly from GitHub:

```bash
pnpm add github:tysonjf/astro-scope
```
````

## Usage

### Scope Component

The `Scope` component allows you to wrap elements without affecting the layout, making it easy to scope query selectors.

```astro
---
import { Scope } from "astro-scope";
---

<Scope data-scope="63c8421b-c081-48bf-97e3-3c565049a323">
  <h1>Hello, Astro!</h1>
  <p>This content is wrapped but the wrapper doesn't affect layout.</p>
  <button>Click me</button>
</Scope>
```

You can not add custom styles to the custom Scope component.
By default it has display: contents, so it doesn't affect the layout of the wrapped elements.
If you want to add custom styles, you need to override the display property:

```astro
<Scope
  style="display: block; color: red;"
  data-scope="63c8421b-c081-48bf-97e3-3c565049a323"
>
  <p>This text will be red, but the wrapper still has display: contents</p>
</Scope>
<Scope
  style={{ display: "block", color: "red" }}
  data-scope="63c8421b-c081-48bf-97e3-3c565049a323"
>
  <p>This text will be red, but the wrapper still has display: contents</p>
</Scope>
```

### Select Function

The `Select` function provides an easy way to select the scoping element and query for child elements.

```typescript
import { Select } from "astro-scope";

const scope = Select("63c8421b-c081-48bf-97e3-3c565049a323");

const button = scope.querySelector("button");
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
